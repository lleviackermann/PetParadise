const express = require("express");
const appointmentSchema = require("../../models/appointment");
const userSchema = require("../../models/userSchema");

const router = express.Router();

router.get("/", async (req, res) => {
  let notlogin = true;
  if (req.session.userName) {
    notlogin = false;
  }
  let cartNames = [];
  let cartSrc = [];
  let cartPrices = [];
  const cartItems = await userSchema.findOne(
    { mailId: req.session.userMail },
    { userCart: 1 }
  );
  if (!notlogin) {
    let i = 0;
    cartItems.userCart.forEach((element) => {
      console.log(element);
      console.log(element.productDetails);
      cartNames.push(element.productDetails.title);
      cartPrices.push(element.productDetails.price);
      cartSrc.push(element.productDetails.src);
    });
  }
  res.render("./HTML/LandingPages/servicesLandingPage.ejs", {
    notlogin,
    cartNames,
    cartPrices,
    cartSrc,
  });
});

router.post("/", (req, res) => {});

router.post("/appointment", async (req, res) => {
  let notlogin = true;
  if (req.session.userName) {
    notlogin = false;
  }
  let pack = req.body.selpack;
  let num = req.body.selmun;
  let date = req.body.seldate;
  let time = req.body.seltime;
  let mail = req.session.userMail;
  let apptype = "salon";
  let status = "pending";
  let newapp = await appointmentSchema
    .create({
      userName: req.session.userName,
      userMail: mail,
      package: pack,
      number: num,
      date: date,
      time: time,
      appointmentType: apptype,
      status: status,
    })
    .then(async (result) => {
      await userSchema.updateOne(
        { mailId: req.session.userMail },
        {
          $push: {
            appointment: {
              _id: result._id,
            },
          },
        }
      );
    });
  res.redirect("/services");
  // res.render("./HTML/LandingPages/vetcareLandingPage.ejs", {
  //   notlogin,
  //   cartNames,
  //   cartPrices,
  //   cartSrc,
  // });
});

module.exports = router;
