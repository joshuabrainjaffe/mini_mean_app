var mongoose = require('mongoose');

var CharSchema = mongoose.Schema({
	name: String,
	strain: String,
	backstory: String,
})

var Char =  mongoose.model('Char', CharSchema);
module.exports = Char;
