const express=require('express');
const router=express.Router();

const ctrlUser=require('../controllers/user.controller');
const ctrlDocter=require('../controllers/doctor.controller');

router.post('/register',ctrlUser.register);
router.post('/authenticate',ctrlUser.authenticate);
router.post('/doctorRegister',ctrlDocter.doctorRegister);


module.exports=router;