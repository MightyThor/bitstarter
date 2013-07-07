var express = require('express');

var app = express.createServer(express.logger());

var string = new Buffer(8);

buffer.write("Howdy there", "utf8");

app.get('/', function(request, response) {
    response.send(string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
