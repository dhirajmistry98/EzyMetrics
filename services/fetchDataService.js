const leadsData = [
  { name: 'John Doe', email: 'john@example.com', campaign: 'Summer Sale' },
  { name: 'Jane Smith', email: 'jane@example.com', campaign: 'Winter Sale' },
];

const campaignsData = [
  { name: 'Summer Sale', leads: 50 },
  { name: 'Winter Sale', leads: 30 },
];

const fetchLeads = () => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(leadsData);
      }, 1000); // Simulating network delay
  });
};

const fetchCampaigns = () => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(campaignsData);
      }, 1000); // Simulating network delay
  });
};

module.exports = {
  fetchLeads,
  fetchCampaigns,
};
