export interface IProduct {
    _id: string;
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: ISizes[];
    slug: string;
    type: ITypes;
    tags: string[];
    title: string;
    gender: 'hombre' | 'mujer' | 'unisex';
}
export type ISizes =
| 'XS'
| 'S'
| 'M'
| 'L'
| 'XL'
| 'XXL';
export type ITypes =
 | 'camisetas'
 | 'buzos'
 | 'gorras'
 | 'pantalones';
