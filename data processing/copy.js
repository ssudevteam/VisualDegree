const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2); // Get the arguments starting from index 2

// Generate CS Major from data
if (args[0] === "csflow") {
  // Perform data generation logic

  // Copy file to destination
  const sourceFile = "-output/cs_flow_nodes.js";
  const destinationFile = "../assets/reactflow/data/cs_flow_nodes.js";

  fs.copyFileSync(path.resolve(sourceFile), path.resolve(destinationFile));

  console.log("cs_flow.json copied to ../../assets/reactflow/data");
} else {
  console.log("Invalid arguments. Expected: csflow");
}
