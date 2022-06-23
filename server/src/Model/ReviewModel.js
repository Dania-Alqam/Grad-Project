const getReviews = require("../Apis/Reviews/getReviews");
var Executor = require("./queryWorkshop");


AddReview = async function(attendence,studyagain,rating,opinion,profID,courseID,studentID,diffLevel) {
    var query = "INSERT INTO review (`attendence`, `studyagain`, `rating`, `opinion`, `profID`, `courseID`, `studentID`, `difficultyLevel`) VALUES ('"+attendence+"', '"+studyagain+"', '"+rating+"', '"+opinion+"', '"+profID+"', '"+courseID+"', '"+studentID+"', '"+diffLevel+"')";
    await Executor.execute(query);
}
getReviewForProfessor = async function(profID) {
    var query = "Select rating from review WHERE profID='"+profID+"'";
    var result = await Executor.execute(query);
    var sum = 0;
    var count = 0;

    for ( i =0;i<result.length;i++) {
        sum+=result[i].rating;
        count++;
    }
    if (count==0) {

        return -1;
    }
    else{
        var avg = sum/count;
        console.log(avg);
        return avg;
    }
}


module.exports = {
    AddReview: AddReview,
}