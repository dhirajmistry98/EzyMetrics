const express = require('express');
const { sendAlertEmail } = require('../controllers/alertController');
const router = express.Router();

router.post('/send-alert', sendAlertEmail);

module.exports = router;
