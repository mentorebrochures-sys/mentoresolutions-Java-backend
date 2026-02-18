const router = require('express').Router();
const javaCtrl = require('../controllers/javacourseController');

router.get('/', javaCtrl.getJavaCourse);
router.post('/', javaCtrl.saveJavaCourse); // Ekach POST route update ani add donhi karel

module.exports = router;