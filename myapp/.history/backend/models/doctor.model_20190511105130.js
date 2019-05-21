const mongoose = require('mongoose');
const bcrypt=require('bcryptjs');

var userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:'Full name can\'t be empty'
    },
    email:{
        type:String,
        required:'Email can\'t be empty'
       
    },
    password:{
        type:String,
        required:'Password can\'t be empty'
        
    },
    saltSecret:String
});


mongoose.model('Doctor',userSchema);