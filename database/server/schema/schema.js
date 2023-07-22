// Import required modules
const User = require("../models/User");
const Course = require("../models/Course");
const Department = require("../models/Department");
const Program = require("../models/Program");
const ProgramDistinct = require("../models/ProgramType");
const Schedule = require("../models/Schedule");

// Import GraphQL dependencies
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = require("graphql");

// Define UserType schema
const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    student_id: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    //Aggregate fields
    unitsEnrolled: {
      type: GraphQLString,
      async resolve(parent, args) {
        const schedulePromise = Schedule.find({ user: parent.id });

        const schedules = await schedulePromise;
        let unitsEnrolledSum = 0;

        for (const schedule of schedules) {
          const coursePromise = Course.find({ _id: { $in: schedule.courses } });
          const courses = await coursePromise;

          for (const course of courses) {
            unitsEnrolledSum += parseInt(course.num_units);
          }
        }

        return unitsEnrolledSum.toString();
      },
    },
    unitsTaken: {
      type: GraphQLString,
      async resolve(parent, args) {
        let unitsTakenSum = 0;

        for (const courseId of parent.completed_courses) {
          const course = await Course.findById(courseId);

          if (course) {
            unitsTakenSum += parseInt(course.num_units);
          }
        }

        return unitsTakenSum.toString();
      },
    },

    major: {
      type: ProgramType,
      resolve(parent, args) {
        return Program.findById(parent.major);
      },
    },
    minor: {
      type: ProgramType,
      resolve(parent, args) {
        if (parent.minor) {
          return Program.findById(parent.minor);
        }
        return null;
      },
    },
    completed_courses: {
      type: new GraphQLList(CourseType),
      resolve(parent, args) {
        return Course.find({
          _id: {
            $in: parent.completed_courses,
          },
        });
      },
    },
    schedule: {
      type: new GraphQLList(ScheduleType),
      resolve(parent, args) {
        return Schedule.find({
          _id: {
            $in: parent.schedule,
          },
        });
      },
    },
  }),
});

// Define CourseType schema
const CourseType = new GraphQLObjectType({
  name: "Course",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    title: {
      type: GraphQLString,
    },
    prefix: {
      type: GraphQLString,
    },
    header: {
      type: GraphQLString,
    },
    code: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    num_units: {
      type: GraphQLString,
    },
    ge_category: {
      type: GraphQLString,
    },
    prerequisites: {
      type: GraphQLString,
    },
    url: {
      type: GraphQLString,
    },
    department: {
      type: DepartmentType,
      resolve(parent, args) {
        return Department.findById(parent.department_id);
      },
    },
  }),
});

// Define DepartmentType schema
const DepartmentType = new GraphQLObjectType({
  name: "Department",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    url: {
      type: GraphQLString,
    },
  }),
});

// Define ProgramType schema
const ProgramType = new GraphQLObjectType({
  name: "Program",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    url: {
      type: GraphQLString,
    },
    department: {
      type: DepartmentType,
      resolve(parent, args) {
        return Department.findById(parent.department_id);
      },
    },
    courses: {
      type: new GraphQLList(CourseType),
      resolve(parent, args) {
        return Course.find({
          _id: {
            $in: parent.courses,
          },
        });
      },
    },
    programType: {
      type: ProgramDistinctType,
      resolve(parent, args) {
        return ProgramDistinct.findById(parent.type_id);
      },
    },
  }),
});

// Define ProgramDistinctType schema
const ProgramDistinctType = new GraphQLObjectType({
  name: "ProgramType",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
  }),
});

// Define ScheduleType schema
const ScheduleType = new GraphQLObjectType({
  name: "Schedule",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    user: {
      type: UserType,
      resolve(parent, args) {
        return User.findById(parent.user);
      },
    },
    courses: {
      type: new GraphQLList(CourseType),
      resolve(parent, args) {
        return Course.find({
          _id: {
            $in: parent.courses,
          },
        });
      },
    },
  }),
});

