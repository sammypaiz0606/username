var express = require('express');
var app = express();

app.use(express.static('public'));

var mysql		 = require('mysql');
var connection   = mysql.createConnection({
	host     : 'localhost',
	user   	 : 'root',
	password : 'password',
	database : 'tvshows_db'
});

connection.connect();

app.get('/tvshows', function(req, res) {
	connection.query('SELECT * FROM tvshows', function(error, results, fields) {
		if(error) res.send(error)
			else res.json(results);
	});
});

app.listen(3001, function() {
	console.log('listening on 3001');
});