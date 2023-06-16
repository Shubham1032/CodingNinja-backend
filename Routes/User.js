const userRoute = require('express').Router();
const userController = require('../Controllers/User')
const newsController = require('../Controllers/News')

userRoute.get("/",(req,res)=>{
    console.log("working route")
    res.send('working routes')
})
userRoute.post("/register",userController.Register);
userRoute.post("/login",userController.Login);
// userRoute.delete("/deleteAll",userController.deleteAlluser)
// userRoute.get("/news",newsController.storeAll)
 userRoute.get("/getNews",newsController.getAll);
 userRoute.post("/addCart",userController.mycourses);
 userRoute.post("/getcoursesonly",userController.getmycourse);



module.exports=userRoute