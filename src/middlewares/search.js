const Politician = require("../models/politiciansModel");
const getImage = require("../utils/getImage");

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
    console.log(response);
  }
  next();
};

module.exports = search;
