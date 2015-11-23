var express = require('express');
var app = express();
var io = require('socket.io')(8081);

io.sockets.on('connection', function(data) {
    console.log('received connection');
});

var io_client = require('socket.io-client');
var socket = io_client('');

socket.on('connect', function(data) {
    console.log('connect');
    socket.emit('join', 'Hello World from client');
});

app.set('view engine', 'ejs');
app.set('views', 'public/views');
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index');
});

var server = app.listen(process.env.PORT, function () {
  var host = server.address().address;
  var port = process.env.PORT;

  console.log('Worker listening on port %s', port);
});