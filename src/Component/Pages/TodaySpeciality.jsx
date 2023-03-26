import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import pic from '../Images/super.jpg'
const TodaySpeciality = () => {

    return (

        <Box sx={{ backgroundImage: `url(${pic})`, backgroundSize: 'cover', height: '120vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

            <Box height='30%' width='40%' display='flex' flexDirection='column' justifyContent='space-evenly' alignItems='center'>

                <Typography style={{ fontSize: '56px', fontFamily: 'Great Vibes', color: 'black' }}>La creme de la creme</Typography>
                <Typography style={{ fontSize: '36px', color: 'black', }}>TODAY'S SPECIALITY</Typography>
                <Typography style={{ fontSize: '25px', color: 'black', fontFamily: 'Playfair Display' }}>Oven Roasted duck with special sousage</Typography>
                <Typography style={{ fontSize: '25px', color: 'black', fontFamily: 'Playfair Display' }}>$25.00</Typography>
            </Box>
            <Button variant='outlined' size='small' sx={{ mt: '25px', height: '5%', borderColor: 'slateblue', color: 'black', ":hover": { color: 'black', fontFamily: 'Poppins', borderColor: '#C69533' } }}>READ MORE</Button>

        </Box>
    )
}

export default TodaySpeciality