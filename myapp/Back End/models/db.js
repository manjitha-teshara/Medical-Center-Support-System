const mongoose = require('mongoose');

mongoose.connect("mongodb://Lahi:Pass1223@cluster0-shard-00-00-fchfi.mongodb.net:27017,cluster0-shard-00-01-fchfi.mongodb.net:27017,cluster0-shard-00-02-fchfi.mongodb.net:27017/Worksoft?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true",
{ useNewUrlParser: true },(err)=>{
if(err){
    console.log(err);
}
else{
    console.log("connection success");
}
});

require('./user.model');