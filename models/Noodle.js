const mongoose = require("mongoose")
const schema = mongoose.Schema({
judul: String,
isi: String,
harga: String,
foto: String,

})
module.exports = mongoose.model("Noodle"
, schema)