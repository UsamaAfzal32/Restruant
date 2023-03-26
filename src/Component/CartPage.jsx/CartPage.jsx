import { Box, Button, Divider, IconButton, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import CartTotal from './CartTotal';
import CancelIcon from '@mui/icons-material/Cancel';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../Redux/CounterReducer';




const CartPage = () => {


    const dispatch = useDispatch()

    const [cartProduct, setCartProduct] = useState([])
    let [grandTotal, setGrandTotal] = useState(0)

    const getProduct = async () => {

        try {
            const getting = await axios.get('http://localhost:5000/api/CartProduct')

            console.warn('getting data', getting)

            getting.data.map((val, ind) => {
                grandTotal = val.productSubTotal + grandTotal
                console.warn('grandd total', grandTotal)

            })
            setCartProduct(getting.data)
            setGrandTotal(grandTotal)

        } catch (error) {
            console.warn('error productttt', error)
        }
    }

    const adding = async (prop) => {
        grandTotal = 0
        prop.productQuantity = prop.productQuantity + 1
        prop.productSubTotal = prop.productPrice * prop.productQuantity
        const addingSome = await axios.put(`http://localhost:5000/api/CartProduct/${prop._id}`, prop)
        console.warn('adding sommmee', addingSome)

        getProduct()
        dispatch(increment())
    }

    const minus = async (prop) => {
        grandTotal = 0
        prop.productQuantity = prop.productQuantity - 1
        prop.productSubTotal = prop.productPrice * prop.productQuantity
        const addingSome = await axios.put(`http://localhost:5000/api/CartProduct/${prop._id}`, prop)
        console.warn('adding sommmee', addingSome)

        getProduct()
        dispatch(decrement())
    }
    const handleDelete = async (recve) => {
        grandTotal = 0
        const productDelete = await axios.delete(`http://localhost:5000/api/CartProduct/${recve}`)

        console.warn(productDelete, "delete product")
        getProduct()
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (

        <Box height='140vh' width='100vw' bgcolor='#EFEFEF' overflow={'scroll'} sx={{ overflowX: 'hidden' }}>

            <Box height='100%' width='90%' mx='auto' >

                <Box height='8%' width='100%' display='flex' alignItems='center'>

                    <Typography sx={{ fontFamily: 'poppins', fontSize: '12px' }}>HOME &nbsp;</Typography>
                    <Typography sx={{ fontFamily: 'poppins', fontSize: '12px', color: 'grey' }}> &nbsp;/ &nbsp; CART </Typography>
                </Box>
                <Divider></Divider>

                <Box height='12%' width='100%' display='flex' alignItems='center'>

                    <Typography style={{ fontSize: '34px', fontFamily: 'poppins', color: '#333333' }}>Cart</Typography>
                </Box>



                <Box height='10%' bgcolor='#E6E5E5' width='100%' display='flex' justifyContent='space-evenly'>

                    <Box height='100%' width='50%' display='flex' justifyContent='center' alignItems='center' ml='10px'>
                        <Typography fontWeight='bold' >PRODUCT</Typography></Box>

                    <Box height='100%' width='40%' display='flex' justifyContent='space-between' alignItems='center'>
                        <Box height='100%' width='80%' display='flex' justifyContent='space-between' alignItems='center'>

                            <Typography fontWeight='bold' >PRICE</Typography>
                            <Typography fontWeight='bold' >QUANTITY</Typography>
                            <Typography fontWeight='bold' >TOTAL</Typography>
                        </Box>
                    </Box>
                </Box>


                {cartProduct.map((val, indx) =>

                    <Box height='25%' width='100%' bgcolor='white' key={indx}>


                        <Box height='100%' width='100%' display='flex' justifyContent='space-evenly' alignItems='center'>


                            <Box height='100%' width='50%' display='flex' alignItems='center'>
                                <Box height='100%' width='35%' display='flex' justifyContent='center' alignItems='center'>

                                    <img alt='pic' height='90%' style={{ marginLeft: '20px' }} src={val.productImage} /></Box>

                                <Box height='60%' width='50%' display='flex' flexDirection='column' justifyContent='space-evenly' >

                                    <Typography sx={{ cursor: 'pointer', fontSize: '21px', fontFamily: 'poppins', }}>{val.productName} </Typography>
                                </Box>

                            </Box>
                            <Box height='100%' width='5%' display='flex' justifyContent='centerdata' alignItems='center'>
                                <Typography >{val.productPrice}</Typography> </Box>
                            <Box height='100%' width='15%' display='flex' justifyContent='center' alignItems='center'>
                                <Button sx={{ borderColor: 'black', backgroundColor: '#0f1010', ":hover": { backgroundColor: '#262727' }, height: '30px', color: 'white' }}
                                    onClick={() => minus(val)}>-</Button>
                                &nbsp;  &nbsp;  {val.productQuantity} &nbsp;  &nbsp;
                                <Button sx={{ backgroundColor: '#0f1010', ":hover": { backgroundColor: '#262727' }, height: '30px', color: 'white' }}
                                    onClick={() => adding(val)} >+</Button>
                            </Box>
                            <Box height='100%' width='5%' display='flex' justifyContent='center' alignItems='center' >
                                <Typography >{val.productSubTotal} </Typography></Box>
                            <IconButton ><CancelIcon onClick={() => handleDelete(val._id)} sx={{ color: '#FF9999', ":hover": { color: 'black' }, }} /></IconButton>

                        </Box>

                    </Box>
                )}

                <CartTotal grandTotal={grandTotal} />

            </Box>

        </Box >
    )
}

export default CartPage



//kkkk