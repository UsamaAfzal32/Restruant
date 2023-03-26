import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import lob from '../Images/seb.jpg'
const MapPage = () => {

    return (
        <Box height='100vh' width='100vw' bgcolor='greenyellow' display='flex' >

            <Box height='100%' width='50%' bgcolor='green' sx={{ backgroundImage: `url(${lob})`, backgroundSize: 'cover', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                <Box height='40%' width='50%' display='flex' flexDirection='column' justifyContent='space-between' alignItems='center'>

                    <Typography style={{ fontSize: '36px', fontFamily: 'Poppins', color: "white" }}>RESERVATIONS</Typography>
                    <Typography style={{ fontSize: '14px', fontFamily: 'Poppins', color: "white" }}>49 FEATHERSTONE STREET LONDON</Typography>
                    <Typography style={{ fontSize: '14px', fontFamily: 'Poppins', color: "white" }}>EC1Y 8SY UNITED KINGDOM</Typography>
                    <Typography style={{ fontSize: '14px', fontFamily: 'Poppins', color: "white" }}>+4 1800 555 1234</Typography>
                    <Typography style={{ fontSize: '14px', fontFamily: 'Poppins', color: "white" }}>BOOKATABLE@RESTAURANT.COM</Typography>

                    <Button variant='outlined' size='small' sx={{ height: '15%', width: '30%', borderColor: 'yellow', color: '#FFFFFF', ":hover": { color: '#C69533', fontFamily: 'Poppins', borderColor: '#C69533' } }}>ABOUT US</Button>

                </Box>
            </Box>



            <Box height='100%' width='50%' >

                <iframe title='map'
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d35923.939415799905!2d74.31230968881486!3d31.424022919815478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1678732047930!5m2!1sen!2s"
                    width="648" height="665" ></iframe>
            </Box>

        </Box>
    )
}

export default MapPage