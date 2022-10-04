const { Router } = require("express");
const bcrypt = require("bcrypt");
const { UserModel } = require("../Models/User.model.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userController = Router();

userController.post("/signup", async (req, res) => {
	const { email, password } = req.body;

	bcrypt.hash(password, 5, async (err, hash) => {
		if (err) {
			res.send("something is wrong ");
		}
		const user = new UserModel({
			email,
			password: hash
		});
		await user.save();
		res.send({ message: "SignUp Successfully"`` });
	});
});

userController.post("/login", async (req, res) => {
	const { email, password } = req.body;

	const user = await UserModel.findOne({ email: email });
	if (!user) {
		res.send("user is not valid");
	}
	const hash = user.password;
	bcrypt.compare(password, hash, async (err, result) => {
		if (err) {
			res.send("Something went wrong");
		}
		if (result) {
			const token = jwt.sign(
				{ userId: user.email },
				process.env.SECRET_KEY
			);
			console.log(token);
			res.send({ message: "Login Successfully", token });
		}
	});
});

module.exports = { userController };
