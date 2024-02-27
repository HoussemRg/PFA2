const express=require('express');
const { registerUser } = require('../controllers/authController');

const authRoutes=express.Router();

// register user route
authRoutes.post('/register',registerUser)


module.exports={authRoutes}