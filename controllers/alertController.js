const nodemailer = require('nodemailer');

const sendAlertEmail = async (req, res) => {
    try {
        const leadsCount = await Lead.countDocuments();
        if (leadsCount > 100) { // Example condition
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: 'recipient@example.com',
                subject: 'Alert: High Number of Leads',
                text: `There are currently ${leadsCount} leads.`,
            };

            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Alert email sent successfully' });
        } else {
            res.status(200).json({ message: 'No alerts to send' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error sending alert email', error });
    }
};

module.exports = {
    sendAlertEmail,
};
