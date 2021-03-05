import { Box } from '@material-ui/core'
import React from 'react'
import MoviesGrid from './MoviesGrid';
import { favoriteWindowStyle as useStyles } from '../customStyles';

const FavoritesWindow = ({movies}) => {
    const classes = useStyles()

    return (
        <Box className={classes.box}>
            <MoviesGrid movies={movies}/>
        </Box>
    )
}

export default FavoritesWindow
