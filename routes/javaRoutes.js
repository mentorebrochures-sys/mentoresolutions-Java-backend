const router = require('express').Router();
const javaCtrl = require('../controllers/javaController');

router.get('/', javaCtrl.getAll);
router.post('/', javaCtrl.create);
router.put('/:id', javaCtrl.update);
router.delete('/:id', javaCtrl.delete);

module.exports = router;