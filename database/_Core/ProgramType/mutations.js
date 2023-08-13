const ProgramType = require("./model");

const mutations = {
  addProgramType: async (_, { name }) => {
    const programType = new ProgramType({
      name: name,
    });
    return await programType.save();
  },
  updateProgramType: async (_, args) => {
    const updateData = {
      name: args.name,
    };

    return await ProgramType.findByIdAndUpdate(
      args.id,
      { $set: updateData },
      { new: true }
    );
  },
  deleteProgramType: async (_, { id }) => {
    return await ProgramType.findByIdAndDelete(id);
  },
};

module.exports = mutations;
