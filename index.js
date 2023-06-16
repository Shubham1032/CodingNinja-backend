const express = require('express');
const app = express();
const Connection = require('./Database/Database')
const UserRoute = require('./Routes/User');
const CourseRoute = require('./Routes/Courses')
const cors  = require('cors');
app.use(express.json())
app.use(cors({origin:"*"}));
app.use(UserRoute)
app.use(CourseRoute);


app.listen(4000,()=>{
console.log("PORT:4000 running");
Connection()
})