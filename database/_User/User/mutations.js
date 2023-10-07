const User = require("./model");
const Schedule = require("../Schedule/model");

const mutations = {
    createUserWithFirebaseID: async (_, { firebaseID, name, student_id, email, major, minor }) => {
        const existingUser = await User.findOne({ firebaseID: firebaseID });
        if (existingUser) {
            throw new Error("User with this Firebase ID already exists.");
        }

        const user = new User({
            firebaseID,
            name,
            student_id,
            email,
            major,
            minor,
            completed_courses: [], // Assuming no courses completed on account creation
        });
        
        return await user.save();
      },
  updateUser: async (_, args) => {
    // Extract the ID from the arguments
    const { id } = args;

    // Prepare the update object
    let updateData = {};

    // Dynamically set provided fields
    for (let key in args) {
      if (args[key] !== undefined && key !== "id") {
        updateData[key] = args[key];
      }
    }

    return await User.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true }
    );
  },
  deleteUser: async (_, { id }) => {
    const deletedUser = await User.findByIdAndDelete(id);
    await Schedule.deleteMany({ _id: { $in: deletedUser.schedule } });
    return deletedUser;
  },
  addCourseToCompletedCourses: async (_, { id, courseId }) => {
    const user = await User.findById(id);
    if (!user) {
      throw new Error("User not found");
    }
    user.completed_courses.push(courseId);
    await user.save();
    return user;
  },
};

module.exports = mutations;
