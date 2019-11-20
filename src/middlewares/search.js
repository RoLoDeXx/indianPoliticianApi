const Politician = require("../models/politiciansModel");
const getImage = require("../utils/getImage");

const search = async (req, res, next) => {
  let query = req.query.searchFeild;
  if (query === "" || query === undefined) {
    res.render("search");
  } else {
    let response = await Politician.find({
      name: { $regex: query, $options: "i" }
    });

    if (response) {
      res.render("search", {
        politicians: response
      });
    }
    console.log(response);
  }
  next();
};

module.exports = search;
