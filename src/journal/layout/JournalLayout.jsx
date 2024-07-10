import PropTypes from 'prop-types'
import { Box } from "@mui/material"

export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{
            display: 'flex'
        }}>
            {/* Navbar */}

            {/* Sidebar */}

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    padding: 3
                }}
            >
                {children}
            </Box>

        </Box>
    )
}

JournalLayout.propTypes = {
    children: PropTypes.node.isRequired
}