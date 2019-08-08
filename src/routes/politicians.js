const express = require("express");
const politicsData = require("../files/data.json");
const Politician = require("../models/politiciansModel");
const router = new express.Router();
router.post("/politicans", (req, res) => {
  res.status(200).send(politicsData);

  politicsData.forEach(element => {
    const politicsEl = new Politician(element);
    politicsEl.save().catch(e => {
      e;
    });
  });
});

//add data by politican name
router.post("/politicans/add", async (req, res) => {
  const politicsArr = new Politician(req.body);

  try {
    await politics.save();
    res.status(201).send(politics);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/politicans/:name", async (req, res) => {
  const name = req.params.name;
  try {
    const politican = await Politician.findOne({
      name
    });
    res.status(200).send(politican);
  } catch (error) {}
});

//get data by district name
routers.get;

module.exports = router;
