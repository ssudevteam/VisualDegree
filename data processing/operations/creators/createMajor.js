const fs = require("fs");
const outfilePath = "-output/cs_major.json";
const outfilePath2 = "workingfiles/cs_major.json";

fs.readFile("workingfiles/cs_polished_courses.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading cs_filtered_courses.json:", err);
    return;
  }

  try {
    const courses = JSON.parse(data);

    const major = {
      name: "Computer Science",
      subject: "CS",
      courseCollection: {},
    };

    courses.forEach((course) => {
      const courseId = "CS" + `${course.code}`;
      major.courseCollection[courseId] = course;
    });

    const output = {
      major,
    };

    const outputJSON = JSON.stringify(output, null, 2);

    fs.writeFile(outfilePath, outputJSON, "utf8", (err) => {
      if (err) {
        console.error("Error writing cs_major.json:", err);
        return;
      }
    });
    fs.writeFile(outfilePath2, outputJSON, "utf8", (err) => {
      if (err) {
        console.error("Error writing cs_major.json:", err);
        return;
      }
      console.log("Output written to cs_major.json");
    });
  } catch (err) {
    console.error("Error parsing JSON:", err);
  }
});
