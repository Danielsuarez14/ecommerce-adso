import React from 'react'
import ShopLayout from '../../components/layouts/ShopLayout'
import { Box, Button, FormControl, Grid, MenuItem, Select, TextField, Typography } from '@mui/material'

const AddressPage = () => {
  return (
   <ShopLayout title={'Address'} pageDescirption={'Confirm destination address'}>
        <Typography variant='h1' component='h1'>Address</Typography>

        <Grid container spacing={2}>

          <Grid item xs={12} sm={6}>
              <TextField label="Name" variant="filled" fullWidth />
          </Grid>

          <Grid item xs={12} sm={6}>
              <TextField label="Last Name" variant="filled" fullWidth />
          </Grid>

          <Grid item xs={12} sm={6}>
              <TextField label="Address" variant="filled" fullWidth />
          </Grid>

          <Grid item xs={12} sm={6}>
              <TextField label="Address 2 (optional)" variant="filled" fullWidth />
          </Grid>

          <Grid item xs={12} sm={6}>
              <TextField label="Postal Code" variant="filled" fullWidth />
          </Grid>

          <Grid item xs={12} sm={6}>
              <TextField label="City" variant="filled" fullWidth />
          </Grid>

          <Grid item xs={12} sm={6}>
              <FormControl  fullWidth >
                <Select
                variant='filled' 
                label='Country' 
                value={1} >
                <MenuItem value={1}>Colombia</MenuItem>
                <MenuItem value={2}>Mexico</MenuItem>
                <MenuItem value={3}>Argentina</MenuItem>
                </Select>
              </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
              <TextField label="Number Phone" variant="filled" fullWidth />
          </Grid>
        </Grid>
        <Box sx={{ mt:5 }} display='flex' justifyContent='center' >
            <Button color='secondary' className='circular-btn' size='large' >
                Review Order
            </Button>
        </Box>
   </ShopLayout>
  )
}

export default AddressPage