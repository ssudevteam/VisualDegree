#! /bin/env python3

import io
import sys
import time
import json
import os.path

import unidecode
import concurrent.futures
from lxml import html, etree
from typing import Callable, IO
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.remote.webelement import WebElement
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager

''' Global Variables
'''
web_driver_options = None

""" Global Constants
"""

# Used with selenium calls
MAX_PAGE_LOAD_WAIT: int = 10
MIN_PAGE_LOAD_WAIT: int = 1
TICK_WAIT: float = 0.1
MAX_ATTEMPTS: int = 10

# Target URLs
SSU_DEPARTMENT_URL: str = 'https://catalog.sonoma.edu/content.php?catoid=9&navoid=1180'
SSU_COURSE_CATALOG_URL: str = 'https://catalog.sonoma.edu/content.php?catoid=9&navoid=1093'

target_url_dict = {"departments": 'https://catalog.sonoma.edu/content.php?catoid=9&navoid=1180',
                   "programs": 'https://catalog.sonoma.edu/content.php?catoid=9&navoid=1180',
                   "courses": 'https://catalog.sonoma.edu/content.php?catoid=9&navoid=1093'}

# Database (JSON) output files
db_output_dest = {"departments": './data/departments.json',
                  "programs": './data/programs.json',
                  "courses": './data/courses.json'}

COURSE_HEADER_KEYS = {
    'header',  # CourseHeader
    'prefix',  # str
    'code',  # str
    'title',  # str
    'department'  # str
}

COURSE_OBJECT_KEYS = {
    'description',  # str
    'num_units',  # str
    'prerequisites',  # str
    'ge_category',  # str
    'grading',  # str
    'url'  # str
}.union(COURSE_HEADER_KEYS)

PROGRAM_COMPONENT_KEYS = {
    'title',  # str
    'description',  # str
    'courses',  # [CourseHeader]
    'components'  # [ProgramComponent]
}

PROGRAM_OBJECT_KEYS = {
    'name',  # str
    'core_type',  # str
    'department',  # str
    'components',  # [ProgramComponent]
    'url'  # str
}


''' Classes
'''


class CourseHeader(dict):
    """
    Implements a dict. See `COURSE_HEADER_KEYS` for available fields
    """

    def __init__(self, *args, **kwargs):
        super().__init__()
        for key in kwargs:
            __validate_key__(key, COURSE_HEADER_KEYS)

        for arg in args:
            if isinstance(arg, dict):
                for key, value in arg.items():
                    __validate_key__(key, COURSE_HEADER_KEYS)
                    dict.__setitem__(self, key, value)

        for key in COURSE_HEADER_KEYS:
            if key not in self:
                dict.__setitem__(self, key, '')

    def __setitem__(self, key, value):
        __validate_key__(key, COURSE_HEADER_KEYS)
        dict.__setitem__(self, key, value)

    def __getitem__(self, key):
        __validate_key__(key, COURSE_HEADER_KEYS)
        return dict.__getitem__(self, key)


class CourseObject(dict):
    """
    Implements a dict. See `COURSE_OBJECT_KEYS` for available fields
    """

    def __init__(self, *args, **kwargs):
        super().__init__()
        header = None
        for i in range(0, len(args)):
            if isinstance(args[i], CourseHeader):
                header = args[i]
                if i == 0:
                    args = args[1:]
                elif i < len(args) - 1:
                    args = args[0:i] + args[i + 1:]
                else:
                    args = args[0:i]
                break
        for key in kwargs:
            __validate_key__(key, COURSE_OBJECT_KEYS)

        if header:
            self.update(header)

        for arg in args:
            if isinstance(arg, dict):
                for key, value in arg.items():
                    __validate_key__(key, COURSE_OBJECT_KEYS)
                    dict.__setitem__(self, key, value)

        for key in COURSE_OBJECT_KEYS:
            if key not in self:
                dict.__setitem__(self, key, '')

    def __setitem__(self, key, value):
        __validate_key__(key, COURSE_OBJECT_KEYS)
        dict.__setitem__(self, key, value)

    def __getitem__(self, key):
        __validate_key__(key, COURSE_OBJECT_KEYS)
        return dict.__getitem__(self, key)


class ProgramComponent(dict):
    """
    Implements a dict. See `PROGRAM_COMPONENT_KEYS` for available fields
    """

    def __init__(self, *args, **kwargs):
        super().__init__()
        for key in kwargs:
            __validate_key__(key, PROGRAM_COMPONENT_KEYS)

        for arg in args:
            if isinstance(arg, dict):
                for key, value in arg.items():
                    self.__setitem__(key, value)

        for key in PROGRAM_COMPONENT_KEYS:
            if key not in self:
                if key in ['courses', 'components']:
                    dict.__setitem__(self, key, [])
                else:
                    dict.__setitem__(self, key, '')

    def __setitem__(self, key, value):
        __validate_key__(key, PROGRAM_COMPONENT_KEYS)
        if key in ['components', 'courses']:
            try:
                value = flatten_list(value)
                __validate_type__(value, list)
                data = self.get(key, [])
                for item in value:
                    __validate_type_or__(item, ProgramComponent, CourseHeader)
                    data.append(item)
                dict.__setitem__(self, key, data)
            except KeyError:
                __validate_type_or__(value, ProgramComponent, CourseHeader)
                data = self.get(key, [])
                data.append(value)
                dict.__setitem__(self, key, data)
        else:
            dict.__setitem__(self, key, value)


