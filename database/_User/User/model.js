const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    googleID: {
      type: String,
      required: true,
      immutable: true,
    },
    email: {
      type: String,
      required: true,
    },
    displayName: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      immutable: true,
    },
    student_id: {
      type: String,
      immutable: true,
    },
    unitsEnrolled: {
      type: String,
      default: "",
    },
    unitsTaken: {
      type: String,
      default: "",
    },
    major: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Program", // Reference to the 'Program' model
    },
    minor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Program", // Reference to the 'Program' model
      default: null,
    },
    completed_courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        default: null,
      },
    ],
    schedule: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Schedule", // Reference to the 'Schedule' model
        default: null,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
