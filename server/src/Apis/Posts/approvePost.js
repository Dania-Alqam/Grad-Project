var jwt = require("jsonwebtoken");
var secrets = require("../../Config/Secrets");

var PostService = require("../../Services/PostService");
module.exports = function (app) {
    app.post("/approve/:postID", async (req, res) => {
        var token = req.body.admin_access_token;
        if (token == null) {
            res.status(403).json({ message: "You're not allowed to access this page" });
            return;
        }
        var decoded = jwt.verify(token, secrets.SecretKey);
        if (decoded.role != 'a') {
            res.status(400).json({ message: "Something went wrong." });
            return;
        }
        var adminID = decoded.ID;
        var postID = req.params.postID;

        var result = await PostService.ApprovePost(adminID, postID);
        if (result == 0) {
            res.status(401).json({ message: result.message })
        }
        else if (result == -1) {
            res.status(400).json({ message: result.message })
        }
        else {
            res.status(200).json({ message: result.message })
        }
    })
}