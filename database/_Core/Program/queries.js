// /program/queries.js

const Program = require("model");

const queries = {
  Program: {
    program: async (_, { id }) => await Program.findById(id),
    programs: async () => await Program.find({}),
    programsByProgramType: async (_, { type_id }) =>
      await Program.find({ type_id: type_id }),
  },
};

module.exports = queries;
