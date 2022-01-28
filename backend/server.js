//Load the required modules
let express = require("express");
let app = express();
let mongoose = require("mongoose");
//mongoose.Promise = global.Promise;
let bodyParser = require("body-parser");
let cors = require("cors");

//To enable loading of static file
app.use(express.static(process.cwd()));


//Create the db url
// let url = "mongodb://localhost:27017/productDb"; //NodeJS v17 doesn't support using "localhost"
let url = "mongodb://127.0.0.1:27017/productDb";


//For middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//app.use(cors()); //This doesn't work
//app.use(cors({origin: "http://localhost:4200"})); //This doesn't work either
app.use(cors({origin: "*"}));



//To connect to the database without warnings
const mongooseDbOption = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

//Getting the Db ready for connection
mongoose.connect(url,mongooseDbOption);

//Connect to the database
mongoose.connection;

//Link to the router

let Product = require("./router/products.router.js");

//To redirect the server to the appropriate router
app.use("/product", Product);

//Dedicate the port number
let portNumber = 9999;

//Get the server running
app.listen(portNumber, ()=>{
    console.log(`The Server is listening on port number ${portNumber}`);
});