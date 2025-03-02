import PropTypes from 'prop-types'
import { Box, Toolbar } from "@mui/material"
import { Navbar, Sidebar } from '../components'

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }} className='animate__animated animate__fadeIn animate__faster'>
            <Navbar drawerWidth={drawerWidth} />
            <Sidebar drawerWidth={drawerWidth} />

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    padding: 3
                }}
            >
                <Toolbar />
                {children}
            </Box>

        </Box>
    )
}

JournalLayout.propTypes = {
    children: PropTypes.node.isRequired
}