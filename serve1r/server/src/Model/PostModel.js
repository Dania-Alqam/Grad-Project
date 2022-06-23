const { Timelapse } = require("@mui/icons-material");
var Executor = require("./queryWorkshop");

AddPost = async function(Content, Date, Time, studentID) {
Executor.execute("INSERT INTO POST (`Content`,`Date`,`Time`,`studentID`) VALUES ('"+Content+"','"+ Date+"','"+Time+"','"+studentID+"')")
return true;

} 
deletePost = async function(studetID, postID) {
    status = Executor.execute("");
    return status;
}

module.exports = {
    AddPost: AddPost,
    deletePost: deletePost

};