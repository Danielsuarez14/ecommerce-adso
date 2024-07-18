import React from 'react'
import OrderSummary from '../../components/cart/OrderSummary'
import CartList from '../../components/cart/CartList'
import { ShopLayout } from '../../components/layouts'
import { Grid, Card, CardContent, Divider, Button, Box, Typography } from '@mui/material'

const CartPage = () => {
  return (
    <ShopLayout title='Cart' pageDescription='Ecommerce Cart'>
        <Typography variant='h1' component='h1'>Cart</Typography>
        <Grid container>
            <Grid item xs={12} sm={7}>
                <CartList editable/>
            </Grid>
            <Grid item xs={12} sm={5}>
                <Card className='summary-card'>
                    <CardContent>
                        <Typography variant='h2'>Order</Typography>
                        <Divider sx={{my:2}}/>
                        <OrderSummary/>
                        <Button color='secondary' className='circular-btn' fullWidth>
                            Pay
                        </Button>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </ShopLayout>
  )
}

export default CartPage
