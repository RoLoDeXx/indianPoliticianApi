const Politician = require("../models/politiciansModel");

const searchBy = async (req, res, next) => {
  if (req.params.area === undefined) {
    const name = req.params.name;
    try {
      const politician = await Politician.findOne({
        name: name.charAt(0).toUpperCase() + name.slice(1)
      });
      res.status(200).send(politician);
    } catch (error) {
      res.send(400).send("No such politician found");
    }
  } else {
    const area = req.params.area;
    try {
      const politician = await Politician.findOne({
        area: area.toUpperCase()
      });
      if (politician) return res.status(200).send(politician);
      else return res.status(200).send("Be precise when you're naming area");
    } catch (error) {
      res.send(400).send("No such politician found");
    }
  }
  next();
};

module.exports = searchBy;
