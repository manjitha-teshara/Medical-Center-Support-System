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
    console.log("in side getReg REcords");
    Precord.find((err,docs)=>{
                if(!err){res.send(docs);}
                else{ console.log('Error in Retriving Patients Records :' + JSON.stringify(err,undefined,2));}
            });
}


module.exports.regRecord=(req,res,next)=>{
    var precord=new Precord();
    console.log("submit in d controller ");

    precord.id=req.body.id;
    precord.name=req.body.name;
    precord.age=req.body.age;
    precord.cost=req.body.cost;
    precord.description=req.body.description;
    precord.date=new Date().toISOString();
    console.log('*******************regRecord');
    console.log(precord.date);
    console.log('*******************regRecord');

    
    
    precord.save((err,doc)=>{
        if(!err){
            console.log("not errrrr");
            res.send(doc);}
        else{
          console.log("submit error in precord controller ");
          
        }
    });
   console.log('inside precord fn.');
}

module.exports.getRegRecordForList=(req,res)=>{
    console.log("in side get selected patient Reg REcords");
    precord.findOne({date:req.date},
        (err,patientrecords )=>{
        console.log("******########****");
        console.log(patientrecords);
        console.log("******########****");
            console.log("in in side patientrecords  findone");

            if(!patientrecords ){
                console.log("not found");
                // console.log(err);
                return res.status(404).json({status:false,message:'patientrecords  record not found. '});}
            else{
                console.log("found");
                return res.status(200).json({status:true,doctor:_.pick(patientrecords ,['name','date'])});}
        });
}


