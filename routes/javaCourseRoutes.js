const express = require('express').Router;
const router = express.Router();
// Import kartana exact file naav vapra
const javaCourseController = require('../controllers/javacourseController');

router.get('/', javaCourseController.getJavaCourse);
router.post('/', javaCourseController.createJavaCourse);
router.put('/:id', javaCourseController.updateJavaCourse);
router.delete('/:id', javaCourseController.deleteJavaCourse);

module.exports = router;