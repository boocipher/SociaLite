// GET USERS - displays all Users: model Users, controller users; 
// POST users - creates user
// PUT users - updates user
// DELETE users - deletes

// GET Thoughts - displays all Thoughts : model Thoughts, controller thoughts; 
// POST thoughts - creates
// PUT thoughts - updates
// DELETE thoughts - deletes

// POST reaction (in thoughts)- creates reaction for thought
// DELETE reaction - deletes reaction for thought

// POST friend (in users) - creates friend for user
// DELETE friend - deletes friend for user

const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => res.status(404).send('That route does not exist'))

module.exports = router 