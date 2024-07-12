import React from 'react'
import { ShopLayout } from '../../components/layouts'
import { initialData } from '../../database/productsDB'
import { Box, Button, Chip, Grid, Typography } from '@mui/material'
import { ProductSlideShow, SizeSelector } from '../../components/products'
import { ItemCounter } from '../../components/ui'

const product = initialData.products[0]

const productPage = () => {
    return (
        <ShopLayout title={product.title} pageDescription={product.description}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={7}>
                    <ProductSlideShow images={product.images}/>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Box display='flex' flexDirection='column'>
                        {/* Title */}
                        <Typography variant='h1' component='h1'>{product.title}</Typography>
                        <Typography variant='subtitle1' component='h2'>{`$${product.price}`}</Typography>
                        {/* Quantity */}
                        <Box sx={{ my: 2 }}>
                            <Typography variant='subtitle2'>Quantity</Typography>
                            <ItemCounter/>

                            {/* SizeSelector */}
                            <SizeSelector sizes={product.sizes}/>
                        </Box>
                        <Button color='secondary' className='circular-btn'>
                            Add to cart
                        </Button>

                        
                        {/* <Chip label='Not Available' color='error' variant='outlined' /> */}
                        {/* Description */}
                        <Box sx={{mt:3}}>
                            <Typography variant='subtitle2'>Description</Typography>
                            <Typography variant='body2'>{product.description}</Typography>
                        </Box>
                    
                    </Box>
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default productPage
