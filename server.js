const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/certificates', require('./routes/certificateRoutes'));
app.use('/api/contacts', require('./routes/contactRoutes'));
// Java sathi route
app.use('/api/java-courses', require('./routes/javaRoutes'));
app.use('/api/placements', require('./routes/placementRoutes'));
app.use('/api/trainings', require('./routes/trainingRoutes'));

app.get('/', (req, res) => {
    res.json({ message: "Backend is running!" });
});

module.exports = app;

if (process.env.NODE_ENV !== 'production') {
    const PORT = 5000;
    app.listen(PORT, () => console.log(`Local port ${PORT}`));
}