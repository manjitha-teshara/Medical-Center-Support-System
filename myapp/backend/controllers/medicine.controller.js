const mongoose = require('mongoose');
const medicine = mongoose.model('medicine');

module.exports.addMedicine = (req,res,next) => {
    console.log('inside add medicine fn.');
    var medicine = new medicine();
    medicine.name = req.body.name;
    medicine.notes = req.body.notes;
    medicine.save((err, doc) => {
        if(!err)
            res.send(doc);
        else{
            console.log(err);
            return next(err);
        }
    })
}
