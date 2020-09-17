var express = require("express"),
  router = express.Router({ mergeParams: true }),
  Book = require("../models/book"),
  Comment = require("../models/comment"),
  middleware = require("../middleware");

//New -form page
router.get("/new", middleware.isLoggedIn, function (req, res) {
  //find book by id
  Book.findById(req.params.id, function (err, book) {
    if (err) {
      console.log(err);
    } else {
      res.render("comments/new", { book: book });
    }
  });
});

//Comment Create
router.post("/", middleware.isLoggedIn, function (req, res) {
  //find book id
  Book.findById(req.params.id, function (err, foundBook) {
    if (err) {
      console.log(err);
      res.redirect("/books");
    } else {
      //create new comment
      Comment.create(req.body.comment, function (err, comment) {
        if (err) {
          req.flash("error", "Something went wrong.");
          console.log(err);
        } else {
          //add username and id to comment
          comment.author.id = req.user._id;
          comment.author.username = req.user.username;
          comment.save();
          console.log("New comment's username will be: " + req.user.username);
          //connect new comment to book
          foundBook.comments.push(comment);
          foundBook.save();
          //redirect book show page
          res.redirect("/books/" + foundBook._id);
        }
      });
    }
  });
});

//EDIT ROUTE
router.get("/:comment_id/edit", middleware.checkCommentOwnership, function (
  req,
  res
) {
  Comment.findById(req.params.comment_id, function (err, foundComment) {
    if (err) {
      res.redirect("back");
    } else {
      res.render("comments/edit", {
        book_id: req.params.id,
        comment: foundComment,
      });
    }
  });
});
//UPDATE COMMENT ROUTE
router.put("/:comment_id", middleware.checkCommentOwnership, function (
  req,
  res
) {
  Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function (
    err,
    updatedComment
  ) {
    if (err) {
      res.redirect("back");
    } else {
      req.flash("success", "You succeed update the comment.");
      res.redirect("/books/" + req.params.id);
    }
  });
});

//DESTROY ROUTE
router.delete("/:comment_id", middleware.checkCommentOwnership, function (
  req,
  res
) {
  Comment.findByIdAndRemove(req.params.comment_id, function (
    err,
    foundComment
  ) {
    if (err) {
      res.redirect("back");
    } else {
      req.flash("success", "Comment Deleted!");
      res.redirect("/books/" + req.params.id);
    }
  });
});

module.exports = router;
