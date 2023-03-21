const express = require('express')
const path = require('path')
const sqlite = require('sqlite3').verbose()
const bdparser = require('body-parser')
const bcrypt = require('bcryptjs')
const app = express()
app.use(bdparser.urlencoded({extended: true}))


app.use(bdparser.json())

app.use(express.static("C:/Users/chk24/OneDrive/Desktop/pet paradise"))
const dbpath = path.join("data","demo.db")
const db = new sqlite.Database(dbpath,sqlite.OPEN_READWRITE,err=>{
    if(err){
        console.log("error detected");
    }
    else{
        console.log("Database Connected");
    }
})

const createTable = "create table if not exists userdata(firstName varchar(50) not null,lastName varchar(50),mailId varchar(30),password varchar(60) not null)"
const adddata = "insert into userdata values(?,?,?,?)"
const getdata = "select * from userdata"
const loginquery = "select * from userdata where mailId=?"
db.run(createTable,(err)=>{
    if(err){
        console.log("error in creating the table");
    }
    console.log("table userdata is created successfully");
})

// db.all(getdata, [], (err, rows) => {
//     if (err) return console.error(err.message);
//     rows.forEach((row) => {
//         console.log(row);
//     });
// })





app.listen(8000,function(){
    console.log("Server Started");
})

app.get("/",function(req,res){
    res.sendFile(path.resolve(__dirname,"..","HTML/Authentication/signup.html"))
})

app.get("/login.html",function(req,res){
    res.sendFile(path.resolve(__dirname,"..","HTML/Authentication/login.html"))
})

app.get("/signup.html",function(req,res){
    res.sendFile(path.resolve(__dirname,"..","HTML/Authentication/signup.html"))
})


app.post("/signup" ,async function(req,res){
if(req.body.Password === req.body.ConfirmPassword){
    bcrypt.hash(req.body.Password,1, await function(err,hash){
        db.run(adddata,[req.body.FirstName,req.body.LastName,req.body.Email,hash],err=>{
            if(err){
                console.log(err.message);
            }
        })    
    })}
    res.end("Data added to the database successfully");

})

const checkPassword = (Password,hashedPassword)=>{
      return bcrypt.compareSync(Password,hashedPassword)
}

app.post("/login",async function(req,res){
    let mail = req.body.Email
    let password = req.body.Password
    let matched;
    await db.all(`select * from userdata where mailId=?`,[mail], function(err,rows){
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
            }else{
                res.end("Password is incorrect")
            }        
        });
        })
})


// db.run(`drop table userdata`)

