// /programDistinct/queries.js

const ProgramType = require("model");

const queries = {
  ProgramType: {
    programType: async (_, { id }) => await ProgramType.findById(id),
    programTypes: async () => await ProgramType.find({}),
  },
};

module.exports = queries;
