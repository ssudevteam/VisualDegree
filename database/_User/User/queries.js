const User = require("./model");

const queries = {
  user: async (_, { id }) => await User.findById(id),
  users: async () => await User.find({}),
  userCountByMajor: async (_, { programID }) =>
    await User.find({ major: programID }),
  userCountByUnitsTaken: async (_, { num_of_units }) =>
    await User.find({ unitsTaken: { $gt: num_of_units } }),
};

module.exports = queries;
