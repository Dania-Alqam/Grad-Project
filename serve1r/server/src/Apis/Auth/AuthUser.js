var Authenticator = require("../../Services/AuthService");
var jwt = require("jsonwebtoken");
var secrets = require("../../Config/Secrets");

module.exports = function (app) {

  app.post("/api/auth/student", async (req, res) => {
    if (req.body.Email == null || req.body.Password == null) {
      res.sendStatus(400);
      return;
    }
    var result = await Authenticator.AuthUser(
      req.body.Email,
      req.body.Password
    );

    if (result.found == true && result.Authenticated) {
      var token = jwt.sign({ ID: result.ID, role: "s" }, secrets.SecretKey);
      res
        .cookie("access_token", token)
        .status(200)
        .json({ message: "Logged In Successfully" });
        
    } else if(result.found==false){
      res.status(401).json({ messages: "Wrong Email Or Password" });
    }
  });

  app.post("/api/auth/admin", async (req, res) => {
    if (req.body.Email == null || req.body.Password == null) {
      res.sendStatus(400);
    }
    var result = await Authenticator.AuthAdmin(
      req.body.Email,
      req.body.Password
    );
    if (result.found == true && result.Authenticated) {
      var token = jwt.sign({ ID: result.ID, role: "a" }, secrets.SecretKey);
      res
        .cookie("access_token", token)
        .status(200)
        .json({ message: "Admin Logged In Successfully" });
    } else {
      res.status(401).json({ messages: "Wrong Email Or Password" });
    }
  });
  
};
