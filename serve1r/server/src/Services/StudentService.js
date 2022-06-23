var StudentModel = require("../Model/StudentModel");

// GetStudent = async function () {
//   student = await StudentModel.viewStudentInfo();
//   return student;
// };

GetProf = async function () {
  prof = await StudentModel.viewProfInfo();
  return prof
  ;
};

 getStudentInfo = async function (id) {
  return await StudentModel.getStudentById(id);
};

module.exports = {
  getStudentInfo: getStudentInfo,
  GetProf: GetProf,
};
