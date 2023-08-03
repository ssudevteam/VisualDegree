const fs = require("fs");
const path = require("path");
const readline = require("readline");

/* createEnv.js */
/* run to generate global env variables*/

// Fields that are chosen by user
const envFields = ["NODE_ENV", "APP_PORT", "DB_PORT", "MONGO_URI"];

// // If "NODE_ENV" is set to development || production
// // Set related variables
// function setDevProdEnvironment(envValues) {
//   if (envValues["NODE_ENV"] === "production") {
//     envValues["DOMAIN"] = "visualdegree.com";
//     // Add more production-specific environment variables here
//   } else if (envValues["NODE_ENV"] === "development") {
//     envValues["DOMAIN"] = "localhost";
//     // Add more development-specific environment variables here
//   } else {
//     console.log("DOMAIN not set, NODE_ENV must be production/development");
//   }
// }

// Read from terminal
async function promptUserForEnvContent() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const envValues = {};

  for (const field of envFields) {
    envValues[field] = await new Promise((resolve) => {
      rl.question(`Enter value for ${field}: `, (answer) => {
        resolve(answer.trim());
      });
    });
  }

  rl.close();
  return envValues;
}

// Write the .env file with the provided values
async function createEnvFile() {
  try {
    const envValues = await promptUserForEnvContent();

    // setDevProdEnvironment(envValues);

    // Construct the envContent with the provided values
    const envContent = Object.entries(envValues)
      .map(([key, value]) => `${key}='${value}'`)
      .join("\n");

    fs.writeFile("./config/.env", envContent, (err) => {
      if (err) {
        console.error("Error creating .env file:", err);
      } else {
        console.log(".env file created successfully!");
      }
    });
  } catch (err) {
    console.error("Error prompting for environment variables:", err);
  }
}

createEnvFile();
