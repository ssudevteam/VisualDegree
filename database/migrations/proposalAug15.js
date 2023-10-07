// CHANGE STRING VALUES TO FLOATS

const mongoose = require("mongoose");
const Course = require("./path_to_your_course_model");

async function migrateData() {
  // Connect to the database
  await mongoose.connect("your_mongodb_connection_string", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Fetch all the courses
  const courses = await Course.find();

  // Loop through each course and update the num_units field
  for (let course of courses) {
    let units = parseFloat(course.num_units);

    // Update the current course with the new number value
    course.num_units = units;

    // Save the updated course
    await course.save();
  }

  console.log("Data migration completed.");

  // Close the database connection
  mongoose.disconnect();
}

// Run the migration
migrateData();