// Define RootQuery schema
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve(parent, args) {
        return User.findById(args.id);
      },
    },
    course: {
      type: CourseType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve(parent, args) {
        return Course.findById(args.id);
      },
    },
    department: {
      type: DepartmentType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve(parent, args) {
        return Department.findById(args.id);
      },
    },
    program: {
      type: ProgramType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve(parent, args) {
        return Program.findById(args.id);
      },
    },
    programDistinct: {
      type: ProgramDistinctType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve(parent, args) {
        return ProgramDistinct.findById(args.id);
      },
    },
    schedule: {
      type: ScheduleType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve(parent, args) {
        return Schedule.findById(args.id);
      },
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return User.find({});
      },
    },
    courses: {
      type: new GraphQLList(CourseType),
      resolve(parent, args) {
        return Course.find({});
      },
    },
    departments: {
      type: new GraphQLList(DepartmentType),
      resolve(parent, args) {
        return Department.find({});
      },
    },
    programs: {
      type: new GraphQLList(ProgramType),
      resolve(parent, args) {
        return Program.find({});
      },
    },
    programDistincts: {
      type: new GraphQLList(ProgramDistinctType),
      resolve(parent, args) {
        return ProgramDistinct.find({});
      },
    },
    schedules: {
      type: new GraphQLList(ScheduleType),
      resolve(parent, args) {
        return Schedule.find({});
      },
    },
    // Fetch all courses in a department
    coursesByDepartment: {
      type: new GraphQLList(CourseType),
      args: {
        departmentId: {
          type: GraphQLID,
        },
      },
      resolve(parent, args) {
        return Course.find(
          Course.find({
            department_id: args.departmentId,
          })
        );
      },
    },
    // Fetch all programs in a program type based on type ID
    programsByProgramType: {
      type: new GraphQLList(ProgramType),
      args: {
        type_id: {
          type: GraphQLID,
        },
      },
      resolve(parent, args) {
        return Program.find({
          type_id: args.type_id,
        });
      },
    },
    // Fetch the users with a specific major given a program ID
    userCountByMajor: {
      type: new GraphQLList(UserType),
      args: {
        programID: {
          type: GraphQLID,
        },
      },
      resolve(parent, args) {
        return User.find({
          major: args.programID,
        });
      },
    },
    // Fetch  users who have completed more than a certain amount of units given
    userCountByUnitsTaken: {
      type: new GraphQLList(UserType),
      args: {
        num_of_units: {
          type: GraphQLString,
        },
      },
      resolve(parent, args) {
        return User.find({
          unitsTaken: {
            $gt: args.num_of_units,
          },
        });
      },
    },
  },
});

