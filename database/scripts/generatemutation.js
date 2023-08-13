const fs = require("fs");
const path = require("path");

const entityName = process.argv[2];

if (!entityName) {
  console.error("Please provide an entity name.");
  process.exit(1);
}

const rootDir = path.resolve("./");
const potentialDirs = fs
  .readdirSync(rootDir)
  .filter((dir) => dir.startsWith("_"));

let foundEntityPath = null;

for (const dir of potentialDirs) {
  const potentialEntityPath = path.join(rootDir, dir, entityName);
  if (fs.existsSync(potentialEntityPath)) {
    foundEntityPath = potentialEntityPath;
    break;
  }
}

if (!foundEntityPath) {
  console.error("Entity directory not found.");
  process.exit(1);
}

const modelPath = path.join(foundEntityPath, "model.js");

let requiredFields = [];
if (fs.existsSync(modelPath)) {
  const modelContent = fs.readFileSync(modelPath, "utf-8");

  // This regex pattern matches properties set as required: true
  const requiredPattern = /(\w+):\s*{[^}]*required:\s*true[^}]*}/g;

  let match;
  while ((match = requiredPattern.exec(modelContent))) {
    requiredFields.push(match[1]);
  }
}

const mutationsPath = path.join(foundEntityPath, "mutations.js");

if (fs.existsSync(mutationsPath)) {
  const fileContent = fs.readFileSync(mutationsPath, "utf-8");

  let mutationSDL = "extend type Mutation {\n";

  const mutationFuncPattern = new RegExp(
    `\\b([a-z]+${entityName}): async \\(([^)]+)\\) => {`,
    "g"
  );

  let match;
  while ((match = mutationFuncPattern.exec(fileContent))) {
    const mutationName = match[1];

    const argsRegex = new RegExp(
      mutationName + ": async \\(([^)]+)\\) => {",
      "m"
    );
    const argsMatch = argsRegex.exec(fileContent);
    let argsList = [];

    if (argsMatch && argsMatch[1]) {
      const args = argsMatch[1].split(",").map((a) => a.trim());
      console.log(args);
      console.log(requiredFields);
      argsList = args
        .map((arg) => {
          if (arg.includes("_")) {
            return null; // Ignore the `_` argument
          } else if (arg === "id" || arg === "department") {
            return `${arg}: ID`;
          } else if (arg.includes("{")) {
            if (arg.includes("{ id }")) {
              return "id: ID!";
            } else {
              const innerArgs = arg
                .replace(/[\{\}]/g, "")
                .split(",")
                .map((a) => {
                  const trimmedArg = a.trim();
                  if (requiredFields.includes(trimmedArg)) {
                    return `${trimmedArg}: String!`;
                  }
                  return `${trimmedArg}: String`;
                })
                .join(", ");
              return innerArgs;
            }
          } else {
            if (requiredFields.includes(arg)) {
              return `${arg}: String!`;
            }
            return `${arg}: String`;
          }
        })
        .filter(Boolean); // Remove null or undefined values
      // Filter out any null values
    }

    // Special case for update: duplicate add's arguments but make them optional and add ID
    if (mutationName === `update${entityName}`) {
      const addMutationName = `add${entityName}`;
      const addArgsRegex = new RegExp(
        addMutationName + ": async \\(([^)]+)\\) => {",
        "m"
      );
      const addArgsMatch = addArgsRegex.exec(fileContent);
      if (addArgsMatch && addArgsMatch[1]) {
        const addArgs = addArgsMatch[1].split(",").map((a) => a.trim());
        argsList = ["id: ID!"].concat(
          addArgs.map((arg) => {
            if (arg.includes("{")) {
              const innerArgs = arg
                .replace(/[\{\}]/g, "")
                .split(",")
                .map((a) => `${a.trim()}: String`)
                .join("\n");
              return innerArgs;
            } else if (arg === "department") {
              return `${arg}: ID`;
            } else {
              return `${arg}: String`;
            }
          })
        );
      }
    }

    mutationSDL += `  ${mutationName}(\n    ${argsList.join(
      "\n    "
    )}\n  ): ${entityName}\n\n`;
  }

  mutationSDL += "}";

  console.log(mutationSDL);
  const graphqlFilePath = path.join(foundEntityPath, `_${entityName}.graphql`);
  fs.appendFileSync(graphqlFilePath, "\n" + mutationSDL);
} else {
  console.log("mutations.js not found in the found entity directory.");
}
