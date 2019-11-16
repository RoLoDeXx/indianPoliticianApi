const axios = require("axios");
const fetch = require("node-fetch");
const getVideos = async query => {
  let res = await axios.get(
    `https://www.googleapis.com/youtube/v3/search?q=${query} politicis&part=snippet&maxResults=5&key=AIzaSyBYEruoAsFxYAwfyZIMgYHx1meiPHeHVik`
  );
  return res.data.items;
};

module.exports = getVideos;

// let res = await axios.get(
//   `https://www.googleapis.com/youtube/v3/search?q=${query} politicis&part=snippet&maxResults=5&key=AIzaSyDSrYs3b7R2UA5HvUSQkRQw9gG5B38sPNo`
// );