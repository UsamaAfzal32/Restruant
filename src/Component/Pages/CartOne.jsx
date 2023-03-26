import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { increment } from '../Redux/CounterReducer';


const ImageButton = styled(ButtonBase)(({ theme }) => ({

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

export default function CartOne() {


    const dispatch = useDispatch()
    const [images, setImages] = useState([])

    const getData = async () => {

        try {
            const res = await axios.get('http://localhost:5000/api/Product')
            console.warn(res.data, 'res')
            setImages(res.data)

        } catch (error) {
            console.warn("big error", error)
        }
    }
    const productPost = async (props) => {
        props.productQuantity = 1
        props.productSubTotal = props.productPrice
        delete props._id
        delete props.__v
        console.warn('propppps', props)
        try {
            const postData = await axios.post('http://localhost:5000/api/CartProduct', props)

            console.warn(postData, 'post Dastatta')
            dispatch(increment())
        }
        catch (error) {
            console.warn(error, 'postproduct daaattaaa')
        }
    }




    useEffect(() => {
        getData()
    }, [])

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%' }} >

            {images.map((value, index) => {

                return (


                    <ImageButton key={index} style={{ width: "33%" }} >

                        <ImageSrc style={{ backgroundImage: `url(${value.productImage})`, width: "100%", height: "100%" }} />

                        <ImageBackdrop className="MuiImageBackdrop-root" />
                        <Image >
                            <Typography component="span" variant="subtitle1" color="inherit" onClick={() => { productPost(value) }}

                                sx={{ position: 'relative', p: 4, pt: 2, pb: (theme) => `calc(${theme.spacing(1)} + 6px)` }}>
                                Add To Cart

                            </Typography >
                        </Image >
                    </ImageButton >

                )
            })}

        </Box >
    );
}