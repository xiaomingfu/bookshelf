var express                 = require("express"),
    app                     = express(),
    bodyParser              = require("body-parser"),
    mongoose                = require("mongoose"),
    Campground              = require("./models/campground"),
    Comment                 = require("./models/comment"),
    seeds                   = require("./seeds"),
    passport                = require("passport"),
    LocalStrategy           = require("passport-local"),
    passportLocalMongoose   = require("passport-local-mongoose"),
    methodOverride          = require("method-override");
    User                    = require("./models/user"),
    campgroundRoutes        = require("./routes/campgrounds"),
    commentRoutes           = require("./routes/comments"),
    flash                   = require("connect-flash"),
    indexRoutes             = require("./routes/index");

// seeds(); //create seeds

mongoose.connect("mongodb://localhost:27017/yelpcamp", { useNewUrlParser: true });


app.use(express.static(__dirname +"/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use(flash());

//PASSPORT CONFIG
app.use(require("express-session")({
    secret: "coding is fun",
    resave: false,
    saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

//ROUTER CONFIG
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);
app.use("/", indexRoutes);

var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("Serve is running!");
});
