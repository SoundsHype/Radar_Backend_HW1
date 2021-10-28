const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
	name: String,
	bio: String,
	password: String
})

const Person = mongoose.model('person', personSchema);

module.exports = Person;