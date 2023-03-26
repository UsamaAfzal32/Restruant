import { Box, Button, Card, Checkbox, Divider, Typography } from '@mui/material'
import React, { useState } from 'react'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Billingdetails } from '../CartPage.jsx/Billingdetails';

const Checkout = () => {


    const [login, setLogin] = useState(false)
    const openBox = () => {
        setLogin(!login)
    }


    return (
        <Box height="200vh" width='100vw' bgcolor='#EFEFEF'>

            <Box height='100%' width='90%' mx='auto'  >

                <Box height='5%' width='100%' display='flex' alignItems='center'>

                    <Typography sx={{ fontFamily: 'poppins', fontSize: '12px' }}>HOME &nbsp;</Typography>
                    <Typography sx={{ fontFamily: 'poppins', fontSize: '12px', color: 'grey' }}> &nbsp;/ &nbsp; CHECKOUT </Typography>
                </Box>
                <Divider></Divider>

                <Box height='5%' width='100%' display='flex' alignItems='center' >

                    <Typography style={{ fontSize: '34px', fontFamily: 'poppins', color: '#333333' }}>Checkout</Typography>
                </Box>
                <Box height='5%' width='100%' display='flex' alignItems='center' bgcolor='#F7F6F7'>

                    <Box height='100%' width='30%' display='flex' justifyContent='space-evenly' alignItems='center'>

                        <Typography style={{ fontFamily: 'poppins', color: '#515151', display: 'flex', justifyContent: 'center', alignContent: 'center' }}><CalendarTodayIcon />Returning customer?</Typography>

                        <Typography style={{ fontFamily: 'poppins', cursor: 'pointer' }} type='text' onClick={openBox}>Click here to login</Typography>

                    </Box>
                </Box>

                {
                    login === false ? null :
                        <Card elevation='10' sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'column', bgcolor: '#EFEFEF', height: '20%', width: '50%', mt: '10px' }} >

                            <Typography>If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to the Billing section.</Typography>

                            <Box height='20%' width='100%' display='flex' justifyContent='space-between'>
                                <Box height='100%' width='100%'>
                                    <Typography fontWeight='bold'>Username or email*</Typography>
                                    <input ></input>

                                </Box>
                                <Box height='100%' width='100%' >
                                    <Typography fontWeight='bold'>Password*</Typography>
                                    <input ></input>
                                </Box></Box>

                            <Box height='20%' width='45%' display='flex' alignItems='center' justifyContent='space-evenly'>
                                <Button sx={{ backgroundColor: '#CC9933', color: '#000000' }}>Login</Button>
                                <Checkbox size='small'></Checkbox>
                                <Typography>Remember me</Typography>
                            </Box>
                            <Typography>Lost your password?</Typography>
                        </Card>
                }
                <Billingdetails />
            </Box>
        </Box>
    )
}

export default Checkout