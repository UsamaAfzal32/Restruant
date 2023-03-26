import { Box, Button } from '@mui/material'
import { Typography } from 'antd'
import React from 'react'
import pic from '../Images/bbq.jpg'


const MenuRest = () => {

    return (
        <Box height='100vh' width='100vw' bgcolor='grey' mt='20px' display='flex' >

            <Box height='100%' width='50%' bgcolor='#16191E' display='flex' justifyContent='center' alignItems='center' >

                <Box height='100%' width='70%' ml='70px' >
                    <Box height='15%' width='100%'  ></Box>

                    <Box height='20%' marginBottom='30px' width='100%' display="flex" flexDirection='column' >

                        <Typography style={{ fontSize: '56px', fontFamily: 'Great Vibes', color: '#999966', textAlign: 'start' }}>Restaurant</Typography>
                        <Typography style={{ fontSize: '36px', color: 'white', textAlign: 'start' }}>MENU</Typography>

                    </Box>
                    <Box height='45%' width='70%' display='flex' justifyContent='space-evenly'>

                        <Typography style={{ fontSize: '16px', fontFamily: 'Poppins', color: '#999999', textAlign: 'start' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</Typography>
                        <Typography style={{ marginLeft: '50px', fontSize: '16px', fontFamily: 'Poppins', color: '#999999', textAlign: 'start' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</Typography>

                    </Box>
                    <Box height='15%' width='100%' display='flex' alignItems='center' >
                        <Button variant='outlined' size='small' sx={{ height: '40%', borderColor: 'yellow', color: 'white', ":hover": { color: '#C69533', fontFamily: 'Poppins', borderColor: '#C69533' } }}>WHAT'S ON THE MENU</Button>
                    </Box>
                </Box>
            </Box>

            <Box height='100%' width='50%' >
                <img alt='pic' src={pic} height='100%' width='100%' ></img>
            </Box>


        </Box>
    )
}

export default MenuRest