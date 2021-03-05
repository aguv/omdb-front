import { createAsyncThunk, createReducer, createAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPopularMovies = createAsyncThunk('GET_POPMOV', () => {
    return axios.get('http://localhost:3001/api/movies').then(r => r.data);
})

export const getCategories = createAsyncThunk('GET_CAT', () => {
    return axios.get('http://localhost:3001/api/movies/categories').then(r => r.data);
})

export const getMoviesByCategory = createAsyncThunk('GET_MOVIES_CAT', (catId) => {
    return axios.get(`http://localhost:3001/api/movies/categories/${catId}`).then(r => r.data);
})

export const getMovieById = createAsyncThunk('GET_MOVIE', (movieId) => {
    return axios.get(`http://localhost:3001/api/movies/${movieId}`).then(r => r.data);
})

export const getMovieByQuery = createAsyncThunk('GET_QUERY_MOV', (input) => {
    return axios.get(`http://localhost:3001/api/movies?title=${input}`).then(r => r.data);
})

export const getRelatedMovies = createAsyncThunk('RELATED_MOVIES', (movieId) => {
    return axios.get(`http://localhost:3001/api/movies/${movieId}/related`).then(r => r.data);
})

export const resetMovies = createAction('RESET_MOVIES');


const moviesReducer = createReducer({}, {
    [getPopularMovies.fulfilled]: (state, action) => ({...state, movies: action.payload.slice(0, 36), selectedMovie: {}}),
    [getCategories.fulfilled]: (state, action) => ({...state, categories: action.payload}),
    [getMoviesByCategory.fulfilled]: (state, action) => ({...state, movies: action.payload, selectedMovie: {}}),
    [getMovieById.fulfilled]: (state, action) => ({...state, selectedMovie: action.payload}),
    [getMovieByQuery.fulfilled]: (state, action) => ({...state, movies: action.payload.slice(0, 36), selectedMovie: {}}),
    [getRelatedMovies.fulfilled]: (state, action) => ({...state, selectedMovie: {...state.selectedMovie, relatedMovies: action.payload}}),
    [resetMovies]: (state, action) => ({...state, movies: []}),
})

export default moviesReducer;