const transformLeadData = (leads) => {
  // Transform logic for lead data
  return leads.map(lead => ({
      ...lead,
      campaign: lead.campaign.toUpperCase(), // Example transformation
  }));
};

const transformCampaignData = (campaigns) => {
  // Transform logic for campaign data
  return campaigns.map(campaign => ({
      ...campaign,
      budget: campaign.budget * 1.1, // Example transformation (increased budget)
  }));
};

module.exports = {
  transformLeadData,
  transformCampaignData,
};
