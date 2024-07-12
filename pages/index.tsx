import { ShopLayout } from "../components/layouts";
import { Card, CardActionArea, CardMedia, Grid, Typography } from "@mui/material";
import{initialData} from '../database/productsDB'
import {ProductsList} from '../components/products'

export default function Home() {
  return (
    <ShopLayout title={"Ecommerce Sena - Home"} pageDescription={"Encuentralos mejores estilos en camisas, buzos y gorras"}>
      <Typography variant ='h1' component='h1'>Tienda</Typography>
      <Typography variant='h2'sx={{mb:1}} >Articulos</Typography>
      <ProductsList products={initialData.products as any}/>
    </ShopLayout>
  )
}
