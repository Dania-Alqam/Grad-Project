var jwt = require("jsonwebtoken");
var secrets = require("../../Config/Secrets");

var PostService =  require("../../Services/PostService");
module.exports = function (app) {
    
  
  app.post("/api/Posts/Add", async (req, res) => {
    var content = req.body.content;
    if (req.body.access_token == null) res.sendStatus(401);
    else {
      var decoded = jwt.verify(req.body.access_token, secrets.SecretKey);
      var studentID = decoded.ID;
     var status =  await PostService.AddPost(content,studentID);
     if (status.Added==true)
     res.sendStatus(201).json({ message: "Post Added Successfully",access_token: decoded });

     else 
     res.sendStatus(400);
    }
  }); 
}

