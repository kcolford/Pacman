var express = require('express');
var browserify = require('browserify');

var app = express();
app.use(express.static('www'));
app.get('/jquery.js', function (req, res) {
  browserify(['jquery']).bundle().pipe(res);
});

app.listen(8080);
console.log("Server started on http://localhost:8080");
