const mongoose = require("mongoose");
const PoliticanSchema = new mongoose.Schema({
  year: {
    type: String,
    default: 19
  },
  number: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  area: {
    type: String,
    required: true,
    trim: true
  },
  party: {
    type: String,
    required: true,
    trim: true
  },
  cases: {
    type: String,
    default: 0
  },
  education: {
    type: String,
    required: true,
    trim: true
  },
  assets: {
    type: String,
    required: true,
    trim: true
  },
  liabilities: {
    type: String,
    required: true,
    trim: true
  },
  Debates: {
    type: String,
    required: true,
    trim: true
  },
  Private_Member_Bills: {
    type: String,
    required: true,
    trim: true
  },
  Questions: {
    type: String,
    required: true,
    trim: true
  },
  Attendance: {
    type: String,
    required: true,
    trim: true
  },
  State_s_Private_Member_Bills_average: {
    type: String,
    required: true,
    trim: true
  }
});

const Politics = mongoose.model("Politican", PoliticanSchema);

module.exports = Politics;
