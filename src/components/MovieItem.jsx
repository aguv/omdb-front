import React from 'react'
import {Grid, IconButton} from '@material-ui/core'
import Image from 'material-ui-image'
import { Link } from 'react-router-dom'
import AddBoxIcon from '@material-ui/icons/AddBox';
import { useSelector, useDispatch } from 'react-redux';
import {addMovieToFav} from '../store/userReducer';
import { Alert } from '@material-ui/lab';
import {isFavorite} from '../utils';
import {movieItemStyle as useStyles} from '../customStyles';

const MovieItem = ({movie}) => {
    const [alert, setAlert] = React.useState({on: false, message: '', type: ''})
    const classes = useStyles()
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.loggedUser);

    const handleAlert = (on, message, type) => {
        setAlert({on, message, type})
        setTimeout(() => setAlert({on: false, message: '', type: ''}), 2000);
    }

    const handleClick = () => {
        if(user && isFavorite(movie.id, user.favoritesMovies)) {
            handleAlert(true, 'This movie is already in favorites!', 'error');
            return;
        }

        if(user) {
            dispatch(addMovieToFav({id: movie.id, poster_path: movie.poster_path, user: user._id}))
                .then(() => {
                    handleAlert(true, 'Movie added to favorites!', 'success');
                });
        } else {
            handleAlert(true, 'You must to be logged!', 'error');
        }
    }

    return (
        <Grid item xs={1} className={classes.gridItem}>
                 {alert.on ? <Alert severity={alert.type} className={classes.alert}>{alert.message}</Alert> : null }
                <IconButton className={classes.iconButton} onClick={handleClick}>
                    <AddBoxIcon style={{marginTop: '-0.5rem', marginLeft: '-0.5rem'}}/>
                </IconButton>
                <Link to={`/movies/${movie.id}`}>
                    <Image src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} color='inherit' imageStyle={{width: '165px', height: '14.3em'}}/>
                </Link>
        </Grid>
    )
}

export default MovieItem
