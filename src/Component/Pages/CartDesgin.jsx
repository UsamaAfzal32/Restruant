import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import prod from '../Images/prod_04.jpg'
import prod2 from '../Images/prod_05.jpg'



const images = [
    {
        url: prod,
        cart: 'Add to Cart',

    },
    {
        url: prod2,
        cart: 'Add to Cart',

    },
    {
        url: "https://demos.hogash.com/dannys/wp-content/uploads/sites/4/2017/05/prod_08-300x300.jpg",
        cart: 'Add to Cart',

    },
    {
        url: "https://demos.hogash.com/dannys/wp-content/uploads/sites/4/2017/05/prod_09.jpg",
        cart: 'Add to Cart',

    },
    {
        url: "https://demos.hogash.com/dannys/wp-content/uploads/sites/4/2017/05/prod_10.jpg",
        cart: 'Add to Cart',

    },
    {
        url: "https://demos.hogash.com/dannys/wp-content/uploads/sites/4/2017/05/prod_11.jpg",
        cart: 'Add to Cart',

    },
    {
        url: "https://demos.hogash.com/dannys/wp-content/uploads/sites/4/2017/05/prod_12.jpg",
        cart: 'Add to Cart',

    },
    {
        url: "https://demos.hogash.com/dannys/wp-content/uploads/sites/4/2017/05/prod_13.jpg",
        cart: 'Add to Cart',

    },


];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '2px solid currentColor',
        },
    },
}));

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
}));



export default function CartDesgin() {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%', bgcolor: 'blueviolet' }}>

            {images.map((image) => (

                <ImageButton

                    key={image.cart}

                    style={{ width: "33%" }} >

                    <ImageSrc style={{ backgroundImage: `url(${image.url})`, width: "100%", height: "100%" }} />

                    <ImageBackdrop className="MuiImageBackdrop-root" />
                    <Image >
                        <Typography component="span" variant="subtitle1" color="inherit"

                            sx={{ position: 'relative', p: 4, pt: 2, pb: (theme) => `calc(${theme.spacing(1)} + 6px)` }}>

                            {image.cart} </Typography>
                    </Image>


                </ImageButton>
            ))}
        </Box>
    );
}