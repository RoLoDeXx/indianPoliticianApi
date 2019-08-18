const Politician = require("../models/politiciansModel");
const fetch = require("node-fetch");

const searchBy = async (req, res, next) => {
  let query = req.params.query;
  const politician = await Politician.findOne({
    name: query.charAt(0).toUpperCase() + query.slice(1)
  });
  // res.status(200).send(politician);
  if (politician) {
    getData(politician.name).then(media => {
      // console.log(media.articles);
      res.render("profile.hbs", { politician, articles: media.articles });
      // console.log(politician);
    });
  } else {
    try {
      const politician = await Politician.findOne({
        area: query.toUpperCase()
      });
      if (politician) {
        getData(politician.name).then(media => {
          // console.log(media.articles);
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
