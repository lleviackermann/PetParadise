const mongoose = require("mongoose");
const nameSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
})

const usersSchema = new mongoose.Schema({
    name: nameSchema, mailId: { type: String, trim: true }, password: String
})

module.exports = mongoose.model("userSchema", usersSchema)

