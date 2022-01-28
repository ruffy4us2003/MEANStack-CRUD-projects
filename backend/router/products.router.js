//Load the required modules

let express = require("express");
let router = express.Router();
let productController = require("../controller/products.controller.js");


//Create a sub-path for the http methods
router.get("/getProductDetails", productController.getProductDetails);
router.post("/storeProductDetails", productController.storeProductDetails );
router.get("/getProductById/:pid", productController.getProductById);
router.put("/updateProductDetails", productController.updateProductDetails);
router.delete("/deleteProductById/:pid", productController.deleteProductById);

module.exports = router;


