var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name: "Salmon Creek", image: "https://pixabay.com/get/57e1d3404e53a514f6da8c7dda793f7f1636dfe2564c704c732773d6934ac150_340.jpg"},
    {name: "Grand Canyon", image: "https://pixabay.com/get/55e0d4474f4fad0bffd8992ccf2934771438dbf8525477417d2d7fd39345_340.png"},
    {name: "Mountain Coat's Rest", image: "https://pixabay.com/get/55e9d043485baa14f6da8c7dda793f7f1636dfe2564c704c732773d6934ac150_340.jpg"},
]

app.get("/", function(req,res){
    res.render("landing");
});

app.get("/campgrounds", function(req,res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image:image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new");
})

var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("Server is running");
});
