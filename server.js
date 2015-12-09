// =============================
// Requirements
// =============================
var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	logger = require('morgan'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser');


// =============================
// Middleware
// =============================
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('public'));


// =============================
// DB
// =============================
mongoose.connect('mongodb://localhost/char_gen');


// =============================
// Models
// =============================
var Book = require('./models/char.js');


// =============================
// Seed - run one and done son!
// =============================
// var seed = require('./seed.js');


// =============================
// Routes
// =============================
// Index
app.get('/chars', function(req, res) {
	Book.find().then(function(chars) {
		console.log('==================');
		console.log(chars);
		console.log(typeof chars);
		console.log('==================');
		res.send(chars);
	});
});

// Show - test via POSTMAN (http://localhost:3000/chars/5658a3da895cc0e22913f94a)
app.get('/chars/:id', function(req, res) {
	Book.findById(req.params.id).then(function(char) {
		console.log('==================');
		console.log(char);
		console.log(typeof char);
		console.log('==================');
		res.send(char);
	});
});

// Create
//  POSTMAN TEST:

app.post('/chars', function(req, res) {
	var char = new Book(req.body);
	char.save(function(err) {
		if(err) {
			console.log('ERROR: ' + err);
		} else {
			console.log("saved");
			res.send(char);
		}
	});
});

// Update
// 	POSTMAN TEST:
// 	- _id: "565a1b9abde674c14a5e8a80"
// 	- title: "War And Reeses Pieces"
// 	- author: "Leo Tolstoy"
// 	-	imgURL: "http://images.fashionnstyle.com/data/images/full/64729/war-and-peace.jpg?w=600"
app.put('/chars/:id', function(req, res) {
	Book.findOneAndUpdate({
		_id: req.params.id
	}, {
		$set: req.body
	}, function(err, char) {
		res.send(char);
	});
});

// Delete
app.delete('/chars/:id', function(req, res) {
	Book.findOneAndRemove({_id: req.params.id}, function(err) {
		if(err) console.log(err);
		console.log('Character deleted');
		res.send('Character deleted');
	});
});


// =============================
// Listen
// =============================
app.listen(port);
console.log('Server started at port: ' + port);
