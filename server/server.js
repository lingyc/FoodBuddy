var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var itemController = require('./items/itemController');
var userController = require('./users/userController');
var listController = require('./lists/listController');
var listItemController = require('./listItems/listItemController');
var ip = '127.0.0.1';
var port = 8000;

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

app.post('/add_list_items', listItemController.addItemToList);
app.post('/remove_list_items', listItemController.removeListItem);
app.get('/list_items', listItemController.retriveListItems);


app.listen(port);
console.log('Listening on http://' + ip + ':' + port);