def __getitem__(self, key):
    __validate_key__(key, PROGRAM_COMPONENT_KEYS)
    return dict.__getitem__(self, key)


class ProgramObject(dict):
    """
    Implements a dict. See `PROGRAM_OBJECT_KEYS` for available fields
    """

    def __init__(self, *args, **kwargs):
        super().__init__()
        for key in kwargs:
            __validate_key__(key, PROGRAM_OBJECT_KEYS.union(PROGRAM_COMPONENT_KEYS))

        for arg in args:
            if isinstance(arg, dict):
                for key, value in arg.items():
                    self.__setitem__(key, value)

        for key in PROGRAM_OBJECT_KEYS:
            if key not in self:
                dict.__setitem__(self, key, '')
            elif key == 'components':
                dict.__setitem__(self, key, [ProgramComponent])

    def __setitem__(self, key, value):
        __validate_key__(key, PROGRAM_OBJECT_KEYS.union(PROGRAM_COMPONENT_KEYS))
        if key == 'components':
            try:
                value = flatten_list(value)
                __validate_type__(value, list)
                dict.__setitem__(self, key, value)
            except KeyError:
                __validate_type__(value, ProgramComponent)
                dict.__setitem__(self, key, [value])
        elif key in PROGRAM_COMPONENT_KEYS:
            components = self.get('components', [])
            if isinstance(components, list):
                for component in components:
                    component[key] = value
        dict.__setitem__(self, key, value)

    def __getitem__(self, key):
        __validate_key__(key, PROGRAM_OBJECT_KEYS)
        return dict.__getitem__(self, key)


""" Strings
"""


def string_strip_html(html_str: str):
    """
    Strips all HTML code from the string and returns it

    :param html_str: the string to be formatted
    :return: a string with no HTML code
    """
    if len(html_str) > 0:
        html_str = str(html.fromstring(html_str).text_content())
    return html_str


def string_format_json(str_str: str):
    """
    Decodes and substitutes unicode escape codes, strips all HTML code in the string and trims any non-alnum characters

    :param str_str: the string to be formatted
    :return: a formatted string
    """
    import re
    re_pattern = r'^[^\w\'".!?$/\(\)\[\]{}]+|([^\w\'".!?$/\(\)\[\]{}]|(?<!\.)\.)+$'
    if len(str_str) > 0:
        str_str = string_strip_html(unidecode.unidecode(str_str).strip())
        str_str = re.sub(re_pattern, '', str_str)
    return str_str


''' I/O
'''


def create_file(filepath: str) -> IO:
    """
    Creates a new file and filepath if it does not already exist

    :param filepath: the path of the file to be created
    :return: an IO of the file
    """
    path_list = filepath.rstrip('/').split('/')
    if len(path_list) > 1:
        dir_path = filepath[:-(len(path_list[-1]) + 1)].strip() + '/'
        if not os.path.exists(dir_path):
            try:
                os.makedirs(dir_path, exist_ok=True)
            except Exception as e:
                sys.stderr.write(f'-- [{get_caller_name()}] {e.args.__str__()}\n')
    return io.open(filepath, mode='wt')


def write_json(filepath: str, mode: str, data, indent=2) -> ():
    """
    Dumps contents of :param data to a file in json format

    :param filepath: the path of the destination file
    :param mode: the mode of which to write
    :param data: the data to be dumped and written
    :param indent: the number of spaces to indent in line in the output
    """
    with open(filepath, mode) as file:
        try:
            json.dump(data, file, indent=indent)
        except Exception as e:
            sys.stderr.write(f'-- [{get_caller_name()}] {e.args.__str__()}\n')


def write_file(filepath: str, mode: str, data) -> ():
    """
    Write contents of :param data to a file

    :param filepath: the filepath of the destination file
    :param mode: the mode of which to write
    :param data: the data to be written
    """
    with open(filepath, mode) as file:
        try:
            file.write(data)
        except Exception as e:
            sys.stderr.write(f'-- [{get_caller_name()}] {e.args.__str__()}\n')


''' Validation
'''


def __validate_key__(key, valid_keys):
    """
    Validates the keys available for the :param valid_keys list

    :param key: the key to validate
    :param valid_keys: the list of valid keys
    :exception: raises a KeyError exception if the key is invalid
    """
    if key not in valid_keys:
        raise KeyError(
            f'[{get_caller_name(2)}.{get_caller_name()}] '
            f'Invalid key "{key}". Acceptable keys include: {", ".join([f"{key}" for key in valid_keys])}\n'
            f'{Exception.__traceback__}')


def __validate_type__(value, expected_type: type):
    """
    Validates the type of :param value is a type of :param expected_type

    :param value: the value of the type to validate
    :param expected_type: the expected type of :param value
    :exception: raises a TypeError exception if the type is invalid
    """
    if not isinstance(value, expected_type):
        raise TypeError(
            f'[{get_caller_name(2)}.{get_caller_name()}] '
            f'Invalid type: "{value}" must be of type "{expected_type}\n'
            f'{Exception.__traceback__}')


