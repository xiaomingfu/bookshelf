var express = require("express");

var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/about", function(req, res){
    res.render("about");
});

var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("Server started....");
});