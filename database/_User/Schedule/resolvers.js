const Course = require("../../_Core/Course/model");
const User = require("../../_User/User/model");

const resolvers = {
  async user(parent, args, context, info) {
    return await User.findById(parent.user);
  },
  async courses(parent, args, context, info) {
    return await Course.find({
      _id: {
        $in: parent.courses,
      },
    });
  },
};

module.exports = resolvers;
