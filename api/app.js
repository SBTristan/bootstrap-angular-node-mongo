var express = require('express');
var app = express();
var server = app.listen(3000);

var db = require('./config/database');

//Configuration
app.use(express.json());
app.use(express.urlencoded());
app.use(express.logger());

app.all('*', function(req, res, next) {
	res.set('Access-Control-Allow-Origin', 'http://localhost');
	res.set('Access-Control-Allow-Credentials', true);
	res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
	res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
	if ('OPTIONS' == req.method) return res.send(200);
	next();
});


//Routes
var routes = {};
routes.example = require('./route/example.js');


//Routing URLs
app.post('/path', routes.example.myPath);


console.log('[INFO] Your project API started on port ' +  server.address().port);