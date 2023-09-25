const mongoose = require("mongoose");

const UserLoginSchema = new mongoose.Schema(
    {
     
    
    email :
     {
        type:String,
        unique : true,
    },
    
    password : String,
    
    },
    {
        
        collection : "login_details",
    }
);

 mongoose.model("login_details",UserLoginSchema);
   

