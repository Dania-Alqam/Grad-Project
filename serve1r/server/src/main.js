// var express = require("express");
// const cors = require("cors");
// const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;
// const bodyParser = require("body-parser");
// var mysql = require("mysql");
// const cookieParser = require("cookie-parser");

// const crypto = require("crypto");
// var app = express();
// const path = require("path");
// const multer = require("multer");
// var jwt = require("jsonwebtoken");
// // const bcrypt = require("bcryptjs");

// app.use(cookieParser());
// app.use(cors());
// app.use(express.json());
// app.use(passport.initialize());
// app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );

// app.use(express.static("public"));

// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "static")));

// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "1234",
//   database: "bzusociety",
//   multipleStatements: true,
// });

// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// // connect.connectDB();

// // app.get('/', (req, res) => {
// // 	res.send('Hello World!')
// // });
// // app.post("/count",((req, res) => {
// // 	res.send("Hi")
// // }));

// // http://localhost:3000/

// app.get("/", function (request, response) {
//   // Render login template
//   response.sendFile(path.join(__dirname + "../src/pages/login "));
// });

// app.get("/fieldofinterest", (req, res) => {
//   con.query("SELECT FName FROM fieldofinterest", (err, result) => {
//     console.log("Doneee field ts!");
//     if (err) {
//       res.send({
//         err: err,
//       });
//     }
//     console.log("Doneee field of i..!");
//     console.log(result);
//     if (result) {
//       res.send(result);
//       console.log(result);
//       console.log("Doneee field of interests!");
//     }
//   });
// });

// app.get("/professorPage", (req, res) => {
//   con.query("SELECT * FROM `professorprofile`", (err, result) => {
//     if (err) {
//       res.send({
//         err: err,
//       });
//     }
//     console.log(result);
//     if (result) {
//       res.send(result);
//       console.log(result);
//       console.log("Doneee proffffffffffffffffffffffffffffffffffff!");
//     }
//   });
// });

// app.get("/department", (req, res) => {
//   con.query("SELECT depName FROM department", (err, result) => {

//     if (err) {
//       res.send({
//         err: err,
//       });
//     }

//     if (result) {
//       res.send(result);
//       console.log(result);
//       console.log("Doneee depppppp!");
//     }
//   });
// });

// // app.post("/login", (req, res) => {
// //   console.log(req.body);
// //   const Semail = req.body.Semail;
// //   const Spassword = req.body.Spassword;
// //   con.query(
// //     "select * from student where Semail = ? AND Spassword= ?",
// //     [Semail, Spassword],
// //     (err, result) => {
// //       if (err) {
// //         res.send({ err: err });
// //       } else {
// //         if (result.length > 0) {
// //           res.send(result);
// //         } else {
// //           res.send({ message: "wrong Email or Password" });
// //         }
// //       }
// //     }
// //   );
// // });

// // app.post("/register", (req, res) => {
// //   const Sfirst_name = req.body.Sfirst_name;
// //   const Slast_name = req.body.Slast_name;
// //   const Semail = req.body.Semail;
// //   const Spassword = req.body.Spassword;
// //   const universityID = req.body.universityID;
// //   const depName = req.body.depName;
// //   const rePassword = req.body.rePassword;

// //   if (rePassword == Spassword) {
// //     var sql = "select * from student where Semail = ?";
// //     con.query(sql, [Semail], function (err, result, fields) {
// //       if (err) {
// //         throw err;
// //       } else if (result.length > 0) {
// //         req.session.flag = 1;
// //         console.log("tmmmmmmmm");
// //       } else {
// //         con.query(
// //           "insert into student (Sfirst_name, Slast_name, Semail, Spassword, universityID, depName) VALUES (?,?,?,?,?,?)",
// //           [Sfirst_name, Slast_name, Semail, Spassword, universityID, depName],
// //           (err, result) => {
// //             if (err) {
// //               res.send({
// //                 err: err,
// //               });
// //             }
// //             if (result) {
// //               res.send(result);
// //               console.log("Done2424r45");
// //             } else {
// //               res.send({
// //                 message: "Wrong Email or password ",
// //               });
// //             }
// //           }
// //         );
// //       }
// //     });
// //   } else if (rePassword != Spassword) {
// //     console.log("wrong password ");
// //   }
// // });

// const storage = multer.diskStorage({

