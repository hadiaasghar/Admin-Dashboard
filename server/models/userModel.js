const mongoose = require('mongoose');
const userSchema=mongoose.Schema({
f_name:{
    type: String,
    require:true,

},
l_name:{
    type: String,
    require:true,
},
phone:{
    type:String,
    require:true,
},
password:{
    type:String,
    require:true,
},
email:{
    type:String,
    require:true,
    
    

},
dob:{
    type:Date,
    require:true,
},
image:{
    type:String,
    default:null,
    require:false,
},
about:{
    type:String,
    require:false,
}


},{
    Timestamp:true,
})

module.exports=mongoose.model('User',userSchema);