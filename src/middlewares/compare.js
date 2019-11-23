const Politician = require("../models/politiciansModel");
const getImage = require("../utils/getImage");

const compare = async (req, res, next) => {
  let candidateA = req.params.a;
  let candidateB = req.params.b;

  try {
    let politicianA = await Politician.findOne({
      name: candidateA
    });

    let politicianB = await Politician.findOne({
      name: candidateB
    });
    console.log("A", politicianA);

    console.log("B", politicianB);

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
      A_Cases: parseInt(politicianA.cases.replace(/\,/g, "")),
      A_Questions: parseInt(politicianA.Questions.replace(/\,/g, "")),
      A_Bills: parseInt(politicianA.Private_Member_Bills.replace(/\,/g, "")),

      B_Bills: parseInt(politicianB.Private_Member_Bills.replace(/\,/g, "")),

      B_Assets: parseInt(politicianB.assets.split("Or")[0].replace(/\,/g, "")),
      B_Liabilities: parseInt(
        politicianB.liabilities.split("Or")[0].replace(/\,/g, "")
      ),
      B_Attendance: parseInt(politicianB.Attendance.replace(/\,/g, "")),
      B_Debates: parseInt(politicianB.Debates.replace(/\,/g, "")),
      B_Cases: parseInt(politicianB.cases.replace(/\,/g, "")),
      B_Questions: parseInt(politicianB.Questions.replace(/\,/g, "")),

      politicianA,
      politicianB,
      politicianAImage,
      politicianBImage
    });
  } catch (e) {
    res.status(400).send("politicans not found");
    console.log(e);
  }
  next();
};

module.exports = compare;
