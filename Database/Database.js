const mongoose = require('mongoose');
const url = "mongodb+srv://shubham:shubham@cluster0.gaqof8w.mongodb.net/"


const Connection = async ()=>{
    try{
        console.log("connecting to db");
        const response = await mongoose.connect(url)
        console.log("connected to db")
    }catch (error){
       console.log(error.message)
    }
    
}
module.exports = Connection