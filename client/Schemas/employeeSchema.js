const mongoose = require("mongoose")
const nameSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
})

const employeeSchema = new mongoose.Schema({
    name: nameSchema, employeeId: String, password: String
})

module.exports = mongoose.model("employee", employeeSchema)