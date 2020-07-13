const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config')

//ROUTES
const postsRoute = require('./routes/api/posts')

const app = express();

//CONNET TO MONGODB
mongoose.connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.log(err));

  //USER ROUTES
  app.use('/api/posts', postsRoute);
  
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server run at port ${PORT}`));