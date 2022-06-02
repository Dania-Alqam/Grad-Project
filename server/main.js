var express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bodyParser = require("body-parser");
var mysql = require("mysql");
const crypto = require("crypto");

var app = express();
const path = require("path");
const multer = require("multer");

app.use(cors());
app.use(express.json());



app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "static")));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "bzusociety",
  multipleStatements: true,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.use(express.urlencoded({ extended: false }));
// connect.connectDB();

// app.get('/', (req, res) => {
// 	res.send('Hello World!')
// });
// app.post("/count",((req, res) => {
// 	res.send("Hi")
// }));

// http://localhost:3000/

app.get("/", function (request, response) {
  // Render login template
  response.sendFile(path.join(__dirname + "../src/pages/login "));
});

app.get("/fieldofinterest", (req, res) => {
  con.query("SELECT FName FROM fieldofinterest", (err, result) => {
    console.log("Doneee field ts!");
    if (err) {
      res.send({
        err: err,
      });
    }
    console.log("Doneee field of i..!");
    console.log(result);
    if (result) {
      res.send(result);
      console.log(result);
      console.log("Doneee field of interests!");
    }
  });
});

app.get("/professorPage", (req, res) => {
  con.query("SELECT * FROM `professorprofile`", (err, result) => {
    if (err) {
      res.send({
        err: err,
      });
    }
    console.log(result);
    if (result) {
      res.send(result);
      console.log(result);
      console.log("Doneee proffffffffffffffffffffffffffffffffffff!");
    }
  });
});

app.get("/department", (req, res) => {
  con.query("SELECT depName FROM department", (err, result) => {
    if (!err) {
      res.render("index", { result });
    }
    if (err) {
      res.send({
        err: err,
      });
    }

    if (result) {
      res.send(result);
      console.log(result);
      console.log("Doneee depppppp!");
    }
  });
});

// app.post("/login", (req, res) => {
//   console.log(req.body);
//   const Semail = req.body.Semail;
//   const Spassword = req.body.Spassword;
//   con.query(
//     "select * from student where Semail = ? AND Spassword= ?",
//     [Semail, Spassword],
//     (err, result) => {
//       if (err) {
//         res.send({ err: err });
//       } else {
//         if (result.length > 0) {
//           res.send(result);
//         } else {
//           res.send({ message: "wrong Email or Password" });
//         }
//       }
//     }
//   );
// });

// app.post("/register", (req, res) => {
//   const Sfirst_name = req.body.Sfirst_name;
//   const Slast_name = req.body.Slast_name;
//   const Semail = req.body.Semail;
//   const Spassword = req.body.Spassword;
//   const universityID = req.body.universityID;
//   const depName = req.body.depName;
//   const rePassword = req.body.rePassword;

//   if (rePassword == Spassword) {
//     var sql = "select * from student where Semail = ?";
//     con.query(sql, [Semail], function (err, result, fields) {
//       if (err) {
//         throw err;
//       } else if (result.length > 0) {
//         req.session.flag = 1;
//         console.log("tmmmmmmmm");
//       } else {
//         con.query(
//           "insert into student (Sfirst_name, Slast_name, Semail, Spassword, universityID, depName) VALUES (?,?,?,?,?,?)",
//           [Sfirst_name, Slast_name, Semail, Spassword, universityID, depName],
//           (err, result) => {
//             if (err) {
//               res.send({
//                 err: err,
//               });
//             }
//             if (result) {
//               res.send(result);
//               console.log("Done2424r45");
//             } else {
//               res.send({
//                 message: "Wrong Email or password ",
//               });
//             }
//           }
//         );
//       }
//     });
//   } else if (rePassword != Spassword) {
//     console.log("wrong password ");
//   }
// });

const storage = multer.diskStorage({
  destination: path.join(__dirname, "public_html", "uploads"),
  filename: function (req, file, cb) {
    // null as first argument means no error
    cb(null, Date.now() + "-" + file.originalname);
  },
});

app.post("/register", async (req, res) => {
  console.log(
    "*******************************************************************************"
  );
  console.log(req.body);

  try {
    let upload = multer({ storage: storage }).single("avatar");
    upload(req, res, function (err) {
      console.log("inside : ");
      console.log(req.body);

      const Sfirst_name = req.body.firstName;
      const Slast_name = req.body.lastName;
      const Semail = req.body.emailReg;
      const Spassword = req.body.passwordReg;
      const universityID = req.body.uniID;
      const depName = req.body.dep;

      console.log("dep is" + depName);

      console.log("First NAme is " + req.body.firstName);

      // req.file contains information of uploaded file
      // req.body contains information of text fields
      if (!req.file) {
        return res.send("Please select an image to upload");
      } else if (err instanceof multer.MulterError) {
        return res.send(err);
      } else if (err) {
        return res.send(err);
      }

      const image = req.file.filename;
      console.log("imagegeggek");
      con.query(
        "insert into student (Sfirst_name, Slast_name, Semail, Spassword, universityID, depName , image) VALUES (?,?,?,?,?,?,?)",
        [Sfirst_name, Slast_name, Semail, Spassword, universityID, "cs", image],
        (err, results) => {
          if (err) {
            console.log("ERoor");
            throw err;
          }
          res.json({ success: 1 });
        }
      );
      console.log("Fucking Done");
    });
  } catch (err) {
    console.log(err);
  }
});

const customFields = {
  usernameField: "email",
  passwordFiled: "password",
};

const verifyCallback = (username, password, done) => {
  con.query(
    "select * from student where Semail = ?",
    [username],
    function (error, results, fields) {
      if (error) {
        return done(error);
      }
      if (results.length == 0) {
        return done(null, false);
      }
      const isValid = validPassword(password, results[0].hash, results[0].salt);
      user = {
        id: results[0].studentID,
        username: results[0].Semail,
        hash: results[0].hash,
        salt: results[0].salt,
      };
      if (isValid) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    }
  );
};

const strategy = new LocalStrategy(customFields, verifyCallback);
passport.use(strategy);



app.listen(3002, () => {
  console.log("Server running");
});
