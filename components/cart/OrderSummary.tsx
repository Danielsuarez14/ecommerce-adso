import { Grid, Typography } from '@mui/material'
import React from 'react'

const OrderSummary = () => {
  return (
    <Grid container>
        <Grid item xs ={6}>
            <Typography>
                Subtotal 
            </Typography>
        </Grid>

        <Grid item xs ={6} display='flex' justifyContent='end'>
            <Typography>
                3. Items 
            </Typography>
        </Grid>

        <Grid item xs ={6} >
            <Typography>
                Estimated total 
            </Typography>
        </Grid>

        <Grid item xs ={6} display='flex' justifyContent='end'>
            <Typography >
                {`$${207000}`} 
            </Typography>
        </Grid>

        <Grid item xs ={6} >
            <Typography>
                Iva (19%) 
            </Typography>
        </Grid>

        <Grid item xs ={6} display='flex' justifyContent='end'>
            <Typography >
                {`$${39330}`} 
            </Typography>
        </Grid>

        <Grid item xs ={6} sx={{mt : 2}}>
            <Typography variant = 'subtitle1'>Total: </Typography>
        </Grid>

        <Grid item xs ={6} sx={{mt : 2}}display='flex' justifyContent='end'>
            <Typography variant = 'subtitle1'>
                {`$${246300}`} 
            </Typography>
        </Grid>

    </Grid>
  )
}

export default OrderSummary
