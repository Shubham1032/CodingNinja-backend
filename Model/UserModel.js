const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
    },
    password:{
        type:String,
        required:true
    },
    mycourses:{
        type:[],
        default:[]
    }
})

const Users = mongoose.model('Users',userSchema);
module.exports = {Users}