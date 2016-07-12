var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var itemController = require('./items/itemController');
var userController = require('./users/userController');
var listController = require('./lists/listController');

var app = express();
mongoose.connect('mongodb://localhost/foodBuddy');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));

app.post('/items', itemController.updatePrice);
app.get('/items', itemController.getAllItems);

app.post('/signin', userController.signin);
app.post('/signup', userController.signup);

app.get('/lists', listController.retriveAllLists);
app.post('/addlist', listController.createNewList);
app.post('/removelist', listController.remove);


app.listen(8000);