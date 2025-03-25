const express=require('express');
const errorHandler = require('./middleware/errorMiddleware');
const connectDB = require('./config/connect');
const cors = require('cors');
const app =express();

app.use(cors());
require('dotenv').config();
connectDB();

app.listen(process.env.PORT,()=>console.log('server is running'));



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/user/',require('./routes/userRoutes'));
app.use(errorHandler);
