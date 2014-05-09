var express = require('express');
var app = express();
var bodyParser = require('body-parser'); //bodyparser + json + urlencoder
var morgan  = require('morgan'); // logger
var db = require('./config/database');

//Configuration
app.listen(3001);
app.use(bodyParser());
app.use(morgan());

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


console.log('[INFO] Your project API started on port 3001');
console.log(app);