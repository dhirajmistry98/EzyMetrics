const Lead = require('../models/leadModel');
const Campaign = require('../models/campaignModel');
const { fetchLeads, fetchCampaigns } = require('../services/fetchDataService');

const storeData = async (req, res) => {
    try {
        const leads = await fetchLeads();
        const campaigns = await fetchCampaigns();

        await Lead.insertMany(leads);
        await Campaign.insertMany(campaigns);

        res.status(201).json({ message: 'Data fetched and stored successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching and storing data', error });
    }
};

const getLeads = async (req, res) => {
    try {
        const leads = await Lead.find();
        res.json(leads);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving leads', error });
    }
};

const getCampaigns = async (req, res) => {
    try {
        const campaigns = await Campaign.find();
        res.json(campaigns);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving campaigns', error });
    }
};

module.exports = {
    storeData,
    getLeads,
    getCampaigns,
};
