const Program = require("./model");

const mutations = {
  addProgram: async (_, { name, url, department, courses, programType }) => {
    const program = new Program({
      name,
      url,
      department_id: department,
      courses,
      type_id: programType,
    });
    return await program.save();
  },
  updateProgram: async (_, args) => {
    // Prepare the update object
    let updateData = {};

    // Dynamically set provided fields
    for (let key in args) {
      if (args[key] !== undefined && key !== "id") {
        if (key === "department") updateData["department_id"] = args[key];
        else if (key === "programType") updateData["type_id"] = args[key];
        else updateData[key] = args[key];
      }
    }

    return await Program.findByIdAndUpdate(
      args.id,
      { $set: updateData },
      { new: true }
    );
  },
  deleteProgram: async (_, { id }) => {
    return await Program.findByIdAndDelete(id);
  },
};

module.exports = mutations;
