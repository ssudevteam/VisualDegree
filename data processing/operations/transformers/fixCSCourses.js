const fs = require("fs");

// Read input data from file
const inputFile = "workingfiles/cs_filtered_courses.json";
const inputData = fs.readFileSync(inputFile, "utf8");
const data = JSON.parse(inputData);

// Process the data
const updatedData = data.map((item) => {
  const { description } = item;
  const lectureHoursMatch = description.match(/Lecture:\s*(\d+)\s*hours/);
  const laboratoryHoursMatch = description.match(/Laboratory:\s*(\d+)\s*hours/);

  const lectureHours = lectureHoursMatch ? lectureHoursMatch[1] : "";
  const laboratoryHours = laboratoryHoursMatch ? laboratoryHoursMatch[1] : "";

  const updatedDescription = description
    .replace(/\n/g, "")
    .replace(/Lecture:\s*\d+\s*hours/, "")
    .replace(/Laboratory:\s*\d+\s*hours/, "")
    .trim();

  return {
    ...item,
    lectureHours,
    laboratoryHours,
    description: updatedDescription,
  };
});

// Write output data to file
const outputFile = "workingfiles/cs_polished_courses.json";
const outputData = JSON.stringify(updatedData, null, 2);
fs.writeFileSync(outputFile, outputData, "utf8");

console.log("Data processing complete. Output written to", outputFile);
