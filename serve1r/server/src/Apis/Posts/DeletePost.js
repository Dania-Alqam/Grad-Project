var jwt = require("jsonwebtoken");
var secrets = require("../../Config/Secrets");

var PostService =  require("../../Services/PostService");
module.exports = function (app) {
    
  
  app.post("/api/Posts/Add", (req, res) => {
    if (req.body.studentID != null && req.body.postID!= null) {
       status =  PostService.DeletePost(req.body.studentID, req.body.postID);
       if (status==true) {
           res.status(200).json({message:"Post Deleted Successfully"})
       }
    }
  }); 
}

