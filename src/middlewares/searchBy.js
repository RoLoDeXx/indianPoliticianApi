const Politician = require("../models/politiciansModel");

const getVideos = require("../utils/getVideos");
const getNewsArticles = require("../utils/getNewsArticles");
const getImage = require("../utils/getImage");

const searchBy = async (req, res, next) => {
  let query = req.params.query;
  name = query.replace(/\b\w/g, l => l.toUpperCase());

  const politician = await Politician.findOne({
    name,
    year: "19"
  });

  if (politician) {
    let currPoliArea = politician.area.toLowerCase();

    const prevPolitician = await Politician.findOne({
      area: currPoliArea.replace(/\b\w/g, l => l.toUpperCase()),
      year: "9"
    });
    console.log(parseInt(politician.assets.split("Or")[0].replace(/\,/g, "")));
    console.log(prevPolitician);

    let politicianImage = await getImage(politician.name);
    let politicianVideos = await getVideos(politician.name);

    getNewsArticles(politician.name).then(media => {
      res.render("profile.hbs", {
        politician,
        articles: media.articles,
        politicianImage,
        politicianVideos,
        prevPolitician,
        politicianAssets: parseInt(
          politician.assets.split("Or")[0].replace(/\,/g, "")
        ),
        politicianLiabilities: parseInt(
          politician.liabilities.split("Or")[0].replace(/\,/g, "")
        ),
        politicianAttendance: parseInt(
          politician.Attendance.replace(/\,/g, "")
        ),
        politicianDebates: parseInt(politician.Debates.replace(/\,/g, "")),
        prevPoliticianAssets: parseInt(
          prevPolitician.assets.split("Or")[0].replace(/\,/g, "")
        ),
        prevPoliticianLiabilities: parseInt(
          prevPolitician.liabilities.split("Or")[0].replace(/\,/g, "")
        ),
        prevPoliticianAttendance: parseInt(
          prevPolitician.Attendance.replace(/\,/g, "")
        ),
        prevPoliticianDebates: parseInt(
          prevPolitician.Debates.replace(/\,/g, "")
        ),
        prevPoliticianStates: parseInt(
          prevPolitician.State_s_Private_Member_Bills_average.replace(/\,/g, "")
        ),
        politicianStates: parseInt(
          politician.State_s_Private_Member_Bills_average.replace(/\,/g, "")
        )
      });
    });
  } else {
    try {
      const politician = await Politician.findOne({
        area: query.toUpperCase(),
        year: "19"
      });

      if (politician) {
        let currPoliArea = query.toLowerCase();

        const prevPolitician = await Politician.findOne({
          area: currPoliArea.replace(/\b\w/g, l => l.toUpperCase()),
          year: "9"
        });

        let politicianImage = await getImage(politician.name);
        let politicianVideos = await getVideos(politician.name);

        getNewsArticles(politician.name).then(media => {
          res.render("profile.hbs", {
            politician,
            articles: media.articles,
            politicianImage,
            politicianVideos,
            prevPolitician,
            politicianAssets: parseInt(
              politician.assets.split("Or")[0].replace(/\,/g, "")
            ),
            politicianLiabilities: parseInt(
              politician.liabilities.split("Or")[0].replace(/\,/g, "")
            ),
            politicianAttendance: parseInt(
              politician.Attendance.replace(/\,/g, "")
            ),
            politicianDebates: parseInt(politician.Debates.replace(/\,/g, "")),
            prevPoliticianAssets: parseInt(
              prevPolitician.assets.split("Or")[0].replace(/\,/g, "")
            ),
            prevPoliticianLiabilities: parseInt(
              prevPolitician.liabilities.split("Or")[0].replace(/\,/g, "")
            ),
            prevPoliticianAttendance: parseInt(
              prevPolitician.Attendance.replace(/\,/g, "")
            ),
            prevPoliticianDebates: parseInt(
              prevPolitician.Debates.replace(/\,/g, "")
            ),
            prevPoliticianStates: parseInt(
              prevPolitician.State_s_Private_Member_Bills_average.replace(
                /\,/g,
                ""
              )
            ),
            politicianStates: parseInt(
              politician.State_s_Private_Member_Bills_average.replace(/\,/g, "")
            )
          });
        });
      } else
        return res.render("404.hbs", {
          message: "Politician not found"
        });
    } catch (error) {
      return res.render("404.hbs", {
        message: "Politician data"
      });
    }
  }

  next();
};

module.exports = searchBy;
