const mongoose=require('mongoose');
const Doctor=mongoose.model('Doctor');

module.exports.doctorRegister=(req,res,next)=>{
    var doctor=new Doctor();
    doctor.fullname=req.body.fullname;
    doctor.checkuptype=req.body.checkuptype;
    doctor.price=req.body.price;
    doctor.image=req.body.image;
    doctor.doctorshedule=req.body.doctorshedule;
    
    doctor.save((err,doc)=>{
        if(!err)
            res.send(doc);
        else{
            if(err.code==11000){
                console.log(err);
                res.status(422).send(['Duplicate email address found.']);}
            else{
                console.log(err);
                return next(err);}
        }
    });
   console.log('inside doctorRegister fn.');
}

/**get function */
module.exports.getDoctorDetail=(req,res)=>{
    console.log("in side getDoctorDetail ");
    Doctor.find((err,docs)=>{
                if(!err){res.send(docs);}
                else{ console.log('Error in Retriving Patients Records :' + JSON.stringify(err,undefined,2));}
            });
}


module.exports.getSelectedDoctorDetail=(req,res)=>{
    console.log("in side get selected DoctorDetail ");
    console.log(req._id);
    Doctor.findOne({_id:req._id},
        (err,doctor)=>{
            console.log("in in side usdoctorerprofile findone");

            if(!doctor){
                console.log("not found");
                // console.log(err);
                return res.status(404).json({status:false,message:'doctor record not found. '});}
            else{
                console.log("found");
                return res.status(200).json({status:true,doctor:_.pick(doctor,['fullname','doctorshedule'])});}
        });
}
