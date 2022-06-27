var Executor = require("./queryWorkshop");

AddReview = async function (
  attendence,
  studyagain,
  rating,
  opinion,
  profID,
  courseID,
  studentID,
  diffLevel
) {
  var query =
    "INSERT INTO review (`attendence`, `studyagain`, `rating`, `opinion`, `profID`, `courseID`, `studentID`, `difficultyLevel`) VALUES ('" +
    attendence +
    "', '" +
    studyagain +
    "', '" +
    rating +
    "', '" +
    opinion +
    "', '" +
    profID +
    "', '" +
    courseID +
    "', '" +
    studentID +
    "', '" +
    diffLevel +
    "')";
  await Executor.execute(query);
};
getReviewForProfessor = async function (profID) {
  var query = "Select rating from review WHERE profID='" + profID + "'";
  var result = await Executor.execute(query);
  var query2 =
    "Select profName from professorprofile WHERE profID='" + profID + "'";
//   var name = await Executor.execute(query2)[0].profName;
   var res2 = await Executor.execute(query2);
   var name=res2[0].profName
// console.log(await Executor.execute(query2)[0])
console.log(res2)
console.log(name)
  var sum = 0;
  var count = 0;
  var stars5 = 0,
    stars4 = 0,
    stars3 = 0,
    stars2 = 0,
    stars1 = 0;
  for (i = 0; i < result.length; i++) {
    sum += result[i].rating;
    if (result[i].rating == 5) {
      stars5++;
    } else if (result[i].rating == 4) {
      stars4++;
    } else if (result[i].rating == 3) {
      stars3++;
    } else if (result[i].rating == 2) {
      stars2++;
    } else if (result[i].rating == 1) {
      stars1++;
    }
    count++;
  }
  if (count == 0) {
    return {
      status: false,
    };
  } else {
    var avg = sum / count;
    console.log(avg);
    return {
      status: true,
      avg: avg,
      stars5: stars5,
      stars4: stars4,
      stars3: stars3,
      stars2: stars2,
      stars1: stars1,
      count: count,
      name:name
    };
  }
};

var getSummary = async function (profID) {
  var query =
    "Select attendence, studyagain, difficultyLevel, opinion from review where profID = '" +
    profID +
    "'";
  var result = await Executor.execute(query);
  count = 0;
  (diff1 = 0), (diff2 = 0), (diff3 = 0), (diff4 = 0), (diff5 = 0);
  var attendence = 0,
    notattendence = 0,
    studyagain = 0,
    notstudyagain = 0;
  opinions = new Array();
  for (i = 0; i < result.length; i++) {
    if (result[i].difficultyLevel == 1) {
      diff1++;
    } else if (result[i].difficultyLevel == 2) {
      diff2++;
    } else if (result[i].difficultyLevel == 3) {
      diff3++;
    } else if (result[i].difficultyLevel == 4) {
      diff4++;
    } else if (result[i].difficultyLevel == 5) {
      diff5++;
    }
    if (result[i].attendence == 1) attendence++;
    if (result[i].studyagain == 1) studyagain++;

    opinions.push(result[i].opinion);
    count++;
  }
  if (count == 0) {
    return {
      status: false,
    };
  }
  var attendencePercent = Math.round(attendence / count);
  attendencePercent = attendencePercent * 100;
  notAttendencePercent = 100 - attendencePercent;
  var studyagainPercent = Math.round(studyagain / count);
  studyagainPercent = studyagainPercent * 100;
  notstudyagainPercent = 100 - studyagainPercent;

  return {
    status: true,
    opinions: opinions,
    attendencePercent: attendencePercent,
    notAttendencePercent: notAttendencePercent,
    studyagainPercent: studyagainPercent,
    notstudyagainPercent: notstudyagainPercent,
    diff1: diff1,
    diff2: diff2,
    diff3: diff3,
    diff4: diff4,
    diff5: diff5,
  };
};
module.exports = {
  AddReview: AddReview,
  getReviewForProfessor: getReviewForProfessor,
  getSummary: getSummary,
};
