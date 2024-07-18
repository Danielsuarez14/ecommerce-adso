import React from 'react'
import ShopLayout from '../../components/layouts/ShopLayout'
import { Grid, TextField, Typography } from '@mui/material'

const AddressPage = () => {
  return (
   <ShopLayout title={'Address'} pageDescirption={'Confirm destination address'}>
        <Typography variant='h1' component='h1'>Addresss</Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
              <TextField label="Name" variant="filled" fullWidth />
          </Grid>
        </Grid>
   </ShopLayout>
  )
}

export default AddressPage