import { Box, Button } from '@mui/material'
import { Typography } from 'antd'
import React from 'react'


const WelcomeRest = () => {
    return (
        <Box height='100vh' width='100vw' display='flex' justifyContent='space-between' alignItems='center'>

            <Box height='80%' width='50%' display='flex' justifyContent='flex-end' alignItems='center'>

                <Box height='80%' width='60%' >


                    <img alt='pic' src='https://demos.hogash.com/dannys/wp-content/uploads/sites/4/2017/05/img_01.jpg' height="100%" width='100%'></img>

                </Box>

                <Box height='60%' width='25%' position='absolute' mr='280px' mt='200px' >

                    <img alt='pic' src='https://demos.hogash.com/dannys/wp-content/uploads/sites/4/2017/05/img_02.jpg' height="100%" width='100%'></img>
                </Box>


            </Box>

            <Box height='80%' width='45%' display='flex' flexDirection='column' alignItems='center' mr='10px' >


                <Typography style={{ fontSize: '56px', fontFamily: 'Great Vibes', color: '#999966', textAlign: 'start' }}>Welcome at</Typography>
                <Typography style={{ fontSize: '36px', fontFamily: 'Poppinns' }}>DANNY'S RESTAURANT</Typography>

                <Typography style={{ marginTop: "30px", width: '100%', fontSize: '18px', fontFamily: 'Poppins' }}>
                    “Action ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate”.</Typography>

                <Box height='50%' width='100%' display='flex' flexDirection='column' justifyContent='space-evenly' alignItems='center'>

                    <Typography style={{ fontSize: '15px', fontFamily: 'Poppinns' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</Typography>

                    <Button variant='outlined' size='small' sx={{ borderColor: 'yellow', color: '#333333', ":hover": { color: '#C69533', fontFamily: 'Poppins', borderColor: '#C69533' } }}>ABOUT US</Button>
                </Box>
            </Box>

        </Box>
    )
}

export default WelcomeRest