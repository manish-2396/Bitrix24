const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
		// unique: true,
	},
	email: {
		type: String,
		required: true
		// unique: true,
	},
	adminEmail: {
		type: String,
		required: true
	}
});

const EmployeeModel = mongoose.model("employee", employeeSchema);

module.exports = { EmployeeModel };
