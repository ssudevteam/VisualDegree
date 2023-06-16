const fs = require("fs");

// Read the filtered_courses.json file
fs.readFile("workingfiles/filtered_courses.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading filtered_courses.json:", err);
    return;
  }

  try {
    // Parse the JSON data
    const courses = JSON.parse(data);

    // Filter and trim the data
    const trimmedCourses = courses.map((course) => {
      const { _id, prefix, department, url, ...rest } = course;
      return rest;
    });

    // Convert the filtered data back to JSON
    const trimmedDataJSON = JSON.stringify(trimmedCourses, null, 2);

    // Write the trimmed data to a new file (cs_filtered_courses.json)
    fs.writeFile(
      "workingfiles/cs_filtered_courses.json",
      trimmedDataJSON,
      "utf8",
      (err) => {
        if (err) {
          console.error("Error writing cs_filtered_courses.json:", err);
          return;
        }
        console.log("Trimmed data written to cs_filtered_courses.json");
      }
    );
  } catch (err) {
    console.error("Error parsing JSON:", err);
  }
});
