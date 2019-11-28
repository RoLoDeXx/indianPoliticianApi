const Twitter = require("twitter");

const getTweets = async query => {
  let client = new Twitter({
    consumer_key: "LIZrSYRSiOjOovADzTlzOBQkR",
    consumer_secret: "l0SoiPs0dsRPEOlW6B79LaxG012VgStrPkfJYA1SyPrQJYIzv0",
    access_token_key: "1197219634182668288-pMdZM87ZTUgtwpNSPcLnD2nLOjp5T8",
    access_token_secret: "3MsgcNfXxWCoOCdvc5tFoNOeesjTUWofARQ1lYzeJsC7t"
  });

  let params = {
    q: query,
    count: 10,
    result_type: "recent",
    lang: "en"
  };
  await client.get("search/tweets", params, (err, data, response) => {
    if (!err) {
      console.log(data);
      return data;
    } else {
      console.log(err);
    }
  });
};

let a = getTweets("hell");
console.log(a);

module.exports = getTweets;
