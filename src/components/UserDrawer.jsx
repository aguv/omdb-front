import React from 'react'
import { Drawer, Divider, Box, Typography, Button, InputBase, IconButton, ListItem, ListItemText, List } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {useDispatch, useSelector} from 'react-redux';
import {logOut, searchUsers} from '../store/userReducer';
import {useHistory} from 'react-router-dom';
import FavoritesWindow from './FavoritesWindow';
import {userDrawerStyle as useStyles} from '../customStyles';

const UserDrawer = ({user}) => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const history = useHistory();
    const [toSearchUsers, setToSearchUsers] = React.useState('');
    const [wasDispatch, setWasDispatch] = React.useState(false);
    const [showList, setShowList] = React.useState(false);
    const [selectedUser, setSelectedUser] = React.useState({});
    const {foundUsers} = useSelector(state => state.user)

    const handleLogoutClick = () => {
        dispatch(logOut())
            .then(() => {
                console.log('USER LOGGED OUT');
                history.push('/');
            })
    }

    const handleChange = e => {
        setToSearchUsers(e.target.value);
    }

    const handleSearchUser = () => {
        if(toSearchUsers.length > 0) {
            dispatch(searchUsers(toSearchUsers))
                .then(() => {
                    console.log('GOT USERS')
                    setToSearchUsers('')
                    setWasDispatch(true);
                });
        }
    }

    const handleSelectedUser = (user) => {
        setShowList(true);
        setSelectedUser(user);
    }


    return (
        <Drawer
            variant="permanent"
            anchor="left"
            classes={{paper: classes.paper}}
        >
            <Box className={classes.textbox} display='flex' flexDirection='column'>
                <Typography variant="h6" color="initial">
                    {user.email}
                </Typography>
                <Typography variant="body1" color="initial">
                    Register: {user.register && user.register.substring(0, 10)}
                </Typography>
                <Button variant='contained' color='secondary' style={{marginTop: '1em'}} onClick={handleLogoutClick}>LOG OUT</Button>
            </Box>
            <Divider/>
            <Box display='flex'>
                <InputBase className={classes.input} placeholder='Search user...' onChange={handleChange} value={toSearchUsers}/>
                <IconButton style={{height: '2.2em', marginLeft: '0.3em', color: 'white'}} onClick={handleSearchUser}>
                    <SearchIcon />
                </IconButton>
            </Box>
            <List>
                {wasDispatch && foundUsers ? 
                (
                    foundUsers.map(user => (
                        <ListItem button key={user._id} onClick={() => handleSelectedUser(user)}>
                            <ListItemText primary={user.email}/>
                        </ListItem> 
                    ))
                ) : null}
            </List>
            {showList ? <FavoritesWindow movies={selectedUser.favoritesMovies}/> : null}
        </Drawer>
    )
}

export default UserDrawer
