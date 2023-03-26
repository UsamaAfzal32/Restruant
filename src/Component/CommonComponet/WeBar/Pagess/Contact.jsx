import { Box, Menu, MenuItem, styled, Typography } from '@mui/material'
import React, { useState } from 'react'



const Contact = () => {
    const [contact, setContact] = useState(false)

    const handleClick = () => {


        setContact(!contact)
    };

    const handleClose = () => {

        setContact(!contact)

    }


    const StyledMenu = styled((props) =>

    (<Menu {...props} />
    ))

        (({ theme }) => ({
            '& .MuiPaper-root': {
                borderRadius: 0,
                marginLeft: theme.spacing(86),
                marginTop: theme.spacing(-59.5),
                width: '32vh',
                minHeight: 70,
                backgroundColor: '#1A1C20'
            }
        }));

    return (
        <>

            <Typography onMouseEnter={handleClick} sx={{ height: '60%', width: '16%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'Montserrat', fontSize: '12px', color: 'whitesmoke', ":hover": { color: '#ea820a' } }}>

                CONTACT

                <StyledMenu open={contact} onClose={handleClose} >

                    <Box height="100%" width="100%"  >


                        <MenuItem onClick={handleClose} sx={{ color: 'whitesmoke', ":hover": { backgroundColor: '#2c2c2d' } }}>
                            Contact-Simple
                        </MenuItem>
                        <MenuItem onClick={handleClose} sx={{ color: 'whitesmoke', ":hover": { backgroundColor: '#2c2c2d' } }}>
                            Contact-With Google Map
                        </MenuItem>



                    </Box>

                </StyledMenu>

            </Typography>
        </>
    )
}

export default Contact