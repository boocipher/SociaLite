const router = require('express').Router();
const {
    getThought,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    // addReaction,
    // deleteReaction
} = require('../../controllers/thoughtsController');

router
    .route('/')
    .get(getThought)
    .post(createThought)

router
    .route('/:id')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought)

// router
//     .route('/:thoughtId/reactions')
//     .post(addReaction)
//     .delete(deleteReaction)

module.exports = router;