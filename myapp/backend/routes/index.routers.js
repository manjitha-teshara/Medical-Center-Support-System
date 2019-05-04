const express=require('express');
const router=express.Router();
const jwtHelper = require('../config/jwtHelper');

const ctrlUser=require('../controllers/user.controller');
const ctrlDocter=require('../controllers/doctor.controller');

router.post('/register',ctrlUser.register);
router.post('/authenticate',ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken,ctrlUser.userProfile);

router.post('/doctorRegister',ctrlDocter.doctorRegister);


module.exports=router;