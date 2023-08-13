const Schedule = require("./model");

const queries = {
  schedule: async (_, { id }) => await Schedule.findById(id),
  schedules: async () => await Schedule.find({}),
};

module.exports = queries;
