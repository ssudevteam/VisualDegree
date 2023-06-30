const fs = require("fs");
const outfilePath = "-output/cs_flow_nodes.js";

// Read the CS courses data from the file
const csCoursesData = JSON.parse(
  fs.readFileSync("workingfiles/cs_major.json", "utf8")
);
const csCourses = csCoursesData.major.courseCollection;

const xOffsetValue = 160;

// Group courses by their level
const courseGroups = {
  100: [],
  200: [],
  300: [],
  400: [],
};

// Sort courses by their level
Object.keys(csCourses).forEach((courseId) => {
  const course = csCourses[courseId];
  const courseLevel = parseInt(course.code);

  if (courseLevel >= 100 && courseLevel < 200) {
    courseGroups[100].push(course);
  } else if (courseLevel >= 200 && courseLevel < 300) {
    courseGroups[200].push(course);
  } else if (courseLevel >= 300 && courseLevel < 400) {
    courseGroups[300].push(course);
  } else if (courseLevel >= 400 && courseLevel < 500) {
    courseGroups[400].push(course);
  }
});

// Calculate positions for each course group
const groupPositions = {
  100: {
    x: 100,
    y: 100,
  },
  200: {
    x: 100,
    y: 200,
  },
  300: {
    x: 100,
    y: 300,
  },
  400: {
    x: 100,
    y: 400,
  },
};

// Default position if level not found in groupPositions
const defaultPosition = {
  x: 500,
  y: 500,
}; // Adjust the default position as needed

// Convert CS courses data to initialNodes format
const initialNodes = [];
let nodeId = 1;
Object.keys(courseGroups).forEach((level) => {
  const courses = courseGroups[level];
  let xOffset = 0;

  courses.forEach((course) => {
    const { code, title } = course;
    const { num_units, description, laboratoryHours, lectureHours } = course;

    const position = groupPositions[level] || defaultPosition;

    const node = {
      id: `${nodeId}`,
      data: {
        label: `${code} - ${title}`,
        units: `${num_units}`,
        desc: `${description}`,
        labHours: `${laboratoryHours}`,
        lecHours: `${lectureHours}`,
      },
      position: {
        x: position.x + xOffset,
        y: position.y,
      },
      type: "courseNode",
    };

    initialNodes.push(node);
    nodeId++;

    // Increment the xOffset for each course within the level group
    xOffset += xOffsetValue; // Adjust the offset value as needed
  });
});

// Write the initialNodes to a file
fs.writeFileSync(
  outfilePath,
  `const initialNodes = ${JSON.stringify(
    initialNodes,
    null,
    2
  )};\n\nexport default initialNodes;`,
  "utf8"
);

console.log("Conversion completed. Generated cs_courses_nodes.json file.");
