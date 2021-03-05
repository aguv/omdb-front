import React from 'react';
import {Grid} from '@material-ui/core';
import FavoriteItem from '../components/FavoriteItem';
import {userGridStyle as useStyles} from '../customStyles';

const UserGrid = ({movies}) => {
    const classes = useStyles();

    return (
        <Grid container spacing={0} className={classes.container} justify='center'>
            {
                movies && movies.map(movie => <FavoriteItem key={movie.id} movie={movie}/>)
            }
        </Grid>
    )
}

export default UserGrid
