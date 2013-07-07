var express = rquire('express');

var fs = require('fs');

var app = express.createServer(express.logger());

var string = new Buffer(fs.readFileSync("index.html", "utf8"));

app.get('/', function(requrest, response) {
	response.send(string.toString("utf8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on" + port);
});
