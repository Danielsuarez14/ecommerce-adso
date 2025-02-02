import {createTheme} from '@mui/material'
import {green } from '@mui/material/colors'

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1E1E1E'
        },
        secondary: {
            main: '#31DE84'
        }, 
        info:{
            main:'#fff'
        },
        },
    components: {
        MuiLink: {
            defaultProps: {
                underline: 'none',
            },
        },
        MuiAppBar: {
            defaultProps: {
                elevation: 0,
                position: 'fixed',
            },
            styleOverrides: {
                root: {
                    backgroundColor: 'white',
                    height: 60
                },
            }
        },
        MuiTypography: {
            styleOverrides: {
                h1: {
                    fontSize: 30,
                    fontWeight: 600
                },
                h2: {
                    fontSize: 20,
                    fontWeight: 400
                },
                subtitle1: {
                    fontSize: 18,
                    fontWeight: 600
                }
            }
        },
        MuiButton: {
            defaultProps: {
                variant: 'contained',
                size: 'small',
                disableElevation: true,
                color: 'info',
            },
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    boxShadow: 'none',
                    borderRadius: 10,
                    ":hover": {
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        transition: 'all 0.3s ease-in-out'
                    }
                }
            }
        },
        MuiCard: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {
                root:{
                    backgroundColor: 'white',
                    color: 'black',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    boxShadow: '0px 5px 5px rgba(0,0,0,0.5)',
                    borderRadius: 10 

                }
            }
        }
    }
})
