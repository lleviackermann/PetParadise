const express = require("express");
const userSchema = require("../../models/userSchema");
const announcement = require("../../models/announcement");
const router = express.Router();
const Orders = require("../../models/orders");
const productSchemas = require("../../models/productSchema");
const appointment = require("../../models/appointment");

router.get("/", async (req, res) => {
  let userName = req.session.userName;
  let userMail = req.session.userMail;
  notlogin = true;
  if (userName) {
    notlogin = false;
  }
  let orders, app;
  if (!notlogin) {
    const user = await userSchema.findOne({ mailId: userMail });
    orders = await Orders.find({ userId: user._id })
      .populate("prodId")
      .populate("userId")
      .lean()
      .exec();
    //   app = await userSchema
    //     .find({ mailId: user.mailId })
    //     .populate("appointment")
    //     .lean()
    //     .exec();
    // }
    let appointments = [];
    app = await userSchema
      .find({ mailId: userMail })
      .populate("appointment")
      .lean()
      .exec();

    for (i = 0; i < user.appointment.length; i++) {
      await appointment.findById(user.appointment[i]).then((p) => {
        appointments.push(p);
      });
    }

    console.log("app", appointments);

    // let app = await userSchema
    //   .find({ mailId: userMail }, { appointment: 1 })
    //   .populate("appointment");
    // console.log(app[0].appointment[0]);
    // let appointments = app.appointment;
    // app.appointment.forEach(async (element) => {
    //   console.log(element);
    //   await appointment.findById(element).then((p) => {
    //     appointments.push(p);
    //   });
    // });
    console.log("appointments", app[0].appointment);
    let announcements = await announcement.find({}, { id: 0, _v: 0 });
    res.render("./HTML/ProfilePages/userProfile.ejs", {
      userName,
      userMail,
      appointments,
      announcements,
      orders,
    });
  }
});

router.post("/", (req, res) => {});

router.post("/updateProfile", async (req, res) => {
  let fname = req.body.newFname;
  let lname = req.body.newLname;
  let mail = req.session.userMail;

  const oldFname = req.session.userName.split(" ")[0];
  let f = 0;
  let l = 0;
  const oldLname = req.session.userName.split(" ")[1];
  // console.log(fname + " " + lname);
  if (fname === "") {
    await userSchema.findOneAndUpdate(
      { mailId: mail },
      { "name.lastName": lname }
    );
    l = 1;
  }
  if (lname === "") {
    await userSchema.findOneAndUpdate(
      { mailId: mail },
      { "name.firstName": fname }
    );
    f = 1;
  }
  if (lname && fname) {
    await userSchema.findOneAndUpdate(
      { mailId: mail },
      { "name.firstName": fname, "name.lastName": lname }
    );
    f = 1;
    l = 1;
  }
  if (f == 1 && l == 1) {
    req.session.userName = fname + " " + lname;
  } else if (f == 1) {
    req.session.userName = fname + " " + oldLname;
  } else if (l == 1) {
    req.session.userName = oldFname + " " + lname;
  }

  // res.render("./HTML/ProfilePages/userProfile.ejs", {
  //   userName: req.session.userName,
  //   userMail: mail,
  // });
  // res.redirect("/user/profile");
});

module.exports = router;
