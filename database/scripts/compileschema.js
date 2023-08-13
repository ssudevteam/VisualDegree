// compileschema
// Takes all .graphql typedefs in _Types and outputs them to ./schema.graphql

const fs = require("fs");
const path = require("path");

const rootDir = __dirname; // starting root directory

const getGraphqlFilesFromDirectory = (directory) => {
  let graphqlContents = [];

  const items = fs.readdirSync(directory);

  for (let item of items) {
    const itemPath = path.join(directory, item);
    const stat = fs.statSync(itemPath);

    // If it's a directory, recurse into it
    if (stat.isDirectory()) {
      graphqlContents = graphqlContents.concat(
        getGraphqlFilesFromDirectory(itemPath)
      );
    } else if (path.extname(item) === ".graphql") {
      // If it's a graphql file, read its content
      graphqlContents.push(fs.readFileSync(itemPath, "utf8"));
    }
  }

  return graphqlContents;
};

const combinedGraphqlContent =
  getGraphqlFilesFromDirectory(rootDir).join("\n\n");

const cachingconfig = `
enum CacheControlScope {
  PUBLIC
  PRIVATE
}

directive @cacheControl(
  maxAge: Int
  scope: CacheControlScope
  inheritMaxAge: Boolean
) on FIELD_DEFINITION | OBJECT | INTERFACE | UNION`;

combinedGraphqlContent.join(cachingconfig);

const outputPath = path.join(rootDir, "schema.graphql");
fs.writeFileSync(outputPath, combinedGraphqlContent);

console.log("Master schema.graphql created!");
