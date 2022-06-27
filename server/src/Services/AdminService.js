var AdminModel = require("../Model/AdminModel");

AddProf = async function (
  adminID,  
  profName,
  officeID,
  contactInfo,
  depName,
  profImage,
  officePlace
) {
  newProf = {
    adminID:adminID,
    profName: profName, officeID: officeID,contactInfo: contactInfo,
    depName: depName,
    profImage: profImage,
    officePlace: officePlace,
  };
  created = await AdminModel.AddProfByAdmin(newProf);
  if (created == true) {
    return {
      Created: true,
      message: "Prof Added Successfully",
    };
  } else {
    return {
      Created: false,
      message: "Prof already Exists",
    };
  }
};

module.exports = {
  AddProf: AddProf,
};
