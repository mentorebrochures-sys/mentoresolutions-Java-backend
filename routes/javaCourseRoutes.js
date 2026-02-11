const router = require('express').Router();
// Ithe tumhi jo naya javaCourseController banvla aahe to import kara
const javaCourseCtrl = require('../controllers/javaCourseController'); 

router.get('/', javaCourseCtrl.getAll);
router.post('/', javaCourseCtrl.create);
router.put('/:id', javaCourseCtrl.update);
router.delete('/:id', javaCourseCtrl.delete);

module.exports = router;