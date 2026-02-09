const express = require('express');
const router = express.Router();
const javaCourseController = require('../controllers/javaCourseController');

router.get('/', javaCourseController.getAll);
router.post('/', javaCourseController.create);
router.put('/:id', javaCourseController.update);
router.delete('/:id', javaCourseController.delete);

module.exports = router;