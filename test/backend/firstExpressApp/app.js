var express = require("express");
var app = express();

// "/" => "Hi there"
app.get("/", function(req, res){
    res.send("Hi there");
});

app.get("/bye", function(req, res){
    res.send("Goodbye!");
});

app.get("/dog", function(req, res){
    res.send("Meow!");
});

app.get("/r/:subredditName",function(req, res){
    var subreddit = req.params.subredditName;
    res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!");
});

app.get("/r/:subredditName/comments/:id/:title/", function(req,res){
    var subreddit = req.params.subredditName;
    var id = req.params.id;
    var title = req.params.title;
    res.send("Welcome to a " +id + " " +  subreddit + " " + title + " comment page!");
});

app.get("*", function(req,res){
    res.send("Page Not found!");
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server Has Started!");
});