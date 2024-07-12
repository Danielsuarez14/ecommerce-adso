import React, { FC } from 'react'
import {IProduct} from '../../interfaces'
import { Grid } from '@mui/material'
import ProductCard from './ProductCard'


export interface Props{
    products: IProduct[]
}

export const ProductsList: FC<Props> = ({products}) => {
  return (
    <Grid container spacing={4}>{

    
        products.map(product => (
        <ProductCard
            key={product.slug}
            product={product}
        />
        ))
    }
    </Grid>
  )
}

