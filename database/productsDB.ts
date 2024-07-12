interface SeedProduct {
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: ValidSizes[];
    slug: string;
    type: ValidTypes;
    tags: string[];
    title: string;
    gender: 'hombre' | 'mujer' | 'unisex';
}
type ValidSizes =
| 'XS'
| 'S'
| 'M'
| 'L'
| 'XL'
| 'XXL';
type ValidTypes =
 | 'camisetas'
 | 'buzos'
 | 'gorras'
 | 'pantalones';

 interface SeedData{
    products: SeedProduct[];
 }

 export const initialData: SeedData = {
    products: [
      {
         description:
           'The classic traditional t-shirt features a straight, loose fit. Made from thick 180 g/m² fabric, available in solid colors of sanforized cotton. The heather gray is 90% cotton and 10% polyester, while the heather denim is 50% polyester. The collar and hems have double stitching for increased durability. The independent printer that produces this product is evaluated according to the standards of the International Labour Organization and sources its materials from manufacturers committed to improving cotton farming practices.',
         images: ['Android_M1_B.jpg', 'Android_M1_N.jpg'],
         inStock: 7,
         price: 69000,
         sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
         slug: 'camiseta-logo-cent-developer-android',
         type: 'camisetas',
         tags: ['sweatshirt'],
         title: 'Developer Android T-shirt',
         gender: 'hombre',
       },
       {
         description:
           'The classic traditional t-shirt features a straight, loose fit. Made from thick 180 g/m² fabric, available in solid colors of sanforized cotton. The heather gray is 90% cotton and 10% polyester, while the heather denim is 50% polyester. The collar and hems have double stitching for increased durability. The independent printer that produces this product is evaluated according to the standards of the International Labour Organization and sources its materials from manufacturers committed to improving cotton farming practices.',
         images: ['Angular_M1_B.jpg', 'Angular_M1_N.jpg'],
         inStock: 5,
         price: 69000,
         sizes: ['XS', 'S', 'M', 'XL', 'XXL'],
         slug: 'camiseta-logo-cent-developer-angular',
         type: 'camisetas',
         tags: ['angular'],
         title: 'Developer Angular T-shirt',
         gender: 'hombre',
       },
       {
         description:
           'The classic traditional t-shirt features a straight, loose fit. Made from thick 180 g/m² fabric, available in solid colors of sanforized cotton. The heather gray is 90% cotton and 10% polyester, while the heather denim is 50% polyester. The collar and hems have double stitching for increased durability. The independent printer that produces this product is evaluated according to the standards of the International Labour Organization and sources its materials from manufacturers committed to improving cotton farming practices.',
         images: ['Archlinux1_B.jpg', 'Archlinux1_N.jpg'],
         inStock: 13,
         price: 69000,
         sizes: ['S', 'M', 'L', 'XL', 'XXL'],
         slug: 'camiseta-logo-cent-developer-archlnux',
         type: 'camisetas',
         tags: ['archlinux'],
         title: 'Arch Linux T-shirt',
         gender: 'hombre',
       },
       {
         description:
           'The classic traditional t-shirt features a straight, loose fit. Made from thick 180 g/m² fabric, available in solid colors of sanforized cotton. The heather gray is 90% cotton and 10% polyester, while the heather denim is 50% polyester. The collar and hems have double stitching for increased durability. The independent printer that produces this product is evaluated according to the standards of the International Labour Organization and sources its materials from manufacturers committed to improving cotton farming practices.',
         images: ['Aws_M1_B.jpg', 'Aws_M1_N.jpg'],
         inStock: 50,
         price: 45,
         sizes: ['XS', 'S', 'M', 'L'],
         slug: 'camiseta-logo-cent-developer-aws',
         type: 'camisetas',
         tags: ['aws'],
         title: 'AWS T-shirt',
         gender: 'hombre',
       },
       {
         description:
           'The classic traditional t-shirt features a straight, loose fit. Made from thick 180 g/m² fabric, available in solid colors of sanforized cotton. The heather gray is 90% cotton and 10% polyester, while the heather denim is 50% polyester. The collar and hems have double stitching for increased durability. The independent printer that produces this product is evaluated according to the standards of the International Labour Organization and sources its materials from manufacturers committed to improving cotton farming practices.',
         images: ['Aws_Azure_M1_B.jpg', 'Aws_Azure_M1.jpg'],
         inStock: 50,
         price: 40,
         sizes: ['M', 'L', 'XL', 'XXL'],
         slug: 'camiseta-logo-cent-developer-aws-azure',
         type: 'camisetas',
         tags: ['azure', 'aws'],
         title: 'Azure - AWS T-shirt',
         gender: 'hombre',
       },
       {
         description:
           'The classic traditional t-shirt features a straight, loose fit. Made from thick 180 g/m² fabric, available in solid colors of sanforized cotton. The heather gray is 90% cotton and 10% polyester, while the heather denim is 50% polyester. The collar and hems have double stitching for increased durability. The independent printer that produces this product is evaluated according to the standards of the International Labour Organization and sources its materials from manufacturers committed to improving cotton farming practices.',
         images: ['Azure_M1_B.jpg', 'Azure_M1_N.jpg'],
         inStock: 0,
         price: 35,
         sizes: ['M', 'L', 'XL', 'XXL'],
         slug: 'camiseta-logo-cent-developer-azure',
         type: 'camisetas',
         tags: ['azure'],
         title: "Azure T-shirt",
         gender: 'hombre',
       },
       {
         description:
           'The classic traditional t-shirt features a straight, loose fit. Made from thick 180 g/m² fabric, available in solid colors of sanforized cotton. The heather gray is 90% cotton and 10% polyester, while the heather denim is 50% polyester. The collar and hems have double stitching for increased durability. The independent printer that produces this product is evaluated according to the standards of the International Labour Organization and sources its materials from manufacturers committed to improving cotton farming practices.',
         images: ['Css_M1_B.jpg', 'Css_M1_N.jpg'],
         inStock: 15,
         price: 69000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'camiseta-logo-cent-developer-css',
         type: 'camisetas',
         tags: ['css'],
         title: "CSS T-shirt",
         gender: 'hombre',
       },
       {
         description:
           'The classic traditional t-shirt features a straight, loose fit. Made from thick 180 g/m² fabric, available in solid colors of sanforized cotton. The heather gray is 90% cotton and 10% polyester, while the heather denim is 50% polyester. The collar and hems have double stitching for increased durability. The independent printer that produces this product is evaluated according to the standards of the International Labour Organization and sources its materials from manufacturers committed to improving cotton farming practices.',
         images: ['Docker_M1_B.jpg', 'Docker_M1_N.jpg'],
         inStock: 15,
         price: 69000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'camiseta-logo-cent-docker',
         type: 'camisetas',
         tags: ['docker'],
         title: "Docker T-shirt",
         gender: 'hombre',
       },
       {
         description:
           'The classic traditional t-shirt features a straight, loose fit. Made from thick 180 g/m² fabric, available in solid colors of sanforized cotton. The heather gray is 90% cotton and 10% polyester, while the heather denim is 50% polyester. The collar and hems have double stitching for increased durability. The independent printer that produces this product is evaluated according to the standards of the International Labour Organization and sources its materials from manufacturers committed to improving cotton farming practices.',
         images: ['Cisco_M1_B.jpg', 'Cisco_M1_N.jpg'],
         inStock: 15,
         price: 69000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'camiseta-logo-cent-developer-Cisco',
         type: 'camisetas',
         tags: ['Cisco'],
         title: "Cisco T-shirt",
         gender: 'hombre',
       },
       {
         description:
           'The classic traditional t-shirt features a straight, loose fit. Made from thick 180 g/m² fabric, available in solid colors of sanforized cotton. The heather gray is 90% cotton and 10% polyester, while the heather denim is 50% polyester. The collar and hems have double stitching for increased durability. The independent printer that produces this product is evaluated according to the standards of the International Labour Organization and sources its materials from manufacturers committed to improving cotton farming practices.',
         images: ['Csharp_M1_B.jpg', 'Csharp_M1_N.jpg'],
         inStock: 15,
         price: 69000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'camiseta-logo-cent-developer-Csharp',
         type: 'camisetas',
         tags: ['Csharp'],
         title: "Csharp T-shirt",
         gender: 'hombre',
       },
       {
         description:
           'The classic traditional t-shirt features a straight, loose fit. Made from thick 180 g/m² fabric, available in solid colors of sanforized cotton. The heather gray is 90% cotton and 10% polyester, while the heather denim is 50% polyester. The collar and hems have double stitching for increased durability. The independent printer that produces this product is evaluated according to the standards of the International Labour Organization and sources its materials from manufacturers committed to improving cotton farming practices.',
         images: ['Edubuntu1_B.jpg', 'Edubuntu1_N.jpg'],
         inStock: 15,
         price: 69000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'camiseta-logo-cent-developer-Edubuntu',
         type: 'camisetas',
         tags: ['Edubuntu'],
         title: "Edubuntu T-shirt",
         gender: 'hombre',
       },
       {
         description:
           'The classic traditional t-shirt features a straight, loose fit. Made from thick 180 g/m² fabric, available in solid colors of sanforized cotton. The heather gray is 90% cotton and 10% polyester, while the heather denim is 50% polyester. The collar and hems have double stitching for increased durability. The independent printer that produces this product is evaluated according to the standards of the International Labour Organization and sources its materials from manufacturers committed to improving cotton farming practices.',
         images: ['Flutter_M1_B.jpg', 'Flutter_M1_N.jpg'],
         inStock: 15,
         price: 69000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'camiseta-logo-cent-developer-Flutter',
         type: 'camisetas',
         tags: ['Flutter'],
         title: "Flutter T-shirt",
         gender: 'hombre',
       },
       {
         description:
           'The classic traditional t-shirt features a straight, loose fit. Made from thick 180 g/m² fabric, available in solid colors of sanforized cotton. The heather gray is 90% cotton and 10% polyester, while the heather denim is 50% polyester. The collar and hems have double stitching for increased durability. The independent printer that produces this product is evaluated according to the standards of the International Labour Organization and sources its materials from manufacturers committed to improving cotton farming practices.',
         images: ['Github_M1_B.jpg', 'Github_M1_N.jpg'],
         inStock: 15,
         price: 69000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'camiseta-logo-cent-developer-Github',
         type: 'camisetas',
         tags: ['Github'],
         title: "Github T-shirt",
         gender: 'hombre',
       },
       {
         description:
           'The classic traditional t-shirt features a straight, loose fit. Made from thick 180 g/m² fabric, available in solid colors of sanforized cotton. The heather gray is 90% cotton and 10% polyester, while the heather denim is 50% polyester. The collar and hems have double stitching for increased durability. The independent printer that produces this product is evaluated according to the standards of the International Labour Organization and sources its materials from manufacturers committed to improving cotton farming practices.',
         images: ['Github_TshirtB.jpg', 'Github_TshirtB2.jpg'],
         inStock: 15,
         price: 69000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'camiseta-logo-cent-developer-Github-copilot',
         type: 'camisetas',
         tags: ['Github'],
         title: "Github Copilot T-shirt",
         gender: 'hombre',
       },
       {
         description:
           'The classic traditional t-shirt features a straight, loose fit. Made from thick 180 g/m² fabric, available in solid colors of sanforized cotton. The heather gray is 90% cotton and 10% polyester, while the heather denim is 50% polyester. The collar and hems have double stitching for increased durability. The independent printer that produces this product is evaluated according to the standards of the International Labour Organization and sources its materials from manufacturers committed to improving cotton farming practices.',
         images: ['Gitlab_M1_B.jpg', 'Gitlab_M1_N.jpg'],
         inStock: 15,
         price: 69000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'camiseta-logo-cent-developer-Github-copilot',
         type: 'camisetas',
         tags: ['Github'],
         title: "Github Copilot T-shirt",
         gender: 'hombre',
       },
       {
         description:
           'The classic traditional t-shirt features a straight, loose fit. Made from thick 180 g/m² fabric, available in solid colors of sanforized cotton. The heather gray is 90% cotton and 10% polyester, while the heather denim is 50% polyester. The collar and hems have double stitching for increased durability. The independent printer that produces this product is evaluated according to the standards of the International Labour Organization and sources its materials from manufacturers committed to improving cotton farming practices.',
         images: ['Golang.jpg', 'Golang_N.jpg'],
         inStock: 15,
         price: 69000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'camiseta-logo-cent-developer-Github-copilot',
         type: 'camisetas',
         tags: ['Github'],
         title: "Golang T-shirt",
         gender: 'hombre',
       },
       {
         description:
           'The classic traditional t-shirt features a straight, loose fit. Made from thick 180 g/m² fabric, available in solid colors of sanforized cotton. The heather gray is 90% cotton and 10% polyester, while the heather denim is 50% polyester. The collar and hems have double stitching for increased durability. The independent printer that produces this product is evaluated according to the standards of the International Labour Organization and sources its materials from manufacturers committed to improving cotton farming practices.',
         images: ['GoogleCloud_M1.jpg', 'GoogleCloud_M1C_N.jpg'],
         inStock: 15,
         price: 69000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'camiseta-logo-cent-developer-Github-copilot',
         type: 'camisetas',
         tags: ['Github'],
         title: "Google Cloud T-shirt",
         gender: 'hombre',
       },
       {
         description:
           'Embroidered cap made of 100% cotton Vulcano drill, baseball style with button. Features include piped seams, a split front, and eyelets on both sides. Four seams on the visor and a crocodile buckle clasp. Crafted from Super 8 drill fabric (100%) weighing 155 grams. Adjustable standard adult size: 50-60 cm. Metal buckle',
         images: ['gorra-githut-2.jpg','gorra_github.jpg'],
         inStock: 15,
         price: 69000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'gorra-tech-github',
         type: 'gorras',
         tags: ['github'],
         title: "Github Cap",
         gender: 'unisex',
       },
       {
         description:
           'Embroidered cap made of 100% cotton Vulcano drill, baseball style with button. Features include piped seams, a split front, and eyelets on both sides. Four seams on the visor and a crocodile buckle clasp. Crafted from Super 8 drill fabric (100%) weighing 155 grams. Adjustable standard adult size: 50-60 cm. Metal buckle',
         images: ['gorra_react.jpg'],
         inStock: 15,
         price: 69000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'gorra-tech-react',
         type: 'gorras',
         tags: ['react'],
         title: "React Cap",
         gender: 'unisex',
       },
       {
         description:
           'Embroidered cap made of 100% cotton Vulcano drill, baseball style with button. Features include piped seams, a split front, and eyelets on both sides. Four seams on the visor and a crocodile buckle clasp. Crafted from Super 8 drill fabric (100%) weighing 155 grams. Adjustable standard adult size: 50-60 cm. Metal buckle',
         images: ['gorra-js.jpg'],
         inStock: 15,
         price: 69000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'gorra-tech-js',
         type: 'gorras',
         tags: ['js'],
         title: "Javascript Cap",
         gender: 'unisex',
       },
       {
         description:
           'Embroidered cap made of 100% cotton Vulcano drill, baseball style with button. Features include piped seams, a split front, and eyelets on both sides. Four seams on the visor and a crocodile buckle clasp. Crafted from Super 8 drill fabric (100%) weighing 155 grams. Adjustable standard adult size: 50-60 cm. Metal buckle',
         images: ['gorra-ubuntu.jpg'],
         inStock: 15,
         price: 69000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'gorra-tech-ubuntu',
         type: 'gorras',
         tags: ['ubuntu'],
         title: "Ubuntu Cap",
         gender: 'unisex',
       },
       {
         description:
           'Embroidered cap made of 100% cotton Vulcano drill, baseball style with button. Features include piped seams, a split front, and eyelets on both sides. Four seams on the visor and a crocodile buckle clasp. Crafted from Super 8 drill fabric (100%) weighing 155 grams. Adjustable standard adult size: 50-60 cm. Metal buckle',
         images: ['gorra-angular.jpg'],
         inStock: 15,
         price: 69000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'gorra-tech-angular',
         type: 'gorras',
         tags: ['angular'],
         title: "Angular Cap",
         gender: 'unisex',
       },
       {
         description:
         'Hooded sweatshirt with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-14.2.jpg', 'HOODIE-14.1.jpg'],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-special',
         type: 'buzos',
         tags: ['special'],
         title: "Special Hoodie",
         gender: 'hombre',
       },
       {
         description:
           'Hooded sweatshirt with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-1.2.jpg', 'HOODIE-1.1_2.jpg'],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-frontend',
         type: 'buzos',
         tags: ['frontend'],
         title: "Frontend Hoodie",
         gender: 'hombre',
       },
       {
         description:
           'Hooded sweatshirt with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-2.2.jpg', 'HOODIE-2.1_1.jpg' ],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-dev',
         type: 'buzos',
         tags: ['dev'],
         title: "Dev Hoodie",
         gender: 'hombre',
       },
       {
         description:
           'Hooded sweatshirt with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-3.2_1.jpg', 'HOODIE-3.1.jpg'],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-hello-world',
         type: 'buzos',
         tags: ['hello-world'],
         title: "Hello World Hoodie",
         gender: 'hombre',
       },
       {
         description:
           'Hooded sweatshirt with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-4.2.jpg','HOODIE-4.1_2.jpg'],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-binary',
         type: 'buzos',
         tags: ['binary'],
         title: "Binary Hoodie",
         gender: 'hombre',
       },
       {
         description:
           'Hoodie with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-5.2_1.jpg','HOODIE-5.1_1.jpg'],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-phone',
         type: 'buzos',
         tags: ['phone'],
         title: "Phone Hoodie",
         gender: 'hombre',
       },
       {
         description:
           'Hoodie with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-8.2_1.jpg','HOODIE-8.1_2.jpg'],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-cloud',
         type: 'buzos',
         tags: ['cloud'],
         title: "Cloud Hoodie",
         gender: 'hombre',
       },
       {
         description:
           'Hoodie with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-9.2.jpg','HOODIE-9.1.jpg'],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-cloud-2',
         type: 'buzos',
         tags: ['cloud'],
         title: "Cloud Unisex Hoodie",
         gender: 'unisex',
       },
       {
         description:
           'Hoodie with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-10.2.jpg','HOODIE-10.1.jpg'],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-python',
         type: 'buzos',
         tags: ['python'],
         title: "Python Hoodie",
         gender: 'hombre',
       },
       {
         description:
           'Hoodie with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-11.2.jpg','HOODIE-11.4.jpg'],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-chrome',
         type: 'buzos',
         tags: ['chrome'],
         title: "Chrome Hoodie",
         gender: 'hombre',
       },
       {
         description:
           'Hoodie with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-12.2.jpg','HOODIE-12.1.jpg'],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-atom',
         type: 'buzos',
         tags: ['atom'],
         title: "Atom Hoodie",
         gender: 'hombre',
       },
       {
         description:
           'Hoodie with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-13.2_1.jpg','HOODIE-13.1.jpg'],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-hola',
         type: 'buzos',
         tags: ['hola'],
         title: "Hi Hoodie",
         gender: 'hombre',
       },
       {
         description:
           'Hoodie with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-15.2_1.jpg','HOODIE-15.1.jpg'],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-emberd',
         type: 'buzos',
         tags: ['emberd'],
         title: "Emberd Hoodie",
         gender: 'hombre',
       },
       {
         description:
           'Hoodie with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-16.2_1.jpg','HOODIE-16.1.jpg'],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-id',
         type: 'buzos',
         tags: ['dev-id'],
         title: "Id Hoodie",
         gender: 'hombre',
       },
       {
         description:
           'Hoodie with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-17.2.jpg','HOODIE-17.1.jpg'],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-linux',
         type: 'buzos',
         tags: ['dev-linux'],
         title: "Linux Hoodie",
         gender: 'hombre',
       },
       {
         description:
           'Hoodie with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-20.2.jpg','HOODIE-20.1.jpg'],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-starkoverflow',
         type: 'buzos',
         tags: ['dev-starkoverflow'],
         title: "Starkoverflow Hoodie",
         gender: 'hombre',
       },
       {
         description:
           'Hoodie with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-21.2.jpg','HOODIE-22.1.jpg'],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-internet',
         type: 'buzos',
         tags: ['dev-internet'],
         title: "Internet Hoodie",
         gender: 'hombre',
       },
       {
         description:
           'Hoodie with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-23.2.jpg','HOODIE-23.1.jpg'],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-github',
         type: 'buzos',
         tags: ['dev-github'],
         title: "Github Hoodie",
         gender: 'hombre',
       },
       {
         description:
           'Hoodie with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-24.2.jpg','HOODIE-24.1.jpg'],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-json',
         type: 'buzos',
         tags: ['dev-json'],
         title: "Json Hoodie",
         gender: 'hombre',
       },
       {
         description:
           'Hoodie with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-25.2.jpg','HOODIE-25.1.jpg'],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-json-2',
         type: 'buzos',
         tags: ['dev-json'],
         title: "Json new Hoodie",
         gender: 'hombre',
       },
       {
         description:
           'Hoodie with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-27.2_1.jpg','HOODIE-28.1.jpg'],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-power-bi',
         type: 'buzos',
         tags: ['dev-power-bi'],
         title: "Power Bi Hoodie",
         gender: 'hombre',
       },
       {
         description:
           'Hoodie with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-30.2.jpg','HOODIE-30.1.jpg'],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-code',
         type: 'buzos',
         tags: ['dev-code'],
         title: "Code Hoodie",
         gender: 'hombre',
       }
    ]
 }