def __validate_type_or__(value, *types: type):
    """
    Validates the type of :param value is a type of either :param types

    :param value: the value of the type to validate
    :param expected_type: the potential types expected of :param value
    :exception: raises a TypeError exception if the type is invalid
    """
    success = False
    for tp in types:
        try:
            __validate_type__(value, tp)
            success = True
            break
        except Exception:
            pass
    if not success:
        msg = f'[{get_caller_name(2)}.{get_caller_name()}] Invalid type: "{value}" must be of type '
        first_cycle = True
        for tp in types:
            if first_cycle:
                first_cycle = False
            else:
                msg += ' or '
            msg += f'"{tp}"'
        raise TypeError(
            f'{msg}\n{Exception.__traceback__.__str__()}')


''' Lists / Dicts
'''


def flatten_list(lst: list):
    """
    Flattens recursive list and returns a single list

    :param lst: a potentially recursive list
    :return: a flattened list
    """
    flat_list = []
    for item in lst:
        if isinstance(item, list):
            flat_list.extend(flatten_list(item))
        else:
            flat_list.append(item)
    return flat_list


def set_dict_key_to_last(dictionary: dict, key_to_last: str):
    """
    Places the :param key_to_last pair to the end of the dict

    :param dictionary: a dict of key/value pairs
    :param key_to_last: the key to place at the end of the dict
    :return: a dict with the :param key_to_last pair placed at the end
    """
    if key_to_last not in dictionary:
        return dictionary
    value = dictionary[key_to_last]
    if not isinstance(value, list):
        dictionary.pop(key_to_last)
        dictionary.update({key_to_last, value})
    return dictionary


''' Call stack
'''


def get_caller_name(stack_pos: int = 1):
    """
    Returns the name of the calling method

    :param stack_pos: the position of the caller in the stack (default is 1: parent)
    :return: the name of the calling method
    """
    import inspect
    if stack_pos < 1:
        stack_pos = 1
    curr_frame = inspect.currentframe()
    caller_frame = inspect.getouterframes(curr_frame, stack_pos + 1)
    caller_name = caller_frame[stack_pos][3]
    del caller_frame
    return caller_name


''' Webdriver / HTML
'''


def navigate_to_page(page: int | str, web_driver: webdriver) -> int | None:
    """
    Navigates *FORWARD* until the :param page number is met, or returns -1 if it is not found

    :param page: the page to which to navigate to
    :param web_driver: the webdriver with a current web browser session
    :return: None if an error occurred or -1 if the page was not found
    """
    if page is not None:
        attempts = 1
        while True:
            if attempts > MAX_ATTEMPTS:
                sys.stderr.write(
                    f'-- [{get_caller_name()}] Error navigating to page {page} after max attempts were met\n')
                return None
            try:
                block_content = WebDriverWait(web_driver, MAX_PAGE_LOAD_WAIT).until(
                    EC.visibility_of_element_located((By.CLASS_NAME, "block_content")))
            except Exception as e:
                attempts += 1
                sys.stderr.write(
                    f'-- [{get_caller_name()}] Error finding "block_content" in {web_driver}: {e.args.__str__()}\n')
                continue
            try:
                link_elements = block_content.find_elements(By.CSS_SELECTOR,
                                                            'a[href^="/content.php?"][aria-label*="Page"]')
            except Exception as e:
                attempts += 1
                sys.stderr.write(
                    f'-- [{get_caller_name()}] Error finding link elements in {block_content}: {e.args.__str__()}\n')
                continue

            num_elements_to_check = len(link_elements)

            clicked = False
            for link in link_elements:
                num_elements_to_check -= 1
                text = link.text.strip()
                if text.isdigit():
                    link_page = int(text)
                    if link_page < page:
                        continue
                    if link_page > page:
                        break
                    if link_page == page or \
                            (num_elements_to_check == 2 and
                             link_page > page and page < link_elements[-1]) or \
                            num_elements_to_check == 0:
                        try:
                            link.click()
                            time.sleep(2)
                            clicked = True
                        except Exception:
                            break

                        if link_page == page:
                            return link_page
                        else:
                            break
            if not clicked:
                break
    return -1


def get_elements(web_driver: webdriver, class_name: str = None, tag_name: str = None,
                 css_selector: str = None, xpath: str = None) -> list[WebElement] | None:
    """
    Returns the web elements on the current web page that match with the provided class name,
    tag name, css selector, and/or xpath in that order.

    :param web_driver: the webdriver with a current web browser session
    :param class_name: the class name of the web element
    :param tag_name: the tag name of the web element
    :param css_selector: the css selector of the web element
    :param xpath: the xpath of the web element
    :return: a list contain the matching web elements
    """
    elements = []
    if web_driver is not None:
        if isinstance(web_driver, webdriver.Chrome):
            driver: webdriver.Chrome = web_driver
        elif isinstance(web_driver, WebElement):
            driver: WebElement = web_driver
        else:
            return []
        try:
            if class_name is not None:
                elements = driver.find_element(By.CLASS_NAME, class_name)
            if tag_name is not None:
                if class_name is not None:
                    elements = elements.find_elements(By.TAG_NAME, tag_name)
                else:
                    elements = driver.find_elements(By.TAG_NAME, tag_name)
            if css_selector is not None:
                if class_name is not None or tag_name is not None:
                    elements = elements.find_elements(By.CSS_SELECTOR, css_selector)
                else:
                    elements = driver.find_elements(By.CSS_SELECTOR, css_selector)
            if xpath is not None:
                if class_name is not None or tag_name is not None or css_selector is not None:
                    elements = elements.find_elements(By.XPATH, xpath)
                else:
                    elements = driver.find_elements(By.XPATH, xpath)
        except Exception:
            return None
    return elements


