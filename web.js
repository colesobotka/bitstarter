var express = require('express');
var fs = require('fs');

var indexFile = "index.html";

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  
	var content = new Buffer(fs.readFileSync(indexFile, 'utf-8'));
	response.send(content.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
