const Department = require("./model");

const mutations = {
  addDepartment: async (_, { name, url }) => {
    const department = new Department({ name, url });
    return await department.save();
  },
  updateDepartment: async (_, args) => {
    // Prepare the update object
    let updateData = {};

    // Dynamically set provided fields
    for (let key in args) {
      if (args[key] !== undefined && key !== "id") {
        updateData[key] = args[key];
      }
    }

    return await Department.findByIdAndUpdate(
      args.id,
      { $set: updateData },
      { new: true }
    );
  },
  deleteDepartment: async (_, { id }) => {
    return await Department.findByIdAndDelete(id);
  },
};

module.exports = mutations;
