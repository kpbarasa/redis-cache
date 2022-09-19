const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dataSchema = new Schema({
  data_tittle: {
    type: String,
    required: true, 
    unique: true,
    index:{unique: true}
  },
  data_usr_id: {
    type: String,
    required: true,  
  },
  data_group_id:{
    type: String,
    required: true,  
  },
  data_group_type: {
    type: String,
    required: true,  
  },
  data_description: {
    type: String, 
    required: true  
  },
  data_value: {
    type: String,
    required: true, 
    trim: true,
    minlength: 3
  },
  data_type: {
    type: String,
    required: true, 
    trim: true,
    minlength: 3
  },
  data_date: {
    type: Date,
    required: true, 
    trim: true,
    minlength: 3
  },
  data_status: {
    type: String,
    required: true, 
    trim: true,
    minlength: 3
  },
});

const data = mongoose.model('dataRespository', dataSchema);

module.exports = data;