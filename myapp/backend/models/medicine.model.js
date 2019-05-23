const mongoose=require('mongoose');

var med=new mongoose.Schema({
    id:{type:String},

    name:{
        type:String,
        required:'Full name can\'t be empty'
    },

    notes:{type:String}
});


// module.exports=PatientRecord;

// mongoose.model('patientRecord',PatientRecord);
mongoose.model('medicine',med);
