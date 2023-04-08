const mongoose = require('mongoose');


mongoose.connect("mongodb://0.0.0.0:27017/Outpass_user_reg",{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
.then(()=> console.log("connected to database") )
.catch((error)=> console.log(error.message) )
