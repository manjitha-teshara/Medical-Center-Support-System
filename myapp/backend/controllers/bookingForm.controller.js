const express=require('express');
var router=express.Router();
const mongoose=require('mongoose');

const Booking=mongoose.model('bookingForm');



module.exports.getBooking=(req,res)=>{
    console.log("in side getBooking");
    Booking.find((err,docs)=>{
                if(!err){res.send(docs);}
                else{ console.log('Error in Retriving getBooking Records :' + JSON.stringify(err,undefined,2));}
            });
}



module.exports.postBooking=(req,res,next)=>{
    var booking=new Booking();
    console.log("submit in booking controller ");

    booking.firstName=req.body.firstName;
    booking.lastName=req.body.lastName;
    booking.dob=req.body.dob;
    booking.mobile=req.body.mobile;
    booking.date=req.body.date;
    booking.doctorsName=req.body.doctorsName
    booking.timeSlots=req.body.timeSlots;
    
    booking.save((err,doc)=>{
        if(!err){
            console.log("not errrrr");
            res.send(doc);}
        else{
          console.log("submit error in booking controller ");
          
        }
    });
   console.log('inside booking fn.');
}


