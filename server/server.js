var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var itemController = require('./items/itemController');

var app = express();
mongoose.connect('mongodb://localhost/foodBuddy');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));

app.post('/foodBuddy/items', itemController.updatePrice)

app.listen(8000);