var express = require('express');  
var app = express(); 
require('dotenv').config() 
require('./database/connection');
const Product= require("./Models/Product")
const ProductRouter = require('./Router/Product')
// app.get('/', function (req, res) {  
//   res.send('Welcome to our api');  
// });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(ProductRouter);

let Port;
process.env.Status==="production"?(Port=process.env.PROD_PORT):(Port=process.env.PROD_PORT);
var server = app.listen(Port, function () {  
  
  console.log('server started', process.env.Status, Port);  
});