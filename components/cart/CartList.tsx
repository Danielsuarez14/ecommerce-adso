import React, { FC } from 'react'
import {initialData} from '../../database/productsDB'
import { Box, Button, CardActionArea, CardMedia, Grid, Link, Typography } from '@mui/material'
import NextLink from 'next/link'
import { ItemCounter } from '../ui'
const productInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
]

interface Props {
    editable?: boolean
}



const CartList: FC<Props> = ({editable=false}) => {
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
                                    image={`/products/${product.images[0]}`}
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
                    {
                        editable ? <ItemCounter/> : <Typography variant='h5'>3 items</Typography>
                    }
                </Box>
                </Grid>

                <Grid item xs={2} display='flex' alignItems='center' flexDirection='column'>
                    <Typography variant='subtitle1'>{`${product.price}`}</Typography>
                    {/* Todo: Conditional */}
                    {
                        editable &&(
                            <Button variant='text'color='secondary' >
                                Delete
                            </Button>

                        ) 
                    }
                    
                </Grid>
            </Grid>
        ))
    }
    </>
  )
}

export default CartList
