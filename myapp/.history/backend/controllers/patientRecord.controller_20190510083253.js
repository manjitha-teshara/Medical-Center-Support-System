const express=require('express');
var router=express.Router();
const mongoose=require('mongoose');

const Precord=mongoose.model('patientRecord');


var { PatientRecord }=require('../models/patientRecord.model');
/** localhost:3000/patientRecor*/
// router.get('/',(req,res)=>{
//     PatientRecord.find((err,docs)=>{
//         if(!err){res.send(docs);}
//         else{ console.log('Error in Retriving Patients Records :' + JSON.stringify(err,undefined,2));}
//     });
// });

module.exports.getRegRecord=(req,res)=>{
    console.log("in side getRegREcords");
    PatientRecord.find((err,docs)=>{
                if(!err){res.send(docs);}
                else{ console.log('Error in Retriving Patients Records :' + JSON.stringify(err,undefined,2));}
            });
}

/**
module.exports.userProfile=(req,res,next)=>{
    console.log("in in side userprofile");
    User.findOne({_id:req._id},
        (err,user)=>{
            console.log("in in side userprofile findone");

            if(!user){
                console.log("not found");
                return res.status(404).json({status:false,message:'User record not found. '});}
            else{
                console.log("found");
                return res.status(200).json({status:true,user:_.pick(user,['userName','email'])});}
        });
} */

module.exports.regRecord=(req,res,next)=>{
    var precord=new Precord();
    console.log("submit in dddddddddd controller ");

    precord.id=req.body.id;
    precord.name=req.body.name;
    precord.age=req.body.age;
    precord.cost=req.body.cost;
    precord.description=req.body.description;
    precord.date=req.body.date;
    
    precord.save((err,doc)=>{
        if(!err){
            console.log("not errrrr");
            res.send(doc);}
        else{
          console.log("submit in precord controller ");
          
        }
    });
   console.log('inside precord fn.');
}

// module.exports=router;


// router.post('/',(req,res)=>{
//     console.log("cked precord post");
//     var patientRecord=new precord({
//         id:req.body.id,
//         name:req.body.name,
//         age:req.body.age,
//         cost:req.body.cost,
//         date:req.body.date,
//     });
//     patientRecord.save((err,doc)=>{
//         if(!err){res.send(doc);}
//         else{console.log('Error in Employee save :' +JSON.stringify(err,undefined,2));}
//     });
// });

