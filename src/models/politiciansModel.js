const mongoose = require("mongoose");
const PoliticanSchema = new mongoose.Schema({
  number: {
    type: Number,
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
    type: Number,
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
  }
});

const Politics = mongoose.model("Politican", PoliticanSchema);

module.exports = Politics;
