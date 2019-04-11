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
	connection.query('SELECT * FROM username', function (error, results, fields) {
		if(error) res.send(error)
		else res.json(results);
	});
});

// http://localhost:3001/cats-insert?cat_name=bobbi

app.get('/username_insert', function(req, res) {
	connection.query('INSERT INTO username (username_name) VALUES (?)', [req.query.username_name], function (error, results, fields) {
		if(error) res.send(error)
		else res.json({
			message: 'success'
		});
	});
});

// // // http://localhost:3001/cats-delete?cat_id=3

app.get('/username_delete', function(req, res) {
	connection.query('DELETE FROM username WHERE id = (?)', [req.query.username_id], function (error, results, fields) {
		
		res.redirect('/');
	});
});

// // //http://localhost:3001/username_update/4?username_name=dragon
app.get('/username_update/:id', function(req, res) {
	connection.query('UPDATE username SET username_name = (?) WHERE id = (?)', [req.query.username_name, req.params.id], function (error, results, fields) {
		
		res.redirect('/');
	});
});

app.listen(3001, function() {
	console.log('listening on 3001');
});



