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
    unitsEnrolled: {
      type: GraphQLString,
    },
    unitsTaken: {
      type: GraphQLString,
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
        courses: {
          type: GraphQLList(GraphQLID),
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
    addUser: {
      type: UserType,
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString),
        },
        student_id: {
          type: new GraphQLNonNull(GraphQLString),
        },
        email: {
          type: new GraphQLNonNull(GraphQLString),
        },
        unitsEnrolled: {
          type: GraphQLString,
        },
        unitsTaken: {
          type: GraphQLString,
        },
        major: {
          type: new GraphQLNonNull(GraphQLID),
        },
        minor: {
          type: GraphQLID,
        },
        completed_courses: {
          type: new GraphQLList(GraphQLID),
        },
        schedule: {
          type: new GraphQLList(GraphQLID),
        },
      },
      resolve(parent, args) {
        let user = new User({
          name: args.name,
          student_id: args.student_id,
          email: args.email,
          unitsEnrolled: args.unitsEnrolled,
          unitsTaken: args.unitsTaken,
          major: args.major,
          minor: args.minor,
          completed_courses: args.completed_courses,
          schedule: args.schedule,
        });
        return user.save();
      },
    },
    updateUser: {
      type: UserType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        }, // User ID to identify the user to be updated
        name: {
          type: GraphQLString,
        },
        student_id: {
          type: GraphQLString,
        },
        email: {
          type: GraphQLString,
        },
        unitsEnrolled: {
          type: GraphQLString,
        },
        unitsTaken: {
          type: GraphQLString,
        },
        major: {
          type: GraphQLID,
        },
        minor: {
          type: GraphQLID,
        },
        completed_courses: {
          type: new GraphQLList(GraphQLID),
        },
        schedule: {
          type: new GraphQLList(GraphQLID),
        },
      },
      resolve(parent, args) {
        return User.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              student_id: args.student_id,
              email: args.email,
              unitsEnrolled: args.unitsEnrolled,
              unitsTaken: args.unitsTaken,
              major: args.major,
              minor: args.minor,
              completed_courses: args.completed_courses,
              schedule: args.schedule,
            },
          },
          {
            new: true,
          }
        );
      },
    },
    deleteUser: {
      type: UserType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        }, // User ID to identify the user to be deleted
      },
      resolve(parent, args) {
        return User.findByIdAndDelete(args.id);
      },
    },
    addCourse: {
      type: CourseType,
      args: {
        title: {
          type: new GraphQLNonNull(GraphQLString),
        },
        prefix: {
          type: new GraphQLNonNull(GraphQLString),
        },
        header: {
          type: new GraphQLNonNull(GraphQLString),
        },
        code: {
          type: new GraphQLNonNull(GraphQLString),
        },
        description: {
          type: new GraphQLNonNull(GraphQLString),
        },
        num_units: {
          type: new GraphQLNonNull(GraphQLString),
        },
        ge_category: {
          type: new GraphQLNonNull(GraphQLString),
        },
        prerequisites: {
          type: GraphQLString,
        },
        url: {
          type: GraphQLString,
        },
        department: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve(parent, args) {
        let course = new Course({
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
        id: {
          type: new GraphQLNonNull(GraphQLID),
        }, // Course ID to identify the course to be updated
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
          type: GraphQLID,
        },
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
          {
            new: true,
          }
        );
      },
    },
    deleteCourse: {
      type: CourseType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        }, // Course ID to identify the course to be deleted
      },
      resolve(parent, args) {
        return Course.findByIdAndDelete(args.id);
      },
    },
    addDepartment: {
      type: DepartmentType,
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString),
        },
        url: {
          type: GraphQLString,
        },
      },
      resolve(parent, args) {
        let department = new Department({
          name: args.name,
          url: args.url,
        });
        return department.save();
      },
    },
    updateDepartment: {
      type: DepartmentType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        }, // Department ID to identify the department to be updated
        name: {
          type: GraphQLString,
        },
        url: {
          type: GraphQLString,
        },
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
          {
            new: true,
          }
        );
      },
    },
    deleteDepartment: {
      type: DepartmentType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        }, // Department ID to identify the department to be deleted
      },
      resolve(parent, args) {
        return Department.findByIdAndDelete(args.id);
      },
    },
    addProgram: {
      type: ProgramType,
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString),
        },
        url: {
          type: GraphQLString,
        },
        department: {
          type: new GraphQLNonNull(GraphQLID),
        },
        courses: {
          type: new GraphQLList(GraphQLID),
        },
        programType: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve(parent, args) {
        let program = new Program({
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
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
        name: {
          type: GraphQLString,
        },
        url: {
          type: GraphQLString,
        },
        department: {
          type: GraphQLID,
        },
        courses: {
          type: new GraphQLList(GraphQLID),
        },
        programType: {
          type: GraphQLID,
        },
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
          {
            new: true,
          }
        );
      },
    },
    deleteProgram: {
      type: ProgramType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve(parent, args) {
        return Program.findByIdAndDelete(args.id);
      },
    },
    addProgramDistinct: {
      type: ProgramDistinctType,
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve(parent, args) {
        let programDistinct = new ProgramDistinct({
          name: args.name,
        });
        return programDistinct.save();
      },
    },
    updateProgramDistinct: {
      type: ProgramDistinctType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        }, // Program Distinct ID to identify the program distinct to be updated
        name: {
          type: GraphQLString,
        },
      },
      resolve(parent, args) {
        return ProgramDistinct.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
            },
          },
          {
            new: true,
          }
        );
      },
    },
    deleteProgramDistinct: {
      type: ProgramDistinctType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        }, // Program Distinct ID to identify the program distinct to be deleted
      },
      resolve(parent, args) {
        return ProgramDistinct.findByIdAndDelete(args.id);
      },
    },
    addSchedule: {
      type: ScheduleType,
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString),
        },
        user: {
          type: new GraphQLNonNull(GraphQLID),
        },
        courses: {
          type: new GraphQLList(GraphQLID),
        },
      },
      resolve(parent, args) {
        let schedule = new Schedule({
          name: args.name,
          user: args.user,
          courses: args.courses,
        });
        return schedule.save();
      },
    },
    updateSchedule: {
      type: ScheduleType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        }, // Schedule ID to identify the schedule to be updated
        name: {
          type: GraphQLString,
        },
        user: {
          type: new GraphQLNonNull(GraphQLID),
        },
        courses: {
          type: new GraphQLList(GraphQLID),
        },
      },
      resolve(parent, args) {
        return Schedule.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              user: args.user,
              courses: args.courses,
            },
          },
          {
            new: true,
          }
        );
      },
    },
    deleteSchedule: {
      type: ScheduleType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        }, // Schedule ID to identify the schedule to be deleted
      },
      resolve(parent, args) {
        return Schedule.findByIdAndDelete(args.id);
      },
    },
  },
});

// Define GraphQL schema
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
