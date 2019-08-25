const express = require("express");

const Politician = require("../models/politiciansModel");
const searchBy = require("../middlewares/searchBy");

const router = new express.Router();

router.get("/politicians/:query", searchBy, async (req, res) => {});

router.get("/politicians/compare/:a/:b", async (req, res) => {
  let candidateA = req.params.a;
  let candidateB = req.params.b;

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

module.exports = router;
