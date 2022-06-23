var jwt = require("jsonwebtoken");
var secrets = require("../../Config/Secrets");

var PostService =  require("../../Services/PostService");

module.exports = function (app) {

app.get("/posts/0",async (req,res) => {
var token = req.cookies.admin_access_token;
if (token==null) {
    res.status(403).json({message: "You're not allowed to access this page"});
    return;
}
var decoded = jwt.verify(token,secrets.SecretKey);
if (decoded.role!='a'){
    res.status(400).json({message: "Something went wrong."});
    return;
}
var adminID = decoded.ID;

var posts = await PostService.getNotApprovedPosts(adminID);
res.send(posts);
});

}