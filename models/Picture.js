const mongoose = require("mongoose")

const schema = mongoose.Schema({
	pict: String,
})

module.exports = mongoose.model("Picture", schema)