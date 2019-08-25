const cheerio = require("cheerio");
const rp = require("request-promise");

const getImage = (query, cb) => {
  let options = {
    uri:
      "https://www.google.com/search?as_st=y&tbm=isch&hl=en&as_q=" +
      query +
      "&as_epq=&as_oq=&as_eq=&cr=&as_sitesearch=&safe=images&tbs=iar:s",
    transform: function(body) {
      return cheerio.load(body);
    }
  };

  if (query === "") return undefined;

  let link = rp(options).then($ => {
    return $("img")
      .first()
      .attr("src");
  });
  return link;
};

module.exports = getImage;
