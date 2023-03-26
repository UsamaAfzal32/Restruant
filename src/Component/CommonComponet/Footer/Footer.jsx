import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {


    return (
        <Box height='75vh' width='100vw' bgcolor='black'>
            <Box height='100%' width='100%' display='flex' justifyContent='center' alignItems='center'>

                <Box height='80%' width='40%' display='flex' justifyContent='center' alignItems='center'>

                    <Box height='50%' width='45%' display='flex' alignItems='center' flexDirection='column' >

                        <Typography sx={{ fontFamily: 'poppins', color: "#999999", textAlign: 'end' }}>Chef Taylor Bonnyman, working in collaboration with Head Chef Marguerite Keogh, offer elegant & playful modern British cooking.</Typography>

                    </Box>
                    <Box height='55%' width='45%' display='flex' justifyContent='space-evenly' alignItems='center' flexDirection='column' >

                        <Typography sx={{ cursor: 'pointer', color: 'white', ":hover": { color: '#CC9933' }, fontFamily: 'poppins', fontSize: '12px', fontWeight: '550' }}>HOME</Typography>
                        <Typography sx={{ cursor: 'pointer', color: 'white', ":hover": { color: '#CC9933' }, fontFamily: 'poppins', fontSize: '12px', fontWeight: '550' }}>MENU</Typography>
                        <Typography sx={{ cursor: 'pointer', color: 'white', ":hover": { color: '#CC9933' }, fontFamily: 'poppins', fontSize: '12px', fontWeight: '550' }}>RESERVATION</Typography>
                        <Typography sx={{ cursor: 'pointer', color: 'white', ":hover": { color: '#CC9933' }, fontFamily: 'poppins', fontSize: '12px', fontWeight: '550' }}>SHOP</Typography>
                        <Typography sx={{ cursor: 'pointer', color: 'white', ":hover": { color: '#CC9933' }, fontFamily: 'poppins', fontSize: '12px', fontWeight: '550' }}>NEWS</Typography>
                        <Typography sx={{ cursor: 'pointer', color: 'white', ":hover": { color: '#CC9933' }, fontFamily: 'poppins', fontSize: '12px', fontWeight: '550' }}>CONTACT</Typography>

                    </Box>

                </Box>

                <Box height='80%' width='50%' display='flex' justifyContent='center' alignItems='center' >

                    <Box height='40%' width='50%' display='flex' justifyContent='center' alignItems='center' flexDirection='column' >

                        <Button variant='outlined' sx={{ mb: '20px', fontFamily: 'poppins', fontSize: '13px', backgroundColor: 'balck', color: '#C69232', borderColor: '#CC9933', ":hover": { borderColor: '#CC9933' }, }}>ONLINE RESERVATION</Button>
                        <h4 style={{ fontFamily: 'poppins', fontSize: '13px', color: '#999999' }}>FOLLOW</h4>

                        <Box height='20%' width='80%' display='flex' justifyContent='space-evenly' alignItems='center'>
                            <FacebookSharpIcon sx={{ fontSize: '25px', color: '#999999', ":hover": { color: '#CC9933' }, cursor: 'pointer', }} />
                            <TwitterIcon sx={{ fontSize: '25px', color: '#999999', ":hover": { color: '#CC9933' }, cursor: 'pointer', }} />
                            <InstagramIcon sx={{ fontSize: '25px', color: '#999999', ":hover": { color: '#CC9933' }, cursor: 'pointer', }} />
                            <LinkedInIcon sx={{ fontSize: '25px', color: '#999999', ":hover": { color: '#CC9933' }, cursor: 'pointer', }} />
                        </Box>
                    </Box>

                    <Box height='50%' width='50%' display='flex' justifyContent='space-evenly' flexDirection='column'>

                        <Typography sx={{ fontSize: '15px', color: '#C69232', fontFamily: 'poppins', textAlign: 'start' }}>+4 1800 555 1234</Typography>
                        <Typography sx={{ fontSize: '12px', color: 'white', fontFamily: 'poppins', textAlign: 'start' }}>BOOKATABLE@RESTAURANT.COM</Typography>
                        <Typography sx={{ fontSize: '12px', color: '#999999', fontFamily: 'poppins', textAlign: 'start' }}>49 Featherstone Street</Typography>
                        <Typography sx={{ fontSize: '12px', color: '#999999', fontFamily: 'poppins', textAlign: 'start' }}>LONDON</Typography>
                        <Typography sx={{ fontSize: '12px', color: '#999999', fontFamily: 'poppins', textAlign: 'start' }}>EC1Y 8SY</Typography>
                        <Typography sx={{ fontSize: '12px', color: '#999999', fontFamily: 'poppins', textAlign: 'start' }}>UNITED KINGDOM</Typography>

                    </Box>

                </Box>

            </Box>
        </Box>
    )
}

export default Footer