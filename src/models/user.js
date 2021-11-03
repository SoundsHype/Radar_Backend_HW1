const {Schema, model} = require('mongoose');

const User = new Schema({
	name: {type: String, required: true},
	bio: {type: String},
	password: {type: String, required: true}
})

module.exports = model('User', User);