// Define Mutation schema
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: UserType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        student_id: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        major: { type: GraphQLNonNull(GraphQLID) },
        minor: { type: GraphQLID },
        completed_courses: { type: GraphQLList(GraphQLID) },
      },
      resolve(parent, args) {
        const user = new User({
          name: args.name,
          student_id: args.student_id,
          email: args.email,
          major: args.major,
          minor: args.minor,
          completed_courses: args.completed_courses,
        });
        return user.save();
      },
    },
    updateUser: {
      type: UserType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        student_id: { type: GraphQLString },
        email: { type: GraphQLString },
        major: { type: GraphQLID },
        minor: { type: GraphQLID },
        completed_courses: { type: GraphQLList(GraphQLID) },
        schedule: { type: GraphQLList(GraphQLID) },
      },
      resolve(parent, args) {
        return User.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              student_id: args.student_id,
              email: args.email,
              major: args.major,
              minor: args.minor,
              completed_courses: args.completed_courses,
              schedule: args.schedule,
            },
          },
          { new: true }
        );
      },
    },
    deleteUser: {
      type: UserType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve: async (parent, args) => {
        const deletedUser = await User.findByIdAndDelete(args.id);
        await Schedule.deleteMany({ _id: { $in: deletedUser.schedule } });
        return deletedUser;
      },
    },
    addCourseToCompletedCourses: {
      type: UserType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        courseId: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve: async (parent, args) => {
        const user = await User.findById(args.id);
        if (!user) {
          throw new Error("User not found");
        }
        user.completed_courses.push(args.courseId);
        await user.save();
        return user;
      },
    },
    addCourse: {
      type: CourseType,
      args: {
        title: { type: GraphQLNonNull(GraphQLString) },
        prefix: { type: GraphQLNonNull(GraphQLString) },
        header: { type: GraphQLNonNull(GraphQLString) },
        code: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        num_units: { type: GraphQLNonNull(GraphQLString) },
        ge_category: { type: GraphQLNonNull(GraphQLString) },
        prerequisites: { type: GraphQLString },
        url: { type: GraphQLString },
        department: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const course = new Course({
          title: args.title,
          prefix: args.prefix,
          header: args.header,
          code: args.code,
          description: args.description,
          num_units: args.num_units,
          ge_category: args.ge_category,
          prerequisites: args.prerequisites,
          url: args.url,
          department_id: args.department,
        });
        return course.save();
      },
    },
    updateCourse: {
      type: CourseType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        title: { type: GraphQLString },
        prefix: { type: GraphQLString },
        header: { type: GraphQLString },
        code: { type: GraphQLString },
        description: { type: GraphQLString },
        num_units: { type: GraphQLString },
        ge_category: { type: GraphQLString },
        prerequisites: { type: GraphQLString },
        url: { type: GraphQLString },
        department: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Course.findByIdAndUpdate(
          args.id,
          {
            $set: {
              title: args.title,
              prefix: args.prefix,
              header: args.header,
              code: args.code,
              description: args.description,
              num_units: args.num_units,
              ge_category: args.ge_category,
              prerequisites: args.prerequisites,
              url: args.url,
              department_id: args.department,
            },
          },
          { new: true }
        );
      },
    },
    deleteCourse: {
      type: CourseType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Course.findByIdAndDelete(args.id);
      },
    },
    addDepartment: {
      type: DepartmentType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        url: { type: GraphQLString },
      },
      resolve(parent, args) {
        const department = new Department({
          name: args.name,
          url: args.url,
        });
        return department.save();
      },
    },
    updateDepartment: {
      type: DepartmentType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        url: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Department.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              url: args.url,
            },
          },
          { new: true }
        );
      },
    },
    deleteDepartment: {
      type: DepartmentType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Department.findByIdAndDelete(args.id);
      },
    },
    addProgram: {
      type: ProgramType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        url: { type: GraphQLString },
        department: { type: GraphQLNonNull(GraphQLID) },
        courses: { type: GraphQLList(GraphQLID) },
        programType: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const program = new Program({
          name: args.name,
          url: args.url,
          department_id: args.department,
          courses: args.courses,
          type_id: args.programType,
        });
        return program.save();
      },
    },
    updateProgram: {
      type: ProgramType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        url: { type: GraphQLString },
        department: { type: GraphQLID },
        courses: { type: GraphQLList(GraphQLID) },
        programType: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Program.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              url: args.url,
              department_id: args.department,
              courses: args.courses,
              type_id: args.programType,
            },
          },
          { new: true }
        );
      },
    },
    deleteProgram: {
      type: ProgramType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Program.findByIdAndDelete(args.id);
      },
    },
    addProgramDistinct: {
      type: ProgramDistinctType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const programDistinct = new ProgramDistinct({
          name: args.name,
        });
        return programDistinct.save();
      },
    },
    updateProgramDistinct: {
      type: ProgramDistinctType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
      },
      resolve(parent, args) {
        return ProgramDistinct.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
            },
          },
          { new: true }
        );
      },
    },
    deleteProgramDistinct: {
      type: ProgramDistinctType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return ProgramDistinct.findByIdAndDelete(args.id);
      },
    },
    addSchedule: {
      type: ScheduleType,
      args: {
        user: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        try {
          const schedule = new Schedule({
            name: args.name,
            user: args.user,
          });
          const savedSchedule = await schedule.save();
          const user = await User.findByIdAndUpdate(
            args.user,
            { $push: { schedule: savedSchedule._id } },
            { new: true }
          );
          return savedSchedule;
        } catch (err) {
          throw new Error("Failed to add schedule: " + err.message);
        }
      },
    },
    updateSchedule: {
      type: ScheduleType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        courses: { type: GraphQLList(GraphQLID) },
      },
      resolve(parent, args) {
        return Schedule.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              courses: args.courses,
            },
          },
          { new: true }
        );
      },
    },
    deleteSchedule: {
      type: ScheduleType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        User.updateOne(
          { schedule: args.id },
          { $pull: { schedule: args.id } }
        ).exec();
        return Schedule.findByIdAndDelete(args.id);
      },
    },
    addCourseToSchedule: {
      type: ScheduleType,
      args: {
        scheduleID: { type: GraphQLNonNull(GraphQLID) },
        courseID: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Schedule.findByIdAndUpdate(
          args.scheduleID,
          { $push: { courses: args.courseID } },
          { new: true }
        );
      },
    },
    dropCourseFromSchedule: {
      type: ScheduleType,
      args: {
        scheduleID: { type: GraphQLNonNull(GraphQLID) },
        courseID: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Schedule.findByIdAndUpdate(
          args.scheduleID,
          { $pull: { courses: args.courseID } },
          { new: true }
        );
      },
    },
  },
});

// Define GraphQL schema
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
