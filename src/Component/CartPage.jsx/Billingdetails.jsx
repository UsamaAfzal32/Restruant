import { Box, TextField, Typography } from '@mui/material'
import React from 'react'
import YourOrder from './Yourorder'

export const Billingdetails = () => {
    return (

        <Box height='65%' width='100%' mt="5px">

            <Box height='15%' width='100%' display='flex' justifyContent='space-between'>

                <Box height='80%' width='50%'>

                    <Typography sx={{ fontSize: '22px', fontFamily: 'poppins', color: '#333333', fontWeight: '600' }}> Billing details</Typography>

                    <Box height='80%' width='100%' display='flex' justifyContent='space-evenly' alignItems='center'>

                        <Box height='80%' width='40%' display='flex' flexDirection='column' justifyContent='space-between'>
                            <Typography>First name</Typography>
                            <TextField size='small'></TextField>
                        </Box>
                        <Box height='80%' width='40%' display='flex' flexDirection='column' justifyContent='space-between'>
                            <Typography>Last name</Typography>
                            <TextField size='small'></TextField>
                        </Box>
                    </Box>
                </Box>
                <Box height='80%' width='50%' >
                    <Typography sx={{ fontSize: '22px', fontFamily: 'poppins', color: '#333333', fontWeight: '600' }}> Additional information</Typography>

                    <Box height='80%' width='100%' display='flex' justifyContent='space-evenly' alignItems='center'>

                        <Box height='80%' width='80%' display='flex' flexDirection='column' justifyContent='space-between'>
                            <Typography sx={{ fontSize: '18px', fontFamily: 'poppins', color: '#333333', fontWeight: '600' }}>Order notes (optional)</Typography>
                            <TextField size='small' placeholder='Notes about your order, e.g. special notes for delivery.'></TextField>
                        </Box>

                    </Box>

                </Box>

            </Box>

            <Box height='90%' width='100%'  >

                <Box height='10%' width='100%' display='flex' >

                    <Box height='100%' width='34%' >
                        <Typography sx={{ fontSize: '18px', fontFamily: 'poppins', color: '#333333', fontWeight: '500' }}>Company name (optional)</Typography>
                        <TextField size='small' ></TextField>
                    </Box>
                    <Box height='100%' width='33%'>
                        <Typography sx={{ fontSize: '18px', fontFamily: 'poppins', color: '#333333', fontWeight: '500' }}>Country/ Region</Typography>
                        <TextField size='small' ></TextField>
                    </Box>
                    <Box height='100%' width='33%'  >
                        <Typography sx={{ fontSize: '18px', fontFamily: 'poppins', color: '#333333', fontWeight: '500' }}>State</Typography>
                        <TextField size='small' ></TextField>
                    </Box>

                </Box>
                <Box height='10%' width='100%' display='flex' >

                    <Box height='100%' width='34%'  >
                        <Typography sx={{ fontSize: '18px', fontFamily: 'poppins', color: '#333333', fontWeight: '500' }}>Street address</Typography>
                        <TextField size='small' placeholder='House number and street name' ></TextField>
                    </Box>
                    <Box height='100%' width='33%'  >
                        <Typography sx={{ fontSize: '18px', fontFamily: 'poppins', color: '#333333', fontWeight: '500' }}>Town/City</Typography>
                        <TextField size='small' ></TextField>
                    </Box>
                    <Box height='100%' width='33%'  >
                        <Typography sx={{ fontSize: '18px', fontFamily: 'poppins', color: '#333333', fontWeight: '500' }}>Zip code</Typography>
                        <TextField size='small' ></TextField>
                    </Box>

                </Box>



                <Box height='10%' width='100%' display='flex' >


                    <Box height='100%' width='34%'  >
                        <Typography sx={{ fontSize: '18px', fontFamily: 'poppins', color: '#333333', fontWeight: '500' }}>Phone</Typography>
                        <TextField size='small' ></TextField>
                    </Box>
                    <Box height='100%' width='33%'  >
                        <Typography sx={{ fontSize: '18px', fontFamily: 'poppins', color: '#333333', fontWeight: '500' }}>Email address</Typography>
                        <TextField size='small' ></TextField>
                    </Box>
                    <Box height='100%' width='33%'  >
                        <Typography sx={{ fontSize: '18px', fontFamily: 'poppins', color: '#333333', fontWeight: '500' }}>Account Password</Typography>
                        <TextField size='small' ></TextField>
                    </Box>
                </Box>
                <Typography sx={{ fontSize: '22px', fontFamily: 'poppins', color: '#333333', fontWeight: '550', mt: "10px" }}>Your Order</Typography>
                <YourOrder />
            </Box>

        </Box>
    )
}
