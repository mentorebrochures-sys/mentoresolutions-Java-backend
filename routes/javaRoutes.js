const router = require('express').Router();
const courseCtrl = require('../controllers/javacourseController');

router.get('/', courseCtrl.getJavaAll);
router.post('/', courseCtrl.createJava);
router.put('/:id', courseCtrl.updateJava);
router.delete('/:id', courseCtrl.deleteJava);

module.exports = router;
