
const mongoose=require('mongoose');
const Doctor=mongoose.model('Doctor');
const express=require('express');


module.exports.doctorRegister=(req,res,next)=>{
    var doctor=new Precord();
    console.log("submit in doctorRegister controller ");

    doctor.fullName=req.body.fullName;
    doctor.checkUpType=req.body.checkUpType;
    doctor.price=req.body.price;
   
    
    doctor.save((err,doc)=>{
        if(!err){
            console.log("not errrrr");
            res.send(doc);}
        else{
          console.log("submit error in doctor controller ");
          
        }
    });
   console.log('inside doctor fn.');
}


