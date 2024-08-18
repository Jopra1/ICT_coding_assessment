// const express = require("express");
// const cors = require("cors");

// const app = express();
// var PORT = 3001;
// app.use(express.json());
// app.use(cors());
// //Write missing code here

// //Write your POST API here

// app.get("/get", async (req, res) => {
//   try {
//     let data = await BlogModel.find();
//     res.send(data);
//   } catch (error) {
//     console.log(error);
//   }
// });


// app.listen(PORT, () => {
//   console.log(`${PORT} is up and running`);
// });
const express = require('express');
const cors = require("cors");

const app = new express();
app.use(cors());
require('./connection'); 
const BlogModel = require('./model'); 

app.use(express.json()); 


// app.get('/blogs', async (req, res) => {
//   try {
//     const data = await BlogModel.find();
//     res.send(data);
//   } catch (error) {
//     console.log(error);
//   }
// });
app.get('/get', async (req, res) => {
  console.log('Fetching all Blogs');
  try {
      const data = await BlogModel.find();
      res.json(data);
  } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).send('Internal Server Error');
  }
});

// app.post('/addblog', async (req, res) => {
//   try {
//     const item = req.body;
//     const data_add = new BlogModel(item);
//     await data_add.save();
//     res.send('Post successful');
//   } catch (error) {
//     console.log(error);
//   }
// });
app.post('/addblog', async (req, res) => {
  try {
    const item = req.body;
    const data_add = new BlogModel(item);
    await data_add.save();
    res.send('Post successful');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error adding blog');
  }
});


app.put('/editblog/:id', async (req, res) => {
  try {
    await BlogModel.findByIdAndUpdate(req.params.id, req.body);
    res.send('Update Successful');
  } catch (error) {
    console.log(error);
  }
});


app.delete('/deleteblog/:id', async (req, res) => {
  try {
    await BlogModel.findByIdAndDelete(req.params.id);
    res.send('Deleted Successfully');
  } catch (error) {
    console.log(error);
  }
});

// Start the server
app.listen(3001, () => {
  console.log('Server is running on PORT 3001');
});
