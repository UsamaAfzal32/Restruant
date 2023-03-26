import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';





const YourOrder = () => {



    return (
        <TableContainer sx={{ height: '25%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'scroll', overflowX: 'hidden', overflowY: 'hidden' }}>
            <Table sx={{ height: '50%', width: '50%', borderWidth: '2px', borderColor: '#D7D7D7', borderStyle: 'solid', }}>

                <TableRow sx={{ borderWidth: '2px', borderColor: '#D7D7D7', borderStyle: 'solid' }}>
                    <TableCell sx={{ fontSize: '18px', fontFamily: 'poppins', color: '#333333', fontWeight: '550', }}>Product</TableCell>
                    <TableCell align="right" sx={{ fontSize: '18px', fontFamily: 'poppins', color: '#333333', fontWeight: '550' }}>SubTotal</TableCell>
                </TableRow>
                <TableBody>
                    <TableRow sx={{ borderWidth: '2px', borderColor: '#D7D7D7', borderStyle: 'solid' }}>
                        <TableCell sx={{ fontSize: '18px', fontFamily: 'poppins', color: '#333333', }}>Beef</TableCell>
                        <TableCell align="right">1000</TableCell>
                    </TableRow>
                    <TableRow sx={{ borderWidth: '2px', borderColor: '#D7D7D7', borderStyle: 'solid' }}>
                        <TableCell sx={{ fontSize: '16px', fontFamily: 'poppins', color: '#333333', fontWeight: '550', }}>SubTotal</TableCell>
                        <TableCell align="right" sx={{ fontSize: '16px', fontFamily: 'poppins', color: '#333333', fontWeight: '550', }}>1000</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default YourOrder