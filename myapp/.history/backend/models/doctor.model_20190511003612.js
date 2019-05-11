const mongoose = require('mongoose');
const bcrypt=require('bcryptjs');

var doctorSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:'Full name can\'t be empty'
    },
    checkuptype:{
        type:String,
        required:'Email can\'t be empty',
        
    },
    price:{
        type:String,
        required:'Password can\'t be empty',
        
    },
    saltSecret:String
});

mongoose.model('Doctor',doctorSchema);

