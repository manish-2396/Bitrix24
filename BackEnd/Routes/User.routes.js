const { Router } = require("express");
const bcrypt = require("bcrypt");
const { UserModel } = require("../Models/User.model.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userController = Router();

userController.post("/signup", async (req, res) => {
	const { email, password } = req.body;

	const findUser = await UserModel.findOne({ email: email });
	console.log(email, password);
	if (findUser) {
		return res.send({ msg: "User already Exists", signup: false });
	}

	bcrypt.hash(password, 5, async (err, hash) => {
		if (err) {
			return res.send({ msg: "Something went wrong", signup: false });
		}
		const user = new UserModel({
			email,
			password: hash
		});
		await user.save();
		return res.send({ msg: "SignUp Successfully", signup: true });
	});
});

userController.post("/login", async (req, res) => {
	const { email, password } = req.body;
	console.log(email)

	const user = await UserModel.findOne({ email: email });
	if (!user) {
		return res.send({ msg: "Email not present", token: "" });
	}
	const hash = user.password;
	bcrypt.compare(password, hash, async (err, result) => {
		if (err) {
			return res.send({ msg: "something went wrong", token: "" });
		}
		if (result) {
			const token = jwt.sign(
				{ userId: user.email },
				"Krishna"
			);
			console.log(token);
			res.send({ msg: "Login Successfully", token: token });
		} else {
			return res.send({ msg: "Wrong Credentials", token: "" });
		}
	});
});

module.exports = { userController };
