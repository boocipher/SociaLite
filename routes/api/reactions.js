// POST reaction (in thoughts)- creates reaction for thought
// DELETE reaction - deletes reaction for thought

const router = require('express').Router();
const {
    addReaction,
    deleteReaction
} = require('../../controllers/thoughtsController');

router
    .route('/:thoughtId/reactions')
    .post(addReaction)
    .delete(deleteReaction)

module.exports = router;