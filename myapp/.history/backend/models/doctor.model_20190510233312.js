
const mongoose = require('mongoose');
const bcrypt=require('bcryptjs');

var doctorSchema = new mongoose.Schema({
    fullName:{type:String},
    checkUpType:{type:String},
    price:{type:Number},
    saltSecret:String
});



//Events

// doctorSchema.pre('save',function(next){
//     bcrypt.genSalt(10,(err,salt)=>{
//         bcrypt.hash(this.password,salt,(err,hash)=>{
//             this.password=hash;
//             this.saltSecret=salt;
//             next();
//         });
//     });
// });

mongoose.model('Doctor',doctorSchema);

