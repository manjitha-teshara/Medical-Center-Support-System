const express=require('express');
var router=express.Router();
const mongoose=require('mongoose');

const Booking=mongoose.model('bookingForm');



// module.exports.getRegRecord=(req,res)=>{
//     console.log("in side getReg REcords");
//     Precord.find((err,docs)=>{
//                 if(!err){res.send(docs);}
//                 else{ console.log('Error in Retriving Patients Records :' + JSON.stringify(err,undefined,2));}
//             });
// }



module.exports.postBooking=(req,res,next)=>{
    var booking=new Booking();
    console.log("submit in booking controller ");

    booking.firstName=req.body.firstName;
    booking.lastName=req.body.lastName;
    booking.dob=req.body.dob;
    booking.mobile=req.body.mobile;
    booking.date=req.body.date;
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


