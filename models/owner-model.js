const mongoose = require('mongoose');

const userSchema  =  mongoose.Schema({
    fullname : {
       type : String,
       minLength : 3,
       trim : true,
    },
    email : String, 
    password : String, 
    products : {
        type : Array,
        default : []
    },
    picture : String,
    gstin: String,
});

modeule.exports = mongoose.model("owner", ownerSchema);