const mongoose=require('mongoose');
const Doctor=mongoose.model('Doctor');

module.exports.doctorRegister=(req,res,next)=>{
    var doctor=new Doctor();

    console.log(req.body);
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
    console.log("********");
    console.log(req.fullname);
    console.log("**********");
    Doctor.findOne({_id:req.params._id},
        (err,doctor)=>{
        console.log("******########****");
        console.log(doctor);
        console.log("******########****");
            console.log("in in side usdoctorerprofile findone");

            if(!doctor){
                console.log("not found");
                // console.log(err);
                return res.status(404).json({status:false,message:'doctor record not found. '});}
            else{
                console.log("found");
                // return res.status(200).json({status:true,doctor:__.pick(doctor,['fullname','doctorshedule'])});
                res.send(doctor);
            }
        });
}


module.exports.getNewSelect=(req,res)=>{
    console.log("in side getNewSelect ");
    console.log(req.params._id);
    Doctor.findById(req.params._id,(err,docs)=>{
                if(!err){res.send(docs);}
                else{ console.log('Error in Retriving Patients Records :' + JSON.stringify(err,undefined,2));}
            });
}

/*
module.exports.deleteMedicine=(req,res)=>{
    console.log("in side deleteMedicine ");
    //if(!objectId.isValid(req.params.id))
    //return res.status(400).send("No record with the given id : ${req.params.id}")

    Medicine.findByIdAndRemove(req.params._id,(err,docs)=>{
        if(!err){res.send(docs);}
        else{ console.log('Error in Deleting Medicine Records :' + JSON.stringify(err,undefined,2));}
    });
}*/

module.exports.deleteDoctor=(req,res)=>{
    Doctor.findByIdAndRemove(req.params._id,(err,docs)=>{
        if(!err){res.send(docs);}
        else{ console.log('Error in Deleting Doctor Records :' + JSON.stringify(err,undefined,2));}
    });
}