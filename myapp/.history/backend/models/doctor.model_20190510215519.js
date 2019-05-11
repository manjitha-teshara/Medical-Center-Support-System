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
        type:String,
       
    },
    availableSlots:{
        type:Array,
    }
    saltSecret:String
});

// Custom validation for email
doctorSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,13}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

//Events

doctorSchema.pre('save',function(next){
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(this.password,salt,(err,hash)=>{
            this.password=hash;
            this.saltSecret=salt;
            next();
        });
    });
});

mongoose.model('Doctor',doctorSchema);