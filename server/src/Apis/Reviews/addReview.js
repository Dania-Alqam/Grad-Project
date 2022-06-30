var jwt = require("jsonwebtoken");
var secrets = require("../../Config/Secrets");

var ReviewService = require("../../Services/ReviewService");

module.exports = function (app) {
    app.post("/reviews/add", async (req, res) => {
        var attendence = req.body.attendence;
        var studyagain = req.body.studyagain;
        var rating = req.body.rating;
        var opinion = req.body.opinion;
        var profID = req.body.profID;
        var courseID = 1;
        var diffLevel = req.body.diffLevel;

        if (req.body.access_token == null) {

            res.sendStatus(401);
            return;
        } 
        var decoded = jwt.verify(req.body.access_token, secrets.SecretKey);
        var studentID = decoded.ID;
        await ReviewService.AddReview(attendence, studyagain, rating, opinion, profID, courseID, studentID, diffLevel);
        res.sendStatus(200);
    });
}