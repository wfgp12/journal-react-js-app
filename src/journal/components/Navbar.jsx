import PropTypes from 'prop-types'
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/auth';

export const Navbar = ({ drawerWidth = 240 }) => {
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(startLogout());
    }

    return (
        <AppBar
            position="fixed"
            sx={{
                width: { md: `calc(100% - ${drawerWidth}px)` },
                ml: { md: `${drawerWidth}px` }
            }}
        >
            <Toolbar>
                <IconButton
                    color='inherit'
                    sx={{
                        mr: 2,
                        display: { md: 'none' }
                    }}
                >
                    <MenuOutlined />
                </IconButton>
                <Grid container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography variant='h6' noWrap component="div">JournalApp</Typography>
                    <IconButton
                        onClick={onLogout}
                    >
                        <LogoutOutlined color='error'/>
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

Navbar.propTypes = {
    drawerWidth: PropTypes.number.isRequired
}