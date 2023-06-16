const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {Users} = require('../Model/UserModel');
const {Courses} = require('../Model/Courses');


const verify = async (req,res)=>{
    try {
        const token = req.body.a;
        
    } catch (error) {
        console.log(error.message)
    }
}

const Register = async(req,res) => {
    try {
        console.log(req.body);
        const name = req.body.name;
        const password = req.body.password;
        const hashpassword = await bcrypt.hash(password,10);
        const obj = {
            name:name,
            email:req.body.email,
            phone:req.body.phone,
            password:hashpassword
        }
        const result = await Users.insertMany(obj)
        res.send(result)   
    } catch (error) {
        console.log(error.message)
    }
}
const Login = async (req,res)=> {
try {
    // console.log(req.body);
    const detail = req.body.obj;
    console.log(detail)
    const email = detail.email;
    const userExist = await Users.findOne({email:email});
    // console.log(userExist)
    if(userExist){
        bcrypt.compare(detail.password,userExist.password,(err,data)=>{
            if(data){
                jwt.sign({userExist},"sharma",(err,token)=>{
                    if(token){
                        res.send({token,userExist})
                    }
                    else{ res.send(err) }
                })
            }
            else{ res.send("wrong password") }
        })}
    else{ res.send("E-mail not exist") }
} 
catch (error) {
    console.log(error.message)
}
}

const deleteAlluser = async (req,res)=>{
    try {
        const result = await Users.deleteMany({});
        res.send(result);
        console.log("all deleted");
    } catch (error) {
        console.log(error.message)
    }
}

const mycourses = async (req,res)=> {
    try {
        console.log(req.body)
        const mycourse = req.body;
        console.log(mycourse)
       const userDetail = await Users.findById(mycourse.userId);
       const courseDetail = await Courses.findById(mycourse.course);
       const result = userDetail.mycourses.push(courseDetail);
       userDetail.save();
       res.send("updated")

    } catch (error) {
        console.log(error.message)
    }
}
const getmycourse = async (req,res)=>{
    try {
        console.log(req.body);
        const detail = req.body.id;
        const result = await Users.findById(detail)
        res.send(result.mycourses)
    } catch (error) {
        console.log(error.message)
    }
}
const deleteCourse = async (req,res) => {

}
module.exports = {Register,Login,mycourses,deleteAlluser,getmycourse,verify};