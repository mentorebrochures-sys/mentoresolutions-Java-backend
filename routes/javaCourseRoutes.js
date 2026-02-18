const router = require('express').Router();
const javaCourseCtrl = require('../controllers/javaCourseController');

// 1. Java course chi mahiti milavne
router.get('/', javaCourseCtrl.getJavaCourse);

// 2. Navin java course record tayar karne (One-time use)
router.post('/', javaCourseCtrl.createJavaCourse);

// 3. Existing java course update karne (ID vaprun)
router.put('/:id', javaCourseCtrl.updateJavaCourse);

module.exports = router;