const { thought, user } = require('../models');

const thoughtController = {
    // Get all thoughts
    getAllThoughts(req, res) {
      Thought.find({})
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
      Thought.findOneAndRemove({ _id: req.params.studentId })
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: 'No thought exists with this id' })
            : thought.findOneAndUpdate(
                { thought: req.params.studentId },
                { $pull: { thought: req.params.studentId } },
                { new: true }
              )
        )
        .then((User) =>
          !User
            ? res.status(404).json({
                message: 'Thought deleted, but no user found',
              })
            : res.json({ message: 'Thought successfully deleted' })
        )
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
    },
  };
  
 module.exports = thoughtController;
  
