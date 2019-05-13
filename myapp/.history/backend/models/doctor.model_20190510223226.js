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
        type:Number,
       
    },
    // availableSlots:{
    //     type:Array,
    // },
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