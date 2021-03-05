import { Box, Divider, Typography, Button } from '@material-ui/core';
import React from 'react';
import UserGrid from './UserGrid';
import UserDrawer from './UserDrawer';
import {useSelector} from 'react-redux';
import {Alert} from '@material-ui/lab';
import {useHistory} from 'react-router-dom';
import {userPageStyle as useStyles} from '../customStyles';

const UserPage = () => {
    const classes = useStyles();
    const user = useSelector(state => state.user);
    const history = useHistory();

    return (
        <Box>
            {user.loggedUser ? (
                <div>
                    <UserDrawer user={user.loggedUser}/>
                    <Typography variant="h5" color="initial" className={classes.text}>FAVORITES:</Typography>
                    <Divider className={classes.divider} />
                    <UserGrid movies={user.loggedUser.favoritesMovies} />
                </div>
            ) : <Alert severity='warning' variant='outlined' className={classes.alert}>
                    You need to be logged!
                    <Button variant='contained' color='secondary' style={{marginLeft: '7em'}} onClick={() => history.push('/')}>Back to home</Button>
                </Alert>
            }
        </Box>
    )
}

export default UserPage
