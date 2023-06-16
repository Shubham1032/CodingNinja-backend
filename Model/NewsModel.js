const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
     image:{
        type:String
     },
     description:{
        type:String
     }
})
const News = mongoose.model('News',newsSchema);
module.exports = {News}
