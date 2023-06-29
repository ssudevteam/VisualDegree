const mongoose = require("mongoose");

const programSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  department_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
    required: true
  },
  courses: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
  }],
  type_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProgramType',
    required: true
  }
}, 
{
  timestamps: true
});

module.exports = mongoose.model("Program", programSchema);
