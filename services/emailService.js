const nodemailer = require('nodemailer');

exports.sendAlertEmail = (campaign) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'admin@ezyMetrics.com',
    subject: `Alert: ${campaign.name} exceeded lead limit`,
    text: `The ${campaign.name} campaign has generated ${campaign.leadsGenerated} leads.`
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log('Error sending email:', err);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};
