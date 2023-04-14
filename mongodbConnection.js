const mongoose = require('mongoose');
const connectionString = "mongodb+srv://petparadise:Petparadise@cluster0.zuw8xzo.mongodb.net/test"

main().catch(err => console.log(err));
async function main() {
    console.log("mongoose database connected");
    await mongoose.connect(connectionString);
}
module.exports = mongoose.connection