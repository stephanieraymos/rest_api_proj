const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config')
const app = express();

//CONNET TO MONGODB
mongoose.connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.log(err));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server run at port ${PORT}`));