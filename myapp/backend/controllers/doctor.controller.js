const mongoose=require('mongoose');
const Doctor=mongoose.model('Doctor');

module.exports.doctorRegister=(req,res,next)=>{
    var doctor=new Doctor();
    doctor.userName=req.body.userName;
    doctor.email=req.body.email;
    doctor.password=req.body.password;
    
    doctor.save((err,doc)=>{
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
   console.log('inside doctorRegister fn.');
}

module.exports.doctorCk=(req,res,next)=>{
    var doctor=new Doctor();
    doctor.userName=req.body.userName;
    doctor.email=req.body.email;
    doctor.password=req.body.password;

    doctor
}

