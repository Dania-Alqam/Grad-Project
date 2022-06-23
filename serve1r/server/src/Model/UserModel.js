const { user } = require("../Config/dbconfig");
var Executor = require("./queryWorkshop");

findUserByEmail = async function (Email) {
  result = await Executor.execute(
    "Select * from student where Semail = '" + Email + "'"
  );
  return result[0];
};

findAdminByEmail = async function (Email) {
  result = await Executor.execute(
    "Select * from admin where Email = '" + Email + "'"
  );
  return result[0];
};


GetDepartment = async function () {
  result = await Executor.execute("SELECT depName FROM department");
   if(result==null){
    return "There is no department to select"
   }
   else {
    return result; 
   }
};

GetFOI = async function () {
  result = await Executor.execute("SELECT FName FROM fieldofinterest");
   if(result==null){
    return "There is no FOI to select"
   }
   else {
    return result; 
   }
};


Save = async function(User) {
  result = await Executor.execute("Select * from student where Semail = '"+User.email+"'")
  if (result.length>0) {
    return false;
  }
  else {
    console.log(User); 
    query = "INSERT INTO student (Sfirst_name, Slast_name, Semail, Spassword, universityID, depName,image) VALUES ('"+User.firstname+"','"+User.lastname+"','"+User.email+"','"+User.password+"','"+User.uid+"','"+"cs"+"','"+User.image+"')";
    console.log(query);
    await Executor.execute(query);
    return true;
  }
}


module.exports = {
  findUserByEmail: findUserByEmail,
  findAdminByEmail: findAdminByEmail,
  Save: Save,
  GetDepartment: GetDepartment,
  GetFOI:GetFOI,
};