//   destination: path.join(__dirname, "public_html", "uploads"),
//   filename: function (req, file, cb) {
//     // null as first argument means no error
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// app.post("/register", async (req, res) => {
//   try {
//      let upload = multer({ storage: storage }).single("avatar");
//     upload(req, res, function (err) {
//       const Sfirst_name = req.body.firstName;
//       const Slast_name = req.body.lastName;
//       const Semail = req.body.emailReg;
//       const Spassword =  req.body.passwordReg;     
//       const universityID = req.body.uniID;
//       const depName = req.body.dep;

//       if (!req.file) {
//         return res.send("Please select an image to upload");
//       } else if (err instanceof multer.MulterError) {
//         return res.send(err);
//       } else if (err) {
//         return res.send(err);
//       }
//       const image = req.file.filename;
//       con.query(
//         "insert into student (Sfirst_name, Slast_name, Semail, Spassword, universityID, depName , image) VALUES (?,?,?,?,?,?,?)",
//         [Sfirst_name, Slast_name, Semail, Spassword, universityID, "cs", image],
//         (err, results) => {
//           if (err) {
//             throw err;
//           }
//           res.json({ success: 1 });
//         }
//       );
//     });
//   } catch (err) {
//     console.log(err);
//   }
// });



// app.post("/register", async (req, res) => {
//     try {
//        let upload = multer({ storage: storage }).single("avatar");
//       upload(req, res, function (err) {
//         const Sfirst_name = req.body.Sfirst_name;
//         const Slast_name = req.body.Slast_name;
//         const Semail = req.body.Semail;
//         const Spassword = req.body.Spassword;
//         const universityID = req.body.universityID;
//         const depName = req.body.depName;
//         const rePassword = req.body.rePassword;
  
//         if (!req.file) {
//           return res.send("Please select an image to upload");
//         } else if (err instanceof multer.MulterError) {
//           return res.send(err);
//         } else if (err) {
//           return res.send(err);
//         }
//         const image = req.file.filename;

//         result = await UserSerivce.AddUser(
//             Sfirst_name,
//             Slast_name,
//             Semail,
//             Spassword,
//             rePassword,
//             universityID,
//             depName, 
//             image
//           );
//           if (result.Created) {
//             res.status(201).json({ message: result.message });
//           } else {
//             res.status(400).json({ message: result.message });
//           }
       
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   });

// const customFields = {
//   usernameField: "email",
//   passwordFiled: "password",
// };

// const verifyCallback = (username, password, done) => {
//   con.query(
//     "select * from student where Semail = ?",
//     [username],
//     function (error, results, fields) {
//       if (error) {
//         return done(error);
//       }
//       if (results.length == 0) {
//         return done(null, false);
//       }
//       const isValid = validPassword(password, results[0].hash, results[0].salt);
//       user = {
//         id: results[0].studentID,
//         username: results[0].Semail,
//         hash: results[0].hash,
//         salt: results[0].salt,
//       };
//       if (isValid) {
//         return done(null, user);
//       } else {
//         return done(null, false);
//       }
//     }
//   );
// };

// const strategy = new LocalStrategy(customFields, verifyCallback);
// passport.use(strategy);

// app.listen(3002, () => {
//   console.log("Server running");
// });

// var corsOptions = {
//   origin: "http://localhost:3000",
// };
// app.use(cors(corsOptions));
// // parse requests of content-type - application/json
// app.use(express.json());
// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));

// // const PORT = process.env.PORT || 3002;
// // app.listen(PORT, () => {
// //   console.log(`Server is running on port ${PORT}.`);
// // });
// // app.use(function (req, res, next) {
// //   res.header(
// //     "Access-Control-Allow-Headers",
// //     "x-access-token, Origin, Content-Type, Accept"
// //   );
// //   next();
// // });

// app.post("/auth/signin", async (req, res) => {
//   if (req.body.Email==null || req.body.Password==null) {
//     res.status(400).send("No email or password recieved");
//   }
//   else {
//     var email = req.body.Email;
//     var password = req.body.password;
//     con.query("")
//   }
//   const token = jwt.sign({ id:8, role: "student" }, "YOUR_SECRET_KEY");
//   return res
//     .cookie("access_token", token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//     })
//     .status(200)
//     .json({ message: "Logged in successfully" });
// });

// app.post("/user/addPost", async (req, res) => {
// if (req.cookies.access_token==null)
// res.status(404).send("Not Signed In");
// else 
// {

//   res.status(201).send("Post Added Successfully");
// }
// });
