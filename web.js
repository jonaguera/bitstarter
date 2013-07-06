var express = require('express');
var app = express.createServer(express.logger());
var fs = require('fs');


app.get('/', function(request, response) {
  var txt = new Buffer(16);
  txt = fs.readFileSync('index.html');
  console.log(txt.toString('utf-8'));
  response.send(txt.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
