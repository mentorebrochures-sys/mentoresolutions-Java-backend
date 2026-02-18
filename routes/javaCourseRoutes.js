const express = require('express');
const router = express.Router();
// PATH CHECK: File name exact match pahije (C and R capital)
const javaCourseController = require('../controllers/javaCourseController');

router.get('/', javaCourseController.getJavaCourse);
router.post('/', javaCourseController.createJavaCourse);
router.put('/:id', javaCourseController.updateJavaCourse);
router.delete('/:id', javaCourseController.deleteJavaCourse);

module.exports = router;