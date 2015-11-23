var express = require('express');
var app = express();
var io = require('socket.io')(8083);

io.sockets.on('connection', function(data) {
   console.log('someone connected to me');
   socket.emit('weather', {});
});

var io_client = require('socket.io-client');
var socket = io_client('http://localhost:8081');

socket.on('connect', function(data) {
   socket.emit('weather', {})
   console.log('i connected to someone');
});

socket.on('weather', function(data) {
   console.log('worker weather');
});

app.use(express.static(__dirname + 'views'));

app.get('/', function (req, res) {
 res.render(__dirname + '/views/index.ejs');
});

var server = app.listen(process.env.PORT || 8082, function () {
 var host = server.address().address;
 var port = process.env.PORT || 8082;

 console.log('Archer worker listening on port %s', port);
});
