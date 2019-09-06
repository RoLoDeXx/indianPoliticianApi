const express = require("express");
const getImage = require("../utils/getImage");
const Politician = require("../models/politiciansModel");
const searchBy = require("../middlewares/searchBy");

const politicsData = require("../utils/data.json");

const router = new express.Router();

router.get("/", async (req, res) => {
  res.send("home page will come here");
});

router.get("/politicians", async (req, res) => {
  res.render("search");
});

router.get("/politicians/compare", async (req, res) => {
  res.send("compare search will come here");
});

router.get("/build", (req, res) => {
  console.log("on build");
  res.status(200).send(politicsData);

  politicsData.forEach(element => {
    const politicsEl = new Politician(element);
    politicsEl.save().catch(e => {
      e;
    });
  });
});

router.get("/politicians/:query", searchBy, async (req, res) => {});

router.get("/politicians/compare/:a/:b", async (req, res) => {
  let candidateA = req.params.a;
  let candidateB = req.params.b;
  candidateA = candidateA.toLowerCase();
  candidateB = candidateB.toLowerCase();

  candidateA = candidateA.replace(/\b\w/g, l => l.toUpperCase());
  candidateB = candidateB.replace(/\b\w/g, l => l.toUpperCase());

  try {
    let politicianA = await Politician.findOne({
      name: candidateA
    });

    let politicianB = await Politician.findOne({
      name: candidateB
    });

    if (politicianA === null || politicianB === null)
      return res.render("404", {
        message: "Two politicians are required"
      });

    let politicianAImage = await getImage(politicianA.name);
    let politicianBImage = await getImage(politicianB.name);

    res.render("compare.hbs", {
      politicianA,
      politicianB,
      politicianAImage,
      politicianBImage
    });
  } catch (e) {
    res.status(400).send("politicans not found");
  }
});

// router.get("/*", async (req, res) => {
//   res.render("404", {
//     message: "Page not found"
//   });
// });
module.exports = router;
