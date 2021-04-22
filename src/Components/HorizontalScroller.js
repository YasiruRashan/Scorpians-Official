/*
Scorpions
*/

import { Box, Typography } from '@material-ui/core'
import React from 'react'
import ProductView from './ProductView'

const HorizontalScroller = () => {
    return (
      <Box bgcolor="white" p="16px"> //Background colour
          <Typography variant="h5">Title</Typography>
           <Box display="flex" overflow="auto">
               <ProductView/> //Vegetable categories
                <ProductView/> //Vegetable categories
                <ProductView/>
                <ProductView/>
                <ProductView/>
                <ProductView/>
            </Box>
       </Box>
    )
}

export default HorizontalScroller
