const fs = require("fs");

const envContent = `NODE_ENV='development'
PORT=8000
MONGO_URI='mongodb+srv://ssudevteam:orange%5E45@cluster0.bpjjkak.mongodb.net/test'`;

fs.writeFile(".env", envContent, (err) => {
  if (err) {
    console.error("Error creating .env file:", err);
  } else {
    console.log(".env file created successfully!");
  }
});
