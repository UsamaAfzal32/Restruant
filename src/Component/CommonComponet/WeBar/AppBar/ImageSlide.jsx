import { Box } from '@mui/material'
import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import first from '../../../Images/Dish.jpg'
import second from '../../../Images/sand.jpg'
import third from '../../../Images/Bug.jpg'
import fourth from '../../../Images/Spcl.jpg'




const ImageSlide = () => {

    const slideImages = [
        {
            url: first,

        },
        {
            url: second,

        },
        {
            url: third,

        },
        {
            url: fourth
        }
    ];

    return (
        <Box height='88vh' width='100vw' >

            <Slide autoplay='true' duration={3000} >
                {slideImages.map((slideImage, index) => (

                    <Box key={index} sx={{ backgroundSize: 'cover', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundImage: `url(${slideImage.url})` }}>

                        <img height='60%' alt='pic' src='https://demos.hogash.com/dannys/wp-content/uploads/sites/4/revslider/restaurant_slider/slide_logo.png'></img>
                    </Box>

                ))}
            </Slide>
        </Box>
    )
}

export default ImageSlide