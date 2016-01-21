var express = require('express');
var app = express();
var io = require('socket.io')(8083);
var io_client = require('socket.io-client');
var socket = io_client('http://localhost:8081');

socket.on('connect', function(data) {
   console.log('I connected to an Archer server');
});

app.use(express.static(__dirname + 'views'));
app.use(express.static('./views/public'));

app.get('/', function (req, res) {
 res.render(__dirname + '/views/index.ejs');
});

var server = app.listen(process.env.PORT || 8082, function () {
 var host = server.address().address;
 var port = process.env.PORT || 8082;

 console.log('Archer worker listening on port %s', port);
});
