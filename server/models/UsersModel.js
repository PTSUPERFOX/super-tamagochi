var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var UsersSchema = new Schema({	'name' : String,	'hunger' : Number,	'thirst' : Number,	'fatigue' : Number,	'awesomeness' : Number});

module.exports = mongoose.model('Users', UsersSchema);
