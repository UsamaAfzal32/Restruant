
import { Box, Menu, MenuItem, styled, Typography } from '@mui/material'
import React, { useState } from 'react'



const Home = () => {
    const [home, setHome] = useState(false)
    const handleClickMen = () => {


        setHome(!home)
    };

    const handleClose = () => {

        setHome(!home)

    }
    const StyledMenu = styled((props) =>

    (<Menu {...props} />
    ))

        (({ theme }) => ({
            '& .MuiPaper-root': {
                borderRadius: 0,
                marginLeft: theme.spacing(32),
                marginTop: theme.spacing(-55),
                width: '30vh',
                minHeight: 120,
                backgroundColor: '#1A1C20'
            }
        }));

    return (
        <>
            <Typography onMouseEnter={handleClickMen} sx={{ height: '60%', width: '16%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'Montserrat', fontSize: '12px', color: 'white', ":hover": { color: '#ea820a' } }}>
                HOME
                <StyledMenu open={home} onClose={handleClose}  >

                    <Box height="100%" width="100%" display='flex' justifyContent='space-between' flexDirection='column' >



                        <MenuItem onClick={handleClose} sx={{ color: 'whitesmoke', backgroundColor: '#2c2c2d', ":hover": { backgroundColor: '#2c2c2d' } }}>
                            Home-Default
                        </MenuItem>
                        {/* <Divider flexItem sx={{ bgcolor: '#666666', fontSize: '12px' }}></Divider> */}

                        <MenuItem onClick={handleClose} sx={{ color: 'whitesmoke', ":hover": { backgroundColor: '#2c2c2d' } }}>
                            Home-Short
                        </MenuItem>

                        <MenuItem onClick={handleClose} sx={{ color: 'whitesmoke', ":hover": { backgroundColor: '#2c2c2d' } }}>
                            Home-Oblique
                        </MenuItem>



                    </Box>
                </StyledMenu>
            </Typography>
        </>
    )
}

export default Home