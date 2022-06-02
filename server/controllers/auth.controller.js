const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");


//////////////////////////////////////////////////////////////////////////////////////////////////
const multer = require("multer");
var express = require("express");
const cors = require("cors");
const passport = require("passport");
const bodyParser = require("body-parser");
var app = express();
const path = require("path");
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "static")));
app.use("../uploads", express.static(path.join(__dirname, "uploads")));

const storage = multer.diskStorage({
  destination: path.join(__dirname, "public_html", "uploads"),
  filename: function (req, file, cb) {
    // null as first argument means no error
    cb(null, Date.now() + "-" + file.originalname);
  },
});
//////////////////////////////////////////////////////////////////////////////////////////////////

exports.signup = (req, res) => {
  // Save User to Database
  let upload = multer({ storage: storage }).single("avatar");
    upload(req, res, function (err) {
  User.create({
    universityID: req.body.uniID,
    email: req.body.emailReg,
    password: bcrypt.hashSync(req.body.passwordReg, 8),
    Sfirst_name: req.body.firstName,
    Slast_name: req.body.lastName,
    depName: req.body.dep,
    image : req.file.filename
  })
    .then((user) => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles,
            },
          },
        }).then((roles) => {
          user.setRoles(roles).then(() => {
            res.send({ message: "User was registered successfully!" });
          });
        });
      } else {
        // user role = 1
        user.setRoles([1]).then(() => {
          res.send({ message: "User was registered successfully!" });
        });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
  });

};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      // username: req.body.username,
      email: req.body.emailReg,

    },
    
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
      var passwordIsValid = bcrypt.compareSync(
        req.body.passwordReg,
        //???????????????
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }
      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400, // 24 hours
      });
      var authorities = [];
      user.getRoles().then((roles) => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }//??????????????????????????
        res.status(200).send({
          //?????????
          id: user.id,
          universityID: req.body.uniID,
          email: req.body.emailReg,



          roles: authorities,
          accessToken: token,
        });
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
