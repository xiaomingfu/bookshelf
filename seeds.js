var mongoose = require("mongoose");
var Book = require("./models/book");
var Comment = require("./models/comment");

var data = [
  {
    name: "Redwoods",
    image:
      "https://images.unsplash.com/photo-1497900304864-273dfb3aae33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ip",
  },
  {
    name: "Mountain Cloudy",
    image:
      "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ip",
  },
  {
    name: "StarAround",
    image:
      "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ips",
  },
];

function seedDB() {
  //REMOVE ALL THE DATA
  Book.remove({}, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("removed all books");
      //ADD A FREW CAMPGROUNDS
      data.forEach(function (seed) {
        Book.create(seed, function (err, book) {
          if (err) {
            console.log(err);
          } else {
            console.log("Add one book");
          }
          //ADD COMMENTS
          Comment.create(
            {
              text: "dagdafdfa",
              author: "Dawn",
            },
            function (err, comment) {
              if (err) {
                console.log(err);
              } else {
                book.comments.push(comment);
                book.save();
                console.log("create new comment");
              }
            }
          );
        });
      });
    }
  });
}

module.exports = seedDB;
