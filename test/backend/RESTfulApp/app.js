var express     = require("express"),
    mongoose    = require("mongoose"),
    bodyParser  = require("body-parser"),
    app         = express();

//APP CONFIG
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect("mongodb://localhost/restful_blog_app");

//MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema)

//RESTFUL ROUTES

// Blog.create({
//     title:"This is the test page",
//     image: "https://images.unsplash.com/photo-1562887106-0ba63ac82e02?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
//     body: "Hello this is a blog post!",
// });

app.get("/", function(req,res){
    res.redirect("/blogs");
});

// INDEX ROUTES
app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log(err);
        }else{
            res.render("index", {blogs: blogs});
        }
    });
});

app.get("/blogs/new", function(req,res){
    res.render("new");
});

//CREATE ROUTE
app.post("/blogs", function(req,res){
    // create blog

    // var title = req.body.title;
    // var image = req.body.image;
    // var body = req.body.body;
    // var newblog = {
    //     title:title,
    //     image:image,
    //     body:body,
    // }

    //another opions put all in blog object
    Blog.create(req.body.blog,function(err, newblog){
        if(err){
            res.render("new");
            //then, redirect to the index
        }else{
            res.redirect("/blogs");
        }
    });
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("RESTAPP server is running");
})