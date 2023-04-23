const express = require("express");
const path = require("path")
const petSchema = require("../../models/petSchema");

const router = express.Router();
const petDetails = [
    { pet: "fish", Details: { petName: "Gold Fish", petPrice: "100", petImgSrc: "../../img/fishLandingPage/Fish_Images/gold_fish.png" } },
    { pet: "fish", Details: { petName: "Koi Fish", petPrice: "300", petImgSrc: "../../img/fishLandingPage/Fish_Images/koi_fish.png" } },
    { pet: "fish", Details: { petName: "Tiger barb", petPrice: "150", petImgSrc: "../../img/fishLandingPage/Fish_Images/tiger_barb.png" } },
    { pet: "fish", Details: { petName: "Molly fish", petPrice: "200", petImgSrc: "../../img/fishLandingPage/Fish_Images/molly_fish.png" } },
    { pet: "fish", Details: { petName: "Molly fish 1", petPrice: "300", petImgSrc: "../../img/fishLandingPage/Fish_Images/molly_fish.png" } },
    { pet: "fish", Details: { petName: "Molly fish 2", petPrice: "400", petImgSrc: "../../img/fishLandingPage/Fish_Images/molly_fish.png" } },
    { pet: "fish", Details: { petName: "Molly fish 3", petPrice: "200", petImgSrc: "../../img/fishLandingPage/Fish_Images/molly_fish.png" } },
    { pet: "fish", Details: { petName: "Molly fish 4", petPrice: "150", petImgSrc: "../../img/fishLandingPage/Fish_Images/molly_fish.png" } },
    { pet: "fish", Details: { petName: "Molly fish 5", petPrice: "120", petImgSrc: "../../img/fishLandingPage/Fish_Images/molly_fish.png" } },
    { pet: "fish", Details: { petName: "Molly fish 6", petPrice: "100", petImgSrc: "../../img/fishLandingPage/Fish_Images/molly_fish.png" } },
    { pet: "fish", Details: { petName: "Molly fish 7", petPrice: "200", petImgSrc: "../../img/fishLandingPage/Fish_Images/molly_fish.png" } },
    { pet: "fish", Details: { petName: "Molly fish 8", petPrice: "150", petImgSrc: "../../img/fishLandingPage/Fish_Images/molly_fish.png" } },
    { pet: "fish", Details: { petName: "Molly fish 9", petPrice: "250", petImgSrc: "../../img/fishLandingPage/Fish_Images/molly_fish.png" } },
    { pet: "fish", Details: { petName: "Premium Gold Fish", petPrice: "30000", petImgSrc: "../../img/fishLandingPage/Fish_Images/molly_fish.png" } },
]

// petSchema.insertMany(petDetails)

router.get("/", async (req, res) => {
    let notlogin = true;
    if (req.session.userName) {
        notlogin = false
    }
    const pets = await petSchema.find({ "pet": "fish" })
    let pricesData = []
    let imgsrcData = []
    let productNamesData = []
    pets.forEach(element => {
        pricesData.push(element.Details.petPrice);
        imgsrcData.push(element.Details.petImgSrc)
        productNamesData.push(element.Details.petName)
    });
    res.render("./HTML/LandingPages/fishLandingPage.ejs", { notlogin, pricesData, productNamesData, imgsrcData })
})

router.post("/", (req, res) => {

})

module.exports = router;