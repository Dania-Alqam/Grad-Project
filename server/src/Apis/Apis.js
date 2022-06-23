module.exports = function(app) {
require("./Auth/AuthUser")(app);
require("./Auth/Authorize")(app);
require("./Auth/logout")(app);
require("./Posts/AddPost")(app);
require("./Posts/DeletePost")(app)
require("./User/Create")(app);
require("./Student/StudentInfo")(app);
require("./Posts/Posts")(app);
require("./Posts/approvePost")(app);
require("./Reviews/addReview")(app);
require("./images/imgs")(app);

}