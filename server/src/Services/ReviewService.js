var ReviewModel = require("../Model/ReviewModel");

var AddReview = async function(attendence,studyagain,rating,opinion,profID,courseID,studentID,diffLevel) {
    await ReviewModel.AddReview(attendence,studyagain,rating,opinion,profID,courseID,studentID,diffLevel);
}
var getReviewForProfessorByID = async function (profID) {
    var result = await ReviewModel.getReviewForProfessor(profID);
    return result;
}
var getReviewSummaryForProfessorByID = async function(profID){
    var result = await ReviewModel.getSummary(profID);
    return result;
}
module.exports = 
{
    AddReview: AddReview,
    getReviewForProfessorByID: getReviewForProfessorByID,
    getReviewSummaryForProfessorByID: getReviewSummaryForProfessorByID,
}