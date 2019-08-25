const fetch = require("node-fetch");
const Politician = require("../models/politiciansModel");

const getImage = require("../utils/getImage");

const searchBy = async (req, res, next) => {
  let query = req.params.query;
  name = query.replace(/\b\w/g, l => l.toUpperCase());

  const politician = await Politician.findOne({
    name
  });
  if (politician) {
    getData(politician.name).then(media => {
      res.render("profile.hbs", { politician, articles: media.articles });
      console.log(politician);
    });
  } else {
    try {
      const politician = await Politician.findOne({
        area: query.toUpperCase()
      });
      if (politician) {
        getData(politician.name).then(media => {
          res.render("profile.hbs", { politician, articles: media.articles });
        });
      } else return res.status(200).send("Be precise when you're naming area");
    } catch (error) {
      return res.status(400).send("No such politician found");
    }
  }

  next();
};

const getData = async name => {
  let media = await fetch(
    "https://newsapi.org/v2/everything?q=" +
      name +
      "&apiKey=c56342e38b764faa9a491db2132bc3e6&pageSize=10"
  );
  media = await media.json();

  return media;
};

module.exports = searchBy;
