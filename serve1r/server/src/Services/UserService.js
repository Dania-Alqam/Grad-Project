var UserModel = require("../Model/UserModel");

AddUser =async function (
  firstname,
  lastname,
  email,
  password,
  repassword,
  uid,
  depName,image
) {
  if (password != repassword) {
    return {
      Created: false,
      message: "Passwords are not matching",
    };
  }
  //check if email and uniId already exits
  newUser = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password,
    repassword: repassword,
    uid: uid,
    depName: depName,
    image:image,
  };
  created =await UserModel.Save(newUser);
  if (created == true) {
    return {
      Created: true,
      message: "User Added Successfully",
    };
  } else {
    return {
      Created: false,
      message: "User Already Exists",
    };
  }
};

GetDepartment = async function () {
  departments = await UserModel.GetDepartment();
  return departments;
};

GetFOI = async function () {
  FOI = await UserModel.GetFOI();
  return FOI;
};

module.exports = {
  AddUser: AddUser,
  GetDepartment: GetDepartment,
  GetFOI: GetFOI,
};
