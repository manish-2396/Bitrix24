const { Router } = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { EmpTaskModel } = require("../Models/EmpTask.model.js");
require("dotenv").config();
const empTaskController = Router();
empTaskController.get("/", async (req, res) => {
	const notes = await EmpTaskModel.find({ userEmail: req.body.userEmail });
	res.send(notes);
});
empTaskController.post("/create", async (req, res) => {
	const { employeeName, taskName, startTime, endTime, adminEmail } = req.body;
	console.log(req.body);

	const note = new EmpTaskModel({
		employeeName,
		taskName,
		startTime,
		endTime,
		adminEmail
	});
	console.log("note", note);
	try {
		await note.save();
		res.status(200).send({ message: "task created successfully" });
	} catch (error) {
		// res.send(error);
		console.log(error);
		res.status(500).json(error);
	}
});
empTaskController.delete("/delete/:id", async (req, res) => {
	const { userEmail } = req.body;
	console.log("userEmail: ", userEmail);

	const { id } = req.params;
	try {
		await EmpTaskModel.findOneAndDelete({
			id,
			userEmail
		});
	} catch (error) {
		res.status(500).send(error);
	}
	res.status(200).send({ message: "deleted task successfully" });
});

module.exports = { empTaskController };
