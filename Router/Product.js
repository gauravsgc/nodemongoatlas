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
        //console.log(E)
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
      console.log(e);
      res.status(500).send(e);
    }
    });
  //   router.get('/:nm', async (req, res) => {
  //     try {
  //         const name = req.params.nm;
  // console.log(name);
  //         // const Data = await STUDENT.find({ name: name });//{key:value});
  //         const Data = await STUDENT.find(
  //             { username: name });//{key:value});
  //         res.status(200).send(Data);
  //     }
  //     catch (e) {
  //         res.status(500).send(e);
  //     }
  // })
    
    router.get('/:id', async (req, res) =>{  
      try {
          console.log("gud morning");
          const id = req.params.id;
          console.log(id);
          const Data = await Product.findById(id);
          //console.log(Data);
          res.send(Data);
          console.log(e);
           res.status(200).json({Data});
      }
      catch (e) {
        res.status(500).send(e);
      }
      }); 


      //...............

//delete data....on the basis of name
router.delete('/:id', async (req, res) => {
  try {
      const id = req.params.id;
      console.log(id);

      

      const Data = await Product.findByIdAndDelete(id);
      // await Data.remove();
      //  console.log(Data);
      //{key:value});
      
       res.json("deleted");
      

  }
  catch (e) {
      res.status(500).send(e);
  }
})
router.put('/:id', async (req, res) => {
  try {
      const id = req.params.id;
    console.log(id);
const {username,userpass}=req.body;
    console.log(username,userpass);
      //updated data
      const Data = await Product.findByIdAndUpdate(id, {username,userpass});
      
 
      res.status(200).send(Data);
      //}

  }
  catch (e) {
      res.status(500).send(e);
  }
})

//update data.....
// update pasword on the basis of name
//patch
// router.put('/:name/:pwd', async (req, res) => {
//   try {
//       // const name = req.params.name;
//       // const pwd = req.params.pwd;
//       // console.log(name);
//       // console.log(pwd);

    
//       //updated data
//       // const Data = await STUDENT.updateOne({ username: name }, { $set: { userpass: pwd } });
      
 
//       res.status(200).send(Data);
//       //}

//   }
//   catch (e) {
//     res.status(500).send(e);
// }
// })

module.exports = router;