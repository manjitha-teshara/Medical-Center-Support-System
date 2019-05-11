
const mongoose = require('mongoose');
const bcrypt=require('bcryptjs');

var doctorSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:'Full name can\'t be empty'
    },
    checkUpType:{
        type:String,
        required:'Check up type can\'t be empty',
            },
    price:{
        type:Number,
       
    },
    // availableSlots:{
    //     type:Array,
    // },
    saltSecret:String
});


mongoose.model('Doctor',doctorSchema);