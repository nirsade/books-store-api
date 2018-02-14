'user strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
      type: String, 
      required: 'enter the book name'
  },
  description: String,
  author: String,
  publication_date: Date,
  genre: {
      type: [{
          type: String,
          enum: ['Science Fiction', 'Satire', 'Drama', 'Action', 'Romance', 'Mystery of Horor']
      }]
    },
  isbn: Number,
  price: Number
});

module.exports = mongoose.model('Books', BookSchema);;
