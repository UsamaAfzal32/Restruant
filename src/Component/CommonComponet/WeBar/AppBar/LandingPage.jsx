import { Box } from '@mui/material'
import React from 'react'
import pics from '../../../Images/Dish.jpg'
const LandingPage = () => {


    return (
        <Box sx={{ height: '100vh', width: '100vw', bgcolor: 'blueviolet', backgroundImage: `url(${pics})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat", }}>

            <Box height='100%' width='100%' display='flex' justifyContent='center' alignItems='center'>

                <img height='60%' alt='pic' src='https://demos.hogash.com/dannys/wp-content/uploads/sites/4/revslider/restaurant_slider/slide_logo.png'></img></Box>
        </Box>

    )
}

export default LandingPage