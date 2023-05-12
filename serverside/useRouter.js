const express=require('express')
const{loginUser,signupUser}=require('./userController')


const router=express.Router()
/*
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "http://localhost:3000 , https://drugstore-inventory.onrender.com"); // Replace with your domain
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE,PATCH,OPTIONS,HEAD');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
   
    //Handle pre-flight requests
    if(req.method==='OPTIONS'){
      res.status(200).send()
    }else{
      next();
    }

  });

*/




router.post('/login',loginUser)
router.post('/signup',signupUser)

module.exports=router