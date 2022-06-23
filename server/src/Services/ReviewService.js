var ReviewModel = require("../Model/ReviewModel");

var AddReview = async function(attendence,studyagain,rating,opinion,profID,courseID,studentID,diffLevel) {
    await ReviewModel.AddReview(attendence,studyagain,rating,opinion,profID,courseID,studentID,diffLevel);
}

module.exports = {
    AddReview: AddReview,
}