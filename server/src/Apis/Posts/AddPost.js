var jwt = require("jsonwebtoken");
var secrets = require("../../Config/Secrets");

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "public_html", "uploads"),
  filename: function (req, file, cb) {
    // null as first argument means no error
    cb(null, Date.now() + "-" + file.originalname);
  },
});

var PostService = require("../../Services/PostService");

module.exports = function (app) {
  app.post("/api/Posts/Add", async (req, res) => {
    try {
      let upload = multer({ storage: storage }).single("avatar");
      upload(req, res, async function (err) {
        var content = req.body.content;

        if (!req.file) {
          return res.send("Please select an image to upload");
        } else if (err instanceof multer.MulterError) {
          return res.send(err);
        } else if (err) {
          return res.send(err);
        }
        const postImage = req.file.filename;

        console.log(req.body);
        console.log(req.body.content);
        console.log(req.body.studentID);
        if (req.body.access_token == null) {
          res.sendStatus(401);
          return;
        } else {
          var decoded = jwt.verify(req.body.access_token, secrets.SecretKey);
          var studentID = decoded.ID;
          var status = await PostService.AddPost(content, studentID,postImage);
          if (status.Added == true) 
          res.sendStatus(201);
          else res.sendStatus(400);
        }
      });
    } catch (err) {
      console.log(err);
    }
  });
};
