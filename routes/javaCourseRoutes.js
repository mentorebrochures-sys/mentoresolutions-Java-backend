const express = require('express');
const router = express.Router();
// Import kartana file name neet check kara
const javaCourseController = require('../controllers/javaCourseController');

router.get('/', javaCourseController.getJavaCourse);
router.post('/', javaCourseController.createJavaCourse);
router.put('/:id', javaCourseController.updateJavaCourse);
router.delete('/:id', javaCourseController.deleteJavaCourse);

module.exports = router;