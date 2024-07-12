import React from 'react'
import {initialData} from '..//..//database/productsDB'
import { Box, Button, CardActionArea, CardMedia, Grid, Link, Typography } from '@mui/material'
import NextLink from 'next/link'
import { ItemCounter } from '../ui'
const productInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
]
const CartList = () => {
  return (
    <>
    {
        productInCart.map ( product => (
            <Grid container spacing={2} key={product.slug} sx={{mb:1}}>
                <Grid item xs={3}>
                    <NextLink href='/product/slug' passHref legacyBehavior>
                        <Link>
                            <CardActionArea>
                                <CardMedia
                                    image={`products/${product.images[0]}`}
                                    component='img'
                                    sx={{borderRadious:5 }}
                                />
                            </CardActionArea>
                        </Link>
                    </NextLink>
                </Grid>
                <Grid item xs={7}>
                <Box display='flex' flexDirection='column'>
                    <Typography variant='body1'>{product.title}</Typography>
                    <Typography variant='body1'>Size: <strong>M</strong></Typography>
                    {/* Todo: Conditional */}
                    <ItemCounter/>

                </Box>
                </Grid>

                <Grid item xs={2} display='flex' alignItems='center' flexDirection='column'>
                    <Typography variant='subtitle1'>{`${product.price}`}</Typography>
                    <Button variant='text'color='secondary' >Delete</Button>
                    {/* Todo: Conditional */}
                </Grid>
            </Grid>
        ))
    }
    </>
  )
}

export default CartList
