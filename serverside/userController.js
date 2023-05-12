let User=require('./userModelSchema')
let jwt=require('jsonwebtoken')

let createToken=(_id)=>{
  return  jwt.sign({_id},process.env.SECRET_STR,{expiresIn:'2d'})
}





exports.loginUser= async function(req,res){
const{email,password}=req.body
try{
 // const{email,password}=req.body
  let user=await User.login(email,password)
  let token=createToken(user._id)
  res.status(200).json({email,token})
  
}
catch(error){
res.status(400).json(error)

}

}

exports.signupUser= async function(req,res){
   const{email,password}=req.body
try{
 // const{email,password}=req.body 
const user=await User.signup(email,password)

let token=createToken(user._id)
res.status(200).json({email,token})
}
catch(error){
 res.status(400).json(error)
}
}