const User = require('./models/User')

class apiController {
	async registration(req, res){
		try {
			const {name, bio, password} = req.body
			const user = new User({name, bio, password})
			if (!user){
				return res.status(400).json({message: "Registration error"})
			}
			await user.save()
			return res.json({message: "Сompleted successfully"})
		} catch (error) {
			console.log(error)
			res.status(400).json({message: 'Registration error'})
		}
	}

	async showallid(req, res){
		try {
			const user = await User.find({},{_id: 1})
			if (!user){
				return res.status(400).json({message: "Show error"})
			}
			return res.json(user)
		} catch (error) {
			console.log(error)
			res.status(400).json({message: 'Show error'})
		}
	}

	async showparam(req, res){
		try {
			const user = await User.findById({_id: req.params.id},{_id: 0, name: 1, bio: 1})
			if (!user){
				return res.status(400).json({message: "Parameters error"})
			}
			res.send(user)
		} catch (error) {
			console.log(error)
			res.status(400).json({message: 'Parameters error'})
		}
	}

	async change(req, res){
		try {
			const {name, bio, password} = req.body
			const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
			if (!user) {
				return res.status(400).json({message: "Can't find user"})
			}
		res.send("Change successfully");
		} catch (error) {
			console.log(error)
			res.status(400).json({message: 'Change error'})
		}
	}
}

module.exports = new apiController();