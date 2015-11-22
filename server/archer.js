var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.json(process.memoryUsage());
});

app.post('/', function(req, res) {
  
});

var server = app.listen(process.env.PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Archer Server listening on %s', port);
});