# FIXME: Does not properly number the list if it's ordered.
#  Shows '1. .. 1. .. 1. ..' instead of '1. .. 2. .. 3. ..'
def parse_li_tags(li_elements: [WebElement]) -> str:
    """
    Parses the relevant text from a li tag and returns a string

    :param li_elements: a list of <li> WebElements
    :return: a string of text parsed from <li> tags
    """
    li_str = ''
    counter = 1

    if li_elements.tag_name != 'li':
        elements = get_elements(li_elements, tag_name='li')
        if elements is not None and len(elements) > 0:
            try:
                counter = int(elements[0].get_attribute('start'))
            except Exception:
                pass

    if not isinstance(li_elements, list):
        li_elements = [li_elements]

    for li in li_elements:
        li_str += string_format_json(str(counter) + '. ' + str(li.text) + '\n')
        counter += 1
    return li_str


''' Components
'''


def parse_component_elements(component_elements: list[WebElement] | WebElement) -> list[ProgramComponent] | None:
    """
    Parses a list of WebElements from a degree program page and returns a list of ProgramComponent objects

    :param component_elements: a list of WebElements of a degree program
    :return: a list of ProgramComponents
    """
    component_list = []
    component_added = True

    if not isinstance(component_elements, list):
        component_elements = [component_elements]
    if len(component_elements) == 0:
        return []
    if not isinstance(component_elements[0], WebElement):
        return None

    component = ProgramComponent()
    for element in component_elements:
        div_elements = get_elements(element, xpath=".//*")
        for div in div_elements:
            if div.tag_name == 'h2':
                title = div.text
                if not component_added:
                    component_list.append(component)
                    component = ProgramComponent()
                component['title'] = string_format_json(title)
            elif div.tag_name == 'a':
                data = extract_course_headers(None, div)
                if data is not None and len(data) > 0:
                    if not is_empty_component_list(data):
                        component['courses'].extend(data)
            elif div.tag_name == 'li' or div.tag_name == 'ol' or div.tag_name == 'ul':
                li_strs = parse_li_tags(div)
                if li_strs is not None and len(li_strs) > 0:
                    component['description'] += li_strs + '\n'
            elif len(div.text) > 0:
                component['description'] += string_format_json(str(div.text)) + '\n'
            else:
                continue
            component_added = False

        component_list.append(component)
        component_added = True

    if not component_added:
        component_list.append(component)
    return component_list


def extract_program_components(web_driver: webdriver,
                               web_elements: [WebElement] = None) -> list[ProgramComponent] | None:
    """
    Extracts the program components from either a webdriver or list of WebElements and returns a list
    of ProgramComponent objects

    :param web_driver: the webdriver with a current web browser session. Note: this argument is evaluated only
            if :param web_elements is None.
    :param web_elements: a list of WebElements.
    :return: a list of ProgramComponent objects or None
    """
    if web_driver is None and web_elements is None:
        return None
    if web_elements is None:
        web_elements = web_driver

    div_elements = get_elements(web_elements, 'block_content',
                                xpath='//div[contains(@class, "program_descr") or contains(@class,'
                                      ' "acalog-core") or contains(@class, "program_list")]')
    if div_elements is None:
        return []

    component_list = []
    for div in div_elements:
        components = parse_component_elements(div)
        component_list.extend(components)
    for component in component_list:
        if is_empty_component(component):
            component_list.remove(component)
    return flatten_list(component_list)


def sort_components(components: list[ProgramComponent]):
    """
    Takes a list of :param components and sets 'courses' pairs at the end of each ProgramComponent

    :param components: a list of ProgramComponents
    :return: a list of ProgramComponents with 'courses' at the end of each
    """
    component_list = []
    for component in components:
        component_list.append(set_dict_key_to_last(component, 'courses'))
    return component_list


def is_empty_component(component: CourseHeader | ProgramComponent) -> bool:
    """
    Returns true if a component has fields of length 0, otherwise returns false

    :param component: an object of either CourseHeader or ProgramComponent
    :return: true if a component has fields of length 0, otherwise false
    """
    for key in component:
        value = component[key]
        if len(value) > 0:
            if isinstance(value, str) and len(value) == 1:
                if value[0] == '\n':
                    continue
            return False
    return True


def is_empty_component_list(component_list: list[CourseHeader] | list[ProgramComponent]) -> bool:
    """
    Returns true if the list of its components have fields of length 0, otherwise returns false

    :param component_list: a list of CourseHeaders or ProgramComponents
    :return: true if the list of its components have fields of length 0, otherwise returns false
    """
    for component in component_list:
        if is_empty_component(component):
            return True
    return False


def collect_courses(components: list[ProgramComponent]) -> list[ProgramComponent]:
    """
    Returns a list of ProgramComponents containing all the courses in :param components

    :param components: a list of ProgramComponent objects
    :return: a list of ProgramComponent objects
    """
    if len(components) == 0:
        return []
    courses = []

    for component in components:
        nested = []
        for course in component['courses']:
            courses.append(course)
        nested.append(collect_courses(component['components']))
        if len(nested) > 0:
            courses.append(courses)

    return courses


