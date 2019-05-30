const mongoose=require('mongoose');

mongoose.connect(process.env.MONGODB_URI,(err)=>{
    if(!err){console.log("MongoDB connection succded.");

    }
    else{
        console.log("Error in MongoDB connection :"+JSON.stringify(err,undefined,2));
    }
});
require('./user.model');
require('./doctor.model');
require('./patientRecord.model');
require('./bookingForm.model');
require('./medicine.model');


module.export=mongoose;