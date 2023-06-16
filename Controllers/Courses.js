const {Courses} = require('../Model/Courses');
const {coursesData} = require("../Data's/Courses");


const storeCourse = async (req,res)=>{
    try {
       
        const result = await Courses.insertMany(coursesData);
        res.send(result)
    } catch (error) {
        console.log(error.message)
    }

}
const getAll = async (req,res)=>{
    try {
        const result = await Courses.find();
        // console.log(result)
        res.send(result);
    } catch (error) {
        console.log(error.message)
    }
}
const findbyId = async (req,res)=>{
    try {
      
        const id = req.params._id    
        const result = await Courses.findById(id)
        console.log(result);
        res.send(result)
    } catch (error) {
        console.log(error.message)
    }
}
module.exports = {storeCourse,getAll,findbyId};