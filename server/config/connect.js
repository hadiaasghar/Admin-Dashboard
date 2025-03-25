const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
 
    // await mongoose.connect(process.env.MONGO_URL)
    await mongoose.connect("mongodb://localhost:27017/adminpanel");
    console.log(`Connected to DB: ${mongoose.connection.host}`);
  
};

module.exports = connectDB;
