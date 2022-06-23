var jwt = require("jsonwebtoken");
var secrets = require("../../Config/Secrets");

var PostService =  require("../../Services/PostService");
module.exports = function (app) {
    
  
  app.post("/api/Posts/Add", (req, res) => {
    var content = req.body.content;
    var date = new Date().getDate();
    var time = new Date().getTime();
    if (req.cookies.access_token == null) res.sendStatus(401);
    else {
      var decoded = jwt.verify(req.cookies.access_token, secrets.SecretKey);
      var studentID = decoded.ID;
     var status =  PostService.AddPost(content,date,time,studentID);
     if (status.Added==true)
     res.sendStatus(201)
     else 
     res.sendStatus(400);
    }
  }); 
}

