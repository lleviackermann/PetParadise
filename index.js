const express = require("express")
const sqlite = require("sqlite3")
const ejs = require("ejs");
const bodyParser = require("body-parser");
const app = express();
const path = require("path")
const authRouter = require("./routes/auth/authRoutes");
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
const session = require('express-session')
const cookieParser = require('cookie-parser')

app.use(session({
    secret: "some secret",
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,
    },
    resave: true,
    saveUninitialized: false,
}))

app.use(cookieParser())

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/client"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }))

//Static files are files that clients download from the server
app.use(express.static("client"));

//authRouter is called everytime the /auth is used in the server
//Runs on every url but works only when specified path is matched in the url 
app.use("/auth", authRouter);
app.get("/", (req, res) => {
    let notlogin = true
    console.log(req.session.userName);
    if (req.session.userName) {
        notlogin = false
    }
    res.render("./HTML/LandingPages/mainLandingPage.ejs", { error: false, notlogin });
});

app.get("/auth/admin/dashboard", (req, res) => {
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


app.listen(8000, (err) => {
    if (err) {
        return console.error(err);
    }
    console.log("server started successfully!");
})



//creating database if not exists
const dbpath = path.join("data", "index.db")
const db = new sqlite.Database(dbpath, sqlite.OPEN_READWRITE, err => {
    if (err) {
        console.log("error in connecting the database");
    }
    else {
        console.log("Database Connected");
    }
})

const createTable1 = "create table if not exists userdata(firstName varchar(50) not null,lastName varchar(50),mailId varchar(30),password varchar(60) not null)"
const createTable2 = "create table if not exists employeedata(mailId varchar(30),password varchar(60) not null)"

const createTable3 = "insert into employeedata values(?,?)"

db.run(createTable1, (err) => {
    if (err) {
        console.log("error in creating the table");
    }
    else {
        console.log("table userdata is created successfully");
    }
})

db.run(createTable2, (err) => {
    if (err) {
        console.log("error in creating the table");
    }
    else {
        console.log("table employeedata is created successfully");
    }
})


// db.run(`drop table employeedata`)