const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes")
const path = require('path');

mongoose
	.connect("mongodb://localhost:27017/house_simple", { useNewUrlParser: true })
	.then(() => {
		const app = express()
		app.use(express.json()) // new
		app.use("/simplehouse", routes)
		app.use(express.static(path.join(__dirname, 'public')));
		app.listen(5000, () => {
			console.log("Server has started!")
		})
	})