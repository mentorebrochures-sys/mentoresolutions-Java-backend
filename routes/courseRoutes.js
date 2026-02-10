const router = require('express').Router();
const courseCtrl = require('../controllers/courseController');

// Sagle courses ghenyasathi (Admin Dashboard sathi)
router.get('/', courseCtrl.getAll);

// EK COURSE FILTER KARNYASATHI (User Panel sathi - Important!)
// Ithe :name mhanje 'java' kiva 'devops' asel
router.get('/:name', courseCtrl.getByName); 

router.post('/', courseCtrl.create);
router.put('/:id', courseCtrl.update);
router.delete('/:id', courseCtrl.delete);

module.exports = router;