var express = require('express');
var path = require('path');
var app = express();

app.get('/', function(req,res) {
  res.sendFile(path.resolve(__dirname, './history2.html'));
})

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, './history2.html'));
})

const server = app.listen(3010, function(){
  console.log('welcome to history2');
})
