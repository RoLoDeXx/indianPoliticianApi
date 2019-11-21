const express = require("express");
const getImage = require("../utils/getImage");
const Politician = require("../models/politiciansModel");
const searchBy = require("../middlewares/searchBy");
const search = require("../middlewares/search");
const compare = require("../middlewares/compare");
const politicsData = require("../utils/data.json");

const router = new express.Router();

router.get("/", async (req, res) => {
  res.render("home.hbs");
});

// router.get("/build", (req, res) => {
//   politicsData.forEach(element => {
//     const politicsEl = new Politician(element);
//     politicsEl
//       .save()
//       .then(() => {
//         console.log("db mai save ho gaye honge");
//       })
//       .catch(e => {
//         console.log(e) + "something fucked up";
//       });
//   });
// });

router.get("/politicians/search", search, async (req, res) => {});

router.get("/politicians/compare", async (req, res) => {
  res.send("compare search will come here");
});

router.get("/politicians/:query", searchBy, async (req, res) => {});

router.get("/politicians/compare/:a/:b", compare, async (req, res) => {});

module.exports = router;
