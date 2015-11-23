var express = require('express');
var request = require('request');
var app = express();
var io = require('socket.io')(8081);

io.on('connection', function (socket) {
  console.log('someone connected to me');
  socket.on('command', function(data) {
    console.log('got a command');
    console.log(data.command);
    if(data.command == 'weather') {
      request.get('http://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&APPID=' + process.env.OPENWEATHERMAP_KEY, function(err, res) {
        if(err) {
          socket.emit('response', { type: 'system', response: 'There was a problem getting the weather. Things just never seem to work right.' });
        }
        else {
          console.log('weather fired');
          socket.emit('response', { type: 'weather', response: res.body });
        }
      });
    }
    else if(data.command == 'Twitter') {
      console.log(data.command);
      socket.emit('response', { type: 'system', response: 'Here is your Twitter feed for the last sixty seconds.' });
    }
    else if(data.command == 'Gary') {
      socket.emit('response', { type: 'system', response: "What do you get when you guzzle down sweets?" });
    }
    else {
      socket.emit('response', { type: 'system', response: "I don't know what you mean." });
    }
  });
});

app.get('/', function (req, res) {
  res.json(process.memoryUsage());
});

var server = app.listen(process.env.PORT || 8080, function () {
  var port = process.env.PORT || 8080;
  console.log('Archer Server listening on %s', port);
});
