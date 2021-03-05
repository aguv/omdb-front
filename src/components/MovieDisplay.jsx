import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import Movie from './Movie';
import { getMovieById, getRelatedMovies } from '../store/moviesReducer'

const MovieDisplay = ({match}) => {
    const [ready, setReady] = useState(false);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getMovieById(match.params.id))
            .then(() => {
                console.log('GOT MOVIES');
                return dispatch(getRelatedMovies(match.params.id));
            })
            .then(() => {
                console.log('GOT RELATED MOVIES');
                setReady(true);
            })
    }, [match])

    return (
       ready ? <Movie /> : 'Not yet'
    )
}

export default MovieDisplay
