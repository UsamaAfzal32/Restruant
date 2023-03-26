import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Home from '../Pagess/Home';
import Menus from '../Pagess/Menu';
import Reservation from '../Pagess/Reservation';
import Shop from '../Pagess/Shop';
import Contact from '../Pagess/Contact';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const AppBar = () => {

    const itemCounter = useSelector((state) => state.Counter.count)


    return (


        <Box sx={{ height: '12vh', width: '100vw' }} >

            <Box height='12%' width='100%' display='flex' justifyContent='space-between' alignItems='center' bgcolor='#0B0D0F' position='fixed' >

                <Box height='100%' width='65%' display='flex' justifyContent='space-evenly' alignItems='center' >

                    <Box height='40%' width='22%' display='flex' alignItems='center'>
                        <Link to='/' style={{ textDecoration: 'none' }} >
                            <img alt='pic' src='https://demos.hogash.com/dannys/wp-content/uploads/sites/4/2017/05/logo.png' /></Link>
                    </Box>


                    <Box height='50%' width='60%' display='flex' justifyContent='space-between' alignItems='center'>

                        <Home />
                        <Menus />
                        <Reservation />
                        <Shop />
                        <Typography sx={{ width: '16%', height: '60%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px', fontFamily: 'Montserrat', color: 'white', ":hover": { color: '#CC9933' } }}>NEWS</Typography>
                        <Contact />

                    </Box>
                </Box>
                <Box height='100%' width='30%' display='flex' justifyContent='space-evenly' alignItems='center' mr='10px'>

                    <Box height='60%' width='45%' bgcolor='#1A1C20' display='flex' alignItems='center'>

                        <Box height='100%' width='30%' display='flex' justifyContent='center' alignItems='center' >

                            <ShoppingBasketIcon sx={{ color: '#666666' }} /></Box>

                        <Divider orientation="vertical" flexItem sx={{ bgcolor: '#666666' }} />


                        <Box height='80%' width='25%' display='flex' alignItems='center'>

                            <Link to='/cartpage' style={{ textDecoration: 'none', height: '40px', width: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }} >
                                <Typography sx={{ fontSize: '10px', fontFamily: 'revert', color: '#666666' }}>ITEM(S)</Typography>
                                <Typography sx={{ fontSize: '11px', fontFamily: 'revert', color: 'white' }}>{itemCounter}</Typography>
                            </Link>

                        </Box>

                        <Box height='80%' width='25%' display='flex' flexDirection='column' justifyContent='space-between' alignItems='center'>
                            <Link to='/cartpage' style={{ textDecoration: 'none', height: '40px', width: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }} >

                                <Typography sx={{ fontSize: '10px', fontFamily: 'revert', color: '#666666' }}>TOTAL</Typography>
                                <Typography sx={{ fontSize: '11px', fontFamily: 'revert', color: '#CC9933' }}>$0.00</Typography>
                            </Link>
                        </Box>

                        <Box height='100%' width='20%' display='flex' justifyContent='center' alignItems='center'>
                            <ArrowDropDownIcon sx={{ color: '#666666' }} />
                        </Box>


                    </Box>

                    <Box height='60%' width='45%' bgcolor='#CC9933' display='flex' justifyContent='center' alignItems='center' fontFamily="fantasy">RESERVATIONS</Box>
                </Box>

            </Box>


        </Box>
    )
}

export default AppBar