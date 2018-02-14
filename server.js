var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Book = require('./api/models/bookModel'),
  bodyParser = require('body-parser'),
  cors = require('cors');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_URL);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/booksStoreRoutes');
routes(app);

app.listen(port);

console.log('book store list RESTful API server started on: ' + port);