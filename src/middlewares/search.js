const Politician = require("../models/politiciansModel");

const search = async (req, res, next) => {
  let username = req.query.searchFeild;
  if (username === "" || username === undefined) return;

  let response = await Politician.find({
    name: { $regex: username, $options: "i" }
  });

  console.log(response);

  res.render("search", {
    politicians: response
  });
  next();
};

module.exports = search;
