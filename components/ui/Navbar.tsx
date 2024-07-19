import React from 'react'
import NextLink from 'next/link'
import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material'
import { LinkOffRounded, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material/'


export const Navbar = () => {
    return (
        <AppBar>
            <Toolbar>
                <NextLink href='/' passHref legacyBehavior>
                    <Link display='flex' alignItems='center'>
                        <Typography variant='h6' >Ecommerce |</Typography>
                        <Typography sx={{ ml: 0.5 }} >Shop</Typography>
                    </Link>
                </NextLink>
                <Box flex={1} />

                <Box sx={{display:{xs:'none', sm:'block'} }}>
                    <NextLink href='/categoriy/Man' passHref legacyBehavior>
                        <Link>
                            <Button>Man</Button>
                        </Link>
                    </NextLink>
                    <NextLink href='/categoriy/woman' passHref legacyBehavior>
                        <Link>
                            <Button>Woman</Button>
                        </Link>
                    </NextLink>
                    <NextLink href='/categoriy/unisex' passHref legacyBehavior>
                        <Link>
                            <Button>Unisex</Button>
                        </Link>
                    </NextLink>
                </Box>
                <Box flex={1}/>

                <Box>
                    <NextLink href='/search' passHref legacyBehavior>
                        <Link>
                            <IconButton>
                                <SearchOutlined />
                            </IconButton>
                        </Link>
                    </NextLink>
                    <NextLink href='/cart' passHref legacyBehavior>
                        <Link>
                            <IconButton>
                                <Badge badgeContent={4} color='secondary'>
                                    <ShoppingCartOutlined />
                                </Badge>
                            </IconButton>
                        </Link>
                    </NextLink>
                    <NextLink href='/Menu' passHref legacyBehavior>
                        <Link>
                            <Button>Menu</Button>
                        </Link>
                    </NextLink>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

