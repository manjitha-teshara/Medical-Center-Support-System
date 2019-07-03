const mongoose=require('mongoose');

var Booking=new mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String},
    mobie:{type:String},
    date:{type:String},
    timeSlots:{type:String},
    doctorsName:{type:String},
    saltSecret:String
});




mongoose.model('bookingForm',Booking);
