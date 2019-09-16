const Router = require('express').Router;

const auth = require('./auth');
const reg = require('./reg');
const users = require('./users');

const router = Router();

router.use('/auth', auth);
router.use('/reg', reg);
router.use('/users', users);

module.exports = router;