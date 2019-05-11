const mongoose = require('mongoose');

var doctorSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:'Full name can\'t be empty'
    },
    checkuptype:{
        type:String,
        required:'Check up type can\'t be empty'
        
    },
    price:{
        type:String,
        required:'Price can\'t be empty'
        
    },
    saltSecret:String
});

mongoose.model('Doctor',doctorSchema);


