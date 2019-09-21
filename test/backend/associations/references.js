var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo_2", {useNewUrlParser: true});

var Post = require("./models/post");
var User = require("./models/user");

User.create({
    name: "Dan",
    email: "dan@gmail.com",
});

var newPost = new Post({
    title: "To Do List v4",
    content: "ADFAS",
});

Post.create({}, function(err, newPost){
    User.findOne({email: "dan@gmail.com"}, function(err, foundUser){
        if(err){
            console.log(err);
        }else{
            foundUser.posts.push(newPost);
            foundUser.save(function(err, data){
                if(err){
                    console.log(err);
                }else{
                    console.log(data);
                }
            });
        }  
    });
});

// // Find user
// // Find all post for that user

// User.findOne({email: "dan@gmail.com"}).populate("posts").exec(function(err, user){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(user);
//     }
// });
