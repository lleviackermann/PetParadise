const express = require("express")
const authRouter = require("./routes/auth/authRoutes");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const app = express();
const path = require("path")
const dogsPage = require("./routes/pages/dogs");
const catsPage = require("./routes/pages/cats")
const birdsPage = require("./routes/pages/birds")
const fishPage = require("./routes/pages/fish")
const servicePage = require("./routes/pages/services")
const productsPage = require("./routes/pages/products")
const vetcarePage = require("./routes/pages/vetcare")
const petfoodPage = require("./routes/pages/petfood")
const userProfile = require("./routes/profiles/userProfile")
const userPayment = require("./routes/payments/payment")

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/client"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("client"));


app.use("/auth", authRouter);
app.get("/", (req, res) => {
    res.render("./HTML/LandingPages/mainLandingPage.ejs");
});

app.get("/admin", (req, res) => {
    res.render("./HTML/Admin/admin.ejs");
})

app.use("/dogs", dogsPage)
app.use("/cats", catsPage)
app.use("/birds", birdsPage)
app.use("/fish", fishPage)
app.use("/services", servicePage)
app.use("/products", productsPage)
app.use("/vet-care", vetcarePage)
app.use("/petsfoods", petfoodPage)
app.use("/user/profile", userProfile)
app.use("/user/payment", userPayment)


app.listen(3000, (err) => {
    if (err) {
        return console.error(err);
    }

    console.log("server started successfully!");
})