var express = require('express');
var path = require('path');
var events = require('./eventsController');
var bodyParser = require('body-parser');

var app = express();
//dirname gives current dir
var rootPath = path.normalize(__dirname + '/../');

//pass static files
app.use(express.static(rootPath + '/app'));

//no idea
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//get and post for event data
console.log('the events are ', events);
app.get('/data/event/:id', events.get);
app.post('/data/event/:id', events.save);
app.get('/data/highestEventId', events.getHighestId);


app.listen(8000);
console.log('Listening on port 8000...');
