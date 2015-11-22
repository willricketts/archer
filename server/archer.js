var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', '../listener_node/public/views');
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index');
});

var server = app.listen(process.env.PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});