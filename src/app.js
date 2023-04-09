const express= require("express");
const app= express();
const path= require("path");
const hbs= require("hbs");
const port = process.env.PORT || 8000;
require("./db/conn.js");
const Register= require("./models/registers");
const Outpass_data=require("./models/outpass_data.js");

const staticpath= path.join(__dirname, "../public");
const viewspath= path.join(__dirname, "../template/views");
const partialspath= path.join(__dirname, "../template/partials");


app.use(express.static(staticpath));
app.use(express.json());
app.use(express.urlencoded({extended:false}))
hbs.registerPartials(partialspath);


app.set("view engine","hbs");
app.set("views", viewspath);

app.get("/",(req,res)=>{
    res.render("index")
});
app.get("/register",(req, res)=>{
    res.render("register");
})
app.get("/login",(req, res)=>{
    res.render("login");
})
app.get("/apply",(req, res)=>{
    res.render("apply");
})
app.get("/confirm",(req, res)=>{
    res.render("confirm");
})

app.post("/register", async(req, res)=>{
    try {
     // console.log(req.body.fullname);
     // res.send(req.body.fullname);
     const pswd=req.body.pswd;
     const conpswd= req.body.conpswd;
     if(pswd===conpswd){
         const regEmp= new Register({
             fullname: req.body.fullname,
             username: req.body.username,
             email: req.body.email,
             phone: req.body.phone,
             gender: req.body.gender,
             password: req.body.pswd,
             confirmpassword: req.body.conpswd
         })
         const rgd= await regEmp.save();
         res.status(201).render("apply");
     }
     else{
         res.send("Passwords are not matching");
     }
    } catch (error) {
     res.status(400).send(error);
    }
 })

 //login validation
app.post("/login", async(req, res)=>{
    try {
     const email=req.body.email;
     const pswd=req.body.pswd;
     const useremail= await Register.findOne({email:email});
    
     if(useremail.password===pswd){
        res.status(201).render("apply");
     }else{
        res.send("password is not matching... For any query contact Saurabh Rangdale")
     }
    } catch (error) {
     res.status(400).send("Invalid Email");
    }
 })

 //Apply for outpass online
 app.post("/apply", async(req, res)=>{
    try {
     const outpass=new Outpass_data({
        name: req.body.name,
        roll: req.body.roll,
        hostel: req.body.hostel,
        room: req.body.room,
        phone: req.body.phone,
        departure: req.body.departure,
        return: req.body.return,
        reason: req.body.reason
     })
     const applied=await outpass.save();
     res.status(201).render("confirm");
    } catch (error) {
     res.status(400).send(error);
    }
 })
 

app.listen(port, ()=>{
    console.log(`Connected at port ${port}`);
})