const mongoose = require("mongoose");
const UserReviewSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true
  },
  number: {
    type: String,
    required: true,
    trim: true
  },
  politicianName: {
    type: String,
    trim: true
  },
  integrity: {
    required: true,
    type: Number,
    min: 0,
    max: 5
  },
  intelligence: {
    required: true,
    type: Number,
    min: 0,
    max: 5
  },
  resilience: {
    required: true,
    type: Number,
    min: 0,
    max: 5
  },
  honesty: {
    required: true,
    type: Number,
    min: 0,
    max: 5
  },
  diplomacy: {
    required: true,
    type: Number,
    min: 0,
    max: 5
  }
});
const Reviews = mongoose.model("UserReviews", UserReviewSchema);

module.exports = Reviews;
