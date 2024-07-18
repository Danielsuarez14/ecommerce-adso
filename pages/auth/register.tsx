import React from 'react'
import NextLink from 'next/link'
import { Box, Button, Grid, TextField, Typography, Link } from "@mui/material"
import { AuthLayout } from "../../components/layouts"
import NextLInk from 'next/link'


const RegisterPage = () => {
  return (
    <AuthLayout title={"Create Account"}>
      <Box sx={{ width: 350, padding: '10px 20px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h1">Create Account</Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField label='Full Name' variant="filled" fullWidth />
          </Grid>

          <Grid item xs={12}>
            <TextField label='Email' variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label='Password' type="password" variant="filled" fullWidth />
          </Grid>

            <Grid item xs={12}>
                <Button color='secondary' className='circular-btn' size='large' fullWidth>
                    Log in
                </Button>
            </Grid>
            <Grid item xs={12} display='flex' justifyContent='end'>
                <NextLink href='/auth/login' passHref legacyBehavior>
                <Link underline='always'>
                   Do you have an account? 
                </Link>
                </NextLink>
            </Grid>

        </Grid>
      </Box>
    </AuthLayout>
  )
}

export default RegisterPage
