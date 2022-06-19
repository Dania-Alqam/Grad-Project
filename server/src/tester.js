var express = require("express");
const cors = require("cors");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bodyParser = require("body-parser");
var mysql = require("mysql");
const cookieParser = require("cookie-parser");

const crypto = require("crypto");
var app = express();
const path = require("path");
const multer = require("multer");
var jwt = require("jsonwebtoken");

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(passport.initialize());
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

app.listen(5000, () => {
    console.log("Server running");
  });
  
  var corsOptions = {
    origin: "http://localhost:3000",
  };

  
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  //----------------------------------------------


require("./Apis/Apis")(app)