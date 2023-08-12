// run createtype.js followed by the name of the type to generate boilerplate

const fs = require("fs");
const path = require("path");

const createType = (typeName) => {
  const typeDir = path.join(__dirname, "../", typeName);

  // Create the directory for type
  if (!fs.existsSync(typeDir)) {
    fs.mkdirSync(typeDir, { recursive: true });
  }

  // Create Mongoose model .js file
  const modelContent = `
const mongoose = require('mongoose');

const ${typeName}Schema = new mongoose.Schema({
    // TODO: Define your schema here
});

module.exports = mongoose.model('${typeName}', ${typeName}Schema);
`;

  fs.writeFileSync(path.join(typeDir, `model.js`), modelContent.trim());

  // Create .graphql file for GraphQL type definitions
  const graphqlContent = `
type ${typeName} {
    id: ID!
    # TODO: Add other fields here
}
`;

  fs.writeFileSync(
    path.join(typeDir, `_${typeName}.graphql`),
    graphqlContent.trim()
  );

  // Create resolvers.js for resolvers related to this type
  const resolversContent = `
  const Department = require("../Department/model");

  // reference to mongoose model
  const resolvers = {
    Course: {
      department(parent, args, context, info) {
        return Department.findById(parent.department_id);
      },
    },
  };
  
  module.exports = resolvers;  
`;
  fs.writeFileSync(path.join(typeDir, `resolvers.js`), resolversContent.trim());

  /* not using queries */

  //   // Create queries.js for GraphQL queries related to this type
  //   const queriesContent = `
  // // TODO: Define queries for ${typeName}
  // const queries = {
  //     // e.g., getUser: (args) => { ... }
  // };

  // module.exports = queries;
  // `;

  //   fs.writeFileSync(path.join(typeDir, `queries.js`), queriesContent.trim());

  //   // Create mutations.js for GraphQL mutations
  //   const mutationsContent = `
  // // TODO: Define mutations for ${typeName}
  // const mutations = {
  //     // e.g., createUser: (args) => { ... }
  // };

  // module.exports = mutations;
  // `;

  //   fs.writeFileSync(path.join(typeDir, `mutations.js`), mutationsContent.trim());

  console.log(`${typeName} type and model created successfully!`);
};

// Take the type name from command line arguments
const typeName = process.argv[2];

if (!typeName) {
  console.error("Please provide a type name!");
  process.exit(1);
}

createType(typeName);
