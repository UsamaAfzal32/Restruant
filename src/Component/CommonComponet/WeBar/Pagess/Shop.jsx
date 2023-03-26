import { Box, Menu, MenuItem, styled, Typography } from '@mui/material'
import React, { useState } from 'react'



const Shop = () => {
    const [shop, setShop] = useState(false)

    const handleClickMenu = () => {


        setShop(!shop)
    };

    const handleClose = () => {

        setShop(!shop)

    }
    const StyledMenu = styled((props) =>

    (<Menu {...props} />
    ))

        (({ theme }) => ({
            '& .MuiPaper-root': {
                borderRadius: 0,
                marginLeft: theme.spacing(67),
                marginTop: theme.spacing(-63.9),
                width: '25vh',
                minHeight: 55,
                backgroundColor: '#1A1C20'
            }
        }));

    return (

        <>

            <Typography onMouseEnter={handleClickMenu} sx={{ height: '60%', width: '16%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'Montserrat', fontSize: '12px', color: 'whitesmoke', ":hover": { color: '#ea820a' } }}>
                SHOP

                <StyledMenu open={shop} onClose={handleClose}  >

                    <Box height="100%" width="100%"  >


                        <MenuItem onClick={handleClose} sx={{ color: 'whitesmoke', ":hover": { backgroundColor: '#2c2c2d' } }}>
                            Shop  Full Width
                        </MenuItem>

                    </Box>
                </StyledMenu>
            </Typography>
        </>
    )
}

export default Shop