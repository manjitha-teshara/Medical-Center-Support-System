const mongoose=require('mongoose');
const Doctor=mongoose.model('Doctor');

module.exports.doctorRegister=(req,res,next)=>{
    console.log(' in side doctorRegister');
    var doctor=new Doctor();
    doctor.fullname=req.body.fullname;
    doctor.checkuptype=req.body.checkuptype;
    doctor.price=req.body.price;
    
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
