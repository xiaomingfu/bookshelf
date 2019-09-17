var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var friends = ["Tony", "Dawn"];
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.post("/addfriend", function(req,res){
    var newfriend = req.body.newfriend;
    friends.push(newfriend);
    res.redirect("/friends");
})
app.get("/friends", function(req, res){   
    res.render("friends", {friends:friends});
});
var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("Server has started!");
})