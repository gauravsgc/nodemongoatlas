const mongoose = require("mongoose");

const connectionParams = {
  useNewUrlParser: true,
 
  useUnifiedTopology: true,
};
const uri = process.env.URL;
const connexion = mongoose
  .connect(uri, connectionParams)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error connecting to the database", err);
  });

module.exports = connexion;
