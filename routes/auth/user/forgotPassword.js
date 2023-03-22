const express = require("express");
const path = require('path')
const sqlite = require('sqlite3')
const bcrypt = require('bcryptjs')

const router = express.Router();

router.get("/", (req, res) => {
    res.render("./HTML/Authentication/forgotPassword.ejs")
})




const loginquery = "select * from userdata where mailId=?"
const updatequery = "update userdata set password=? where mailId=?"
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
router.post("/verify",async function(req,res){
    let mail = req.body.Email
    db.all(loginquery,[mail],await function(err,rows){
        if(err){
            console.log(err.message);
        }
        if(rows.length == 0){
            res.end("Incorrect Username")
        }
        else if(req.body.Password==req.body.ConfirmPassword){
            bcrypt.hash(req.body.Password,1,function(err,hash){
                console.log("password is:"+req.body.Password);
                console.log(hash+" "+typeof(hash));
                db.run(updatequery,[hash,mail])
                res.end("password changed successfully")
             })
        }
    })
    // res.end("received request successfully")
})


module.exports = router;