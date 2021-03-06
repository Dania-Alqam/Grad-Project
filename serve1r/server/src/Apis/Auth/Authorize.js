var jwt = require("jsonwebtoken");
var config = require("../../Config/Secrets");

module.exports = function (app) {
  app.post("/api/authorize/admin", (req, res) => {
    if (req.cookies.access_token == null) res.sendStatus(401);
    else {
      const user = jwt.verify(req.cookies.access_token, config.SecretKey);
      if (user.role == "a") res.status(202).json("Authorized");
      else res.status(401);
    }
  });

  

  app.post("/api/authorize/student", (req, res) => {
    try {
      const user = jwt.verify(req.cookies.access_token, config.SecretKey);
      if (user.role == "s") {
        res.status(202).json("Authorized");
      } else {
        res.status(401).json("UnAuthorized");
      }
    } catch (err) {
      res.status(401).json("UnAuthorized");
    }
  });
};

