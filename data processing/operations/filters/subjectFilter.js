const fs = require("fs");

const inFileName = "SSU_CATALOG.Courses.json";

var filterCondition = (course) => course.prefix === subjectString;

// replace this with some api argument
subjectString = "CS";
console.log("hello world");

// Read the courses.json file
fs.readFile("-base/" + inFileName, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading courses.json:", err);
    return;
  }

  try {
    // Parse the JSON data
    const courses = JSON.parse(data);

    // Filter the data
    const filteredCourses = courses.filter(filterCondition);

    // Convert the filtered data back to JSON
    const filteredDataJSON = JSON.stringify(filteredCourses, null, 2);

    // Write the filtered data to a new file (filtered_courses.json)
    fs.writeFile(
      "workingfiles/filtered_courses.json",
      filteredDataJSON,
      "utf8",
      (err) => {
        if (err) {
          console.error("Error writing filtered_courses.json:", err);
          return;
        }
        console.log("Filtered data written to filtered_courses.json");
      }
    );
  } catch (err) {
    console.error("Error parsing JSON:", err);
  }
});
