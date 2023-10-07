// generates boilerplate for new type
// run createtype.js followed by the name of the type
// could run an additional prompt to generate fields

const fs = require("fs");
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const promptUserForInput = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

const createType = async () => {
  // Prompt user for typename
  const typeName = await promptUserForInput("Enter the type name: ");
  const typeDir = path.join(__dirname, "../", typeName);
  const typeToLower = typeName.toLowerCase();

  if (!fs.existsSync(typeDir)) {
    fs.mkdirSync(typeDir, { recursive: true });
  }

  const GraphQLToMongooseTypeMap = {
    ID: "mongoose.Schema.Types.ObjectId",
    String: "String",
    Int: "Number",
    Float: "Number",
    Boolean: "Boolean",
  };

  const displayGraphQLTypes = () => {
    console.log("Available GraphQL Primitive Types:");
    for (const type in GraphQLToMongooseTypeMap) {
      console.log(`- ${type}`);
    }
  };

  // Prompt user for fields
  let fields = {};
  let moreFields = true;
  displayGraphQLTypes();
  while (moreFields) {
    const fieldInput = await promptUserForInput(
      "Enter field in the format name:type (or 'done' to finish): "
    );

    if (fieldInput === "done") {
      moreFields = false;
    } else {
      const [fieldName, fieldType] = fieldInput.split(":");
      if (!GraphQLToMongooseTypeMap[fieldType]) {
        console.log("Invalid GraphQL type. Please use one from the list.");
        continue;
      }
      fields[fieldName] = GraphQLToMongooseTypeMap[fieldType];
    }
  }

  // Create Mongoose model .js file
  let mongooseFields = Object.entries(fields)
    .map(([key, value]) => `  ${key}: ${value},`)
    .join("\n");

  const modelContent = `
const mongoose = require('mongoose');

const ${typeName}Schema = new mongoose.Schema({
${mongooseFields}
});

module.exports = mongoose.model('${typeName}', ${typeName}Schema);
`;

  fs.writeFileSync(path.join(typeDir, `model.js`), modelContent.trim());

  // Create .graphql file for GraphQL type definitions
  let graphqlFields = Object.keys(fields)
    .map((key) => `  ${key}: ${fields[key]}!`)
    .join("\n");

  const graphqlContent = `
type ${typeName} {
  id: ID!
${graphqlFields}
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

  // ... [Queries]
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

  // ... [Mutations]
  // Create mutations.js for GraphQL mutations
  const mutationsContent = `
  // TODO: Define mutations for ${typeName}
  const ${typeName} = require("./model");

const mutations = {
  add${typeName}: async (_, { ${graphqlFields} }) => {
    const ${typeToLower} = new ${typeName}({
      ${graphqlFields}
    });
    return await ${typeToLower}.save();
  },
  update${typeName}: async (_, args) => {
    // Prepare the update object
    let updateData = {};

    // Dynamically set provided fields
    for (let key in args) {
      if (args[key] !== undefined && key !== "id") {
        updateData[key] = args[key];
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

  rl.close();
};

createType();
