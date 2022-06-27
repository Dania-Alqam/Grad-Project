var jwt = require("jsonwebtoken");
var secrets = require("../../Config/Secrets");

var AdminService = require("../../Services/AdminService");


const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "public_html", "uploads"),
  filename: function (req, file, cb) {
    // null as first argument means no error
    cb(null, Date.now() + "-" + file.originalname);
  },
});

module.exports = function (app) {
  app.post("/admin/AdminProf", async (req, res) => {
    console.log("***********************************")
    console.log(req.body)

    try {
      let upload = multer({ storage: storage }).single("avatar");
      upload(req, res, async function (err) {
        const profName = req.body.profName;
        const officeID = req.body.officeID;
        const depName = req.body.depName;
        const contactInfo = req.body.contactInfo;
        const officePlace = req.body.officePlace;

        if (!req.file) {
          return res.send("Please select an image to upload");
        } else if (err instanceof multer.MulterError) {
          return res.send(err);
        } else if (err) {
          return res.send(err);
        }
        const profImage = req.file.filename;
        if (req.body.admin_access_token == null) {   
          res.sendStatus(401);
          return;
        } else {
          var decoded = jwt.verify(req.body.admin_access_token, secrets.SecretKey);
          var adminID = decoded.ID;
          result = await AdminService.AddProf(
            adminID,
            profName, officeID, contactInfo, depName, profImage, officePlace
          );

          if (result.Created) {
            res.status(201).json({ message: result.message });
          } else {
            res.status(400).json({ message: result.message });
          }
        }
      });
    } catch (err) {
      console.log(err);
    }
  });
};
