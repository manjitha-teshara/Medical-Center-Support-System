const express=require('express');
var router=express.Router();
const mongoose = require('mongoose');
const Medicine = mongoose.model('medicine');

module.exports.addMedicine = (req,res,next) => {
    console.log(req.body);
    //res.send("worked")
     console.log('inside add medicine fn.');
     var medicine = new Medicine();
    medicine.name = req.body.name;
    medicine.notes = req.body.notes;
    medicine.type = req.body.type;
    medicine.save((err, doc) => {
         if(!err)
             res.send(doc);
         else{
             console.log(err);
             return next(err);
         }
    })
}

/**
module.exports.regRecord=(req,res,next)=>{
    var precord=new Precord();
    console.log("submit in d controller ");

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
          console.log("submit error in precord controller ");
          
        }
    });
   console.log('inside precord fn.');
}
 */
