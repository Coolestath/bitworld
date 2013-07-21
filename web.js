var express = require('express'),
	fs = require('fs'),
	sys = require('sys');
 
var app = express();

app.configure(function(){
    app.use(express.logger('dev');
    app.use(express.bodyParser());
    app.use(express.static(__dirname + '/public'));
});

/*
app.get('/', function(request, response) {
  response.send('Hello World! athar');
});
*/

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
