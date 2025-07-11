const mongoose = require('mongoose');


const productSchema  =  mongoose.Schema({
    image : String,
    name : String, 
    password : String,
    price : Number, 
    discount: {
        type : Number,
        default : 0
    },
   bgcolor : String,
   panelcolor : String,
   textcolor : String, 
});

modeule.exports = mongoose.model("product", productSchema);