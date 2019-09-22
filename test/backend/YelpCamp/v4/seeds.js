var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Redwoods",
        image: "https://images.unsplash.com/photo-1497900304864-273dfb3aae33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "Cool and quiet",
    },
    {
        name: "Mountain Cloudy",
        image: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "Cold and dreamful",
    },
    {
        name: "StarAround",
        image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "dafgfgs",
    },
]

function seedDB() {
    //REMOVE ALL THE DATA
    Campground.remove({}, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("removed all campgrounds");
            //ADD A FREW CAMPGROUNDS
            data.forEach(function (seed) {
                Campground.create(seed, function (err, campground) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Add one campground");
                    }
                    //ADD COMMENTS
                    Comment.create({
                        text: "dagdafdfa",
                        author: "Dawn",
                    }, 
                    function (err, comment) {
                        if (err) {
                            console.log(err);
                        } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("create new comment");
                        }
                    });
                });
            });
        };
    });
}

module.exports = seedDB;