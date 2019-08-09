const express = require("express");

const politicsData = require("../files/data.json");
const Politician = require("../models/politiciansModel");
const searchBy = require("../middlewares/searchBy");

const router = new express.Router();
router.post("/politicians", (req, res) => {
  res.status(200).send(politicsData);

  politicsData.forEach(element => {
    const politicsEl = new Politician(element);
    politicsEl.save().catch(e => {
      e;
    });
  });
});

//add data by politician name
router.post("/politicians/add", async (req, res) => {
  const politicsArr = new Politician(req.body);

  try {
    await politics.save();
    res.status(201).send(politics);
  } catch (e) {
    res.status(400).send(e);
  }
});
router.get("/politicians/name/:name", searchBy, async (req, res) => {});

router.get("/politicians/area/:area", searchBy, async (req, res) => {});

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
