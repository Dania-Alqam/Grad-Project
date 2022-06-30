const { query } = require("express");
var Executor = require("./queryWorkshop");

var getStudentById = async function(id) {
var query = "Select * from student where studentID = '"+id+"'";
var result = await Executor.execute(query);
console.log(result);
var student = {
    id: result[0].studentID,
    fname: result[0].Sfirst_name,
    lname: result[0].Slast_name,
    email: result[0].Semail,
    DepartmentName: result[0].depName,
    imgPath: result[0].image
};
return student;
}

var viewProfInfo = async function () {
    result = await Executor.execute(
      "SELECT * FROM `professorprofile`",
    );
    return result;
  };

var getcourses = async function (profID) {
    result = await Executor.execute(
      "SELECT courseID FROM `prof2teachcourse` where profID='"+profID+ "'",
    );
    return result;
  };

module.exports = {
    getStudentById: getStudentById,
    viewProfInfo:viewProfInfo,
    getcourses:getcourses,
  
}