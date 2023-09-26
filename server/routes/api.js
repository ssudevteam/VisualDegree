const express = require("express");
const router = express.Router();
const path = require("path");
const { ApolloClient, InMemoryCache, gql } = require("@apollo/client");

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
});

// Api access point
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/webapp", "index.html"));
});

// // Import the queries
// const {
//   GET_COURSE,
//   GET_COURSES,
//   GET_COURSES_BY_DEPARTMENT,
// } = require("../database/client/queries/courseQueries");

// const {
//   GET_DEPARTMENT,
//   GET_DEPARTMENTS,
// } = require("../database/client/queries/departmentQueries.js");

// const {
//   GET_PROGRAM,
//   GET_PROGRAMS,
//   GET_PROGRAMS_BY_PROGRAM_TYPE,
// } = require("../database/client/queries/programQueries.js");

// const {
//   GET_PROGRAM_DISTINCT,
//   GET_PROGRAM_DISTINCTS,
// } = require("../database/client/queries/programtypesQueries.js");

// const {
//   GET_SCHEDULE,
//   GET_SCHEDULES,
// } = require("../database/client/queries/scheduleQueries.js");

// const {
//   GET_USER,
//   GET_USERS,
//   GET_USERS_IN_MAJOR,
// } = require("../database/client/queries/userQueries.js");

// router.get("/course/:id", (req, res) => {
//   const { id } = req.params;

//   // Execute the GET_COURSE query with the provided ID
//   client
//     .query({
//       query: GET_COURSE,
//       variables: {
//         id: id,
//       },
//     })
//     .then((result) => {
//       const course = result.data.course;
//       res.json(course);
//     })
//     .catch((error) => {
//       console.error("Error fetching course:", error);
//       res.status(500).json({
//         error: "Error fetching course",
//       });
//     });
// });

// router.get("/courses", (req, res) => {
//   // Execute the GET_COURSES query
//   client
//     .query({
//       query: GET_COURSES,
//     })
//     .then((result) => {
//       const courses = result.data.courses;
//       res.json(courses);
//     })
//     .catch((error) => {
//       console.error("Error fetching courses:", error);
//       res.status(500).json({
//         error: "Error fetching courses",
//       });
//     });
// });

// router.get("/courses/department/:departmentId", (req, res) => {
//   const { departmentId } = req.params;

//   // Execute the GET_COURSES_BY_DEPARTMENT query with the provided department ID
//   client
//     .query({
//       query: GET_COURSES_BY_DEPARTMENT,
//       variables: {
//         departmentId: departmentId,
//       },
//     })
//     .then((result) => {
//       const courses = result.data.coursesByDepartment;
//       res.json(courses);
//     })
//     .catch((error) => {
//       console.error("Error fetching courses by department:", error);
//       res.status(500).json({
//         error: "Error fetching courses by department",
//       });
//     });
// });

// router.get("/department/:id", (req, res) => {
//   const { id } = req.params;

//   // Execute the GET_DEPARTMENT query with the provided ID
//   client
//     .query({
//       query: GET_DEPARTMENT,
//       variables: {
//         id: id,
//       },
//     })
//     .then((result) => {
//       const department = result.data.department;
//       res.json(department);
//     })
//     .catch((error) => {
//       console.error("Error fetching department:", error);
//       res.status(500).json({
//         error: "Error fetching department",
//       });
//     });
// });

// router.get("/departments", (req, res) => {
//   // Execute the GET_DEPARTMENTS query
//   client
//     .query({
//       query: GET_DEPARTMENTS,
//     })
//     .then((result) => {
//       const departments = result.data.departments;
//       res.json(departments);
//     })
//     .catch((error) => {
//       console.error("Error fetching departments:", error);
//       res.status(500).json({
//         error: "Error fetching departments",
//       });
//     });
// });

// router.get("/program/:id", (req, res) => {
//   const { id } = req.params;

//   // Execute the GET_PROGRAM query with the provided ID
//   client
//     .query({
//       query: GET_PROGRAM,
//       variables: {
//         id: id,
//       },
//     })
//     .then((result) => {
//       const program = result.data.program;
//       res.json(program);
//     })
//     .catch((error) => {
//       console.error("Error fetching program:", error);
//       res.status(500).json({
//         error: "Error fetching program",
//       });
//     });
// });

// router.get("/programs", (req, res) => {
//   // Execute the GET_PROGRAMS query
//   client
//     .query({
//       query: GET_PROGRAMS,
//     })
//     .then((result) => {
//       const programs = result.data.programs;
//       res.json(programs);
//     })
//     .catch((error) => {
//       console.error("Error fetching programs:", error);
//       res.status(500).json({
//         error: "Error fetching programs",
//       });
//     });
// });

