import { Box, Typography } from '@mui/material'
import React from 'react'


const Clients = () => {

    return (

        <Box height='100vh' width='100vw' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>

            <Typography style={{ fontSize: '56px', fontFamily: 'Great Vibes', color: '#999966' }}>Clients</Typography>
            <Typography style={{ fontSize: '36px', color: '#333333', fontWeight: '550' }}>TESTIMONIALS</Typography>

            <Typography style={{ fontSize: '24px', color: '#333333', fontFamily: 'Playfair Display' }}>
                "The menu,ambience and special attention given by your staff to the guests, </Typography>

            <Typography style={{ fontSize: '24px', color: '#333333', fontFamily: 'Playfair Display' }}>
                was as always of the highest standard.We continue to receive compliments </Typography>

            <Typography style={{ fontSize: '24px', color: '#333333', fontFamily: 'Playfair Display' }}>
                by manyof those whoe were present"
            </Typography>
            <Typography style={{ fontSize: '15px', fontFamily: 'Poppins', marginTop: '45px' }}>RICHARD NAUZ</Typography>
        </Box>
    )
}

export default Clients