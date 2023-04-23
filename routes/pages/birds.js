const express = require("express");
const mongoose = require("mongoose")
const connection = require("../../mongodbConnection")
const connectionString = "mongodb+srv://petparadise:Petparadise@cluster0.zuw8xzo.mongodb.net/test"

const petSchema = require("../../client/Schemas/petSchema");

const router = express.Router();

const petDetails = [
    { pet: "bird", Details: { petName: " Budgerigar", petPrice: "1500", petImgSrc: "../../img/birdLandingPage/Bird_breeds/Budgerigar.png" } },
    { pet: "bird", Details: { petName: "Cockatiel", petPrice: "5000", petImgSrc: "../../img/birdLandingPage/Bird_breeds/Cocktail.png" } },
    { pet: "bird", Details: { petName: "Dove", petPrice: "7500", petImgSrc: "../../img/birdLandingPage/Bird_breeds/dove.jpg" } },
    { pet: "bird", Details: { petName: "Finch", petPrice: "2000", petImgSrc: "../../img/birdLandingPage/Bird_breeds/Finch.png" } },
    { pet: "bird", Details: { petName: "Finch 1", petPrice: "3000", petImgSrc: "../../img/birdLandingPage/Bird_breeds/Finch.png" } },
    { pet: "bird", Details: { petName: "Finch 2", petPrice: "25000", petImgSrc: "../../img/birdLandingPage/Bird_breeds/Finch.png" } },
    { pet: "bird", Details: { petName: "Finch 3", petPrice: "2000", petImgSrc: "../../img/birdLandingPage/Bird_breeds/Finch.png" } },
    { pet: "bird", Details: { petName: "Finch 4", petPrice: "3000", petImgSrc: "../../img/birdLandingPage/Bird_breeds/Finch.png" } },
    { pet: "bird", Details: { petName: "Premium Finch", petPrice: "50000", petImgSrc: "../../img/birdLandingPage/Bird_breeds/Finch.png" } },
    { pet: "bird", Details: { petName: "Finch 6", petPrice: "2000", petImgSrc: "../../img/birdLandingPage/Bird_breeds/Finch.png" } },
    { pet: "bird", Details: { petName: "Finch 7", petPrice: "3000", petImgSrc: "../../img/birdLandingPage/Bird_breeds/Finch.png" } },
    { pet: "bird", Details: { petName: "Finch 8", petPrice: "1800", petImgSrc: "../../img/birdLandingPage/Bird_breeds/Finch.png" } },
    { pet: "bird", Details: { petName: "Finch 9", petPrice: "2000", petImgSrc: "../../img/birdLandingPage/Bird_breeds/Finch.png" } },
    { pet: "bird", Details: { petName: "Finch 10", petPrice: "3000", petImgSrc: "../../img/birdLandingPage/Bird_breeds/Finch.png" } },
]

// petSchema.insertMany(petDetails)
router.get("/", async (req, res) => {
    let notlogin = true;
    if (req.session.userName) {
        notlogin = false
    }
    const pets = await petSchema.find({ "pet": "bird" })
    console.log("in birds page");
    let pricesData = []
    let imgsrcData = []
    let productNamesData = []
    pets.forEach(element => {
        pricesData.push(element.Details.petPrice);
        imgsrcData.push(element.Details.petImgSrc)
        productNamesData.push(element.Details.petName)
    });

    res.render("./HTML/LandingPages/birdLandingPage.ejs", { notlogin, pricesData, productNamesData, imgsrcData })
})

router.post("/", (req, res) => {

})

module.exports = router;