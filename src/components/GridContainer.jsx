import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MoviesGrid from './MoviesGrid';
import {gridContainerStyle as useStyles} from '../customStyles';


const GridContainer = ({actionToDispatch, match}) => {
    const classes = useStyles()
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies.movies)

    React.useEffect(() => {
        if(!match) {
            dispatch(actionToDispatch())
            .then(() => console.log('GOT POPULAR MOVIES FROM THE MOVIEDATABASE API!'));
        } else {
            if(match.params.id) {
                dispatch(actionToDispatch(match.params.id))
                    .then(() => console.log('GOT MOVIES BY CATEGORY FROM THE MOVIEDATABASE API!'));
            } else if (match.params.title) {
                dispatch(actionToDispatch(match.params.title))
                    .then(() => console.log('GOT MOVIES BY QUERY FROM THE MOVIEDATABASE API!'));
            }
        }

      }, [match])

    return (
        <div className={classes.container}>
            <MoviesGrid movies={movies} />
        </div>
    )
}

export default GridContainer
