var express = require("express"),
    router  = express.Router(),
    Campground = require("../models/campground");

//INDEX show all campgrounds
router.get("/", function (req, res) {
    Campground.find({}, function (err, allcampgrounds) {
        if (err) {
            console.log(err);
        } else {
            res.render("campgrounds/index", { campgrounds : allcampgrounds });
        }
    });
});

//CREATE add a new campground to DB
router.post("/", isLoggedIn, function (req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username,
    };
    
    var newCampground = { name: name, image: image, description: desc, author: author};
    
    Campground.create(newCampground, function (err, newlyCreated){
        if (err) {
            console.log(err);
        } else {
            console.log(newlyCreated);
            res.redirect("/");
        }
    });
});

//NEW show form to create new campground
router.get("/new", isLoggedIn, function (req, res) {
    res.render("campgrounds/new");
});

// SHOW - shows more info about one campground
router.get("/:id", function (req, res) {
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

//EDIT CAMPGROUND ROUTE
router.get("/:id/edit", function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            res.redirect("/campgrounds");
        }else{
            res.render("campgrounds/edit", {campground: foundCampground});
        }
    });
});
//UPDATE CAMPGROUND ROUTE
router.put("/:id", function(req, res){
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updateCampground){
        if(err){
            res.redirect("/campgrounds");
        }else{
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});
//DESTROY ROUTE
router.delete("/:id", function(req, res){
    Campground.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/campgrounds");
        }else{
            res.redirect("/campgrounds");
        }
    });
});

//middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;