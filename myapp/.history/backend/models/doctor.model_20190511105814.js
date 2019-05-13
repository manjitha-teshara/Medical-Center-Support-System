const mongoose = require('mongoose');
const bcrypt=require('bcryptjs');

var userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:'Full name can\'t be empty'
    },
    checkuptype:{
        type:String,
        required:'cheked type  can\'t be empty'
       
    },
    price:{
        type:String,
        required:'Price can\'t be empty'
        
    },
    saltSecret:String
});


mongoose.model('Doctor',userSchema);