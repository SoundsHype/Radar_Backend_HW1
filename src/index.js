const express = require('express');
const mongoose = require('mongoose');
const apiRouter = require('./apiRouter');
const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use("/api", apiRouter)

const start = async () => {
	try {
		await mongoose.connect('mongodb://localhost:27017/hw1', {useNewUrlParser: true, useUnifiedTopology: true})
		app.listen(PORT, () => console.log('server started on port %d', PORT))
	} catch(error) {
		console.log(error);
	}
}

start()