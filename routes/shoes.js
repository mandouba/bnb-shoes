var express = require('express');
var router = express.Router();
const shoesCtrl = require('../controllers/shoes')
const isLoggedIn = require('../config/auth');

router.get('/', isLoggedIn, shoesCtrl.index)
router.get('/new', isLoggedIn, shoesCtrl.new);
router.get('/:id', isLoggedIn, shoesCtrl.show);
router.get('/:id/edit', isLoggedIn, shoesCtrl.edit);
router.put('/:id', isLoggedIn, shoesCtrl.update);
router.post('/', isLoggedIn, shoesCtrl.create);
router.delete('/:id', isLoggedIn, shoesCtrl.delete);
router.post('/:id', isLoggedIn, shoesCtrl.addReading)


module.exports = router;
