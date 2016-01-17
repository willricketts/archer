var express = require('express');
var request = require('request');
var app = express();
var io = require('socket.io')(8081);

io.on('connection', function (socket) {
  console.log('Connection established with worker');
  socket.on('command', function(data) {
    console.log('got a command');
    console.log(data.command);

    switch(data.command) {
      case 'weather':
        request.get('http://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&APPID=' + process.env.OPENWEATHERMAP_KEY, function(err, res) {
          if(err) {
            socket.emit('response', { type: 'system', response: 'There was a problem getting the weather. Things just never seem to work right.' });
          }
          else {
            var x = JSON.parse(res.body)
            console.log(x)
            socket.emit('response', { type: 'weather', response: 'The current temperature in ' + x.name + ' is ' + x.main.temp + ' degrees.' });
          }
        });
      break;
      case 'Twitter':
        console.log(data.command);
        socket.emit('response', { type: 'system', response: 'Here is your Twitter feed for the last sixty seconds.' });
      break;
      default:
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
