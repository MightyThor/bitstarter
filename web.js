var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var buffer = 'Hellow world 2';
    response.send(buffer.toString(encoding = 'utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
