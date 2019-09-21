var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog");

//post Model
var postSchema =new mongoose.Schema({
    title: String,
    content: String,
});
var Post = mongoose.model("Post", postSchema);

// user Model
var useSchema = new mongoose.Schema({
    name: String,
    email: String,
    posts: [postSchema],
});
var User = mongoose.model("User", useSchema);

var newUser = new User({
    name: "Hermione",
    email: "hermione@yahoo.com",
});

newUser.posts.push({
    title: "Coding",
    content: "Hard fun",
});

// newUser.save( function(err, newUser){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(newUser);
//     }
// });

User.findOne({name: "Hermione"}, function(err, newUser){
    if(err){
        console.log(err);
    }else{
        newUser.posts.push({
            title: "learn",
            content: "Effection",
        });
        newUser.save(function(err, newUser){
            if(err){
                console.log(err);
            }else{
                console.log(newUser);
            }
        });
    }
});