const express= require("express");
const app= express();
const path= require("path");
const hbs= require("hbs");
const port = process.env.PORT || 8000;
require("./db/conn.js");
const Register= require("./models/registers");

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
    res.render("register")
});
app.get("/register",(req, res)=>{
    res.render("register");
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
         res.status(201).render("index");
     }
     else{
         res.send("Passwords are not matching");
     }
    } catch (error) {
     res.status(400).send(error);
    }
 })
 

app.listen(port, ()=>{
    console.log(`Connected at port ${port}`);
})