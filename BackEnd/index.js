const express = require("express");
const { connection } = require("./config/db.js");
const { authentication } = require("./middleware/authentication.js");
const { userController } = require("./Routes/User.routes.js");
const cors = require("cors");
const { employeeController } = require("./Routes/Employee.routes.js");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Welcome to Homepage!");
});

app.use("/user", userController);
app.use(authentication);
app.use("/employee", employeeController);

const PORT = process.env.PORT || 8080;

app.listen(PORT, async (req, res) => {
	try {
		await connection;
		console.log("connection is established " + PORT);
	} catch (e) {
		console.log(e);
	}
});
