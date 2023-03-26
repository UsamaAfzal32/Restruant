import { Box } from '@mui/material'
import React from 'react'
import Clients from '../Pages/Clients'
import { Chinese } from '../Pages/Chinese'
import MenuRest from '../Pages/MenuRest'
import { RestruanatMenu } from '../Pages/RestruanatMenu'
import TodaySpeciality from '../Pages/TodaySpeciality'
import WelcomeRest from '../Pages/WelcomeRest'
import MapPage from '../Pages/MapPage'
import Subscribe from '../Pages/Subscribe'

const HomePages = () => {
    return (
        <Box >
            <WelcomeRest />
            <MenuRest />
            <Chinese />
            <TodaySpeciality />
            <RestruanatMenu />
            <Clients />
            <MapPage />
            <Subscribe />
        </Box>
    )
}

export default HomePages