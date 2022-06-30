var StudentModel = require("../Model/StudentModel");


var getStudentInfo = async function(id) {
return await StudentModel.getStudentById(id);

}

var GetProf = async function () {
    prof = await StudentModel.viewProfInfo();
    return prof
    ;
  };
  
  
var getcourses = async function (profID) {
 var course = await StudentModel.getcourses(profID);
  return course;
};



module.exports = {
    getStudentInfo: getStudentInfo,
    GetProf: GetProf,
    getcourses:getcourses,


}