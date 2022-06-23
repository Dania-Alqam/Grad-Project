module.exports = function(app) {
    app.post("/logout",(req,res) => {
        res.clearCookie("access_token");
        res.sendStatus(200);
    })
}