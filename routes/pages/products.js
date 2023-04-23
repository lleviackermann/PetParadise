const express = require("express");
const bdparser = require("body-parser")
const productSchema = require("../../client/Schemas/productSchema")
const router = express.Router();

// // router.use(bdparser.json());
// router.use(bdparser.urlencoded({ extended: true }));
// router.use(express.urlencoded({ extended: true }))

router.get("/", async (req, res) => {
    const products = await productSchema.find({ productType: "Accessory" })
    let Names = []
    let prices = []
    let src = []
    products.forEach(element => {
        Names.push(element.productDetails.Name);
        prices.push(element.productDetails.price)
        src.push(element.productDetails.src)
    });
    res.render("./HTML/LandingPages/productLandingPage.ejs", { Names, prices, src })
})

router.post("/product", async (req, res) => {
    console.log("request made");
    console.log(req.body);
    if (req.body.type === "add") {
        const product = await productSchema.create({ productType: "Accessory", productDetails: { Name: req.body.title, price: req.body.price, src: req.body.imagSource } })
        product.save()
    }
    else if (req.body.type === "remove") {
        console.log(req.body);
        await productSchema.findOneAndDelete({ productType: "Accessory", "productDetails.Name": req.body.title, "productDetails.price": req.body.price, "productDetails.src": req.body.imagSource.trim() })
    }
})

module.exports = router;