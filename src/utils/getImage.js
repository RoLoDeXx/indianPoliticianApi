const cheerio = require("cheerio");
const rp = require("request-promise");

const getImage = (query, cb) => {
  let options = {
    uri: `https://www.google.com/search?q=${query}&hl=en&sxsrf=ACYBGNTpTalBzlgTCPNbRT97lPgmEl_rQw:1574409517203&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiWy4PArP3lAhWTbn0KHWHACO0Q_AUoAXoECA4QAw&biw=1536&bih=792&dpr=1.25`,
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
