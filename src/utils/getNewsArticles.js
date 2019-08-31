const fetch = require("node-fetch");

const getNewsArticles = async name => {
  let media = await fetch(
    "https://newsapi.org/v2/everything?q=" +
      name +
      "&apiKey=c56342e38b764faa9a491db2132bc3e6&pageSize=10"
  );
  media = await media.json();
  // media.articles.forEach(news => {
  //   news = news.content.slice(0, 10);
  // });

  return media;
};

module.exports = getNewsArticles;
