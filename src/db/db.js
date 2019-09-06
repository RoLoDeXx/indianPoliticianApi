const mongoose = require("mongoose");
const urlDB = process.env.MONGODB_URL;
mongoose.connect(urlDB, {
  useNewUrlParser: true,
  useCreateIndex: true
});
