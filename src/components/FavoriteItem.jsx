import React from 'react'
import {Grid, IconButton} from '@material-ui/core'
import Image from 'material-ui-image'
import { Link } from 'react-router-dom'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useSelector, useDispatch } from 'react-redux';
import {removeFromFavs} from '../store/userReducer';
import { Alert } from '@material-ui/lab';
import { favoriteItemStyle as useStyles } from '../customStyles';

const FavoriteMovie = ({movie}) => {
    const [alert, setAlert] = React.useState({on: false, message: '', type: ''})
    const user = useSelector(state => state.user.loggedUser)
    const classes = useStyles()
    const dispatch = useDispatch();

    const handleAlert = (on, message, type) => {
        setAlert({on, message, type})
        setTimeout(() => setAlert({on: false, message: '', type: ''}), 1000);
    };

    const handleClick = () => {
        handleAlert(true, 'Deleting movie...', 'success')
        setTimeout(() => {
            dispatch(removeFromFavs({movieId: movie.id, userId: user._id}))
            .then(() => {
                console.log('MOVIE REMOVED')
            });
        }, 1200)
    };

    return (
        <Grid item xs={1} className={classes.gridItem}>
                 {alert.on ? <Alert severity={alert.type} className={classes.alert}>{alert.message}</Alert> : null }
                <IconButton className={classes.iconButton} onClick={handleClick} >
                    <DeleteForeverIcon style={{marginTop: '-0.5rem', marginLeft: '-0.5rem'}}/>
                </IconButton>
                <Link to={`/movies/${movie.id}`}>
                    <Image src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} imageStyle={{width: '165px', height: '14.3em'}} color='inherit'/>
                </Link>
        </Grid>
    )
}

export default FavoriteMovie;
