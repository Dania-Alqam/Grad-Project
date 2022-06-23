var PostModel = require("../Model/PostModel");

var AddPost = async function (Content, Date, Time, studentID) {
  var success = await PostModel.AddPost(Content, Date, Time, studentID);
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
module.exports = {
  AddPost: AddPost,
  DeletePost: DeletePost
};


