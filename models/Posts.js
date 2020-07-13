const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title:{
    type: String,
    require: true
  },
  body: {
    type: String,
    required: true
  },
  date:{
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model('Posts', PostSchema)