var express = require('express');
var router = express.Router();
const postsCtrl = require('../controllers/posts')

router.get('posts/new', postsCtrl.new)



module.exports = router;