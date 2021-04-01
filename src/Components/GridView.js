import React from 'react'
import ProductView from './ProductView'
import {Box} from "@material-ui/core";

const GridView = () => {
    return (
        <Box width="300px" bgcolor="white" mx="auto">

            <ProductView/>
            <ProductView/>
             
        </Box>
    )
}

export default GridView
