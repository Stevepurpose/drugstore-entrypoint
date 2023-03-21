const jwt=require('jsonwebtoken')
const User=require('./userModelSchema')


//create middleware to check user auth

async function authCheck(req,res,next){

    //verify authentication
let {authorization}=req.headers
if(!authorization){
    return res.json({error:'authorization token required'})
}

const token=authorization.split(' ')[1]
try{
    const{_id}=jwt.verify(token,process.env.SECRET_STR)

    req.user=await User.findOne({_id}).select('_id')
    //not compulsory we use req.user.we can use req.abc we want just doc id
    next()
}
catch(error){
    res.json({error:'request not authorized'})
}

}

module.exports=authCheck