const express = require("express");
const bodyParser = require("body-parser");
const hbs = require("hbs");
const path = require("path");
require("./db/db");

const politicansRouter = require("./routes/politicians");
const app = express();

app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "../templates/partials"));
app.set("views", path.join(__dirname, "../templates/views"));
app.use(express.static(path.join(__dirname, "../public")));
app.use(bodyParser.json());
app.use(politicansRouter);
app.use(express.json());
app.listen(process.env.PORT, () => {
  console.log("server started on PORT", process.env.PORT);
});
