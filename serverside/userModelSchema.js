const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const validator=require('validator')
const Schema=mongoose.Schema

const userSchema=new Schema({
email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:true
}

})

//static signup method
userSchema.statics.signup=async function (email,password){
if(!email||!password){
    throw Error("All fields must be filled")
}

if(!validator.isEmail(email)){
    throw Error('Email is not valid')
}

if(!validator.isStrongPassword(password)){
    throw Error('password not strong enough')
}



    const exists=await this.findOne({email}) //this refers to uncreated model at this stage
if(exists){
    throw Error('Email already exists,try another email')

}
const saltRounds=10
const salt=await bcrypt.genSalt(saltRounds)
const hash=await bcrypt.hash(password,salt)

let user=await this.create({email,password:hash})
return user
}

//static  login method

userSchema.statics.login=async function(email,password){
if(!email||!password){
    throw Error("All fields must be filled")
}
// check if user exists via email
const user=await this.findOne({email})
if(!user){
    throw Error('incorrect login details')
}
//via password
let match=await bcrypt.compare(password,user.password) //where user.password is hashed password

if(!match){
    throw Error('incorrect login details')
}
return user
}


        const User = mongoose.model('User',userSchema)
        module.exports=User