const express = require("express");
const mongoose = require("mongoose")
const fs = require("fs")
const path = require("path")
const connectionString = "mongodb+srv://petparadise:Petparadise@cluster0.zuw8xzo.mongodb.net/test"

const petSchema = require("../../models/petSchema");

const router = express.Router();

const petDetails = [
    { pet: "dog", Details: { petName: "Labrador Retriever", petPrice: "15000", petImgSrc: "../../img/dogLandingPage/Dog_Breeds/labdrador_retriever.png" } },
    { pet: "dog", Details: { petName: "Golden Retriever", petPrice: "25000", petImgSrc: "../../img/dogLandingPage/Dog_Breeds/Golden_retriever.png" } },
    { pet: "dog", Details: { petName: "Beagle", petPrice: "18000", petImgSrc: "../../img/dogLandingPage/Dog_Breeds/beagle.png" } },
    { pet: "dog", Details: { petName: "German shepherd", petPrice: "20000", petImgSrc: "../../img/dogLandingPage/Dog_Breeds/german_shepard.png" } },
    { pet: "dog", Details: { petName: "German shepherd 1", petPrice: "30000", petImgSrc: "../../img/dogLandingPage/Dog_Breeds/german_shepard.png" } },
    { pet: "dog", Details: { petName: "German shepherd 2", petPrice: "250000", petImgSrc: "../../img/dogLandingPage/Dog_Breeds/german_shepard.png" } },
    { pet: "dog", Details: { petName: "German shepherd 3", petPrice: "20000", petImgSrc: "../../img/dogLandingPage/Dog_Breeds/german_shepard.png" } },
    { pet: "dog", Details: { petName: "German shepherd 4", petPrice: "30000", petImgSrc: "../../img/dogLandingPage/Dog_Breeds/german_shepard.png" } },
    { pet: "dog", Details: { petName: "German shepherd 5", petPrice: "250000", petImgSrc: "../../img/dogLandingPage/Dog_Breeds/german_shepard.png" } },
    { pet: "dog", Details: { petName: "German shepherd 6", petPrice: "20000", petImgSrc: "../../img/dogLandingPage/Dog_Breeds/german_shepard.png" } },
    { pet: "dog", Details: { petName: "German shepherd 7", petPrice: "30000", petImgSrc: "../../img/dogLandingPage/Dog_Breeds/german_shepard.png" } },
    { pet: "dog", Details: { petName: "German shepherd 8", petPrice: "250000", petImgSrc: "../../img/dogLandingPage/Dog_Breeds/german_shepard.png" } },
    { pet: "dog", Details: { petName: "German shepherd 9", petPrice: "20000", petImgSrc: "../../img/dogLandingPage/Dog_Breeds/german_shepard.png" } },
    { pet: "dog", Details: { petName: "German shepherd 10", petPrice: "30000", petImgSrc: "../../img/dogLandingPage/Dog_Breeds/german_shepard.png" } },
]

// petSchema.insertMany(petDetails)
router.get("/", async (req, res) => {
    let notlogin = true;
    if (req.session.userName) {
        notlogin = false
    }
    const pets = await petSchema.find({ "pet": "dog" })
    console.log("in dogs page");
    let pricesData = []
    let imgsrcData = []
    let productNamesData = []
    pets.forEach(element => {
        pricesData.push(element.Details.petPrice);
        imgsrcData.push(element.Details.petImgSrc)
        productNamesData.push(element.Details.petName)
    });
    res.render("./HTML/LandingPages/dogLandingPage.ejs", { notlogin, pricesData, productNamesData, imgsrcData })
})

router.post("/data", async (req, res) => {
    console.log("req received");
    const pets = await petSchema.find({ "pet": "dog" })
    let pricesData = []
    let imgsrcData = []
    let productNamesData = []
    pets.forEach(element => {
        pricesData.push(element.Details.petPrice);
        imgsrcData.push(element.Details.petImgSrc)
        productNamesData.push(element.Details.petName)
    });
    data = {
        prices: pricesData,
        Names: productNamesData,
        src: imgsrcData
    }
    res.send(data)
})

module.exports = router;