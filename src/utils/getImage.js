const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

const getImage = query => {
  const url =
    "https://www.google.com/search?as_st=y&tbm=isch&hl=en&as_q=" +
    query +
    "&as_epq=&as_oq=&as_eq=&cr=&as_sitesearch=&safe=images&tbs=iar:s";

  request(url, (error, response, html) => {
    if (!error && response.statusCode === 200) {
      const $ = cheerio.load(html);
      let imgs = $("img").each((i, el) => {
        console.log($(el).attr("src") + "\n");
      });
    }
  });
};

getImage("amit shah");
