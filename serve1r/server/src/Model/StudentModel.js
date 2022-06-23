const { user } = require("../Config/dbconfig");
var Executor = require("./queryWorkshop");

// viewStudentInfo = async function () {
//   result = await Executor.execute(
//     "Select * from student",
//   );
//   return result;
// };

viewProfInfo = async function () {
    result = await Executor.execute(
      "SELECT * FROM `professorprofile`",
    );
    return result;
  };


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
module.exports = {
  getStudentById: getStudentById,
    viewProfInfo:viewProfInfo,
};
