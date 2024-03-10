import { configureStore } from '@reduxjs/toolkit'
import { authReducers } from './slices/authSlice';
import { dataReducers } from './slices/dataSlice';

const store=configureStore({
    reducer:{
        auth:authReducers,
        data:dataReducers
    }
});

export default store;