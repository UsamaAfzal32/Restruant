import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Subscribe = () => {

    return (
        <Box height='100vh' width='100vw' bgcolor='#16191E' display='flex' justifyContent='center' alignItems='center' flexDirection='column'>

            <Box height="40%" width="50%" display='flex' justifyContent='center' alignItems='center' flexDirection='column'>

                <Typography style={{ fontSize: '56px', fontFamily: 'Great Vibes', color: '#999966' }}>Subscribe to our</Typography>
                <img alt='auto' src='https://demos.hogash.com/dannys/wp-content/uploads/sites/4/2017/05/offer_bubble.png' style={{ position: 'absolute', marginRight: '350px' }} ></img>
                <Typography style={{ fontSize: '36px', color: '#FFFFFF' }}>NEWSLETTER</Typography>
                <Typography style={{ fontSize: '18px', color: '#FFFFFF', fontFamily: 'Playfair Display' }}>Subscribe to our newsletter and receive 15% discount from your orderr.</Typography>
            </Box>
            <Box height="10%" width="50%" >
                <TextField placeholder='YOUR@MAIL.COM' sx={{
                    backgroundColor: 'white', borderRadius: '0',
                }} />
                <Button sx={{ backgroundColor: '#CC9933', height: '83.5%', width: '20%', borderRadius: '0', color: '#333333', ":hover": { color: 'white', backgroundColor: '#F2921D' } }}>SUBSCRIBE</Button>
            </Box>
        </Box>
    )
}

export default Subscribe