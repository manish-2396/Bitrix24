const mongoose = require("mongoose");
const empTaskSchema = new mongoose.Schema({
	employeeName: {
		type: String,
		required: true
		// unique: true,
	},
	taskName: {
		type: String,
		required: true
		// unique: true,
	},
	startTime: {
		type: String,
		required: true
	},
	endTime: {
		type: String,
		required: true
	},
	adminEmail: {
		type: String,
		required: true
	}
});
const EmpTaskModel = mongoose.model("task", empTaskSchema);

module.exports = { EmpTaskModel };
