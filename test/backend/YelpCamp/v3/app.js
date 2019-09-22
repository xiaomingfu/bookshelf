var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    seeds = require("./seeds");

seeds();

mongoose.connect("mongodb://localhost:27017/yelpcamp", { useNewUrlParser: true });



app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Campground.create(
//     {
//         name: "Grand Canyon",
//         image: "https://pixabay.com/get/55e0d4474f4fad0bffd8992ccf2934771438dbf8525477417d2d7fd39345_340.png",
//     }, 
//     function(err, campground){
//         if(err){
//             console.log(err);
//         }else{
//             console.log("Add new compground:");
//             console.log(campground);
//         }
//     });


app.get("/", function (req, res) {
    res.render("landing");
});

app.get("/campgrounds", function (req, res) {
    Campground.find({}, function (err, allcampgrounds) {
        if (err) {
            console.log(err);
        } else {
            res.render("index", { campgrounds: allcampgrounds });
        }
    });
});

app.post("/campgrounds", function (req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = { name: name, image: image, description: desc };
    Campground.create(newCampground, function (err, newllyadded){
        if (err) {
            console.log(err);
        } else {
            res.redirect("/campgrounds");
        }
    });
});

app.get("/campgrounds/new", function (req, res) {
    res.render("new");
});

// SHOW - shows more info about one campground
app.get("/campgrounds/:id", function (req, res) {
    //find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function (err, foundCampground) {
        if (err) {
            console.log(err);
        } else {
            //render show template with that campground
            res.render("show", {campground:foundCampground});
        }
    });
}); 

var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("Serve is running!");
});
