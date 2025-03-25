import {configureStore} from '@reduxjs/toolkit';
import  authSlice  from '../features/authencation/authSlice';
export const store=configureStore({
    reducer:{
        auth:authSlice,
    },
})