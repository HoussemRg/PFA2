const express=require('express');
const { registerUser } = require('../controllers/authController');
const { updloadUserImage } = require('../middlewares/uploadUserImage');

const authRoutes=express.Router();

// register user route
authRoutes.post('/register',updloadUserImage.single('image'),registerUser)


module.exports={authRoutes}