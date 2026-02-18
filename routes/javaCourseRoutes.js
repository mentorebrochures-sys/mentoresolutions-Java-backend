const router = require('express').Router();
const javaCtrl = require('../controllers/javaCourseController');

router.get('/', javaCtrl.getJavaCourse);
router.post('/', javaCtrl.createJavaCourse);
router.put('/:id', javaCtrl.updateJavaCourse);
router.delete('/:id', javaCtrl.deleteJavaCourse);

module.exports = router;