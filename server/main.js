var express = require("express");

const cors = require("cors");
var app = express();

app.use(cors());
app.use(express.json());

var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "bzusociety",
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

app.get("/fieldofinterest", (req, res) => {
  con.query("SELECT FName FROM fieldofinterest", (err, result) => {
	console.log("Doneee field ts!");
    if (err) {
      res.send({
        err: err,
      });
    }
	console.log("Doneee field of i..!");
	console.log(result)
    if (result) {
      res.send(result);
	  console.log(result);
      console.log("Doneee field of interests!");
    }
  });
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  
  con.query(
    "select * from student where Semail = ? AND Spassword= ?",
    [email, password],
    (err, result) => {
      if (err) {
        res.send({
          err: err,
        });
      }
      if (result) {
        res.send(result);
        console.log("Doneee!");
      } else {
        res.send({
          message: "Wrong Email or password ",
        });
      }
    }
  );
});

app.post("/register", (req, res) => {
  const Sfirst_name = req.body.Sfirst_name;
  const Slast_name = req.body.Slast_name;
  const Semail = req.body.Semail;
  const Spassword = req.body.Spassword;
  const universityID = req.body.universityID;
  const depName = req.body.depName;

  con.query(
    "insert into student (Sfirst_name, Slast_name, Semail, Spassword, universityID, depName) VALUES (?,?,?,?,?,?)",
    [Sfirst_name, Slast_name, Semail, Spassword, universityID, depName],
    (err, result) => {
      if (err) {
        res.send({
          err: err,
        });
      }
      if (result) {
        res.send(result);
		console.log("Done2424r45")
      } else {
        res.send({
          message: "Wrong Email or password ",
        });
      }
    }
  );
});

app.listen(3002, () => {
  console.log("Server running");
});
