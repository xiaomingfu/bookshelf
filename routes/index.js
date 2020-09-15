var express = require("express"),
    router  = express.Router(),
    User    = require("../models/user"),
    passport = require("passport");

router.get("/", function (req, res) {
    res.render("landing");
});

//show register form
router.get("/register", function(req, res){
    res.render("register");
});

//sign up logic
router.post("/register", function(req, res){
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            req.flash("error", err.message);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
            req.flash("success", "Welcome to YelpCamp " + user.username);
            res.redirect("/campgrounds");
        });
    });
});

//show sign in page
router.get("/login", function(req, res){
    res.render("login");
});

//sign in logic
router.post("/login",  passport.authenticate("local", 
    {  
        successRedirect:"/campgrounds",
        failureRedirect:"/login",
     }), function(req, res){
});

//logout logic
router.get("/logout", function(req, res){
    req.logout();
    req.flash("success", "Logged Out!");
    res.redirect("/campgrounds");
});

module.exports = router;