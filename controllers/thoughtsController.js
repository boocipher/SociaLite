// GET Thoughts - displays all Thoughts : model Thoughts, controller thoughts; 
// POST thoughts - creates
// DELETE thoughts - deletes
// PUT thoughts - updates

// POST reaction (in thoughts)- creates reaction for thought
// DELETE reaction - deletes reaction for thought

const { Thought, User, Reaction } = require('../models');

module.exports = {
  // Get all thoughts
  getThought(req, res) {
    Thought.find()
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },
  // Get a thought
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.id })
      // .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => res.json(thought))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a thought
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.id })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : User.deleteMany({ _id: { $in: thought.users } })
      )
      .then(() => res.json({ message: 'Thought deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // Update a thought
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create reaction for thought
  createReaction(req, res) {
    Thought.findOneAndUpdate(
      {_id: req.params.thoughtId},
      { $addToSet: { reactions: req.body}},
      {new: true}
    )
    .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Delete reaction for thought
  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { id: req.params.thoughtId },
      { $pull: { reactions: { _id: req.body } } },
      { new: true }
    )
    .then((thought) =>
    !thought
      ? res.status(404).json({ message: 'No thought with this id!' })
      : res.json(thought)
  )
  .catch((err) => res.status(500).json(err));
  }
};