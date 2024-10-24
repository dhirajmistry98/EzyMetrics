const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  id: Number,
  name: String,
  email: String,
  source: String
});

module.exports = mongoose.model('Lead', leadSchema);
