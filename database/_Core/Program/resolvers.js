const Department = require("./_Core/Department/model");
const Course = require("./_Core/Course/model");
const ProgramType = require("./Core/ProgramType/model");

const resolvers = {
  Program: {
    async department(parent) {
      return await Department.findById(parent.department_id);
    },
    async courses(parent) {
      return await Course.find({
        _id: {
          $in: parent.courses,
        },
      });
    },
    async programType(parent) {
      return await ProgramType.findById(parent.type_id);
    },
  },
};

module.exports = resolvers;
