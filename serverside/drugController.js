const mongoose=require('mongoose')
const Drug=require('./pharmaSchema')

exports.getDrugs= async function(req,res){
    try{
const user_id=req.user._id

    const drugs=await Drug.find({user_id})
    res.json(drugs)
    }
    catch(err){
        res.json({mssg:"could not fetch"})
    }
}


exports.addDrug= async function(req,res){
    const{drugName,brand,numOfPacks,expiryDate}=req.body




    try{
        const user_id=req.user._id
        const drug=await Drug.create({drugName,brand,numOfPacks,expiryDate,user_id}) //req body sending to API
        res.json(drug)
    }
    catch(err){
        res.json({mssg:"could not add drug"})
    }

}

exports.getDrug=async function(req,res){
    
   
    try{
        const drug=await Drug.findById(req.params.id)
        res.json(drug)
    }
    catch(err){
        res.json({mssg:"could not find drug"})
    }

}



exports.removeDrug=async function(req,res){
    
    try {
        const drug=await Drug.findByIdAndRemove(req.params.id)
       if(!drug){return res.json('drug not found')}
    
    
 res.json(drug)
   }

    catch(err){
   res.json('could not delete')
    }

}



exports.updateDrug=async function(req,res){
    try{
 const drug=await Drug.findOneAndUpdate(req.params.id,{...req.body})
 if(!drug){return res.json('drug not found')}
 res.json(drug)
    }
    catch(err){
        res.json('could not update')
         }
}