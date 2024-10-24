const { Parser } = require('json2csv');
const pdfKit = require('pdfkit');
const Lead = require('../models/leadModel');
const Campaign = require('../models/campaignModel');

const generateCSVReport = async (req, res) => {
    try {
        const leads = await Lead.find();
        const parser = new Parser();
        const csv = parser.parse(leads);
        res.header('Content-Type', 'text/csv');
        res.attachment('leads-report.csv');
        res.send(csv);
    } catch (error) {
        res.status(500).json({ message: 'Error generating CSV report', error });
    }
};

const generatePDFReport = async (req, res) => {
    try {
        const doc = new pdfKit();
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=report.pdf');

        doc.pipe(res);
        doc.text('Leads Report');
        const leads = await Lead.find();
        leads.forEach(lead => {
            doc.text(`Name: ${lead.name}, Email: ${lead.email}, Campaign: ${lead.campaign}`);
        });
        doc.end();
    } catch (error) {
        res.status(500).json({ message: 'Error generating PDF report', error });
    }
};

module.exports = {
    generateCSVReport,
    generatePDFReport,
};
