var UserSerivce = require("../../Services/UserService");
var StudentService = require("../../Services/StudentService");
const e = require("express");
var jwt = require("jsonwebtoken");
var secrets = require("../../Config/Secrets");

module.exports = function(app) {
    app.get("/currentStudent", async (req,res) => {
        if (req.cookies.access_token==null) {
            console.log("1-")
            res.status(401).json({message: "Not Logged In"});
            console.log("2-")
            return;
        }
        else {
            var decoded = jwt.verify(req.cookies.access_token, secrets.SecretKey);
            var studentID = decoded.ID;
            if (decoded.role=="s") {
                console.log("3-")
               var student = await StudentService.getStudentInfo(studentID);
               res.json(student);
            }
            else {
            
                res.sendStatus(401);
            }

        }



    })
}