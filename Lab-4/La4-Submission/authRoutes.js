
// Name: Manoj Bishwakarma
// Student ID: 200594681


const express = require('express');
const passport = require('passport');
const User = require('../models/user');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register',authController.registerUser);

router.get('/login',passport.authenticate('local'),(req,res)=>{
    res.send('Looged in successfully');
})

//logout route
router.post('/logout', authController.logout);

module.exports = router;