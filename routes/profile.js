var express = require('express')
const router = express.Router();
const profileCtrl = require('../controllers/users')
const isLoggedIn = require('../config/auth');



router.get('/profile/:id', isLoggedIn, profileCtrl.show)
router.post('/profile/:id', isLoggedIn, profileCtrl.create)

module.exports = router;