// /programDistinct/queries.js

const ProgramType = require("./model");

const queries = {
  programType: async (_, { id }) => await ProgramType.findById(id),
  programTypes: async () => await ProgramType.find({}),
};

module.exports = queries;
