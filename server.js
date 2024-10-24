const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const dataRoutes = require('./routes/dataRoutes');
const reportRoutes = require('./routes/reportRoutes');
const alertRoutes = require('./routes/alertRoutes');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/data', dataRoutes);
app.use('/api/report', reportRoutes);
app.use('/api/alert', alertRoutes);

// Database Connection
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.log('Database connection error:', err));

// Start Server
const PORT = process.env.PORT || 5003;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
