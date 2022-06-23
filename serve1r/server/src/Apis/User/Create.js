UserSerivce = require("../../Services/UserService");
 StudentSerivce = require("../../Services/StudentService");


module.exports = function (app) {

  // app.post("/register", async (req, res) => {
  //   const Sfirst_name = req.body.Sfirst_name;
  //   const Slast_name = req.body.Slast_name;
  //   const Semail = req.body.Semail;
  //   const Spassword = req.body.Spassword;
  //   const universityID = req.body.universityID;
  //   const depName = req.body.depName;
  //   const rePassword = req.body.rePassword;

  //   result = await UserSerivce.AddUser(
  //     Sfirst_name,
  //     Slast_name,
  //     Semail,
  //     Spassword,
  //     rePassword,
  //     universityID,
  //     depName
  //   );
  //   if (result.Created) {
  //     res.status(201).json({ message: result.message });
  //   } else {
  //     res.status(400).json({ message: result.message });
  //   }
  // });

const multer = require("multer");
const path = require("path");
var express = require("express");

 app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "static")));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));


const storage = multer.diskStorage({
  destination: path.join(__dirname, "public_html", "uploads"),
  filename: function (req, file, cb) {
    // null as first argument means no error
    cb(null, Date.now() + "-" + file.originalname);
  },
});

app.use("/uploads", express.static(path.join(__dirname, "uploads")));


app.post("/register", async (req, res) => {
    try {
       let upload = multer({ storage: storage }).single("avatar");
      upload(req, res,async function (err) {
        console.log(req.body.image);
        const Sfirst_name = req.body.Sfirst_name;
        const Slast_name = req.body.Slast_name;
        const Semail = req.body.Semail;
        const Spassword = req.body.Spassword;
        const universityID = req.body.universityID;
        const depName = req.body.depName;
        const rePassword = req.body.rePassword;

       if (!req.file) {
          return res.send("Please select an image to upload");
        } else if (err instanceof multer.MulterError) {
          return res.send(err);
        } else if (err) {
          return res.send(err);
        }      

        
      const image = req.file.filename;

/*  if (response.status === 201) {
            setSuccess("Image upload successfully");
            console.log("Image upload successfully");
          } */
        result = await UserSerivce.AddUser(
            Sfirst_name,
            Slast_name,
            Semail,
            Spassword,
            rePassword,
            universityID,
            depName, 
            image
          );
          console.log(universityID);
          console.log(image);
          if (result.Created) {
            res.status(201).json({ message: result.message });
          } else {
            res.status(400).json({ message: result.message });
          }
       
      });
    } catch (err) {
      console.log(err);
    }
  });

app.get("/fieldofinterest",async (req, res) => {
    result= await UserSerivce.GetFOI();
    res.send(result);
  });
  
 app.get("/department",async (req, res) => {
    result= await UserSerivce.GetDepartment();
    res.send(result);

  });

  app.get("/getStudent",async (req, res) => {
    result= await StudentSerivce.GetStudent();
    res.send(result);
  });

  app.get("/getProf",async (req, res) => {
    result= await StudentSerivce.GetProf();
    res.send(result);
    console.log("proffff")

  });
};
