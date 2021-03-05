import React from 'react';
import { Box, TextField, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {useDispatch} from 'react-redux';
import {loginUser} from '../store/userReducer';
import { Alert } from '@material-ui/lab';
import {useHistory} from 'react-router-dom';
import { loginStyle as useStyles } from '../customStyles';

const Login = () => {
    const [error, setError] = React.useState({error: false, message: ''})
    const [user, setUser] = React.useState({
        email: '',
        password: ''
    });

    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();

    const handleChange = e => {
        setUser(user => ({...user, [e.target.id]: e.target.value}))
    }

    const handleSubmit = e => {
        e.preventDefault();
        
        if(user.password.length < 8) {
            setError({error: true, message: `Password needs 8 characters!`});
            setTimeout(() => setError({error: false, message: ''}), 2000);
            return;
        }

        dispatch(loginUser(user))
            .then(user => {
                if(user.error) {
                    setError({error: true, message: 'Invalid credentials, try again!'});
                    setTimeout(() => setError({error: false, message: ''}), 2000);
                    setUser({email: '', password: ''})
                } else {
                    console.log('USER LOGGED!')
                    history.push('/')
                }
            });
    }

    return (
        <Box className={classes.container}>
            <Box className={classes.box}>
                <Box display='flex' justifyContent='center'>
                    <Typography variant="h6" color="initial" >
                        LOGIN 
                    </Typography>
                    <AccountCircleIcon className={classes.icon}/> 
                </Box> 
                <form onSubmit={handleSubmit}>
                    <Box mt={2}>
                        <TextField required id="email" label="Email" type='email' fullWidth InputLabelProps={{className: classes.textfield}} InputProps={{className: classes.textfield}} onChange={handleChange} value={user.email}/>
                    </Box>
                    <Box mt={2}>
                        <TextField required id="password" label="Password" type='password' fullWidth InputLabelProps={{className: classes.textfield}} InputProps={{className: classes.textfield}} onChange={handleChange} value={user.password}/>
                    </Box>
                    <Button variant='contained' color='secondary' fullWidth className={classes.button} type="submit">LOGIN!</Button>
                    { error.error ? <Alert severity="error" className={classes.error}>{error.message}</Alert> : null }
                    <Box mt={12} ml={42}>
                        <Link to='/signin' className={classes.link}>
                            Don't have an account? SIGN UP!
                        </Link> 
                    </Box>   
                </form>
            </Box>
        </Box>
    )
}

export default Login
