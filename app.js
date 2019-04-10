var express = require('express');
var app = express();

app.use(express.static("username_public"));

var mysql		 = require('mysql');
var connection   = mysql.createConnection({
	host     : 'localhost',
	user   	 : 'root',
	password : '12345',
	database : 'username_db'
});

connection.connect();

app.get('/username.json', function(req, res) {
	connection.query("SELECT * FROM username", function (error, results, fields) {
		if(error) res.send(error)
		else res.json(results);
	});
});

app.listen(3001, function() {
	console.log('listening on 3001');
});