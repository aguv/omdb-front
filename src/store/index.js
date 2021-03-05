import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import moviesReducer from './moviesReducer';
import userReducer from './userReducer';

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(logger),
    reducer: {
        movies: moviesReducer,
        user: userReducer
    }

})

export default store;