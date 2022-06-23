module.exports = function(app) {
    app.post("/logout",(req,res) => {
        res.sendStatus(200);
    })
}