const mongoose = require('mongoose');
const bcrypt=require('bcryptjs');

var userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:'Full name can\'t be empty'
    },
    checkuptype:{
        type:String,
        required:'Email can\'t be empty',
        unique:true
    },
    price:{
        type:String,
        required:'Password can\'t be empty',
        minlength:[4,'Password must be atleast 4 character long']
    },
    saltSecret:String
});

mongoose.model('Doctor',userSchema);