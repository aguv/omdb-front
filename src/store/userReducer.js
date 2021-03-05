import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

export const createUser = createAsyncThunk('CREATE_USER', (user) => {
    return axios.post('http://localhost:3001/api/users/register', user).then(res => res.data);
});

export const loginUser = createAsyncThunk('LOGIN_USER', (user) => {
    // return axios.post('http://localhost:3001/api/users/login', user).then(res => res.data);
    return axios({
        method: 'post',
        data: user,
        withCredentials: true,
        url: 'http://localhost:3001/api/users/login'
    })
        .then(r => r.data);
});

export const isLogged = createAsyncThunk('IS_LOGGED', () => {
    return axios('http://localhost:3001/api/users', { 
        method: 'get',
        withCredentials: true 
    })
        .then(res => res.data);
})

export const addMovieToFav = createAsyncThunk('ADD_TO_FAV', (movie) => {
    return axios.put(`http://localhost:3001/api/users/${movie.user}/addfav`, movie).then(r => r.data);
});

export const removeFromFavs = createAsyncThunk('REMOVE_FAV', (data) => {
    return axios.post(`http://localhost:3001/api/users/deletefavs`, data).then(r => r.data);
});

export const logOut = createAsyncThunk('LOG_OUT', () => {
    return axios('http://localhost:3001/api/users/logout', { 
        method: 'post',
        withCredentials: true 
    })
        .then(r => r.data);
})

export const searchUsers = createAsyncThunk('SEARCH_USERS', (string) => {
    return axios(`http://localhost:3001/api/users/${string}`, {
        method: 'get',
        withCredentials: true
    })
        .then(r => r.data);
})

const userReducer = createReducer({}, {
    [createUser.fulfilled]: (state, action) => ({...state}),
    [loginUser.fulfilled]: (state, action) => ({...state, loggedUser: action.payload}),
    [addMovieToFav.fulfilled]: (state, action) => ({...state, loggedUser: {...state.loggedUser, favoritesMovies: [...state.loggedUser.favoritesMovies, action.payload]}}),
    [isLogged.fulfilled]: (state, action) => ({...state, loggedUser: action.payload}),
    [removeFromFavs.fulfilled]: (state, action) => ({...state, loggedUser: {...state.loggedUser, favoritesMovies: state.loggedUser.favoritesMovies.filter(movie => parseInt(movie.id) !== action.payload)}}),
    [logOut.fulfilled]: (state, action) => ({...state, loggedUser: null}),
    [searchUsers.fulfilled]: (state, action) => ({...state, foundUsers: action.payload})
})

export default userReducer;