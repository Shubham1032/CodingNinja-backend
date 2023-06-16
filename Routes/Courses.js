const coursesRoute = require('express').Router();
const courseController = require('../Controllers/Courses');

// coursesRoute.post('/storeCourses',courseController.storeCourse);

coursesRoute.get('/getAll',courseController.getAll)
coursesRoute.get('/getOne/:_id',courseController.findbyId)

module.exports = coursesRoute