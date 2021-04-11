import { Box, Typography } from '@material-ui/core'
import { green, grey } from '@material-ui/core/colors';
import React from 'react'

export const ProductView = () => {
    return( 
    <Box p="18px" bgcolor="white" boxShadow="8px" mx="4px" borderRadius="16px">
        <img style={{height:"120px",width:"120px",backgroundColor:grey[50]}}/>
        <Typography variant="subtitle1"><span style={{color:green.A700}}>Title</span></Typography>
        <Typography variant="subtitle2">Price</Typography>
        <Typography variant="h6">Rs.xxx</Typography>
    </Box>
    );
};


export default ProductView;
