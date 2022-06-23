var UserSerivce = require("../../Services/UserService");
var StudentService = require("../../Services/StudentService");
const e = require("express");
var jwt = require("jsonwebtoken");
var secrets = require("../../Config/Secrets");

module.exports = async function(app) {
    app.post("/currentStudent", async (req,res) => { 
        console.log("AGS");
        if (req.body.access_token==null) {
            res.status(401).json({message: "Not Logged In"});
            return;
        }
        else {
            var decoded = jwt.verify(req.body.access_token, secrets.SecretKey);
            var studentID = decoded.ID;
            if (decoded.role=="s") {
               var student = await StudentService.getStudentInfo(studentID);
               res.json(student);
            }
            else {
                res.sendStatus(401);
            }
        }
    })
}