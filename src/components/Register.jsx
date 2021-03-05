import React from 'react';
import { Box, TextField, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { Alert } from '@material-ui/lab';
import {createUser} from '../store/userReducer';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {registerStyle as useStyles} from '../customStyles';

const Register = () => {
    const [user, setUser] = React.useState({
                                email: '',
                                password: '',
                                password2: ''
                            });
    const [error, setError] = React.useState({error: false, message: ''})
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();

    const handleChange = e => {
        setUser(user => ({...user, [e.target.id]: e.target.value}))
    }

    const handleSubmit = e => {
        e.preventDefault();
        
        if(user.password.length < 8) {
            setError({error: true, message: `Password needs 8 characters!`});
            setTimeout(() => setError({error: false, message: ''}), 2000);
            return;
        } else if (user.password !== user.password2) {
            setError({error: true, message: `Passwords don't match!`});
            setTimeout(() => setError({error: false, message: ''}), 2000);
            return;
        } 
        
        dispatch(createUser(user))
            .then(() => {
                console.log('USER CREATED!')
                history.push('/')
            });
    }

    return (
        <Box className={classes.container}>
            <Box className={classes.box}>
                <Box display='flex' justifyContent='center'>
                    <Typography variant="h6" color="initial" >
                        REGISTER 
                    </Typography>
                    <PersonAddIcon className={classes.icon}/> 
                </Box> 
                <form onSubmit={handleSubmit}>
                    <Box mt={2}>
                        <TextField required id="email" label="Email" type='email' fullWidth InputLabelProps={{className: classes.textfield}} InputProps={{className: classes.textfield}} onChange={handleChange} value={user.email}/>
                    </Box>
                    <Box mt={2}>
                        <TextField required id="password" label="Password" type='password' fullWidth InputLabelProps={{className: classes.textfield}} InputProps={{className: classes.textfield}} onChange={handleChange} value={user.password}/>
                    </Box>
                    <Box mt={2}>
                        <TextField required id="password2" label="Repeat your password" type='password' fullWidth InputLabelProps={{className: classes.textfield}} InputProps={{className: classes.textfield}} onChange={handleChange} value={user.password2}/>
                    </Box>
                    <Button variant='contained' color='secondary' fullWidth className={classes.button} type="submit">SIGN UP!</Button>
                     { error.error ? <Alert severity="error" className={classes.error}>{error.message}</Alert> : null }
                    <Box mt={14} ml={40}>
                        <Link to='/login' className={classes.link}>
                            Already have an account? SIGN IN!
                        </Link> 
                    </Box>   
                </form>
            </Box>
        </Box>
    )
}

export default Register
