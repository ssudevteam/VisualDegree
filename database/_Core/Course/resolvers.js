const Department = require("../../_Core/Department/model");

const resolvers = {
  async department(parent, args, context, info) {
    return await Department.findById(parent.department_id);
  },
};

module.exports = resolvers;