''' Execution loop
'''


def exec_run_loop(closure: Callable, args: list, max_workers: int, size: int = None) -> list:
    """
    A run loop that controls the thread allocation and execution of :param closure using its :param args.

    :param closure: the function that is called during execution
    :param args: a list of arguments that can be passed to each :param closure call
    :param max_workers: the maximum number of concurrent worker threads to be alive at one time
    :param size: (optional) the number of :param closures to be run
    :return: a list of results returned from :param closure
    """
    max_bar_len = 75
    num_bars = 0

    print(f'-- [{get_caller_name(2)}::{get_caller_name()}] Parsing... (May take several minutes)')
    progress_msg = f'    Progress: '
    print(progress_msg, end='')

    num_workers = 0
    if size is None:
        size = len(args)
    num_to_submit = size

    results = []
    error_list = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=max_workers) as executor:
        futures = []
        while num_to_submit > 0:
            start = size - num_to_submit
            end = start + max_workers - num_workers
            if end > start:
                for arg in args[start: end]:
                    num_workers += 1
                    num_to_submit -= 1
                    futures.append(executor.submit(closure, arg))
                    time.sleep(0.5)
            for future in concurrent.futures.as_completed(futures):
                try:
                    num_workers -= 1
                    results.append(future.result())
                    futures.remove(future)

                    if num_bars == max_bar_len:
                        print('\n' + ' ' * len(progress_msg), end='')
                        num_bars = 0
                    print('#', end='')
                    num_bars += 1
                except Exception as e:
                    error_list.append(
                        f"Error retrieving result: {e}\n")
            time.sleep(0.1)
        print()
        if len(error_list) > 0:
            sys.stderr.write(
                f'-- [{get_caller_name(2)}::{get_caller_name()}] The following {len(error_list)} error(s) occurred:\n')
            for error in error_list:
                sys.stderr.write(f'!  {error}\n')
    return flatten_list(results)


''' Courses
'''


def scrape_courses_to_file(url: str, dest_path: str) -> ():
    """
    Scrapes all courses from the given URL and saves the data to a file in JSON format

    :param url: the URL of the page
    :param dest_path: the path to the destination file
    """
    driver = webdriver.Chrome(options=web_driver_options,
                              service=ChromeService(ChromeDriverManager().install()))
    driver.get(url)

    page = 1
    num_pages = 0
    url_list = []
    print(f'-- [{get_caller_name()}] Collecting page URLs... (May take a few moments)')
    print('    Progress: ', end='')
    while page != -1:
        url_list.append(driver.current_url)
        num_pages += 1
        print('#', end='')
        page = navigate_to_page(page + 1, driver)
    driver.close()
    print()
    print(f'-- [{get_caller_name()}] {num_pages} URLs collected')

    courses = exec_run_loop(closure=scrape_course_page, args=url_list, max_workers=50)
    print(f'-- [{get_caller_name()}] Writing to "{dest_path}"')
    create_file(dest_path).close()
    write_json(dest_path, 'a', courses)


def scrape_course_page(url: str) -> list[CourseObject]:
    """
    Scrapes all courses from the given URL and returns a list of CourseObject objects

    :param url: the URL of the page
    :return: a list of CourseObject objects
    """
    web_driver = webdriver.Chrome(options=web_driver_options,
                                  service=ChromeService(ChromeDriverManager().install()))
    web_driver.get(url)

    course_list = []
    course_descriptors = extract_course_headers(web_driver, None)
    for descriptor in course_descriptors:
        if descriptor is None:
            continue
        try:
            block_content = web_driver.find_element(By.CLASS_NAME, "block_content")
            details_link = block_content.find_element(By.CSS_SELECTOR, 'a[href="#"]')
            details_link.click()
            WebDriverWait(web_driver, MAX_PAGE_LOAD_WAIT).until(EC.staleness_of(details_link))
        except Exception:
            pass

        course_obj = extract_course_object(descriptor, web_driver)
        if course_obj is not None:
            course_list.append(course_obj)

    web_driver.close()
    return course_list


