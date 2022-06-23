module.exports = function (app) {
app.get("/imgs/:imgsLink", (req,res)=>{
    var path ="C:/Users/DANIA/grad-project/server/uploads/"+req.params.imgsLink;
    res.sendFile(path);
})

};
