var express = require("express"),
    router  = express.Router(),
    Campground = require("../models/campground");

//INDEX show all campgrounds
router.get("/campgrounds", function (req, res) {
    Campground.find({}, function (err, allcampgrounds) {
        if (err) {
            console.log(err);
        } else {
            res.render("campgrounds/index", { campgrounds : allcampgrounds });
        }
    });
});

//CREATE add a new campground to DB
router.post("/campgrounds", function (req, res) {
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

//NEW show form to create new campground
router.get("/campgrounds/new", function (req, res) {
    res.render("campgrounds/new");
});

// SHOW - shows more info about one campground
router.get("/campgrounds/:id", function (req, res) {
    //find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function (err, foundCampground) {
        if (err) {
            console.log(err);
        } else {
            //render show template with that campground
            res.render("campgrounds/show", {campground:foundCampground});
        }
    });
}); 

module.exports = router;