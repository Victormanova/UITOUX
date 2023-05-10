//Require
const express = require('express');
const cors = require('cors');
const app =  express();
const admin = require('./routes/admin');
const url = require('./routes/product');

//midleware;
app.use(express.urlencoded({extended: true}));
app.use(express.json()); 
app.use(cors('*'));


//API Routes;
app.use('/user',admin)
app.use('/product',url)

//API Call List;
//http://localhost:7000/user/login-------->login;
//http://localhost:7000/user/newuser-------->sigin;

//http://localhost:7000/product/all_product--------->Get all product;
//http://localhost:7000/product/product_id/7--------->Get particular product;


//Server running;
app.listen(7000, () => {
    console.log("server listening to port 7000.....");
})