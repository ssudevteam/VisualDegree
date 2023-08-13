const Course = require("./model");

const mutations = {
  addCourse: async (
    _,
    {
      title,
      prefix,
      header,
      code,
      description,
      num_units,
      ge_category,
      prerequisites,
      url,
      department,
    }
  ) => {
    const course = new Course({
      title,
      prefix,
      header,
      code,
      description,
      num_units,
      ge_category,
      prerequisites,
      url,
      department_id: department,
    });
    return await course.save();
  },
  updateCourse: async (_, args) => {
    // Prepare the update object
    let updateData = {};

    // Dynamically set provided fields
    for (let key in args) {
      if (args[key] !== undefined && key !== "id") {
        updateData[key] = args[key];
      }
    }

    return await Course.findByIdAndUpdate(
      args.id,
      { $set: updateData },
      { new: true }
    );
  },
  deleteCourse: async (_, { id }) => {
    return await Course.findByIdAndDelete(id);
  },
};

module.exports = mutations;
