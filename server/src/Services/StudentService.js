var StudentModel = require("../Model/StudentModel");


var getStudentInfo = async function(id) {
return await StudentModel.getStudentById(id);

}

var GetProf = async function () {
    prof = await StudentModel.viewProfInfo();
    return prof
    ;
  };
  

module.exports = {
    getStudentInfo: getStudentInfo,
    GetProf: GetProf,


}