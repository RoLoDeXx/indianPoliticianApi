const mongoose = require("mongoose");
const urlDB = "mongodb://127.0.0.1:27017/politics-data-api";
mongoose.connect(urlDB, {
  useNewUrlParser: true,
  useCreateIndex: true
});
