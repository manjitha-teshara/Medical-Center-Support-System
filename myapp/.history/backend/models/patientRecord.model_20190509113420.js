const mongoose=require('mongoose');

var PRecord=new mongoose.Schema({
    id:{type:String},
    name:{type:String},
    age:{type:Number},
    cost:{type:Number},
    date:{type:String},
    discription:{type:String},
    saltSecret:String
});



// module.exports=PatientRecord;

// mongoose.model('patientRecord',PatientRecord);
mongoose.model('patientRecord',PRecord);