def extract_course_object(header: CourseHeader, web_driver: webdriver) -> CourseObject | None:
    """
    Extracts relevant course information from the Course page and returns a complete CourseObject

    :param header: the CourseHeader of the course
    :param web_driver: the webdriver with a current web browser session
    :return: a complete CourseObject
    """
    attempts = 1
    url: str = ''
    last_error = ''
    details_link = []

    prefix = string_format_json(header['prefix'])
    code = string_format_json(header['code'])
    title = string_format_json(header['title'])

    while True:
        if attempts == MAX_ATTEMPTS:
            sys.stderr.write(
                f'-- [{get_caller_name(2)}::{get_caller_name()}] Failed to open '
                f'link course after {MAX_ATTEMPTS} attempts: {last_error}\n')
            return None
        try:
            block_content = WebDriverWait(web_driver, MAX_PAGE_LOAD_WAIT).until(
                EC.visibility_of_element_located((By.CLASS_NAME, "block_content")))
        except Exception as e:
            attempts += 1
            last_error = f'Error finding "block_element" in {web_driver}: {e.args.__str__()}\n'
            web_driver.refresh()
            continue

        search_title = title
        try:
            xpath_title = f'contains(text(), "{search_title}")'
            quote_index = search_title.find('"')
            if quote_index != -1:
                quote_char = '"'
                search_title = search_title.split(quote_char)
                for s in search_title:
                    if s == "":
                        search_title.remove(s)
                xpath_title = ' and '.join(f'contains(text(), '
                                           f'"{phrase.strip(quote_char).strip()}")' for phrase in search_title)
                xpath_title = f'{xpath_title}'.strip("[]")
            xpath = f'//a[(contains(text(), "{prefix}") and contains(text(), "{code}")) or ({xpath_title})]'
            details_link = WebDriverWait(block_content, MAX_PAGE_LOAD_WAIT).until(
                EC.element_to_be_clickable((By.XPATH, xpath)))
        except Exception as e:
            attempts += 1
            last_error = f'Error: Unable to find a link containing ("{prefix}" and "{code}") or ' \
                         f'"{search_title}" in {block_content}: {e.args.__str__()}\n'
            continue

        try:
            url = details_link.get_attribute("href")
        except Exception as e:
            attempts += 1
            last_error = f'No attribute "href" found in {details_link}: {e.args.__str__()}\n'
            continue

        try:
            details_link.click()
            break
        except Exception as e:
            attempts += 1
            last_error = f'Error clicking "{url}" in {details_link}: {e.args.__str__()}\n'
            continue

    WebDriverWait(web_driver, MAX_PAGE_LOAD_WAIT).until(EC.staleness_of(details_link))
    page_source = web_driver.page_source
    html_source = html.fromstring(page_source)

    try:
        coursepadding = html_source.xpath('//td[@class="coursepadding"]')
        if len(coursepadding) == 0:
            return None
        div_elements = coursepadding[0].xpath('.//div[not(contains(@class, "gateway"))]')
        inner_html = etree.tostring(div_elements[0], encoding="unicode", method="html")
    except Exception as e:
        sys.stderr.write(f'-- [{get_caller_name(2)}::{get_caller_name()}] {e.args.__str__()}\n')
        return None

    components = parse_course_components_from_html(inner_html)
    if components is None:
        return None

    return CourseObject(header, components, {"url": url})


def parse_course_components_from_html(html_str: str) -> dict | None:
    """
    Parses relevant course information from the course page and returns its components

    Example:
        Listed in order:
            "Units(s):"         <-- Always present
            "Prerequisite(s):"  <-- Sometimes present
            "GE Category:"      <-- Sometimes present
            "Grading:"          <-- Always present

    :param html_str: the html course string of the course page
    :return: a dictionary of course components
    """
    UNITS_STR = "Unit(s):"
    PREREQ_STR = "Prerequisite(s):"
    GECAT_STR = "GE Category:"
    GRADING_STR = "Grading:"
    STRONG_OPEN_TAG = '<strong>'
    STRONG_CLOSE_TAG = '</strong>'
    HR_TAG = '<hr>'
    BR_TAG = '<br>'

    prereqs: str = ''
    gecat: str = ''
    grading: str = ''

    start_index = html_str.find(UNITS_STR)
    if start_index == -1:
        return None
    start_index = html_str.find(STRONG_CLOSE_TAG, start_index) + len(STRONG_CLOSE_TAG)
    end_index = html_str.find(HR_TAG, start_index)
    if end_index == -1:
        return None

    num_units = html_str[start_index:end_index].strip()
    if not num_units.isdigit():
        for num in num_units.split('-'):
            if not num.strip().isdigit():
                return None

    start_index = end_index + len(HR_TAG)
    end_index = html_str.find(BR_TAG, start_index)
    descr = str(html_str[start_index:end_index]).strip()

    # Check to see if there is a <br> in the middle of the description (max of 1)
    if descr.find(STRONG_OPEN_TAG) != -1:
        end_index = html_str.find(BR_TAG, end_index + len(BR_TAG))
        descr = str(html_str[start_index:end_index]).strip()

    last_good_index = end_index

    end_index = html_str.find(PREREQ_STR, last_good_index)
    if end_index != -1:
        start_index = html_str.find(STRONG_CLOSE_TAG, end_index) + len(STRONG_CLOSE_TAG)
        end_index = html_str.find(BR_TAG, start_index)
        prereqs = str(html_str[start_index:end_index]).strip()
        last_good_index = end_index

    end_index = html_str.find(GECAT_STR, last_good_index)
    if end_index != -1:
        start_index = html_str.find(STRONG_CLOSE_TAG, end_index) + len(STRONG_CLOSE_TAG)
        end_index = html_str.find(BR_TAG, start_index)
        gecat = str(html_str[start_index:end_index]).strip()
        last_good_index = end_index

    end_index = html_str.find(GRADING_STR, last_good_index)
    if end_index != -1:
        start_index = html_str.find(STRONG_CLOSE_TAG, end_index) + len(STRONG_CLOSE_TAG)
        end_index = html_str.find(BR_TAG, start_index)
        grading = str(html_str[start_index:end_index]).strip()

    return {'description': string_format_json(descr),
            'num_units': string_format_json(num_units),
            'prerequisites': string_format_json(prereqs),
            'ge_category': string_format_json(gecat),
            'grading': string_format_json(grading)}


