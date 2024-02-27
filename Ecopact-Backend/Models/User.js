const Joi=require('joi')
const mongoose=require('mongoose');
const fs=require('fs')

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
        maxlength:100,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
        maxlength:100,
    },
    email:{
        type :String,
        required:true,
        minlength:5,
        unique:true
    },
    password:{
        type :String,
        required:true,
        minlength:5,
        maxlength:50,
        unique:true
    },
    phoneNumber:{
        type :String,
        required:true,
    },
    profilePhoto:{
        data: {
            type: Buffer,
            default: fs.readFileSync('../assets/profilePhoto.jpg') 
        },
        contentType: {
            type: String,
            default: 'image/jpeg'
        }
    },
    isAdmin:{
        type : Boolean,
        default : false
    },
    isAccountVerified:{
        type : Boolean,
        default : false
    }
},{timestamps:true});

const validateRegisterUser=(obj)=>{
    const schema=Joi.object({
        firstName:Joi.string().min(3).max(100).trim().required(),
        lastName:Joi.string().min(3).max(100).trim().required(),
        email:Joi.string().email().min(5).required(),
        password:Joi.string().min(5).max(50).required(),
        phoneNumber:Joi.string().required(),
    })
    return schema.validate(obj);
}
const User=mongoose.model("User",userSchema)
module.exports={validateRegisterUser,User};