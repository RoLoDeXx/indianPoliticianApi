const Politician = require("../models/politiciansModel");

const ddCompare = async (req, res, next) => {
  let names = await Politician.find({
    year: "19"
  });
  res.render("compareSearch", {
    list: names
  });
  next();
};

module.exports = ddCompare;
