require('./config/config');
require('./models/db');
require('./config/passportConfig');

const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const passport=require('passport');

const { mongoose } = require('./models/db');

const rtsIndex=require('./routes/index.routers');


var app=express();

var patientRecord=require('./controllers/patientRecord.controller');
//var patientRecord=require('./controllers/patientRecord.controller');

//middleware
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200/'}));
app.use(passport.initialize());
app.use('/api',rtsIndex);

// app.use('/patientRecord',patientRecord);
//start server
app.listen(process.env.PORT,()=>console.log('Server started at port : ${process.env.PORT}'));

//error handler
app.use((err,req,res,next)=>{
    if(err.name==='ValidationError'){
        var valErrors=[];
        Object.keys(err.errors).forEach(key=>valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});