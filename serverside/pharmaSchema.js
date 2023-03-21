const mongoose=require('mongoose')
 
const Schema=mongoose.Schema

const drugSchema=new Schema({
drugName:{
    type:String,
    required:true
},
brand:{
    type:String,
    required:true
},
numOfPacks:{
    type:Number,
    required:true
},

expiryDate:{
    type:Date,
    required:true
},
user_id:{
    type:String,
    required:true
}


})


const Drug=mongoose.model('Drug',drugSchema)
module.exports=Drug