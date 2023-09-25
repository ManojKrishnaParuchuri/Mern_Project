const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const bcrypt = require("bcryptjs");
app.set("view engine","ejs");
app.use(express.urlencoded({extended:false}));

const jwt = require("jsonwebtoken");

const JWT_SECRET = "ehdueiunedinefnefninfenefn()hdhufhendnjjdnwn[]]jdjjdejje";

const mongoUrl =
  "mongodb+srv://admin:admin@cluster0.yftugmi.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

 require("./Userdetails");
// require("./imageDetails");

const User = mongoose.model("register_details");
// const Images = mongoose.model("ImageDetails");
app.post("/register", async (req, res) => {
  const { username, email, mobileno, password } = req.body;

  const encryptedPassword = await bcrypt.hash(password, 10);
  

  try {
    const oldUser =await User.findOne({email});
    if(oldUser){
     return  res.send({ error : "User Exists"});
    }
     await User.create({
      username,
      email,
      mobileno,
      password: encryptedPassword,
    });
    res.send({ status: "saved succesfully" });
    
  } catch (error) {
    res.send({ status: "error" });
  }
});



app.post("/login",async(req,res) =>{
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if(!user){
    return res.json({error : "User not found"});
  }

  if(await bcrypt.compare(password,user.password)){
    const token = jwt.sign({ email: user.email},JWT_SECRET);

    if(res.status(201)){
      return res.json({ status: "ok" ,data :token});
    }else {
      return res.json({ error: "error"});
      
    }
  }
  res.json({ status : "error", error: "Invalid Password"});
});

app.post("/userDetails",async(req,res) => {
  const {token} = req.body;
  try{
    const user =jwt.verify(token,JWT_SECRET);
    console.log(user);
    const useremail =user.email;
    User.findOne({ email: useremail}).then((data)=>{
      res.send({status:"ok",data:data});
    })
    .catch((error)=>{
      res.send({status:"error", data:error});
    })
  }catch(error){
   
  }
});

app.listen(8888, () => {
  console.log("Server Started");
});
app.post("/forgot-password",async (req,res)=>{
  const { email }=req.body;
  try{
    const oldUser=await User.findOne({email});
    if(!oldUser){
     return res.json({status:"User Not Exists!"});
    }
    const secret=JWT_SECRET+oldUser.password;
    const token=jwt.sign({email:oldUser.email,id:oldUser._id},secret,{
      expiresIn:"5m",
    });
    const link=`http://localhost:8888/reset-password/${oldUser._id}/${token}`;
    console.log(link);
  }catch (error){}
});
app.get('/reset-password/:id/:token',async(req,res)=>{
  const{id,token}=req.params;
  console.log(req.params);
  const oldUser=await User.findOne({_id:id});
    if(!oldUser){
     return res.json({status:"User Not Exists!"});
    }
    const secret=JWT_SECRET+oldUser.password;
  try{
    const verify=jwt.verify(token,secret);
    res.render("index",{email:verify.email})
  }catch (error){
    res.send("Not Verified");
  }
  
});

app.post('/reset-password/:id/:token',async(req,res)=>{
  const{id,token}=req.params;
 const {password}=req.body;
  const oldUser=await User.findOne({_id:id});
    if(!oldUser){
     return res.json({status:"User Not Exists!"});
    }
    const secret=JWT_SECRET+oldUser.password;
  try{
    const verify=jwt.verify(token,secret);
    const encryptedPassword=await bcrypt.hash(password,10);
    await User.updateOne(
      {
        _id:id,
      },
      {
        $set:{
          password:encryptedPassword,
        },
      }
    );
    res.json({status:"Password Updated"});
    
  }catch (error){
    console.log(error);
    res.json({status:"Something went wrong"});
  }
  
});