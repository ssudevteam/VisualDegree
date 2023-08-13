const Course = require("./model");

const queries = {
  course: async (_, { id }) => await Course.findById(id),
  courses: async () => await Course.find({}),
  coursesByDepartment: async (_, { departmentId }) =>
    await Course.find({ department_id: departmentId }),
};

module.exports = queries;
