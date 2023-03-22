const express = require("express");
const path = require('path')
const sqlite = require('sqlite3')
const bcrypt = require('bcryptjs')
const router = express.Router();

router.get("/", (req, res) => {
    res.render("./HTML/Authentication/employeeLogin.ejs");
})

const loginquery = "select * from employeedata where mailId=?"
const dbpath = path.join(__dirname,"..","..","..","data","index.db")
const db = new sqlite.Database(dbpath,sqlite.OPEN_READWRITE,err=>{
    if(err){
        console.log(dbpath);
    }
    else{
        console.log("Database Connected");
    }
})

const checkPassword = (Password,hashedPassword)=>{
    return bcrypt.compareSync(Password,hashedPassword)
}
router.post("/post",async function(req,res){
    let mail = req.body.Email
    let password = req.body.Password
    let matched;
    await db.all(loginquery,[mail], function(err,rows){
            if(err){
                console.log(err.message);
            }
            if(rows.length == 0){
                res.end("Incorrect UserName")
            }
          rows.forEach(async (row) => {
            console.log(row)
            matched = await checkPassword(password,row.password)
            // console.log("matched:"+checkPassword(password,row.password));
            console.log(matched);
            if(matched == true){
                res.end("Password succesfully  matched")
                success = true

            }else{
                res.end("Password is incorrect")
            }        
        });
        })
})


module.exports = router;