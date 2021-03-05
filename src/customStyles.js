import { makeStyles } from '@material-ui/core';

export const drawerStyle = makeStyles(theme => ({
    paper: {
        marginTop: '3.7em',
        backgroundColor: 'inherit',
        height: `calc(100% - 2.5em)`,
        width: '17.5em',
        color: 'white'
    },
    input: {
        border: '1px solid black',
        width: '12.5em',
        margin: '1em',
        padding: '0 0.2em 0 0.9em',
        backgroundColor: 'white'
    },
    search: {
        width: '2em',
        height: '2em',
        marginTop: '1.4em',
        color: 'white'
    },
    listItem: {
        marginLeft: '1em',
        height: '2.7em',
        width: '15.9em'
    },
    footer: {
        textDecoration: 'none', 
        fontSize: '0.8rem', 
        color: '#878484', 
        margin: '0.5rem 0 0 1.5rem',
    },
    git: {
        '&:hover': {
            color: '#B78ACD'
        }
    }
}));

export const favoriteItemStyle = makeStyles(theme => ({
    gridItem: {
        height: '14.3em',
        minWidth: '165px',
        margin: '0.2em',
    },
    iconButton: {
        position: 'absolute',
        zIndex: 1,
        color: 'white',
        "&:hover": {
            color: 'red'
        }
    },
    alert: {
        backgroundColor: '#FFF',
        width: '14em',
        height: '2em',
        paddingBottom: '1em',
        position: 'absolute',
        zIndex: 1,
        marginTop: '2em'
    }
}));

export const favoriteWindowStyle = makeStyles(theme => ({
    box: {
        width: 'cover',
        backgroundColor: 'inherit',
        borderTop: '1px solid black',
        paddingBottom: '2em'
    }
}));

export const loginStyle = makeStyles(theme => ({
    container: {
        width: '100%',
        height: '59.2em',
        backgroundColor: 'inherit',
        display: 'flex',
        justifyContent: 'center'
    },
    box: {
        width: '35em',
        height: '20em',
        backgroundColor: '#6E6A69',
        alignSelf: 'center',
        borderRadius: '10px',
        border: '1px solid grey',
        marginBottom: '3em',
        padding: '1em',
        color: 'white'
    },
    textfield: {
        color: 'white'
    },
    button: {
        marginTop: '1rem'
    },
    link: {
        color: 'white'
    }, 
    icon: {
        margin: '0.15em 0 0 0.2em'
    },
    error: {
        height: '2.5em',
        width: '18em',
        margin: '1em 0 0 0.1em',
        position: 'absolute'
    }
}));

export const movieStyle = makeStyles(theme => ({
    container: {
        display: 'flex',
        height: '58.2em',
        width: `calc(100% - 18em)`,
        marginLeft: '17.7em',
        backgroundColor: 'inherit',
        color: 'white'
    },
    icon: {
        width: '3em',
        height: '3em'
    },
    alert: {
        backgroundColor: '#FFF',
        width: '17m',
        height: '2em',
        paddingBottom: '1em',
        marginTop: '1em'
    }
}));

export const navbarStyle = makeStyles(theme => ({
    title: {
        flexGrow: 1,
        marginBottom: '0.2em'
    },
    buttons: {
        marginLeft: '1em',
        marginBottom: '0.3em',
        color: 'red'
    },
    icon: {
        margin: '0.1em 0 0 0.3em'
    },
    appbar: {
        height: '3.7em'
    }
}));

export const movieItemStyle = makeStyles(theme => ({
    gridItem: {
        height: '14.3em',
        minWidth: '165px',
        margin: '0.2em',
    },
    iconButton: {
        position: 'absolute',
        zIndex: 1,
        color: 'white',
        "&:hover": {
            color: 'orange'
        }
    },
    alert: {
        backgroundColor: '#FFF',
        width: '18em',
        height: '2em',
        paddingBottom: '1em',
        position: 'absolute',
        zIndex: 1,
        marginTop: '2em'
    }
}));

export const moviesGridStyle = makeStyles(theme => ({
    container: {
        height: 'auto',
        padding: '0.2em',
        marginLeft: '0.1'
    }
}));

export const registerStyle = makeStyles(theme => ({
    container: {
        width: '100%',
        height: '59.2em',
        backgroundColor: 'inherit',
        display: 'flex',
        justifyContent: 'center'
    },
    box: {
        width: '35em',
        height: '25em',
        backgroundColor: '#6E6A69',
        alignSelf: 'center',
        borderRadius: '10px',
        border: '1px solid grey',
        marginBottom: '3em',
        padding: '1em',
        color: 'white'
    },
    textfield: {
        color: 'white'
    },
    button: {
        marginTop: '1rem'
    },
    link: {
        color: 'white'
    }, 
    icon: {
        margin: '0.15em 0 0 0.2em'
    },
    error: {
        height: '2.5em',
        width: '18em',
        margin: '1em 0 0 0.1em',
        position: 'absolute'
    }
}));

export const userDrawerStyle = makeStyles(theme => ({
    paper: {
        marginTop: '3.7em',
        backgroundColor: 'inherit',
        height: `calc(100% - 2.5em)`,
        width: '17.5em',
        color: 'white'
    },
    textbox: {
        height: '7rem',
        padding: '1em'
    },
    input: {
        backgroundColor: 'white',
        height: '2rem',
        width: '13rem',
        margin: '0.5em 0 0 1em',
        paddingLeft: '0.5em'
    }
}));

export const userGridStyle = makeStyles(theme => ({
    container: {
        height: 'auto',
        padding: '0.2em',
        marginLeft: '17.5em',
        width: 'calc(100% - 17.5em)'
    }
}))

export const userPageStyle = makeStyles(theme => ({
    divider: {
        width: `calc(100% - 17.5em)`,
        marginLeft: '17.5em'
    },
    text: {
        color: 'white',
        margin: '0.5em 0 0 12em'
    },
    alert: {
        margin: '2em',
        backgroundColor: 'white',
        width: '30em',
        
    }
}));

export const gridContainerStyle = makeStyles(theme => ({
    container: {
        height: '58.2em',
        width: `calc(100% - 18em)`,
        marginLeft: '17.7em',
        backgroundColor: 'inherit',
    },
}))