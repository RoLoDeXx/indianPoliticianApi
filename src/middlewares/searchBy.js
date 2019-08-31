const Politician = require("../models/politiciansModel");

const getNewsArticles = require("../utils/getNewsArticles");
const getImage = require("../utils/getImage");

const searchBy = async (req, res, next) => {
  let query = req.params.query;
  name = query.replace(/\b\w/g, l => l.toUpperCase());

  const politician = await Politician.findOne({
    name
  });
  if (politician) {
    let politicianImage = await getImage(politician.name);

    getNewsArticles(politician.name).then(media => {
      res.render("profile.hbs", {
        politician,
        articles: media.articles,
        politicianImage
      });
      // console.log(politician);
    });
  } else {
    try {
      const politician = await Politician.findOne({
        area: query.toUpperCase()
      });
      if (politician) {
        let politicianImage = await getImage(politician.name);
        getNewsArticles(politician.name).then(media => {
          res.render("profile.hbs", {
            politician,
            articles: media.articles,
            politicianImage
          });
        });
      } else
        return res.render("404.hbs", {
          message: "Politician not found"
        });
    } catch (error) {
      return res.render("404.hbs", {
        message: "Politician not found"
      });
    }
  }

  next();
};

module.exports = searchBy;
