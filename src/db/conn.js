const mongoose = require('mongoose');


//mongoose.connect("mongodb://0.0.0.0:27017/Outpass_user_reg",{
mongoose.connect("mongodb+srv://vishnu:123@cluster0.w9vnd2w.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
.then(()=> console.log("connected to database") )
.catch((error)=> console.log(error.message) )
