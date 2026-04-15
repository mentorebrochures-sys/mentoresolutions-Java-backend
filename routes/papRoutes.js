const express = require('express');
const router = express.Router();
const papController = require('../controllers/papController');

// PAP CRUD Routes
router.get('/pap-steps', papController.getAllSteps);       // Get all data
router.post('/pap-steps', papController.addStep);         // Add new data
router.put('/pap-steps/:id', papController.updateStep);    // Update data
router.delete('/pap-steps/:id', papController.deleteStep); // Delete data

module.exports = router;