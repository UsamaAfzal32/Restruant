import { Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const CartTotal = (props) => {



    return (
        <Box height='40%' width='100%' mt="10px" bgcolor="white" display='flex' justifyContent='center' alignItems='center' >

            <Box height='70%' width='90%' display='flex' flexDirection='column' justifyContent='center' >

                <h2>CART TOTALS</h2>

                <Box height='10%' width='100%' display='flex' justifyContent='space-evenly' alignItems='center'>
                    <Typography sx={{ fontFamily: 'poppins', color: '#333333' }}>SUBTOTAL </Typography>
                    <Typography sx={{ fontFamily: 'poppins', color: '#333333' }}>Rs.{props.grandTotal}</Typography>

                </Box>

                <Divider></Divider>

                <Box height='10%' width='98.5%' display='flex' justifyContent='space-evenly' alignItems='center'>
                    <Typography sx={{ fontFamily: 'poppins', color: '#000000', fontWeight: 'bold' }}>GRAND TOTAL </Typography>
                    <Typography sx={{ fontFamily: 'poppins', color: '#000000', fontWeight: 'bold' }}>Rs.{props.grandTotal}</Typography>

                </Box>
                <Box height='20%' width='100%' display='flex' justifyContent='space-evenly' alignItems='center'>
                    <Link to='/checkout' style={{ textDecoration: 'none', width: '50%' }}>
                        <Button sx={{ width: '100%', backgroundColor: 'black', color: 'white', ":hover": { backgroundColor: "grey" }, fontWeight: 'bold' }}>PROCEED TO CHECKOUT</Button>
                    </Link>
                </Box>

            </Box>
        </Box>
    )
}

export default CartTotal