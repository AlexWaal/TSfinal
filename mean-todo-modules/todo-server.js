/**
 * Created by littleworld on 21/02/16.
 */


var express  = require('express');
var app      = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


mongoose.connect('mongodb://localhost/todo');
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('todo app on port 3000');
});

require('./app/routes')(app);



