const router = require('express').Router();
const user = require('./users');
const thought = require('./thoughts');
// const reaction = require('./reactions')

router.use('/users', user);
router.use('/thought', thought);
// router.use('/reaction', reaction);

module.exports = router;