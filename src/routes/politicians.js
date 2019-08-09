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
router.get("/politicians/search/:area", searchBy, async (req, res) => {});

router.get("/politicians/search/:name", searchBy, async (req, res) => {});

// router.get("/politicians/");

module.exports = router;
