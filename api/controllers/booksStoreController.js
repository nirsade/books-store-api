'use strict';
var mongoose = require('mongoose'),
  Book = mongoose.model('Books');

exports.get_all_books = function(req, res) {
  Book.find({}, function(err, book) {
    if (err)
      res.send(err);
    res.json(book);
  });
};

exports.add_book = function(req, res) {
  var newBook = new Book(req.body);
  newBook.save(function(err, book) {
    if (err)
      res.send(err);
    res.json(book);
  });
};

exports.read_book = function(req, res) {
  Book.findById(req.params.bookId, function(err, book) {
    if (err)
      res.send(err);
    res.json(book);
  });
};

exports.delete_book = function(req, res) {
  Book.remove({
    _id: req.params.bookId
  }, function(err, book) {
    if (err)
      res.send(err);
    res.json({ message: 'Book successfully Removed from Store' });
  });
};


