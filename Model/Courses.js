const mongoose = require('mongoose');

const coursesScheme = new mongoose.Schema({
    category:String,
    name:String,
    about:String,
    logo:String,
    rating:Number,
    noOfrating:String,
    students:String,
    hours:String,
    months:String,
    problems:String
    

})
const Courses = mongoose.model('Courses',coursesScheme);
module.exports = {Courses};