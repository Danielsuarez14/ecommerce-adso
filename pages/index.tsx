import { ShopLayout } from "../components/layouts";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <ShopLayout title={"Ecommerce Sena - Home"} pageDescription={"Encuentralos mejores estilos en camisas, buzos y gorras"}>
      <Typography variant ='h1' component='h1'>Tienda</Typography>
      <Typography>Articulos</Typography>
    </ShopLayout>
  )
}
