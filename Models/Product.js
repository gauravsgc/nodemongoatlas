const mongoose = require('mongoose');

let ProductSchema = new mongoose.Schema({
    username:{
        type:String,
       
        required:[true,'name is required'],
       
    },
    userpass:{
        type:String,
        required:true,
        minlength:[5,'Too short'],
        maxlength:7
    }
   




});
//we will create collection schema create


//singular
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;