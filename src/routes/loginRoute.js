const express = require('express');
const loginRouter = express.Router();
const signupdata = require('../model/signupData');
//var emailCheck = require('email-check');
//mport emailCheck from "email-check";
function loginRouting(nav){
    loginRouter.get('/',function(req,res){
        res.render("login",{
            nav,
            title:'Library',
            
        });
    });
    loginRouter.post('/submit',function(req,res){
        
        var email = req.body.email;
        var password = req.body.password;
        // signupdata.exists({'email':email}, function (err, doc) { 
        //     if (err){ 
        //         console.log(err) 
        //     }else{ 
        //         console.log("Result :", doc) // false 
        //     } 
        // }); 
        var check = signupdata.findOne({email:email});
        check.exec(function(err,data){
        if(err) throw err;
        res.redirect('/books');
        
        
        //res.redirect('/books');
        });
        // signupdata.find({email:email})
        // .then(function(user){
            //if(err) throw err;
            // if(!user){
            //     return res.status(404).end();}
            //     return res.status(200).send("user found");
               //res.send("no user");
                
            //})
            //.catch(err => next(err));
            // else{
            //     res.send("no user");
            // }
           
        //});
           
    //});  
    
    

        // var entry = signupdata(obj);
        // res.redirect('/index');
        
    });
    return loginRouter;
}
module.exports = loginRouting;