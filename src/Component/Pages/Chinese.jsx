import { Box, Button, Typography } from '@mui/material'
import React from 'react'

export const Chinese = () => {
    return (


        <Box height='100vh' width='100vw' mt='20px' display='flex'>


            <Box height='100%' width='50%' >

                <Box height='80%' width='100%' display='flex'  >

                    <Box height='50%' width='40%' bgcolor='slateblue' position='absolute' mt='300px' ml='50px'>


                        <img alt='pic' src='https://demos.hogash.com/dannys/wp-content/uploads/sites/4/2017/05/img_04.jpg' height='100%' width='100%' ></img>

                    </Box>

                    <Box height='50%' width='65%' bgcolor='greenyellow' mt='100px'>

                        <img alt='pic' src='https://demos.hogash.com/dannys/wp-content/uploads/sites/4/2017/05/img_05.jpg' height='100%' width='100%'></img>

                    </Box>


                </Box>
            </Box>


            <Box height='100%' width='50%' display='flex'  >

                <Box height='100%' width='70%' ml='60px' >

                    <Box height='10%' width='100%'  ></Box>

                    <Box height='20%' marginBottom='30px' width='100%' display="flex" flexDirection='column' >

                        <Typography style={{ fontSize: '56px', fontFamily: 'Great Vibes', color: '#999966', textAlign: 'start' }}>Chienes</Typography>
                        <Typography style={{ fontSize: '36px', color: '#333333', textAlign: 'start' }}>SPECIALITIES</Typography>

                    </Box>
                    <Box height='45%' width='70%' display='flex' justifyContent='space-evenly'>

                        <Typography style={{ fontSize: '16px', fontFamily: 'Poppins', textAlign: 'start' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</Typography>
                        <Typography style={{ marginLeft: '50px', fontSize: '16px', fontFamily: 'Poppins', textAlign: 'start' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</Typography>

                    </Box>
                    <Box height='15%' width='70%' display='flex' alignItems='center' justifyContent='center'>
                        <Button variant='outlined' size='small' sx={{ height: '40%', borderColor: 'yellow', color: '#333333', ":hover": { color: '#C69533', fontFamily: 'Poppins', borderColor: '#C69533' } }}>VIEW ALL</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
