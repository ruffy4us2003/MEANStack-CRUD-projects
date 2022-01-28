//Load the require modules
let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

//Create the Schema

let ProductSchema = mongoose.Schema({
    _id:Number,
    pname:String,
    price:Number
});

//Create the model
let ProductModel = mongoose.model("", ProductSchema, "Product")

//Export the module
module.exports = ProductModel;