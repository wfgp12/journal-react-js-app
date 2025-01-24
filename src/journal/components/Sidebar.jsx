import {
    Box,
    Divider,
    Drawer,
    List,
    Toolbar,
    Typography
} from '@mui/material'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';
import { SideBarItem } from './SideBarItem';

export const Sidebar = ({ drawerWidth = 240 }) => {
    const { name } = useSelector(state => state.auth);
    const { notes } = useSelector(state => state.journal);

    return (
        <Box component="nav"
            sx={{
                width: { sm: drawerWidth },
                flexShrink: { sm: 0 }
            }}
        >
            <Drawer
                variant='permanent'
                open
                sx={{
                    display: { sm: 'block' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth
                    }
                }}
            >
                <Toolbar>
                    <Typography variant='h6' noWrap component="div">
                        {name}
                    </Typography>
                </Toolbar>
                <Divider />

                <List>
                    {
                        notes.map((note) =><SideBarItem key={note.id} {...note} />)
                    }
                </List>

            </Drawer>
        </Box>
    )
}

Sidebar.propTypes = {
    drawerWidth: PropTypes.number
}

