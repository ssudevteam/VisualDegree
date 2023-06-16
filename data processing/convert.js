const { spawnSync } = require("child_process");

const args = process.argv.slice(2); // Get the arguments starting from index 2

// Generate CS Major from data
if (args[0] === "major" && args[1] === "flow") {
  console.log("Running scripts: convertMajorToFlow.js");

  // Execute subjectFilter.js
  spawnSync("node", ["operations/converters/convertMajorToFlow.js"]);

  console.log("cs_flow.json generated in -output");
} else {
  console.log("Invalid arguments. Expected: major flow");
}