// router.get("/programs/programType/:type_id", (req, res) => {
//   const { type_id } = req.params;

//   // Execute the GET_PROGRAMS_BY_PROGRAM_TYPE query with the provided program type ID
//   client
//     .query({
//       query: GET_PROGRAMS_BY_PROGRAM_TYPE,
//       variables: {
//         type_id: type_id,
//       },
//     })
//     .then((result) => {
//       const programs = result.data.programsByProgramType;
//       res.json(programs);
//     })
//     .catch((error) => {
//       console.error("Error fetching programs by program type:", error);
//       res.status(500).json({
//         error: "Error fetching programs by program type",
//       });
//     });
// });

// router.get("/programDistinct/:id", (req, res) => {
//   const { id } = req.params;

//   // Execute the GET_PROGRAM_DISTINCT query with the provided ID
//   client
//     .query({
//       query: GET_PROGRAM_DISTINCT,
//       variables: {
//         id: id,
//       },
//     })
//     .then((result) => {
//       const programDistinct = result.data.programDistinct;
//       res.json(programDistinct);
//     })
//     .catch((error) => {
//       console.error("Error fetching program distinct:", error);
//       res.status(500).json({
//         error: "Error fetching program distinct",
//       });
//     });
// });

// router.get("/programDistincts", (req, res) => {
//   // Execute the GET_PROGRAM_DISTINCTS query
//   client
//     .query({
//       query: GET_PROGRAM_DISTINCTS,
//     })
//     .then((result) => {
//       const programDistincts = result.data.programDistincts;
//       res.json(programDistincts);
//     })
//     .catch((error) => {
//       console.error("Error fetching program distincts:", error);
//       res.status(500).json({
//         error: "Error fetching program distincts",
//       });
//     });
// });

// router.get("/schedule/:id", (req, res) => {
//   const { id } = req.params;

//   // Execute the GET_SCHEDULE query with the provided ID
//   client
//     .query({
//       query: GET_SCHEDULE,
//       variables: {
//         id: id,
//       },
//     })
//     .then((result) => {
//       const schedule = result.data.schedule;
//       res.json(schedule);
//     })
//     .catch((error) => {
//       console.error("Error fetching schedule:", error);
//       res.status(500).json({
//         error: "Error fetching schedule",
//       });
//     });
// });

// router.get("/schedules", (req, res) => {
//   // Execute the GET_SCHEDULES query
//   client
//     .query({
//       query: GET_SCHEDULES,
//     })
//     .then((result) => {
//       const schedules = result.data.schedules;
//       res.json(schedules);
//     })
//     .catch((error) => {
//       console.error("Error fetching schedules:", error);
//       res.status(500).json({
//         error: "Error fetching schedules",
//       });
//     });
// });

// router.get("/user/:id", (req, res) => {
//   const { id } = req.params;

//   // Execute the GET_USER query with the provided ID
//   client
//     .query({
//       query: GET_USER,
//       variables: {
//         id: id,
//       },
//     })
//     .then((result) => {
//       const user = result.data.user;
//       res.json(user);
//     })
//     .catch((error) => {
//       console.error("Error fetching user:", error);
//       res.status(500).json({
//         error: "Error fetching user",
//       });
//     });
// });

// router.get("/users", (req, res) => {
//   // Execute the GET_USERS query
//   client
//     .query({
//       query: GET_USERS,
//     })
//     .then((result) => {
//       const users = result.data.users;
//       res.json(users);
//     })
//     .catch((error) => {
//       console.error("Error fetching users:", error);
//       res.status(500).json({
//         error: "Error fetching users",
//       });
//     });
// });

// router.get("/usersInMajor/:programID", (req, res) => {
//   const { programID } = req.params;

//   // Execute the GET_USER_COUNT_BY_MAJOR query with the provided program ID
//   client
//     .query({
//       query: GET_USERS_IN_MAJOR,
//       variables: {
//         programID: programID,
//       },
//     })
//     .then((result) => {
//       const users = result.data.usersInMajor;
//       res.json(users);
//     })
//     .catch((error) => {
//       console.error("Error fetching user count by major:", error);
//       res.status(500).json({
//         error: "Error fetching user count by major",
//       });
//     });
// });

//Mutations
router.post("/api/schedule", (req, res) => {
  const { name, user, courses } = req.body;

  const newSchedule = new Schedule({
    name,
    user,
    courses,
  });

  newSchedule.save((err) => {
    if (err) {
      console.error("Error creating schedule:", err);
      return res.status(500).json({ error: "Failed to create schedule" });
    }

    console.log("Schedule created:", newSchedule);
    return res.status(200).json(newSchedule);
  });
});

module.exports = router;
