const Department = require("model");

const queries = {
  Department: {
    department: async (_, { id }) => await Department.findById(id),
    departments: async () => await Department.find({}),
  },
};

module.exports = queries;
