const router = require('express').Router();
const courseCtrl = require('../controllers/javacourseController');

// Fakt Java Course sathi Routes
router.get('/', courseCtrl.getJavaAll);      // Java table madhun data fetch karel
router.post('/', courseCtrl.createJava);    // Java table madhe navin entry karel
router.put('/:id', courseCtrl.updateJava);  // Java table madhla record update karel
router.delete('/:id', courseCtrl.deleteJava); // Java table madhla record delete karel

module.exports = router;