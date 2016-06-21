var express = require('express');
var path = require('path');

var app = express();
//dirname gives current dir
var rootPath = path.normalize(__dirname + '/../');

//pass static files
app.use(express.static(rootPath + '/app'));


app.listen(8000);
console.log('Listening on port 8000...');
