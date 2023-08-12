// Import required modules
const Course = require("./_Core/Course/model");
const Program = require("./_Core/Program/model");
const Schedule = require("./_User/Schedule/model");

const resolvers = {
  User: {
    unitsEnrolled: async (parent, args, context, info) => {
      const schedules = await Schedule.find({ user: parent.id });
      let unitsEnrolledSum = 0;

      for (const schedule of schedules) {
        const courses = await Course.find({ _id: { $in: schedule.courses } });

        for (const course of courses) {
          unitsEnrolledSum += parseFloat(course.num_units);
        }
      }

      return unitsEnrolledSum; // returning as integer
    },
    unitsTaken: async (parent, args, context, info) => {
      let unitsTakenSum = 0;

      for (const courseId of parent.completed_courses) {
        const course = await Course.findById(courseId);

        if (course) {
          unitsTakenSum += parseFloat(course.num_units);
        }
      }

      return unitsTakenSum.toString();
    },
    major: async (parent, args, context, info) => {
      return await Program.findById(parent.major);
    },
    minor: async (parent, args, context, info) => {
      if (parent.minor) {
        return await Program.findById(parent.minor);
      }
      return null;
    },
    completed_courses: async (parent, args, context, info) => {
      return await Course.find({
        _id: {
          $in: parent.completed_courses,
        },
      });
    },
    schedule: async (parent, args, context, info) => {
      return await Schedule.find({
        _id: {
          $in: parent.schedule,
        },
      });
    },
  },
};

module.exports = resolvers;
