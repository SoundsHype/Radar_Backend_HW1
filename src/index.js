require('./db/mongoose');
const express = require('express');
const Person = require('./models/person');

const app = express();
app.use(express.json());

app.post('/api/user', (req, res) => {
	const person = new Person(req.body);
	person.save().then((person) => {
		res.status(201).send(person);
	}).catch((error) => {
		res.status(400).send(error);
	})
})

app.get('/api/user', (req, res) => {
	Person.find({},{_id: 1}).then((person) => {
		res.status(201).send(person);
	}).catch((error) => {
		res.status(400).send(error);
	})
})

app.get('/api/user/:id', (req, res) => {
	Person.findById({_id:req.params.id},{_id: 0, name: 1, bio: 1}).then((person) => {
		res.status(201).send(person);
	}).catch((error) => {
		res.status(400).send(error);
	})
})

app.put('/api/user/:id', (req, res) => {
	Person.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((person) => {
		if (!person) {
			return res.status(404).send();
		}
		res.send(person);
	}).catch((error) => {
		res.status(500).send(error);
	})
})

app.listen(3000, (req, res) => {
	console.log('app is running in port 3000!');
})

app.get('/', (req, res) => {
	res.send('Hello world!');
})
