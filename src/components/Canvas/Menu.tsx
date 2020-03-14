import React, { useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import makeStyles from '@material-ui/styles/makeStyles/makeStyles';

import Context from '../../context/Context'
import { list, MenuItem } from '../../config/menu';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: '20vh',
        minHeight: '100vh',
        maxHeight: '100vh',
        border: '1px solid red',
        overflow: 'auto',
    },
    stylesSelected: {
        border: '1px solid blue'
    },
    stylesDefault: {
        minWidth: '100%',
    },
    logo: {
        height: '30px',
        width: '30px'
    }
}))

const Menu = () => {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            {list.map(menuItem => <Item key={menuItem.id} {...menuItem} />)}
        </List>
    )
}

const Item = ({ id, description, src }: MenuItem) => {
    const classes = useStyles();
    const { selectedMenuItem, setSelectedMenuItem } = useContext(Context);

    return (
        <ListItem
            className={id === selectedMenuItem ? classes.stylesSelected : classes.stylesDefault}
            onClick={() => selectedMenuItem === id ? setSelectedMenuItem('') : setSelectedMenuItem(id)} >
            <ListItemAvatar>
                <Avatar src={src} />
            </ListItemAvatar>
            <ListItemText id={id} primary={description} />
        </ListItem>

    )
}


export default Menu;