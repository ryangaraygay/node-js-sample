var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(fs.readFileSync('index.html').toString());
});

var port = 80;
app.listen(port, function() {
  console.log("Listening on " + port);
});
