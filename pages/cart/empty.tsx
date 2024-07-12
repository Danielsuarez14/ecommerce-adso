import NextLink from 'next/link'
import { RemoveShoppingCartOutlined} from '@mui/icons-material'
import { Box, Link, Typography } from '@mui/material'
import {ShopLayout} from '../../components/layouts'
import React from 'react'



const EmptyPage = () => {
  return (
    <ShopLayout title=' Empty Cart' pageDescription='No items in cart'>
        <Box display='flex' 
        justifyContent= 'center' 
        alignItems= 'center' 
        height='calc(100vh - 200px)' 
        sx={{flexDirection: {xs:'column', sm:'row'}}}>
            <RemoveShoppingCartOutlined sx={{fontSize:100}} />
            <Box display='flex' alignItems='center' flexDirection='column'>
                <Typography>Your cart is empty</Typography>
                <NextLink href='/' passHref legacyBehavior>
                <Link typography='h4' color='secondary'>
                  Back
                </Link> 
                </NextLink>
            </Box>
        </Box>

    </ShopLayout>
  )
}
export default EmptyPage
