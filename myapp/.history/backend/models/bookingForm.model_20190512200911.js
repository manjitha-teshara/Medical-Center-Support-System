const mongoose=require('mongoose');

var Booking=new mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String},
    dob:{type:Number},
    mobie:{type:Number},
    date:{type:String},
    timeSlots:{type:Array},
    saltSecret:String
});




mongoose.model('bookingForm',Booking);
