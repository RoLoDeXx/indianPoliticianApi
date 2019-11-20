const express = require("express");
const getImage = require("../utils/getImage");
const Politician = require("../models/politiciansModel");
const searchBy = require("../middlewares/searchBy");
const search = require("../middlewares/search");
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

router.get("/politicians/compare/:a/:b", async (req, res) => {
  let candidateA = req.params.a;
  let candidateB = req.params.b;

  try {
    let politicianA = await Politician.findOne({
      name: candidateA,
      year: "19"
    });

    let politicianB = await Politician.findOne({
      name: candidateB,
      year: "9"
    });

    console.log(politicianB);

    if (politicianA === null || politicianB === null)
      return res.render("404", {
        message: "Two politicians are required"
      });

    let politicianAImage = await getImage(politicianA.name);
    let politicianBImage = await getImage(politicianB.name);

    res.render("compare.hbs", {
      A_Assets: parseInt(politicianA.assets.split("Or")[0].replace(/\,/g, "")),
      A_Liabilities: parseInt(
        politicianA.liabilities.split("Or")[0].replace(/\,/g, "")
      ),
      A_Attendance: parseInt(politicianA.Attendance.replace(/\,/g, "")),
      A_Debates: parseInt(politicianA.Debates.replace(/\,/g, "")),
      politicianA,
      politicianB,
      politicianAImage,
      politicianBImage
    });
  } catch (e) {
    res.status(400).send("politicans not found");
    console.log(e);
  }
});

module.exports = router;
