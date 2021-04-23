const mongoose = require("mongoose")
const schema = mongoose.Schema({
title: String,
content: String,
price: String,
gambar: String,

})
module.exports = mongoose.model("Pizza"
, schema)