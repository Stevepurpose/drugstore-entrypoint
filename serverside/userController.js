let User=require('./userModelSchema')
let jwt=require('jsonwebtoken')

let createToken=(_id)=>{
  return  jwt.sign({_id},process.env.SECRET_STR,{expiresIn:'2d'})
}





exports.loginUser= async function(req,res){
const{email,password}=req.body
try{
  let user=await User.login(email,password)
  let token=createToken(user._id)
  res.json({email,token})
  
}
catch(error){
res.json({error:error.message})

}

}

exports.signupUser= async function(req,res){
    const{email,password}=req.body
try{
    
const user=await User.signup(email,password)

let token=createToken(user._id)
res.json({email,token})
}
catch(error){
 res.json({error:error.message})
}
}