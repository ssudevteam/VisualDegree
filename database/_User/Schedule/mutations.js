const Schedule = require("./model");
const User = require("../User/model");

const mutations = {
  addSchedule: async (_, { user, name }) => {
    try {
      const schedule = new Schedule({ name, user });
      const savedSchedule = await schedule.save();

      await User.findByIdAndUpdate(
        user,
        { $push: { schedule: savedSchedule._id } },
        { new: true }
      );

      return savedSchedule;
    } catch (err) {
      throw new Error("Failed to add schedule: " + err.message);
    }
  },
  updateSchedule: async (_, args) => {
    // Prepare the update object
    let updateData = {};

    // Dynamically set provided fields
    for (let key in args) {
      if (args[key] !== undefined && key !== "id") {
        updateData[key] = args[key];
      }
    }

    return await Schedule.findByIdAndUpdate(
      args.id,
      { $set: updateData },
      { new: true }
    );
  },
  deleteSchedule: async (_, { id }) => {
    await User.updateOne({ schedule: id }, { $pull: { schedule: id } }).exec();
    return await Schedule.findByIdAndDelete(id);
  },
  addCourseToSchedule: async (_, { scheduleID, courseID }) => {
    return await Schedule.findByIdAndUpdate(
      scheduleID,
      { $push: { courses: courseID } },
      { new: true }
    );
  },
  dropCourseFromSchedule: async (_, { scheduleID, courseID }) => {
    return await Schedule.findByIdAndUpdate(
      scheduleID,
      { $pull: { courses: courseID } },
      { new: true }
    );
  },
};

module.exports = mutations;
