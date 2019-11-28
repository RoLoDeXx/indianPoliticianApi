const express = require("express");
const getImage = require("../utils/getImage");
const Politician = require("../models/politiciansModel");
const politicsData = require("../utils/data.json");

const searchBy = require("../middlewares/searchBy");
const search = require("../middlewares/search");
const compare = require("../middlewares/compare");
const ddCompare = require("../middlewares/ddCompare");

const router = new express.Router();

router.get("/", (req, res) => {
  res.render("home.hbs");
});

router.get("/build", (req, res) => {
  politicsData.forEach(element => {
    const politicsEl = new Politician(element);
    politicsEl
      .save()
      .then(() => {
        console.log("db mai save ho gaye honge");
      })
      .catch(e => {
        console.log(e) + "something fucked up";
      });
  });
});

router.get("/disclaimer", (req, res) => {
  res.render("disclaimer.hbs");
});

router.get("/politicians/search", search, async (req, res) => {});

router.get("/politicians/compare", ddCompare, (req, res) => {});

router.get("/politicians/:query", searchBy, async (req, res) => {});

router.get("/politicians/compare/:a/:b", compare, async (req, res) => {});

router.get("/politicians", (req, res) => {
  res.render("error");
});

module.exports = router;
