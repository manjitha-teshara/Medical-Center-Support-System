const mongoose=require('mongoose');
const User=mongoose.model('User');

module.exports.register=(req,res,next)=>{
    var user=new User();
    user.userName=req.body.userName;
    user.email=req.body.email;
    user.password=req.body.password;
    
    user.save((err,doc)=>{
        if(!err)
            res.send(doc);
        else{
            if(err.code==11000){
                console.log(err);
                res.status(422).send(['Duplicate email address found.']);}
            else{
                console.log(err);
                return next(err);}
        }
    });
   console.log('inside register fn.');
}

