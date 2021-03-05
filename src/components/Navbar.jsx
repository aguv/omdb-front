import React, { Fragment } from 'react'
import { Button, Typography, Toolbar, AppBar, Box } from '@material-ui/core'
import TheatersIcon from '@material-ui/icons/Theaters';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {isLogged} from '../store/userReducer';
import {navbarStyle as useStyles} from '../customStyles';

const Navbar = () => {
    const dispatch = useDispatch()
    const classes = useStyles()
    const {loggedUser} = useSelector(state => state.user)

    React.useEffect(() => {
        dispatch(isLogged())
            .then(() => console.log('USER RELOGGED'));
      }, [])
    

    return (
        <Fragment>
            <AppBar position="sticky" color="secondary" className={classes.appbar} elevation={0}>
              <Toolbar>
                <Box className={classes.title} display='flex'>
                    <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit'}} > 
                        <Typography variant="h4">
                            OpenMovieDatabase
                        </Typography>
                    </Link>
                    <TheatersIcon fontSize='large' className={classes.icon}/>
                </Box>
                {
                    loggedUser ? 
                        (<Box mb={1}>
                            <Link to='/myprofile' style={{ color: 'inherit', textDecoration: 'inherit', fontSize: '1.5em'}}>
                                <Button
                                    variant="contained"
                                    color="default"
                                    style={{color: 'red'}}
                                    endIcon={<AccountCircleIcon />}
                                >
                                    {loggedUser.email}
                                </Button>        
                            </Link>
                        </Box>) :
                        (<Box>
                            <Link to='/login' style={{ color: 'inherit', textDecoration: 'inherit'}}>
                                <Button variant='contained' className={classes.buttons}>LOGIN</Button>
                            </Link>
                            <Link to='/signin' style={{ color: 'inherit', textDecoration: 'inherit'}}>
                                <Button variant='contained' className={classes.buttons}>SIGN IN</Button>
                            </Link>
                        </Box>)
                }
              </Toolbar>
            </AppBar>
        </Fragment>
    )
}

export default Navbar
