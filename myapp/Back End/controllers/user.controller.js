const mongoose = require('mongoose');
const User = mongoose.model('user');

module.exports.register=(req,res,next)=>
{
    var user =new User();
    user.userName =req.body.userName;
    user.email =req.body.email;
    user.phonenumber =req.body.phonenumber;
    user.password =req.body.password;
    user.cpassword =req.body.cpassword;


    user.save((err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            if(err.code ==11000)
                res.status(422).send("You have registerd");
            else{
                res.status(422).send(err);
            }
        }
    })
}


