import React, { Fragment, useState } from 'react'
import {Drawer, Divider, InputBase, Box, List, ListItem, ListItemText, Link as MaterialLink} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../store/moviesReducer';
import { Link, useHistory } from 'react-router-dom';
import { drawerStyle as useStyles } from '../customStyles';
import GitHubIcon from '@material-ui/icons/GitHub';

const LeftDrawer = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const categories = useSelector(state => state.movies.categories);
    const [queryInput, setQueryInput] = useState({title: ''});
    const history = useHistory();

    const handleInput = e => {
        setQueryInput({title: e.target.value})
    }

    const handleKey = e => {
        if(e.key === 'Enter') {
            setQueryInput({title: ''})
            history.push(`/query/${queryInput.title}`);
        }
    }

    React.useEffect(() => {
        dispatch(getCategories()).then(() => console.log('GOT CATEGORIES!'))
    }, [])

    return (
        <Fragment>
            <Drawer
              variant="permanent"
              anchor="left"
              classes={{paper: classes.paper}}
            >   <Box style={{display: 'flex'}}>
                    <InputBase placeholder='Search by title...' className={classes.input} onChange={handleInput} value={queryInput.title} onKeyPress={handleKey}/>
                    <Link className={classes.search} to={`/query/${queryInput.title}`} onClick={() => setQueryInput({title: ''})}>
                            <SearchIcon />
                    </Link>
                </Box>
                <Divider />
                <List>
                    {categories && categories.map(cat => (
                        <Link to={`/categories/${cat.id}`} style={{ color: 'inherit', textDecoration: 'inherit'}} key={cat.id}>
                            <ListItem button className={classes.listItem}>
                                <ListItemText primary={cat.name}/>
                            </ListItem>
                        </Link>
                    ))}
                </List>
                <Divider />
                <Box display='flex' className={classes.footer}>
                        <p>Agustin Vazquez - Plataforma5 2021</p>
                        <a href='https://github.com/aguv' style={{color: '#878484'}}>
                            <GitHubIcon style={{margin: '0.2em 0 0 0.5em'}} className={classes.git}/>
                        </a>
                </Box>
            </Drawer>
        </Fragment>
    )
}


export default LeftDrawer