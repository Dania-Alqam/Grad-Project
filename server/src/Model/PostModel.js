var Executor = require("./queryWorkshop");

AddPost = async function(Content, Date, Time, studentID) {

var res1 = await Executor.execute("SELECT depName from student where studentID = '"+studentID+"'");
var depName = res1[0].depName;
var res2 = await Executor.execute("Select adminID from admin where depName = '"+depName+"'");
var adminID = res2[0].adminID;
await Executor.execute("INSERT INTO POST (`Content`,`Date`,`Time`,`studentID`,`adminID`) VALUES ('"+Content+"','"+ Date+"','"+Time+"','"+ studentID+"','"+adminID+ "')");
return true;

} 
deletePost = async function(studentID, postID) {
    status = Executor.execute("");
    return status;
}

getAllPostsNotApprovedByAdminID = async function(adminID){
var result = await Executor.execute("Select content, time, date, attachment from post where adminID = '"+adminID+"' AND approved = '0'");
var Posts = []
for (i = 0;i<result.length;i++) {
  element = result[i]
  post = {
    content: element.content,
    time: element.time,
    date: element.date,
    attachment: element.attachment,
  };
  Posts.push(post);
}
console.log(Posts);
return Posts;
}
approve = async function(adminID, postID) {
  var result = await Executor.execute("Select adminID, approved from post where postID = '"+postID+"'");
  if (!result[0]){
    return {
      status: -1,
      message: "Post doesn't exist"
    }
  }
  if (result[0].adminID == adminID) {
    if (result[0].approved==1) {
      return {
        status: -1,
        message: "Post Already Approved"
      }
    }
    await Executor.execute("Update post SET approved = '1' where postID = '"+postID+"'");
    return {
      status: 1,
      message: "Post Approved"
    }
  }
  else {
    return {
      status: 0,
      message: "Not Authorized For This Post"
    }
  }
}
module.exports = {
    AddPost: AddPost,
    deletePost: deletePost,
    getAllPostsNotApprovedByAdminID: getAllPostsNotApprovedByAdminID,
    approve: approve

};