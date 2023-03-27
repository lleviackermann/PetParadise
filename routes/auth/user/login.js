const express = require("express");
const path = require('path')
const sqlite = require('sqlite3')
const bcrypt = require('bcryptjs')
const router = express.Router();
// var session = require('express-session')
var flush = require('connect-flash')

router.get("/", (req, res) => {
    res.render("./HTML/Authentication/login.ejs", { error: false })
})

// router.use(session({
//     secret: 'secret',
//     cookie: { maxAge: 60000 },
//     resave: false,
//     saveUninitialized: false
// }))

router.use(flush())

const loginquery = "select * from userdata where mailId=?"
const dbpath = path.join(__dirname, "..", "..", "..", "data", "index.db")
const db = new sqlite.Database(dbpath, sqlite.OPEN_READWRITE, err => {
    if (err) {
        console.log(dbpath);
    }
    else {
        console.log("Database Connected");
    }
})

const checkPassword = (Password, hashedPassword) => {
    return bcrypt.compareSync(Password, hashedPassword)
}

router.post("/", async function (req, res) {
    let mail = req.body.Email
    let password = req.body.Password
    let matched;
    await db.all(loginquery, [mail], function (err, rows) {
        if (err) {
            console.log(err.message);
        }
        if (rows.length == 0) {
            res.render("./HTML/Authentication/login", { error: true, message: "Invalid Username!Please try again" })
        }
        rows.forEach(async (row) => {
            console.log(row)
            matched = await checkPassword(password, row.password)
            console.log(matched);
            if (matched == true) {
                req.session.userMail = mail
                // //  console.log("row is:" + typeof (row));
                // // console.log("matched is true:" + req.session.user);
                let name = row.firstName.concat(" ", row.lastName)
                req.session.userName = name
                res.render("./HTML/LandingPages/mainLandingPage", { error: true, message: "Login Successfull!", notlogin: false })
                // success = true
            } else {
                res.render("./HTML/Authentication/login", { error: true, message: "Incorrect Password!Please try again" })
            }
        });
    })
    // res.end("received request successfully")
})


module.exports = router;