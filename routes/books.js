var express = require("express"),
  router = express.Router(),
  Book = require("../models/book"),
  middleware = require("../middleware");

//INDEX show all books
router.get("/", function (req, res) {
  Book.find({}, function (err, allbooks) {
    if (err) {
      console.log(err);
    } else {
      res.render("books/index", { books: allbooks });
    }
  });
});

//CREATE add a new book to DB
router.post("/", middleware.isLoggedIn, function (req, res) {
  var name = req.body.name;
  var price = req.body.price;
  var image = req.body.image;
  var desc = req.body.description;
  var author = {
    id: req.user._id,
    username: req.user.username,
  };
  var newBook = {
    name: name,
    price: price,
    image: image,
    description: desc,
    author: author,
  };
  Book.create(newBook, function (err, newlyCreated) {
    if (err) {
      console.log(err);
    } else {
      console.log(newlyCreated);
      res.redirect("/books");
    }
  });
});

//NEW show form to create new book
router.get("/new", middleware.isLoggedIn, function (req, res) {
  res.render("books/new");
});
// SHOW - shows more info about one book
router.get("/:id", function (req, res) {
  //find the book with provided ID
  Book.findById(req.params.id)
    .populate("comments")
    .exec(function (err, foundBook) {
      if (err) {
        console.log(err);
      } else {
        //render show template with that book
        res.render("books/show", { book: foundBook });
      }
    });
});

//EDIT CAMPGROUND ROUTE
router.get("/:id/edit", middleware.checkBookOwnership, function (req, res) {
  Book.findById(req.params.id, function (err, foundBook) {
    res.render("books/edit", { book: foundBook });
  });
});
//UPDATE CAMPGROUND ROUTE
router.put("/:id", middleware.checkBookOwnership, function (req, res) {
  Book.findByIdAndUpdate(req.params.id, req.body.book, function (
    err,
    updateBook
  ) {
    if (err) {
      res.redirect("/books");
    } else {
      res.redirect("/books/" + req.params.id);
    }
  });
});
//DESTROY ROUTE
router.delete("/:id", middleware.checkBookOwnership, function (req, res) {
  Book.findByIdAndRemove(req.params.id, function (err) {
    res.redirect("/books");
  });
});

module.exports = router;
