import { Box, Typography } from '@mui/material'
import React from 'react'

import CartOne from './CartOne'

export const RestruanatMenu = () => {

    return (

        <Box height='100vh' width='100vw' display='flex' mt='3px' position='fixed'>

            <Box height='80%' width="20%" bgcolor='white' display='flex' flexDirection='column'>

                <Box height='30%' width="100%" display="flex" flexDirection='column' justifyContent='center' alignItems='center'>

                    <Typography style={{ fontFamily: 'Poppins', fontSize: '14px', color: '#666666' }}>RESTAURANT</Typography>
                    <Typography style={{ fontFamily: 'Poppins', fontSize: '36px', color: '#333333' }}>MENU</Typography>

                </Box>
                <Box height='50%' width="90%" display="flex" flexDirection='column' justifyContent='space-evenly' alignItems='center'>
                    <Typography style={{ fontFamily: 'Poppins', fontSize: '12px', color: '#OA0AOA', fontWeight: 'bold' }}>ALL</Typography>
                    <Typography style={{ fontFamily: 'Poppins', fontSize: '12px', color: '#OA0AOA', fontWeight: '550' }}>STARTERS</Typography>
                    <Typography style={{ fontFamily: 'Poppins', fontSize: '12px', color: '#OA0AOA', fontWeight: '550' }}>MAIN</Typography>
                    <Typography style={{ fontFamily: 'Poppins', fontSize: '12px', color: '#OA0AOA', fontWeight: '550' }}>DESERT</Typography>
                    <Typography style={{ fontFamily: 'Poppins', fontSize: '12px', color: '#OA0AOA', fontWeight: '550' }}>DAILY MENU</Typography>
                    <Typography style={{ fontFamily: 'Poppins', fontSize: '12px', color: '#OA0AOA', fontWeight: '550' }}>CHEF’S SPECIALITY</Typography>
                    <Typography style={{ fontFamily: 'Poppins', fontSize: '12px', color: '#OA0AOA', fontWeight: '550' }}>OFFERS</Typography>
                </Box>
            </Box >

            <Box height='100%' width="80%"  >
                {/* <CartDesgin /> */}
                <CartOne />
            </Box>
        </Box>
    )


}