def parse_course_title(course: WebElement) -> tuple[str, str, str] | tuple[str, None, None] | tuple[None, None, None]:
    """
    Parses a WebElement and returns a tuple of course title components:
        header: "CS 101 - Intro to Programming",
        identifier: "CS 101",
        title: "Intro to Programming"

    :param course: the WebElement of the course
    :return: a tuple of course title components, or the complete title and None if it is not properly formatted
    """
    element = course
    if element.tag_name != 'a':
        try:
            element = course.find_element(By.CLASS_NAME, 'a')
        except Exception:
            return None, None, None
    header = string_format_json(element.text.strip())
    components = header.split('-')
    if len(components) < 2:
        return header, None, None
    if len(components) > 2:
        return header, string_format_json(components[0]), string_format_json('-'.join(components[1:]))
    return header, string_format_json(components[0]), string_format_json(components[-1])


def parse_course_identifier(ident: str) -> tuple[str, str] | tuple[None, None]:
    """
    Parses a string of a course identifier and a tuple of its components:
        identifier: "CS 101",
        prefix: "CS"
        code: "101"

    :param ident: a string of a course identifier
    :return: a tuple of course identifier components, or None if it is not properly formatted
    """
    if len(ident) == 0:
        return None, None
    course_props = ident.split()
    if len(course_props) < 2:
        return None, None
    if len(course_props) == 2:
        return course_props[0].strip(), course_props[1].strip()
    return course_props[0].strip(), ' '.join(course_props[1:])


def parse_course_header(element: WebElement) -> CourseHeader | None:
    """
    Parses a course WebElement and returns a complete CourseHeader object

    :param element: the WebElement of the course
    :return: a complete CourseHeader object or None
    """
    header, ident, title = parse_course_title(element)
    if header is None or ident is None:
        return None
    prefix, code = parse_course_identifier(ident)
    for item in [prefix, code]:
        if not isinstance(item, str) or len(item) > 5:
            return None
    if prefix is not None and prefix != ident:
        return CourseHeader(
            {'header': header,
             'prefix': prefix,
             'code': code,
             'title': title
             })
    return None


def extract_course_headers(web_driver: webdriver, web_elements: list[WebElement] | None) -> list[CourseHeader] | None:
    """
    Extracts the course header components from either a webdriver or list of WebElements and returns a list of
    CourseHeader objects

    :param web_driver: the webdriver with a current web browser session. Note: this argument is evaluated only
            if :param web_elements is None.
    :param web_elements: a list of WebElements.
    :return: a list of CourseHeader objects or None
    """
    if web_elements is None:
        if web_driver is None:
            return None
        elements = get_elements(web_driver, class_name='block_content', css_selector='p, a[onclick^="showCourse"]')
    else:
        elements = get_elements(web_elements, class_name='block_content', css_selector='p, a[onclick^="showCourse"]')
        if elements is None:
            elements = web_elements
            if not isinstance(elements, list):
                elements = [elements]

    department = None
    course_headers = []
    for element in elements:
        if element.tag_name == 'p':
            department = element.text.strip()
        elif element.tag_name == 'a':
            header = parse_course_header(element)
            if header is None:
                continue
            if department is not None:
                header['department'] = string_format_json(department)
            course_headers.append(header)
        else:
            additional_headers = extract_course_headers(None, element)
            if len(additional_headers) > 0:
                course_headers.append(additional_headers)
    return course_headers


''' Departments
'''


def scrape_departments_to_file(url: str, dest_path: str) -> ():
    """
    Scrapes all departments from the given URL and saves the data to a file in JSON format

    :param url: the URL of the page
    :param dest_path: the path to the destination file
    """
    print(f'-- [{get_caller_name()}] Parsing...')
    department_list = extract_department_elements(url)
    print(f'-- [{get_caller_name()}] Finished parsing')
    print(f'-- [{get_caller_name()}] Writing to "{dest_path}"')
    create_file(dest_path).close()
    write_json(dest_path, 'a', department_list)


def extract_department_elements(url: str) -> list[dict]:
    """
    Extracts department details from the given URL page

    :param url: the URL of the page
    :return: a list of dicts containing the Department elements
    """
    driver = webdriver.Chrome(options=web_driver_options,
                              service=ChromeService(ChromeDriverManager().install()))
    driver.get(url)
    dept_elements = driver.find_elements(By.CSS_SELECTOR, 'h2[id^="ent"]')
    department_list = []

    for dept in dept_elements:
        department_list.append({"name": string_format_json(dept.text.strip()),
                                "url": SSU_DEPARTMENT_URL})
    return department_list


''' Programs
'''


def scrape_programs_to_file(url: str, dest_path: str) -> ():
    """
    Scrapes all degree programs from the given URL and saves the data to a file in JSON format

    :param url: the URL of the page
    :param dest_path: the path to the destination file
    """
    driver = webdriver.Chrome(options=web_driver_options,
                              service=ChromeService(ChromeDriverManager().install()))
    driver.get(url)

    print(f'-- [{get_caller_name()}] Collecting program elements...')
    program_elements = extract_program_elements(driver)
    if program_elements is None:
        driver.close()
        return

    print(f'-- [{get_caller_name()}] Found {len(program_elements)} program elements')
    programs = exec_run_loop(closure=scrape_program_page, args=program_elements, max_workers=50)
    print(f'-- [{get_caller_name()}] Writing to "{dest_path}"')
    create_file(dest_path).close()
    write_json(dest_path, 'a', programs)


