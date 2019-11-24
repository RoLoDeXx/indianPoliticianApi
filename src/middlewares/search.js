const Politician = require("../models/politiciansModel");

const search = async (req, res, next) => {
  let query = req.query.searchFeild;
  let byArea = req.query.switch;

  if (byArea) {
    let response = await Politician.find({
      area: { $regex: query, $options: "i" },
      year: "19"
    });

    res.render("search", {
      matches: response.length,
      politicians: response
    });
  } else {
    let response = await Politician.find({
      name: { $regex: query, $options: "i" },
      year: "19"
    });

    res.render("search", {
      matches: response.length,
      politicians: response
    });
  }
  next();
};

module.exports = search;
