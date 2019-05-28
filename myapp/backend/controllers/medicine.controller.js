const express = require('express');
var router = express.Router();
var objectId = require('mongoose').Types.objectId;
const mongoose = require('mongoose');
const Medicine = mongoose.model('medicine');

module.exports.addMedicine = (req, res, next) => {
    console.log(req.body);
    //res.send("worked")
    console.log('inside add medicine fn.');
    var medicine = new Medicine();
    medicine.name = req.body.name;
    medicine.notes = req.body.notes;
    medicine.type = req.body.type;
    medicine.dose = req.body.dose;
    medicine.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            console.log(err);
            return next(err);
        }
    })
}



module.exports.getMedicine = (req, res) => {
    console.log("in side getMedicine ");
    Medicine.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Medicine Records :' + JSON.stringify(err, undefined, 2)); }
    });
}


module.exports.getMedicineById = (req, res) => {
    console.log("in side getMedicineById ");
    console.log(req.params);
    /*if (!objectId.isValid(req.params.id)){
        return res.status(400).send("No record with the given id : ${req.params.id}")
    }*/
    Medicine.findById(req.params._id, (err, docs) => {
        if (!err) { res.send(docs); }
        else {
            console.log('Error in Retriving Medicine Records By ID:' + JSON.stringify(err, undefined, 2));
            res.status(400).send(JSON.stringify("error"));
        }
    });
}


module.exports.updateMedicine = (req, res) => {
    console.log("in side updateMedicine ");
    //if (!objectId.isValid(req.body._id)) return res.status(400).send("No record with the given id : ${req.params._id}")
   
    var medicine = {};
    medicine.name = req.body.name;
    medicine.notes = req.body.notes;
    medicine.type = req.body.type;
    medicine.dose = req.body.dose;

    console.log(req.body);

    Medicine.findByIdAndUpdate(req.body._id, { $set: medicine }, { new: true }, (err, docs) => {
        console.log("fd");
        if (!err) { res.send(docs); }
        else { console.log('Error in Updating Medicine Records :' + JSON.stringify(err, undefined, 2)); }
    });
}

module.exports.deleteMedicine=(req,res)=>{
    console.log("in side deleteMedicine ");
    //if(!objectId.isValid(req.params.id))
    //return res.status(400).send("No record with the given id : ${req.params.id}")

    Medicine.findByIdAndRemove(req.params._id,(err,docs)=>{
        if(!err){res.send(docs);}
        else{ console.log('Error in Deleting Medicine Records :' + JSON.stringify(err,undefined,2));}
    });
}
