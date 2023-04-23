const express = require("express");
const mongoose = require("mongoose")
const connection = require("../../mongodbConnection")
const connectionString = "mongodb+srv://petparadise:Petparadise@cluster0.zuw8xzo.mongodb.net/test"

const petSchema = require("../../client/Schemas/petSchema");

const router = express.Router();

const petDetails = [
    { pet: "cat", Details: { petName: "Persian Cat", petPrice: "20000", petImgSrc: "../../img/catLandingPage/Cat_Breeds/persian.png" } },
    { pet: "cat", Details: { petName: "Ragdoll", petPrice: "25000", petImgSrc: "../../img/catLandingPage/Cat_Breeds/Ragdoll.png" } },
    { pet: "cat", Details: { petName: "British Shorthair", petPrice: "40000", petImgSrc: "../../img/catLandingPage/Cat_Breeds/british shorthair.png" } },
    { pet: "cat", Details: { petName: "Scottish Fold", petPrice: "15000", petImgSrc: "../../img/catLandingPage/Cat_Breeds/scottish-fold.png" } },
    { pet: "cat", Details: { petName: "Scottish Fold 1", petPrice: "30000", petImgSrc: "../../img/catLandingPage/Cat_Breeds/scottish-fold.png" } },
    { pet: "cat", Details: { petName: "Premium Scottish Fold", petPrice: "250000", petImgSrc: "../../img/catLandingPage/Cat_Breeds/scottish-fold.png" } },
    { pet: "cat", Details: { petName: "Scottish Fold 3", petPrice: "20000", petImgSrc: "../../img/catLandingPage/Cat_Breeds/scottish-fold.png" } },
    { pet: "cat", Details: { petName: "Scottish Fold 4", petPrice: "30000", petImgSrc: "../../img/catLandingPage/Cat_Breeds/scottish-fold.png" } },
    { pet: "cat", Details: { petName: "Scottish Fold 5", petPrice: "50000", petImgSrc: "../../img/catLandingPage/Cat_Breeds/scottish-fold.png" } },
    { pet: "cat", Details: { petName: "Scottish Fold 6", petPrice: "20000", petImgSrc: "../../img/catLandingPage/Cat_Breeds/scottish-fold.png" } },
    { pet: "cat", Details: { petName: "Scottish Fold 7", petPrice: "30000", petImgSrc: "../../img/catLandingPage/Cat_Breeds/scottish-fold.png" } },
    { pet: "cat", Details: { petName: "Scottish Fold 8", petPrice: "25000", petImgSrc: "../../img/catLandingPage/Cat_Breeds/scottish-fold.png" } },
    { pet: "cat", Details: { petName: "Scottish Fold 9", petPrice: "20000", petImgSrc: "../../img/catLandingPage/Cat_Breeds/scottish-fold.png" } },
    { pet: "cat", Details: { petName: "Scottish Fold 10", petPrice: "30000", petImgSrc: "../../img/catLandingPage/Cat_Breeds/scottish-fold.png" } },
]

// petSchema.insertMany(petDetails)


router.get("/", async (req, res) => {
    let notlogin = true;
    if (req.session.userName) {
        notlogin = false
    }
    const pets = await petSchema.find({ "pet": "cat" })
    console.log("in cats page");
    let pricesData = []
    let imgsrcData = []
    let productNamesData = []
    pets.forEach(element => {
        pricesData.push(element.Details.petPrice);
        imgsrcData.push(element.Details.petImgSrc)
        productNamesData.push(element.Details.petName)
    });
    res.render("./HTML/LandingPages/catLandingPage.ejs", { notlogin, pricesData, productNamesData, imgsrcData })
})

router.post("/", (req, res) => {

})

module.exports = router;