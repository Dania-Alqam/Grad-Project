const { user } = require("../Config/dbconfig");
var Executor = require("./queryWorkshop");

AddProfByAdmin = async function (Prof) {
    console.log(Prof);
    query =
      "INSERT INTO professorprofile (profName,officeID,contactInfo,depName,profImage,officePlace,adminID) VALUES ('" +
      Prof.profName +
      "','" +
      Prof.officeID +
      "','" +
      Prof.contactInfo +
      "','" +
      Prof.depName +
      "','" +
      Prof.profImage +
      "','" +
      Prof.officePlace +
      "','"+
      Prof.adminID+
      "')";
    console.log(query);
    await Executor.execute(query);
    return true;
};

module.exports = {
    AddProfByAdmin: AddProfByAdmin,
};
