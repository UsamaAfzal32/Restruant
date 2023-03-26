import { Box, Menu, MenuItem, styled, Typography } from '@mui/material'
import React, { useState } from 'react'



const Menus = () => {
    const [menu, setMenu] = useState(false)

    const handleClickMenu = () => {


        setMenu(!menu)
    };

    const handleClose = () => {

        setMenu(!menu)

    }
    const StyledMenu = styled((props) =>

    (<Menu {...props} />
    ))

        (({ theme }) => ({
            '& .MuiPaper-root': {
                borderRadius: 0,
                marginLeft: theme.spacing(42),
                marginTop: theme.spacing(-59.5),
                width: '30vh',
                minHeight: 70,
                backgroundColor: '#1A1C20'
            }
        }));

    return (
        <>

            <Typography onMouseEnter={handleClickMenu} sx={{ height: '60%', width: '12%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'Montserrat', fontSize: '12px', color: 'whitesmoke', ":hover": { color: '#ea820a' } }}>
                MENU

                <StyledMenu open={menu} onClose={handleClose}  >

                    <Box height="100%" width="100%" >


                        <MenuItem onClick={handleClose} sx={{ color: 'whitesmoke', ":hover": { backgroundColor: '#2c2c2d' } }}>
                            Menu-Stretched
                        </MenuItem>
                        <MenuItem onClick={handleClose} sx={{ color: 'whitesmoke', ":hover": { backgroundColor: '#2c2c2d' } }} >
                            Menu-Boxed
                        </MenuItem>


                    </Box>
                </StyledMenu>
            </Typography>
        </>
    )
}

export default Menus