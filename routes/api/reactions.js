// POST reaction (in thoughts)- creates reaction for thought
// DELETE reaction - deletes reaction for thought

const router = require('express').Router();
const {
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtsController');

router
    .route('/:thoughtId/reactions')
    .post(createReaction)
    .delete(deleteReaction)

module.exports = router;