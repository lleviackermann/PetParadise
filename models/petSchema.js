const mongoose = require("mongoose");
const petDetails = new mongoose.Schema({
    petName: String,
    petPrice: Number,
    petImgSrc: String,
})


const petSchema = new mongoose.Schema({
    pet: String,
    Details: petDetails
})

module.exports = mongoose.model("petSchema", petSchema)
