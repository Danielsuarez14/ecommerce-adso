export interface IProduct {
    _id: string;
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: ISize[];
    slug: string;
    type: IType;
    tags: string[];
    title: string;
    gender: 'hombre' | 'mujer' | 'unisex';
}
export type ISize =
| 'XS'
| 'S'
| 'M'
| 'L'
| 'XL'
| 'XXL';
export type IType =
 | 'camisetas'
 | 'buzos'
 | 'gorras'
 | 'pantalones';
