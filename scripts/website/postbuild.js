const fs = require("fs");
const path = require("path");

const sourceDirectory = "./public";
const destinationDirectory = "./public/website";

// Move WebPage directories into public/website because Vite doesn't make it easy to
fs.readdir(sourceDirectory, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  files.forEach((file) => {
    const sourcePath = path.join(sourceDirectory, file);

    console.log(file);
    if (fs.statSync(sourcePath).isDirectory() && file.includes("Page")) {
      const destinationPath = path.join(destinationDirectory, file);
      fs.rename(sourcePath, destinationPath, (err) => {
        if (err) {
          console.error("Error moving directory:", err);
        } else {
          console.log(`Directory '${file}' moved successfully.`);
        }
      });
    }
    if (file.includes(".js")) {
      const destinationPath = path.join(destinationDirectory, file);
      fs.rename(sourcePath, destinationPath, (err) => {
        if (err) {
          console.error("Error moving directory:", err);
        } else {
          console.log(`Directory '${file}' moved successfully.`);
        }
      });
    }
  });
});

const sourceDirectory2 = "./public/assets";
const destinationDirectory2 = "./public/website/assets";

fs.readdir(sourceDirectory2, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  files.forEach((file) => {
    const sourcePath = path.join(sourceDirectory2, file);

    if (file.includes("preload")) {
      const destinationPath = path.join(destinationDirectory2, file);
      fs.rename(sourcePath, destinationPath, (err) => {
        if (err) {
          console.error("Error moving file:", err);
        } else {
          console.log(`File '${file}' moved successfully.`);
        }
      });
    }
  });
});
