'use strict';
module.exports = function(app) {
  var bookStore = require('../controllers/booksStoreController');

  app.route('/books')
    .get(bookStore.get_all_books)
    .post(bookStore.add_book);

  app.route('/books/:bookId')
    .get(bookStore.read_book)
    .delete(bookStore.delete_book);
};
