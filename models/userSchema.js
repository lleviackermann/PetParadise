const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const nameSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
});

const userSchema = new mongoose.Schema({
  name: nameSchema,
  mailId: { type: String, trim: true },
  password: String,
  userCart: [
    {
      // productType: String,
      productDetails: {
        title: String,
        price: Number,
        quantity: Number,
        src: { type: String },
      },
    },
  ],
  appointment: [
    {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "appointmentSchema",
    },
  ],
  // appointment: [
  //   {
  //     appointmentId: {
  //       type: Schema.Types.ObjectId,
  //       required: true,
  //       ref: "appointmentSchema",
  //     },
  //   },
  // ],
  // appointment: [
  //   {
  //     userName: String,
  //     package: String,
  //     number: String,
  //     date: String,
  //     time: String,
  //     appointmentType: String,
  //     status: String,
  //   },
  // ],
});

module.exports = mongoose.model("userSchema", userSchema);
