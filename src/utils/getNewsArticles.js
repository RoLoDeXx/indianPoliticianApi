const fetch = require("node-fetch");

const getNewsArticles = async name => {
  let media = await fetch(
    "https://newsapi.org/v2/everything?q=" +
      name +
      "&apiKey=c56342e38b764faa9a491db2132bc3e6&pageSize=5"
  );
  media = await media.json();

  return media;
};

module.exports = getNewsArticles;
