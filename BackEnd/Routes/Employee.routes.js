const { Router } = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { EmployeeModel } = require("../Models/Employee.model.js");
require("dotenv").config();

const employeeController = Router();

employeeController.get("/", async (req, res) => {
	const employee = await EmployeeModel.find({
		adminEmail: req.body.adminEmail
	});
	res.send(employee);
});

employeeController.post("/create", async (req, res) => {
	const { name, email, adminEmail } = req.body;
	console.log(req.body);

	const employee = new EmployeeModel({
		name,
		email,
		adminEmail
	});
	try {
		await employee.save();
		res.status(200).send({ employee: "Employee added Successfully" });
	} catch (error) {
		res.status(500).send({ error: "employee is already there" });
	}
});
module.exports = { employeeController };
