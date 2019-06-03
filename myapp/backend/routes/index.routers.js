const express=require('express');
const router=express.Router();
const jwtHelper = require('../config/jwtHelper');

const ctrlUser=require('../controllers/user.controller');
const ctrlDocter=require('../controllers/doctor.controller');
const ctrlPatientRecord=require('../controllers/patientRecord.controller');
const ctrlBooking=require('../controllers/bookingForm.controller');
const ctrlMedicine=require('../controllers/medicine.controller');


router.post('/register',ctrlUser.register);
router.post('/authenticate',ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken,ctrlUser.userProfile);

router.post('/patientRecord',ctrlPatientRecord.regRecord);
router.get('/patientRecord',ctrlPatientRecord.getRegRecord);

router.post('/doctor',ctrlDocter.doctorRegister);
router.get('/doctor',ctrlDocter.getDoctorDetail);
router.get('/selectedDoctor/:_id',ctrlDocter.getSelectedDoctorDetail);
router.get('/getNewSelect/:_id',ctrlDocter.getNewSelect);

router.post('/booking',ctrlBooking.postBooking);
router.get('/booking',ctrlBooking.getBooking);

router.post('/addMedicine',ctrlMedicine.addMedicine);
router.get('/getMedicine', ctrlMedicine.getMedicine);
router.get('/getMedicineById/:_id', ctrlMedicine.getMedicineById);
router.put('/updateMedicine', ctrlMedicine.updateMedicine);
router.delete('/deleteMedicine/:_id', ctrlMedicine.deleteMedicine);
//router.put('/updateQty/:_id', ctrlMedicine.updateQty);
router.put('/issue', ctrlMedicine.issue);




module.exports=router;