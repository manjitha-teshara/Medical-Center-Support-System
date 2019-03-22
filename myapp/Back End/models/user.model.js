const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    userName :{
        type:String,
        unique:true,
        required:"username can't be empty"
    },
    email :{
        type:String,
        unique:true,        
    },
    phonenumber :{
        type: String,
        unique:true,
    },
    password :{
        type :String,
        required: 'Password can\'t be empty',
        minlength : [8,'Password must be atleast 8 character long']
    },
    cpassword:{
        type :String,
        required: 'Password can\'t be empty',
        minlength : [8,'Password must be atleast 8 character long']
    },

    saltSecret:String,


   
})
userSchema.pre('save',function(next){
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(this.password,salt,(err,hash)=>{
            this.password=hash;
            this.saltSecret=salt;
            next();
        })
    })

})

userSchema.methods.verifypassword= ()=>{
    return bcrypt.compareSync(password,this.password);
}


mongoose.model('user',userSchema);