import React from 'react'
import OrderSummary from '../../components/cart/OrderSummary'
import CartList from '../../components/cart/CartList'
import { ShopLayout } from '../../components/layouts'
import { Grid, Card, CardContent, Divider, Button, Box, Typography, Link } from '@mui/material'
import NextLink from 'next/link'

const summary = () => {
  return (
    <ShopLayout title='Summary Order' pageDescription='Summary Order'>
        <Typography variant='h1' component='h1'>Summary Order</Typography>
        <Grid container>
            <Grid item xs={12} sm={7}>
                <CartList />
            </Grid>
            <Grid item xs={12} sm={5}>
                <Card className='summary-card'>
                    <CardContent>
                        <Typography variant='h2'>Summary (3 items)</Typography>
                        <Divider sx={{my:2}}/>
                        <Box display='flex' justifyContent='space-between'>
                            <Typography variant ='subtitle1'>Delivery Address</Typography>
                            <NextLink href='/checkout/address' passHref legacyBehavior>
                                <Link underline = 'always'>
                                    Edit 
                                </Link>
                            </NextLink>
                        </Box>
                        <Typography>Daniel Suarez</Typography>
                        <Typography>Calle 24 No14-20 </Typography>
                        <Typography>Colombia</Typography>
                        <Typography>+57 311 536 5841</Typography>

                        <Divider sx={{ mb : 1}}/>
                        <Box display='flex' justifyContent='end'>
                            <NextLink href='/cart' passHref legacyBehavior>
                                <Link underline = 'always'>
                                    Edit 
                                </Link>
                            </NextLink>
                        </Box>
                        <OrderSummary/>
                        <Button color='secondary' className='circular-btn' fullWidth>
                            Confirm Order
                        </Button>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </ShopLayout>
  )
}

export default summary
