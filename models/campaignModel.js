const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  id: Number,
  name: String,
  leadsGenerated: Number
});

module.exports = mongoose.model('Campaign', campaignSchema);
