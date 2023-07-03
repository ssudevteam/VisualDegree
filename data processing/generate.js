const { spawnSync } = require("child_process");

const args = process.argv.slice(2); // Get the arguments starting from index 2

// Generate CS Major from data
if (args[0] === "major" && args[1] === "cs") {
  console.log(
    `Running scripts:
  subjectFilter.js  --- grab all courses with 'CS' prefix
  subjectFilter2.js --- trim the data to only include the necessary front-end fields
  fixCSCourses.js   --- fix description field, separate the Lab and Lecture hours + clean up newline chars
  createMajor.js    --- create the major object with the trimmed data`
  );
  console.log("\n");

  // Execute subjectFilter.js
  spawnSync("node", ["operations/filters/subjectFilter.js"]);

  // Execute subjectFilter2.js
  spawnSync("node", ["operations/filters/subjectFilter2.js"]);

  // Execute fixCSCourses.js
  spawnSync("node", ["operations/transformers/fixCSCourses.js"]);

  // Execute createMajor.js
  spawnSync("node", ["operations/creators/createMajor.js"]);

  console.log("cs_major.json generated in -output");
} else {
  console.log("Invalid arguments. Expected: major cs");
}
