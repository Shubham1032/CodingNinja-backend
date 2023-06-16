const {News} = require('../Model/NewsModel');
const {newsData} = require("../Data's/News");


const storeAll =async (req,res)=>{
    try {
        // console.log(newsData);
        const result = await News.insertMany(newsData);
        res.send(result)
    } catch (error) {
        console.log(error.message)
    }
}
const getAll = async (req,res)=>{
    try {
        const result = await News.find()
        res.send(result);
    } catch (error) {
        console.log(error.message)
    }
}
module.exports = {storeAll,getAll}