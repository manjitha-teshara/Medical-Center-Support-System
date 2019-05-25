const mongoose=require('mongoose');

var medicineSchema=new mongoose.Schema({
    name:{
        type:String,
        required:'Full name can\'t be empty'
    },

    notes:{type:String}
});

mongoose.model('medicine',medicineSchema);
