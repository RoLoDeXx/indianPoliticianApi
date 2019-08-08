const express = require("express");
const bodyParser = require("body-parser");
require("./db/db");

const politicansRouter = require("./routes/politicians");
const app = express();

app.use(bodyParser.json());
app.use(politicansRouter);
app.use(express.json());
app.listen(process.env.PORT, () => {
  console.log("server started on PORT", process.env.PORT);
});
