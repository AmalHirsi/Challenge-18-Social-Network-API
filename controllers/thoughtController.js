const { thought, user } = require('../models');

const thoughtController = {
    // Get all thoughts
    getAllThoughts(req, res) {
      Thought.find()
        .then((courses) => res.json(courses))
        .catch((err) => res.status(500).json(err));
    },
    // Get a thought
    getSingleThought(req, res) {
      Thought.findOne({ _id: req.params.courseId })
      .populate({ path: 'reactions', select: '-__v' })
        .select('-__v')
        .then((Thought) =>
          !thought
            ? res.status(404).json({ message: 'No thought found with that ID' })
            : res.json(course)
        )
        .catch((err) => res.status(500).json(err));
    },
    // Create a thought
    createThought(req, res) {
      Thought.create(req.body)
        .then((Thought) => res.json(Thought))
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    },
    // Delete a thought
    deleteThought(req, res) {
      Thought.findOneAndDelete({ _id: req.params.courseId })
        .then((Thought) =>
          !Thought
            ? res.status(404).json({ message: 'No thought founnd with that ID' })
        )
        .then(() => res.json({ message: ' Thoughts have been deleted!' }))
        .catch((err) => res.status(500).json(err));
    },
};
module.exports = thoughtController
  
