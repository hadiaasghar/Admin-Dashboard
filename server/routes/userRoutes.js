const express=require('express');
const { registeruser, loginuser, uploadImage } = require('../controller/userController');
 const router=express.Router();

 router.post('/register-user',registeruser);
 router.post ('/login-user',loginuser);
 router.post("/upload-image/:user_id",uploadImage);
 
 module.exports=router;
