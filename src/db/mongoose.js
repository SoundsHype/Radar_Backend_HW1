const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hw1', 
{
	useNewUrlParser: true, 
	useUnifiedTopology: true
});