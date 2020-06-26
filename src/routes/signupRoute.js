const express = require('express');
const signupRouter = express.Router();
const signupdata = require('../model/signupData');
function signupRouting(nav){
    signupRouter.get('/',function(req,res){
        res.render("signup",{
            nav,
            title:'Library',
            
        });
    });
    signupRouter.post('/submit',function(req,res){
        var obj ={
            username : req.body.username,
            email : req.body.email,
            password : req.body.password,
            confirmPassword : req.body.confirmPassword,
            phoneNumber : req.body.phoneNumber
        }
        var entry = signupdata(obj);
        entry.save();
        res.redirect('/login');
    });
    return signupRouter;
}
module.exports = signupRouting;