import React from 'react';
import Navbar from './components/Navbar';
import LeftDrawer from './components/Drawer'
import GridContainer from './components/GridContainer';
import MovieDisplay from './components/MovieDisplay';
import Register from './components/Register';
import './App.css'
import { getPopularMovies, getMoviesByCategory, getMovieByQuery } from './store/moviesReducer'
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import UserPage from './components/UserPage';

function App() {
  
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path='/myprofile' render={() => <UserPage />}/>
        <Route path='/login' render={() => <Login />} />
        <Route path='/signin' render={() => <Register />} />
        <Route path='/'>
          <LeftDrawer />
          <Route  exact path='/' render={() => <GridContainer actionToDispatch={getPopularMovies}/>} />
          <Route path='/categories/:id' render={({match}) => <GridContainer match={match} actionToDispatch={getMoviesByCategory}/>} />
          <Route path='/movies/:id' render={({match}) => <MovieDisplay match={match} />} />
          <Route path='/query/:title' render={({match}) => <GridContainer actionToDispatch={getMovieByQuery} match={match}/>} />
        </Route>
      </Switch> 
    </div>
  );
}

export default App;
