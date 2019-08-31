const express = require("express");

const Politician = require("../models/politiciansModel");
const searchBy = require("../middlewares/searchBy");

const router = new express.Router();

router.get("/", async (req, res) => {
  res.send("home page will come here");
});

router.get("/politicians", async (req, res) => {
  res.send("politician search will come here");
});

router.get("/politicians/compare", async (req, res) => {
  res.send("compare search will come here");
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
      return res.status(404).send("Politicians not found");

    res
      .send({
        politicianA,
        politicianB
      })
      .status(200);
  } catch (e) {
    res.status(400).send("politicans not found");
  }
});

router.get("/*", async (req, res) => {
  res.render("404");
});
module.exports = router;
