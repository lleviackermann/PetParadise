const express = require("express");

const appointmentSchema = require("../../models/appointment");

const router = express.Router();

router.get("/", (req, res) => {
    let notlogin = true;
    if (req.session.userName) {
        notlogin = false
    }
    res.render("./HTML/LandingPages/servicesLandingPage.ejs", { notlogin })
})

router.post("/", (req, res) => {
rs
})

router.post("/appointment", async (req,res) => {
    let pack = req.body.selpack;
    let num = req.body.selnum;
    let date = req.body.seldate;
    let time = req.body.seltime;
    await appointmentSchema.create({userName:req.session.userName,package:pack,number:num,date:date,time:time})
        res.render("./HTML/PaymentPage/paymentPage.ejs")
})

module.exports = router;