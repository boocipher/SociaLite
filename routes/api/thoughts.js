const router = require('express').Router();
const {
    getThought,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtsController');

router
    .route('/')
    .get(getThought)
    .post(createThought)

// /api/thought/:id
router
    .route('/:id')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought)

router
    .route('/:thoughtId/reactions')
    .post(createReaction)
    .delete(deleteReaction)

module.exports = router;