const router = require('express').Router();
const {
  getAllThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
} = require('../../controllers/thoughtController');

// /api/students
router.route('/').get(getAllThoughts).post(createThought);

// /api/students/:studentId
router.route('/:Id').get(getSingleThought).delete(deleteThought);
  

module.exports = router;
