// generates boilerplate for new type
// run createtype.js followed by the name of the type
// could run an additional prompt to generate fields

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
    // TODO: Define your mongo schema here
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
  // no resolvers
`;
  fs.writeFileSync(path.join(typeDir, `resolvers.js`), resolversContent.trim());

  /* not using queries */

  const typeToLower = typeName.toLowerCase();
  // Create queries.js for GraphQL queries related to this type
  const queriesContent = `
  // TODO: Define queries for ${typeName}
  const ${typeName} = require("./model");

const queries = {
  ${typeToLower}: async (_, { id }) => await ${typeName}.findById(id),
  ${typeToLower}s: async () => await ${typeName}.find({}),
};

module.exports = queries;
  `;

  fs.writeFileSync(path.join(typeDir, `queries.js`), queriesContent.trim());

  // Create mutations.js for GraphQL mutations
  const mutationsContent = `
  // TODO: Define mutations for ${typeName}
  const ${typeName} = require("./model");

const mutations = {
  add${typeName}: async (_, { name, //fields }) => {
    const program = new Program({
        // fields
    });
    return await ${typeToLower}.save();
  },
  updateProgram: async (_, args) => {
    // Prepare the update object
    let updateData = {};

    // Dynamically set provided fields
    for (let key in args) {
      if (args[key] !== undefined && key !== "id") {
        // TO REPLACE: rules for replacing certain keys with certain types
        if (key === "department") updateData["department_id"] = args[key];
        else if (key === "programType") updateData["type_id"] = args[key];
        else updateData[key] = args[key];
      }
    }

    return await ${typeName}.findByIdAndUpdate(
      args.id,
      { $set: updateData },
      { new: true }
    );
  },
  delete${typeName}: async (_, { id }) => {
    return await ${typeName}.findByIdAndDelete(id);
  },
};

module.exports = mutations;

  `;

  fs.writeFileSync(path.join(typeDir, `mutations.js`), mutationsContent.trim());

  console.log(`${typeName} type boilerplate created successfully!`);
};

// Take the type name from command line arguments
const typeName = process.argv[2];

if (!typeName) {
  console.error("Please provide a type name!");
  process.exit(1);
}

createType(typeName);
