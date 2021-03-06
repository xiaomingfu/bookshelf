var Book = require("../models/book");
var Comment = require("../models/comment");
var middlewareObj = {};

middlewareObj.isLoggedIn = function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash("error", "You need to login to do that!");
  res.redirect("/login");
};

middlewareObj.checkCommentOwnership = function (req, res, next) {
  if (req.isAuthenticated()) {
    Comment.findById(req.params.comment_id, function (err, foundComment) {
      if (err) {
        req.flash("error", "Book does not find!");
        res.redirect("back");
      } else {
        if (foundComment.author.id.equals(req.user._id)) {
          next();
        } else {
          req.flash("error", "You do not have permit to do that.");
          res.redirect("back");
        }
      }
    });
  } else {
    req.flash("error", "You need to be logged in to do that");
    res.redirect("back");
  }
};

middlewareObj.checkBookOwnership = function (req, res, next) {
  if (req.isAuthenticated()) {
    Book.findById(req.params.id, function (err, foundBook) {
      if (err) {
        res.redirect("back");
      } else {
        if (foundBook.author.id.equals(req.user._id)) {
          next();
        } else {
          req.flash("error", "You do not have permit to do that.");
          res.redirect("back");
        }
      }
    });
  } else {
    req.flash("error", "You have to be logged in");
    res.redirect("back");
  }
};
module.exports = middlewareObj;
