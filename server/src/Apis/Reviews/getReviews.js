var jwt = require("jsonwebtoken");
var secrets = require("../../Config/Secrets");

var ReviewService = require("../../Services/ReviewService");
module.exports = function (app) {
   
 app.get("/profs/:profID/getReview", async (req,res) => {
    var profID = req.params.profID;
    var result = await ReviewService.getReviewForProfessorByID(profID);
    console.log(result);
    res.send(result);
 });

 app.get("/profs/:profID/getReviewSummary", async (req,res) => {
 var profID = req.params.profID;
 var result = await ReviewService.getReviewSummaryForProfessorByID(profID);
 res.send(result);
 })
}

