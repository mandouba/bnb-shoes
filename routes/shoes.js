var express = require('express');
var router = express.Router();
const shoesCtrl = require('../controllers/shoes')

router.get('/', shoesCtrl.index)
router.get('/new', shoesCtrl.new);
router.post('/', shoesCtrl.create);


module.exports = router;
