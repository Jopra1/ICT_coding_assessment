// const mongoose = require("mongoose");
// const express = require('express');

// const cors = require('cors');
// //Write missing code here
// app.use(express.json());
// app.use(cors());

// mongoose
//   .connect(
   
//   )
//   .then(() => {
//     console.log("Connected to DB");
//   })
//   .catch((error) => {
//     console.log(error);
//   });
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://joelp:redbullhondarbpt@cluster0.oojc7qm.mongodb.net/blogdb?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('DB is connected');
  })
  .catch((error) => {
    console.log('Error in connection', error);
  });

