import React from 'react';
import './navbar.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const Navbar = () => {
    return (
        <div className='navbar-div'>
            <h2>Meetup</h2>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Search by titles and tags..." variant="outlined" />
            </Box>
        </div>
    )
}

export default Navbar
