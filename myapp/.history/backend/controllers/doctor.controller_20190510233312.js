
const mongoose=require('mongoose');
const Doctor=mongoose.model('Doctor');

module.exports.doctorRegister=(req,res,next)=>{
    var doctor=new Doctor();
    doctor.fullName=req.body.fullName;
    doctor.checkUpType=req.body.checkUpType;
    doctor.price=req.body.price;
    // doctor.availableSlots=req.body.availableSlots;
    
    doctor.save((err,doc)=>{
        if(!err)
            res.send(doc);
        else{
           console.log("error in doctor reg");
        }
    });
   console.log('inside doctorRegister fn.');
}



