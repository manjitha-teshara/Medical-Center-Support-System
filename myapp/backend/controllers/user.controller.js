const mongoose=require('mongoose');

const User=mongoose.model('users');


module.exports.register=(req,res,next)=>{
   console.log('inside register fn');
    var user=new User();
    user.fullName=req.body.fullName;
    user.email=req.body.email;
    user.password=req.body.password;
    
        user.save((err,doc)=>{

         if(!err)
            res.send(doc);
        else{
            if(err.code ==11000)
                res.status(422).send("You have registerd");
            else{
                res.status(422).send(err);
            }
        }
    });
    
}