const express=require('express');
const router=express.Router();
const jwtHelper = require('../config/jwtHelper');

const ctrlUser=require('../controllers/user.controller');
const ctrlDocter=require('../controllers/doctor.controller');
const ctrlPatientRecord=require('../controllers/patientRecord.controller');
const ctrlBooking=require('../controllers/bookingForm.controller');

router.post('/register',ctrlUser.register);
router.post('/authenticate',ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken,ctrlUser.userProfile);

router.post('/patientRecord',ctrlPatientRecord.regRecord);
router.get('/patientRecord',ctrlPatientRecord.getRegRecord);

router.post('/doctor',ctrlDocter.doctorRegister);
router.get('/doctor',ctrlDocter.getDoctorDetail);

router.post('/booking',ctrlBooking.)





module.exports=router;