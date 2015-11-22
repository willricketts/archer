var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', './public/views');
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index');
});

var server = app.listen(process.env.PORT, function () {
  var host = server.address().address;
  var port = process.env.PORT;

  console.log('Worker listening on port %s', port);
});