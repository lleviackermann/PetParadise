const express = require('express');
const path = require('path')
const sqlite = require('sqlite3')
const bcrypt = require('bcryptjs')

const router = express.Router();

router.get("/", (req, res) => {
    res.render("./HTML/Authentication/signup.ejs", { error: false })
})

const adddata = "insert into userdata values(?,?,?,?)"
const findData = "select * from userdata where mailId=?"
const dbpath = path.join(__dirname, "..", "..", "..", "data", "index.db")
const db = new sqlite.Database(dbpath, sqlite.OPEN_READWRITE, err => {
    if (err) {
        console.log(dbpath);
    }
    else {
        console.log("Database Connected");
    }
})


router.post("/", async function (req, res) {
    db.all(findData, [req.body.Email], async function (err, rows) {
        console.log(rows.length);
        if (rows.length != 0) {
            res.render("./HTML/Authentication/signup", { error: true, message: "User already exists" });
        }
        else if (req.body.Password === req.body.ConfirmPassword) {
            bcrypt.hash(req.body.Password, 1, await function (err, hash) {
                db.run(adddata, [req.body.FirstName, req.body.LastName, req.body.Email, hash], err => {
                    if (err) {
                        console.log(err.message);
                    }
                })
            })
            res.render("./HTML/Authentication/login", { error: true, message: "Congratulations, Your account has been successfully created! Please login to continue." });
        }
        else {
            res.render("./HTML/Authentication/signup");
        }
    })
})
module.exports = router;


