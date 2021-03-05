import React from 'react'
import {Grid} from '@material-ui/core'
import MovieItem from '../components/MovieItem'
import {moviesGridStyle as useStyles} from '../customStyles';

const MoviesGrid = ({movies}) => {
    const classes = useStyles();

    return (
        <Grid container spacing={0} className={classes.container} justify='center'>
            {
                movies && movies.map(movie => <MovieItem key={movie.id} movie={movie}/>)
            }
        </Grid>
    )
}

export default MoviesGrid
