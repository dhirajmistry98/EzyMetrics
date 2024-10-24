const express = require('express');
const { storeData, getLeads, getCampaigns } = require('../controllers/dataController');
const router = express.Router();

router.post('/fetch-and-store', storeData); // Fetch and store data
router.get('/leads', getLeads); // Get leads
router.get('/campaigns', getCampaigns); // Get campaigns

module.exports = router;
