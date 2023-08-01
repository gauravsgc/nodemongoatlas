const express = require('express');
const router = new express.Router();
const app = express();
const Product = require("../Models/Product");

// data insert into database:----
router.post("/", async (req, res) => {
    const { username,userpass} = req.body;
    console.log(username,userpass);
    try {
        const newPost = await Product.create({
      username,
      userpass
        });
        res.json(newPost);
      } catch (e) {
        res.status(500).send(e);
      }
    });
router.get('/', async (req, res) =>{  
    try {
        console.log("gud morning");
        
        const Data = await Product.find();
        // res.send(Data);
        res.status(200).json({Data});
    }
    catch (e) {
        res.status(500).send(e);
    }
    }); 

module.exports = router;