def scrape_program_page(program: ProgramObject) -> ProgramObject | None:
    """
    Scrapes the degree program from the URL in :param program and returns a list of ProgramObject objects

    :param program: the ProgramObject containing the URL of the degree program page to be scraped
    :return: a ProgramObject of the page
    """
    web_driver = webdriver.Chrome(options=web_driver_options,
                                  service=ChromeService(ChromeDriverManager().install()))
    if 'url' in program:
        url = str(program['url'])
    else:
        return None
    web_driver.get(url)

    components = extract_program_components(web_driver)
    web_driver.close()

    if components is not None:
        components = sort_components(components)

    program['components'] = components

    return program


def extract_programs_by_department_elements(url: str) -> list[ProgramObject]:
    """
    Extracts degree program elements by department from the given URL and returns a list of ProgramObject objects

    :param url: the URL of the page
    :return: a list of ProgramObject objects
    """
    driver = webdriver.Chrome(options=web_driver_options,
                              service=ChromeService(ChromeDriverManager().install()))
    driver.get(url)

    program_list = []
    program = ProgramObject()
    elements = driver.find_elements(By.XPATH, '//*')
    for element in elements:
        curr_dept = program['department']
        curr_type = program['core_type']
        if element.tag_name == 'h2' and element.id.startswith('ent'):
            # department name
            if len(curr_dept) != 0:
                program = ProgramObject()
            program['department'] = string_format_json(element.text.strip())
        elif element.tag_name == 'p' and element.get_attribute('style').__contains__('padding-left'):
            # core_type (major, minor)
            if len(curr_type) != 0:
                program = ProgramObject({'department': curr_dept})
            program['core_type'] = string_format_json(element.text.strip())
        elif element.tag_name == 'ul' and element.get_attribute('class') == 'program_list':
            # one or more program elements
            program_links = element.find_elements(By.CSS_SELECTOR, 'a[href^="preview_program"')
            for link in program_links:
                program['name'] = string_format_json(link.text.strip())
                program['url'] = link.get_attribute('href')
                program_list.append(program)
                program = ProgramObject({'department': curr_dept, 'core_type': curr_type})

    return program_list


def extract_program_elements(web_driver: webdriver) -> list[ProgramObject]:
    """
    Extracts the program elements from a webdriver and returns a list of ProgramObject objects consisting
     of those elements

    :param web_driver: the webdriver with a current web browser session.
    :return: a list of ProgramObject objects
    """
    dept_elements = get_elements(web_driver, css_selector='h2[id^="ent"],'
                                                          ' p[style^="padding-left"], '
                                                          'a[href^="preview_program"]')
    dept_name = ''
    core_type = ''
    program_list = []

    for dept in dept_elements:
        if dept.tag_name == 'h2':
            dept_name = dept.text.strip()
        elif dept.tag_name == 'p':
            core_type = dept.text.strip()
        else:
            name = dept.text.strip()
            url = dept.get_attribute('href')
            program_list.append(
                ProgramObject({'name': string_format_json(name),
                               'core_type': string_format_json(core_type),
                               'department': string_format_json(dept_name),
                               'url': url}))
    return program_list


''' Options
'''


def init_webdriver_options():
    """
    Sets the global options for the webdriver and returns them
    """
    global web_driver_options
    web_driver_options = webdriver.ChromeOptions()
    web_driver_options.add_argument('--headless')
    web_driver_options.add_argument("--disable-infobars")  # disabling infobars
    web_driver_options.add_argument("--disable-extensions")  # disabling extensions
    web_driver_options.add_argument("--disable-gpu")  # applicable to Windows os only
    web_driver_options.add_argument("--disable-dev-shm-usage")  # overcome limited resource problems


''' Updaters
'''


def update_departments():
    """
    Scrapes and writes all departments from the SSU Programs by Department page to a file
    """
    if web_driver_options is None:
        init_webdriver_options()

    start_time = time.time()
    print(f"-- [{get_caller_name()}] Updating departments...")
    scrape_departments_to_file(target_url_dict['departments'], db_output_dest['departments'])
    duration = (time.time() - start_time) / 60
    print(f'-- [{get_caller_name()}] Update completed in {format(duration, ".2f")} minutes')
    return duration


def update_programs():
    """
    Scrapes and writes all degree programs from the SSU Programs by Department page to a file
    """
    if web_driver_options is None:
        init_webdriver_options()

    print(f"-- [{get_caller_name()}] Updating programs...")
    start_time = time.time()
    scrape_programs_to_file(target_url_dict['programs'], db_output_dest['programs'])
    duration = (time.time() - start_time) / 60
    print(f'-- [{get_caller_name()}] Update completed in {format(duration, ".2f")} minutes')
    return duration


def update_courses():
    """
    Scrapes and writes all courses from the SSU Course Catalog to a file
    """
    if web_driver_options is None:
        init_webdriver_options()

    start_time = time.time()
    print(f"-- [{get_caller_name()}] Updating courses...")
    scrape_courses_to_file(target_url_dict['courses'], db_output_dest['courses'])
    duration = (time.time() - start_time) / 60
    print(f'-- [{get_caller_name()}] Updated completed in {format(duration, ".2f")} minutes')
    return duration


if __name__ == '__main__':
    run_times = []
    init_webdriver_options()

    run_times.append(update_departments())
    run_times.append(update_programs())
    run_times.append(update_courses())

    print(f'-- [{get_caller_name()}] Finished in {format(sum(run_times), ".2f")} minutes')
