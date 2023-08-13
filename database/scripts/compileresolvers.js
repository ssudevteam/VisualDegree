const glob = require("glob");
const path = require("path");

function loadResolvers() {
  const resolverPatterns = [
    "./_*/**/mutations.js",
    "./_*/**/resolvers.js",
    "./_*/**/queries.js",
  ];

  let aggregatedResolvers = {
    Query: {},
    Mutation: {},
  };

  resolverPatterns.forEach((pattern) => {
    const filePaths = glob.sync(pattern);

    filePaths.forEach((filePath) => {
      const resolverModule = require(path.resolve(filePath));
      const filename = path.basename(filePath);

      if (filename === "queries.js") {
        Object.assign(aggregatedResolvers.Query, resolverModule);
      } else if (filename === "mutations.js") {
        Object.assign(aggregatedResolvers.Mutation, resolverModule);
      } else {
        // For resolvers.js or any other filename
        const category = path.basename(path.dirname(filePath));
        if (!aggregatedResolvers[category]) {
          aggregatedResolvers[category] = {};
        }
        Object.assign(aggregatedResolvers[category], resolverModule);
      }
    });
  });

  return aggregatedResolvers;
}

const allResolvers = loadResolvers();

module.exports = allResolvers;
