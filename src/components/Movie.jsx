import React from 'react';
import {Box, Divider, IconButton, Typography, Link} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarIcon from '@material-ui/icons/Star';
import { useSelector, useDispatch } from 'react-redux';
import MoviesGrid from './MoviesGrid';
import {addMovieToFav} from '../store/userReducer';
import {isFavorite} from '../utils';
import { movieStyle as useStyles } from '../customStyles'; 

const Movie = () => {
    const [alert, setAlert] = React.useState({on: false, message: '', type: ''})
    const selectedMovie = useSelector(state => state.movies.selectedMovie);
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.loggedUser);
    const classes = useStyles()

    const handleAlert = (on, message, type) => {
        setAlert({on, message, type})
        setTimeout(() => setAlert({on: false, message: '', type: ''}), 2000);
    }

    const handleClick = () => {
        if(user && isFavorite(selectedMovie.id, user.favoritesMovies)) {
            handleAlert(true, 'This movie is already in favorites!', 'error');
            return;
        }

        if(user) {
            dispatch(addMovieToFav({id: selectedMovie.id, poster_path: selectedMovie.poster_path, user: user._id}))
                .then(() => {
                    handleAlert(true, 'Movie added to favorites!', 'success');
                });
        } else {
            handleAlert(true, 'You must to be logged!', 'error');
        }
    }

    return (
        <Box className={classes.container}>
            <Box style={{margin: '2.4em 0 0 2em', height: '52em', width: '18rem', backgroundColor: '#423B3B', borderRadius: '5px', boxShadow: '3px 6px 14px 2px rgba(0,0,0,0.40)'}}>
                <Link href={`http://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`} >
                    <img src={`http://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`} alt='poster' style={{height: '24em', borderRadius: '10px', padding: '1em 1em 0.2em 1em'}}/>
                </Link>
                <Typography variant="h6" color="initial" style={{marginLeft: '0.9em'}}>
                    Average: {selectedMovie.vote_average}
                    <StarIcon style={{height: '0.7em', color: 'orange'}}/>
                </Typography>   
                <Typography variant="body1" color="initial" style={{padding: '0.2em 1em 0 1em', textAlign: 'justify'}}>
                        {selectedMovie.overview}
                </Typography>  
            </Box>
            <Box p={4}>
                <Box display='flex' mb={1}>
                    <Typography variant="h2" color="initial">
                        {selectedMovie.title}
                    </Typography>
                    <IconButton className={classes.icon} onClick={handleClick}>
                        <FavoriteIcon color='secondary'/>
                    </IconButton>
                    {alert.on ? <Alert severity={alert.type} className={classes.alert}>{alert.message}</Alert> : null }
                </Box>
                <Divider />
                <Box m={2}>
                    <Typography variant="h6" color="initial">
                        Release date: {selectedMovie.release_date}
                    </Typography>
                    <Typography variant="h6" color="initial">
                        Duration: {`${selectedMovie.runtime} min.`}
                    </Typography>
                    <Typography variant="h6" color="initial">
                        Genres: {selectedMovie.genres.map((genre, index) => index === selectedMovie.genres.length - 1 ? <Link color="inherit" href={`/categories/${genre.id}`} key={genre.id}> {`${genre.name}.`}</Link> : <Link color="inherit" href={`/categories/${genre.id}`} key={genre.id}> {`${genre.name}, `}</Link>)}
                    </Typography>       
                    <Typography variant="h6" color="initial">
                        Production companies: {selectedMovie.production_companies.map((prod, index) => index === selectedMovie.production_companies.length - 1 ? `${prod.name}.` : `${prod.name}, `)}
                    </Typography>
                    <Link color="inherit" href={selectedMovie.homepage} variant='h6' style={{textDecoration: 'underline'}}>Link to homepage's film...</Link>
                    <Divider style={{margin: '1.7em 0 1.4em 0'}}/>
                    <Typography variant="h6" color="initial">
                        Related movies:
                    </Typography>
                    <Box mr={1}>
                        <MoviesGrid movies={selectedMovie.relatedMovies}/>
                    </Box>
                    </Box>        
            </Box>
        </Box>
    )
}

export default Movie
