const Politician = require("../models/politiciansModel");

const searchBy = async (req, res, next) => {
  let query = req.params.query;

  const politician = await Politician.findOne({
    name: query.charAt(0).toUpperCase() + query.slice(1)
  });
  // res.status(200).send(politician);
  if (politician) {
    console.log(politician);
    return res.render("profile.hbs", { politician });
  } else {
    try {
      const politician = await Politician.findOne({
        area: query.toUpperCase()
      });
      if (politician) return res.render("profile.hbs", { politician });
      else return res.status(200).send("Be precise when you're naming area");
    } catch (error) {
      return res.status(400).send("No such politician found");
    }
  }

  next();
};

module.exports = searchBy;
