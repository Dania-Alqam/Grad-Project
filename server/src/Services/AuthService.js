var model = require("../Model/UserModel");

var AuthUser = async function (Email, Password) {
  var user = await model.findUserByEmail(Email);
  if (user == null) {
    return {
      found: false,
    };
  } else {
    if (user.Spassword == Password) {
      return {
        found: true,
        Authenticated: true,
        ID: user.studentID,
      };
    }
    else {
      return {
        found: true,
        Authenticated: false,
      };  
    }
  }
};

var AuthAdmin = async function (Email, Password) {
  var user = await model.findAdminByEmail(Email);
  if (user == null) {
    return {
      found: false,
    };
  } else {
    if (user.admin_password == Password) {
      return {
        found: true,
        Authenticated: true,
        ID: user.adminID,
      };
    } else
      return {
        found: false,
      };
  }
};

module.exports = {
  AuthUser: AuthUser,
  AuthAdmin: AuthAdmin,
};
