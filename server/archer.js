var express = require('express');
var request = require('request');
var app = express();
var io = require('socket.io')(8081);

io.sockets.on('connection', function (socket) {
  console.log('connection');
});

var io_client = require('socket.io-client');
var socket = io_client('');

socket.on('connect', function(data) {
    console.log('connect');
});

app.get('/', function (req, res) {
  res.json(process.memoryUsage());
});

app.post('/', function(req, res) {
  request.get('', function(err, res) {
    if(err) {
      res.error(err);
    }
    console.log(res.body);
  });
});

var server = app.listen(process.env.PORT, function () {
  var port = process.env.PORT
  console.log('Archer Server listening on %s', port);
});