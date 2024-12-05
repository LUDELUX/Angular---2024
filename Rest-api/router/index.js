const router = require('express').Router();
const users = require('./users');
const champions = require('./champions');
const { authController } = require('../controllers');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

router.use('/users', users);
router.use('/champions', champions);

module.exports = router;