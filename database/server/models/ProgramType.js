const mongoose = require('mongoose');

const programTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('ProgramType', programTypeSchema);