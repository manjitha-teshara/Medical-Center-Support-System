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

module.exports.regRecord=(req,res,next)=>{
    var precord=new Precord();
    console.log("submit in dddddddddd controller ");

    precord.id=req.body.id;
    precord.name=req.body.name;
    precord.age=req.body.age;
    
    precord.save((err,doc)=>{
        if(!err){
            console.log("not errrrr");
            res.send(doc);}
        else{
          console.log("submit in precord controller ");
          
        }
    });
   console.log('inside register fn.');
}

// module.exports=router;

