const Politician = require("../models/politiciansModel");

const search = async (req, res, next) => {
  let query = req.query.searchFeild;
  if (query === "" || query === undefined) {
    res.render("search", {
      matches: 0
    });
  } else {
    let response = await Politician.find({
      name: { $regex: query, $options: "i" },
      year: "19"
    });

    if (response) {
      res.render("search", {
        matches: response.length,
        politicians: response
      });
    }
  }
  next();
};

module.exports = search;
