const asyncHandler=require('express-async-handler');
const {validateRegisterUser,User}=require('../Models/User')
const bcrypt=require('bcrypt')
/***---------------------------
 * @desc Register new user
 * @Route /api/auth/register
 * @Request post
 * @access public
-----------------------------*/
const registerUser= asyncHandler (async (req,res)=>{
    const {error}=validateRegisterUser(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    let user=await User.findOne({emai:req.body.email});
    if(user) return res.status(400).send("User already exists");
    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(req.body.password,salt);
    if(req.body.profilePhoto){
        
    }
    user= new User({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        password:hashedPassword,
        phoneNumber:req.body.phoneNumber,
        profilePhoto:req.body.profilePhoto
    });
    await user.save();
    return res.status(200).send(user);
})

module.exports={registerUser}