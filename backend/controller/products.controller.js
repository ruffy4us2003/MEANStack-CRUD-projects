//Load require module for the model
let ProductModel = require("../model/product.model.js");


//Create the http methods

//Get all the product details
let getProductDetails = (req, res) => {

    ProductModel.find({}, (err, result) => {
        if (!err) {
            res.json(result);
        }
    })
};

//Get each of the products by id
let getProductById = (req, res) => {
    let pid = req.params.pid;

    ProductModel.find({ _id: pid }, (err, data) => {
        if (!err) {
            res.json(data); //This produces all the data (an array of data)
            //res.json(data[0]) //This produces ONLY one datum
        }
        else {
            res.json(err);
        }
    });
}

//To store a NEW product into the database
let storeProductDetails = (req, res) => {
    //Create an instance of the ProductSchema
    let newProduct = new ProductModel({
        _id: req.body.pid,
        pname: req.body.pname,
        price: req.body.price

    });

    newProduct.save((err, result) => {
        if (!err) {
            res.send("New Product saved sucessfully!" + result);
        }
        else {
            res.send("Product didn't saved. Try again!" + err);
        }
    })

}

//To delete an item by Id from the database
let deleteProductById = (req, res) => {
    let pid = req.params.pid;

    ProductModel.deleteOne({ _id: pid }, (err, result) => {
        if (!err) {
            res.send("The number of items deleted is " + result.deletedCount);
        }
        else {
            res.send("Item not deleted! The error that occured is" + err)
        }
    })
}

//To update item's price
let updateProductDetails = (req, res)=>{
    let pid = req.body.pid;
    let updatedPrice =req.body.price;

    ProductModel.updateMany({_id:pid}, {$set:{price:updatedPrice}}, (err, result) =>{
        if(!err){
            if(result.nModified > 0){
                res.send("The product's price has been updated: " + result);
            }
            else{
                res.send("The record is not found/the price is not updated!")
            }
            
        }
        else{
            res.send("The error that occurred is: "+ err);
        }
    } )
}

module.exports = { getProductDetails, getProductById, storeProductDetails, deleteProductById, updateProductDetails };

