const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    prefix: {
      type: String,
      required: true,
    },
    header: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "None",
    },
    num_units: {
      type: String,
      required: true,
    },
    ge_category: {
      type: String,
      default: "n/a",
    },
    prerequisites: {
      type: String,
      default: "None",
    },
    url: {
      type: String,
    },
    department_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", courseSchema);
