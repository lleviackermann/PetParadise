const express = require("express");

const petSchema = require("../../models/productSchema");

const router = express.Router();

const petproductDetails = [
    { productType: "pet-bird", productDetails: { Name: " Budgerigar", price: "1500", src: "../../img/birdLandingPage/Bird_breeds/Budgerigar.png" } },
    { productType: "pet-bird", productDetails: { Name: "Cockatiel", price: "5000", src: "../../img/birdLandingPage/Bird_breeds/Cocktail.png" } },
    { productType: "pet-bird", productDetails: { Name: "Dove", price: "7500", src: "../../img/birdLandingPage/Bird_breeds/dove.jpg" } },
    { productType: "pet-bird", productDetails: { Name: "Finch", price: "2000", src: "../../img/birdLandingPage/Bird_breeds/Finch.png" } },
    { productType: "pet-bird", productDetails: { Name: "Finch 1", price: "3000", src: "../../img/birdLandingPage/Bird_breeds/Finch.png" } },
    { productType: "pet-bird", productDetails: { Name: "Finch 2", price: "25000", src: "../../img/birdLandingPage/Bird_breeds/Finch.png" } },
    { productType: "pet-bird", productDetails: { Name: "Finch 3", price: "2000", src: "../../img/birdLandingPage/Bird_breeds/Finch.png" } },
    { productType: "pet-bird", productDetails: { Name: "Finch 4", price: "3000", src: "../../img/birdLandingPage/Bird_breeds/Finch.png" } },
    { productType: "pet-bird", productDetails: { Name: "Premium Finch", price: "50000", src: "../../img/birdLandingPage/Bird_breeds/Finch.png" } },
    { productType: "pet-bird", productDetails: { Name: "Finch 6", price: "2000", src: "../../img/birdLandingPage/Bird_breeds/Finch.png" } },
    { productType: "pet-bird", productDetails: { Name: "Finch 7", price: "3000", src: "../../img/birdLandingPage/Bird_breeds/Finch.png" } },
    { productType: "pet-bird", productDetails: { Name: "Finch 8", price: "1800", src: "../../img/birdLandingPage/Bird_breeds/Finch.png" } },
    { productType: "pet-bird", productDetails: { Name: "Finch 9", price: "2000", src: "../../img/birdLandingPage/Bird_breeds/Finch.png" } },
    { productType: "pet-bird", productDetails: { Name: "Finch 10", price: "3000", src: "../../img/birdLandingPage/Bird_breeds/Finch.png" } },
]

// petSchema.insertMany(petproductDetails)
router.get("/", async (req, res) => {
    let notlogin = true;
    if (req.session.userName) {
        notlogin = false
    }
    const pets = await petSchema.find({ "productType": "pet-bird" })
    console.log("in birds page");
    let pricesData = []
    let imgsrcData = []
    let productNamesData = []
    pets.forEach(element => {
        pricesData.push(element.productDetails.price);
        imgsrcData.push(element.productDetails.src)
        productNamesData.push(element.productDetails.Name)
    });

    res.render("./HTML/LandingPages/birdLandingPage.ejs", { notlogin, pricesData, productNamesData, imgsrcData })
})

router.post("/", (req, res) => {

})

module.exports = router;