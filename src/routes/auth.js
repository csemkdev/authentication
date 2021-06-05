const express = require('express')
const router = express.Router();
const { signup, signin, forgotpassword } = require('../controllers/auth');

router.post('/signup', signup)
router.post('/signin', signin)
router.post('/forgotpassword', forgotpassword)
// router.post('/resetpassword/:resetToken', resetpassword)
// router.post('/admin/signout', signout)

module.exports = router;