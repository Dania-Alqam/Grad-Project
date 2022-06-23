var PostModel = require("../Model/PostModel");

var AddPost = async function (Content,studentID) {
  var d = new Date();
  var postDate = d.getFullYear()+"-"+d.getMonth()+"-"+d.getDay();
  var postTime = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
  var success = await PostModel.AddPost(Content, postDate, postTime, studentID);
  if (success == false) {
    return {
      Added: false,
    };
  }
  else 
  return  {
      Added: true
  }
};

var DeletePost = async function(StudentID, PostID) {
  // ... 
  // If (student.ID==StudentID) 
 PostModel.deletePost(studentID, postID);
  // ... 
}
var getNotApprovedPosts = async function(adminID) {
var posts = await PostModel.getAllPostsNotApprovedByAdminID(adminID);
return posts;
}

var ApprovePost = async function(adminID, postID) {
var status = await PostModel.approve(adminID,postID);
return status;
}
module.exports = {
  AddPost: AddPost,
  DeletePost: DeletePost,
  getNotApprovedPosts: getNotApprovedPosts,
  ApprovePost: ApprovePost
};


