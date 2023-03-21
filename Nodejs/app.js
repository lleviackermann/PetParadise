const express = require('express')
const path = require('path')
const sqlite = require('sqlite3').verbose()
const bdparser = require('body-parser')
const bcrypt = require('bcryptjs')
const app = express()
app.use(bdparser.urlencoded({extended: true}))


app.set('views engine','ejs')


app.use(bdparser.json())

app.use(express.static(path.join(__dirname,"..")))
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
const updatequery = "update userdata set password=? where mailId=?"
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
    // res.sendFile(path.resolve(__dirname,"..","HTML/Authentication/signup.html"))
    res.render('login.ejs')
})

app.get("/login",function(req,res){
    // res.sendFile(path.resolve(__dirname,"..","HTML/Authentication/login.html"))
    res.render('login.ejs')
})

app.get("/signup",function(req,res){
    // res.sendFile(path.resolve(__dirname,"..","HTML/Authentication/signup.html"))
    res.render('signup.ejs')
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


// const encryptPassword =  bcrypt.hashSync(password,1,function(err,hash){
//         console.log("password is:"+password);
//         console.log(hash+" "+typeof(hash));
//         return hash
//      })



var success

app.get('/forgot',function(req,res){
    res.sendFile(path.resolve(__dirname,"..","HTML/Authentication/forgot password.html"))
})

app.post('/verify',async function(req,res){
    let mail = req.body.Email
    db.all(loginquery,[mail],await  function(err,rows){
        if(err){
            console.log(err.message);
        }
        if(rows.length == 0){
            res.end("Incorrect UserName")
        }
        else{
            bcrypt.hash(req.body.Password,1,function(err,hash){
                console.log("password is:"+req.body.Password);
                console.log(hash+" "+typeof(hash));
                db.run(updatequery,[hash,mail])
                res.end("password changed successfully")
             })
        }
    })

    // res.end("skdjskd")


})


app.post("/login",async function(req,res){
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


// db.run(`drop table userdata`)

/* if(success){
    console.log("Hello");
    document.getElementById("#verify").innerText = "User logged in successfully"
} */