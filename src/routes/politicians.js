const express = require("express");
const politicsData = require("../files/data.json");
const Politician = require("../models/politiciansModel");
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
router.get("/politicians/byname/:name", async (req, res) => {
  const name = req.params.name;
  try {
    const politician = await Politician.findOne({
      name: name.charAt(0).toUpperCase() + name.slice(1)
    });
    res.status(200).send(politician);
  } catch (error) {
    res.send(400).send("No such politician found");
  }
});

//get data by district name
router.get("/politicians/byarea/:area", async (req, res) => {
  const area = req.params.area;

  try {
    const politician = await Politician.findOne({
      area: area.toUpperCase()
    });
    if (politician) return res.status(200).send(politician);
    else return res.status(200).send("Be precise when you're naming area");
  } catch (error) {
    res.send(400).send("No such politician found");
  }
});

//search by party

//search nearby

module.exports = router;
