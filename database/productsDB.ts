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
    gender: 'Man' | 'Woman' | 'Unisex';
}
type ValidSizes =
| 'XS'
| 'S'
| 'M'
| 'L'
| 'XL'
| 'XXL';
type ValidTypes =
 | 'T-Shirt'
 | 'Hoodie'
 | 'Cap'
 | 'Pants';

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
         type: 'T-Shirt',
         tags: ['sweatshirt'],
         title: 'Developer Android T-shirt',
         gender: 'Man',
       },
       {
         description:
           'The classic traditional t-shirt features a straight, loose fit. Made from thick 180 g/m² fabric, available in solid colors of sanforized cotton. The heather gray is 90% cotton and 10% polyester, while the heather denim is 50% polyester. The collar and hems have double stitching for increased durability. The independent printer that produces this product is evaluated according to the standards of the International Labour Organization and sources its materials from manufacturers committed to improving cotton farming practices.',
         images: ['Angular_M1_B.jpg', 'Angular_M1_N.jpg'],
         inStock: 5,
         price: 69000,
         sizes: ['XS', 'S', 'M', 'XL', 'XXL'],
         slug: 'camiseta-logo-cent-developer-angular',
         type: 'T-Shirt',
         tags: ['angular'],
         title: 'Developer Angular T-shirt',
         gender: 'Man',
       },
       {
         description:
           'The classic traditional t-shirt features a straight, loose fit. Made from thick 180 g/m² fabric, available in solid colors of sanforized cotton. The heather gray is 90% cotton and 10% polyester, while the heather denim is 50% polyester. The collar and hems have double stitching for increased durability. The independent printer that produces this product is evaluated according to the standards of the International Labour Organization and sources its materials from manufacturers committed to improving cotton farming practices.',
         images: ['Archlinux1_B.jpg', 'Archlinux1_N.jpg'],
         inStock: 13,
         price: 69000,
         sizes: ['S', 'M', 'L', 'XL', 'XXL'],
         slug: 'camiseta-logo-cent-developer-archlnux',
         type: 'T-Shirt',
         tags: ['archlinux'],
         title: 'Arch Linux T-shirt',
         gender: 'Man',
       },
       {
         description:
           'The classic traditional t-shirt features a straight, loose fit. Made from thick 180 g/m² fabric, available in solid colors of sanforized cotton. The heather gray is 90% cotton and 10% polyester, while the heather denim is 50% polyester. The collar and hems have double stitching for increased durability. The independent printer that produces this product is evaluated according to the standards of the International Labour Organization and sources its materials from manufacturers committed to improving cotton farming practices.',
         images: ['Aws_M1_B.jpg', 'Aws_M1_N.jpg'],
         inStock: 50,
         price: 45,
         sizes: ['XS', 'S', 'M', 'L'],
         slug: 'camiseta-logo-cent-developer-aws',
         type: 'T-Shirt',
         tags: ['aws'],
         title: 'AWS T-shirt',
         gender: 'Man',
       },
       {
         description:
           'The classic traditional t-shirt features a straight, loose fit. Made from thick 180 g/m² fabric, available in solid colors of sanforized cotton. The heather gray is 90% cotton and 10% polyester, while the heather denim is 50% polyester. The collar and hems have double stitching for increased durability. The independent printer that produces this product is evaluated according to the standards of the International Labour Organization and sources its materials from manufacturers committed to improving cotton farming practices.',
         images: ['Aws_Azure_M1_B.jpg', 'Aws_Azure_M1.jpg'],
         inStock: 50,
         price: 40,
         sizes: ['M', 'L', 'XL', 'XXL'],
         slug: 'camiseta-logo-cent-developer-aws-azure',
         type: 'T-Shirt',
         tags: ['azure', 'aws'],
         title: 'Azure - AWS T-shirt',
         gender: 'Man',
       },
       {
         description:
           'The classic traditional t-shirt features a straight, loose fit. Made from thick 180 g/m² fabric, available in solid colors of sanforized cotton. The heather gray is 90% cotton and 10% polyester, while the heather denim is 50% polyester. The collar and hems have double stitching for increased durability. The independent printer that produces this product is evaluated according to the standards of the International Labour Organization and sources its materials from manufacturers committed to improving cotton farming practices.',
         images: ['Azure_M1_B.jpg', 'Azure_M1_N.jpg'],
         inStock: 0,
         price: 35,
         sizes: ['M', 'L', 'XL', 'XXL'],
         slug: 'camiseta-logo-cent-developer-azure',
         type: 'T-Shirt',
         tags: ['azure'],
         title: "Azure T-shirt",
         gender: 'Man',
       },
       {
         description:
           'The classic traditional t-shirt features a straight, loose fit. Made from thick 180 g/m² fabric, available in solid colors of sanforized cotton. The heather gray is 90% cotton and 10% polyester, while the heather denim is 50% polyester. The collar and hems have double stitching for increased durability. The independent printer that produces this product is evaluated according to the standards of the International Labour Organization and sources its materials from manufacturers committed to improving cotton farming practices.',
         images: ['Css_M1_B.jpg', 'Css_M1_N.jpg'],
         inStock: 15,
         price: 69000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'camiseta-logo-cent-developer-css',
         type: 'T-Shirt',
         tags: ['css'],
         title: "CSS T-shirt",
         gender: 'Man',
       },
       {
         description:
           'The classic traditional t-shirt features a straight, loose fit. Made from thick 180 g/m² fabric, available in solid colors of sanforized cotton. The heather gray is 90% cotton and 10% polyester, while the heather denim is 50% polyester. The collar and hems have double stitching for increased durability. The independent printer that produces this product is evaluated according to the standards of the International Labour Organization and sources its materials from manufacturers committed to improving cotton farming practices.',
         images: ['Docker_M1_B.jpg', 'Docker_M1_N.jpg'],
         inStock: 15,
         price: 69000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'camiseta-logo-cent-docker',
         type: 'T-Shirt',
         tags: ['docker'],
         title: "Docker T-shirt",
         gender: 'Man',
       },
       {
         description:
           'The classic traditional t-shirt features a straight, loose fit. Made from thick 180 g/m² fabric, available in solid colors of sanforized cotton. The heather gray is 90% cotton and 10% polyester, while the heather denim is 50% polyester. The collar and hems have double stitching for increased durability. The independent printer that produces this product is evaluated according to the standards of the International Labour Organization and sources its materials from manufacturers committed to improving cotton farming practices.',
         images: ['Cisco_M1_B.jpg', 'Cisco_M1_N.jpg'],
         inStock: 15,
         price: 69000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'camiseta-logo-cent-developer-Cisco',
         type: 'T-Shirt',
         tags: ['Cisco'],
         title: "Cisco T-shirt",
         gender: 'Man',
       },
       {
         description:
           'The classic traditional t-shirt features a straight, loose fit. Made from thick 180 g/m² fabric, available in solid colors of sanforized cotton. The heather gray is 90% cotton and 10% polyester, while the heather denim is 50% polyester. The collar and hems have double stitching for increased durability. The independent printer that produces this product is evaluated according to the standards of the International Labour Organization and sources its materials from manufacturers committed to improving cotton farming practices.',
         images: ['Csharp_M1_B.jpg', 'Csharp_M1_N.jpg'],
         inStock: 15,
         price: 69000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'camiseta-logo-cent-developer-Csharp',
         type: 'T-Shirt',
         tags: ['Csharp'],
         title: "Csharp T-shirt",
         gender: 'Man',
       },
       {
         description:
           'The classic traditional t-shirt features a straight, loose fit. Made from thick 180 g/m² fabric, available in solid colors of sanforized cotton. The heather gray is 90% cotton and 10% polyester, while the heather denim is 50% polyester. The collar and hems have double stitching for increased durability. The independent printer that produces this product is evaluated according to the standards of the International Labour Organization and sources its materials from manufacturers committed to improving cotton farming practices.',
         images: ['Edubuntu1_B.jpg', 'Edubuntu1_N.jpg'],
         inStock: 15,
         price: 69000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'camiseta-logo-cent-developer-Edubuntu',
         type: 'T-Shirt',
         tags: ['Edubuntu'],
         title: "Edubuntu T-shirt",
         gender: 'Man',
       },
       {
         description:
           'The classic traditional t-shirt features a straight, loose fit. Made from thick 180 g/m² fabric, available in solid colors of sanforized cotton. The heather gray is 90% cotton and 10% polyester, while the heather denim is 50% polyester. The collar and hems have double stitching for increased durability. The independent printer that produces this product is evaluated according to the standards of the International Labour Organization and sources its materials from manufacturers committed to improving cotton farming practices.',
         images: ['Flutter_M1_B.jpg', 'Flutter_M1_N.jpg'],
         inStock: 15,
         price: 69000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'camiseta-logo-cent-developer-Flutter',
         type: 'T-Shirt',
         tags: ['Flutter'],
         title: "Flutter T-shirt",
         gender: 'Man',
       },
       {
         description:
           'The classic traditional t-shirt features a straight, loose fit. Made from thick 180 g/m² fabric, available in solid colors of sanforized cotton. The heather gray is 90% cotton and 10% polyester, while the heather denim is 50% polyester. The collar and hems have double stitching for increased durability. The independent printer that produces this product is evaluated according to the standards of the International Labour Organization and sources its materials from manufacturers committed to improving cotton farming practices.',
         images: ['Github_M1_B.jpg', 'Github_M1_N.jpg'],
         inStock: 15,
         price: 69000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'camiseta-logo-cent-developer-Github',
         type: 'T-Shirt',
         tags: ['Github'],
         title: "Github T-shirt",
         gender: 'Man',
       },
       {
         description:
           'The classic traditional t-shirt features a straight, loose fit. Made from thick 180 g/m² fabric, available in solid colors of sanforized cotton. The heather gray is 90% cotton and 10% polyester, while the heather denim is 50% polyester. The collar and hems have double stitching for increased durability. The independent printer that produces this product is evaluated according to the standards of the International Labour Organization and sources its materials from manufacturers committed to improving cotton farming practices.',
         images: ['Github_TshirtB.jpg', 'Github_TshirtB2.jpg'],
         inStock: 15,
         price: 69000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'camiseta-logo-cent-developer-Github-copilot',
         type: 'T-Shirt',
         tags: ['Github'],
         title: "Github Copilot T-shirt",
         gender: 'Man',
       },
       {
         description:
           'The classic traditional t-shirt features a straight, loose fit. Made from thick 180 g/m² fabric, available in solid colors of sanforized cotton. The heather gray is 90% cotton and 10% polyester, while the heather denim is 50% polyester. The collar and hems have double stitching for increased durability. The independent printer that produces this product is evaluated according to the standards of the International Labour Organization and sources its materials from manufacturers committed to improving cotton farming practices.',
         images: ['Gitlab_M1_B.jpg', 'Gitlab_M1_N.jpg'],
         inStock: 15,
         price: 69000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'camiseta-logo-cent-developer-Gitlab',
         type: 'T-Shirt',
         tags: ['Github'],
         title: "Github Copilot T-shirt",
         gender: 'Man',
       },
       {
         description:
           'The classic traditional t-shirt features a straight, loose fit. Made from thick 180 g/m² fabric, available in solid colors of sanforized cotton. The heather gray is 90% cotton and 10% polyester, while the heather denim is 50% polyester. The collar and hems have double stitching for increased durability. The independent printer that produces this product is evaluated according to the standards of the International Labour Organization and sources its materials from manufacturers committed to improving cotton farming practices.',
         images: ['Golang.jpg', 'Golang_N.jpg'],
         inStock: 15,
         price: 69000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'camiseta-logo-cent-developer-Golang',
         type: 'T-Shirt',
         tags: ['Github'],
         title: "Golang T-shirt",
         gender: 'Man',
       },
       {
         description:
           'The classic traditional t-shirt features a straight, loose fit. Made from thick 180 g/m² fabric, available in solid colors of sanforized cotton. The heather gray is 90% cotton and 10% polyester, while the heather denim is 50% polyester. The collar and hems have double stitching for increased durability. The independent printer that produces this product is evaluated according to the standards of the International Labour Organization and sources its materials from manufacturers committed to improving cotton farming practices.',
         images: ['GoogleCloud_M1.jpg', 'GoogleCloud_M1C_N.jpg'],
         inStock: 15,
         price: 69000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'camiseta-logo-cent-developer-Google',
         type: 'T-Shirt',
         tags: ['Github'],
         title: "Google Cloud T-shirt",
         gender: 'Man',
       },
       {
         description:
           'Embroidered cap made of 100% cotton Vulcano drill, baseball style with button. Features include piped seams, a split front, and eyelets on both sides. Four seams on the visor and a crocodile buckle clasp. Crafted from Super 8 drill fabric (100%) weighing 155 grams. Adjustable standard adult size: 50-60 cm. Metal buckle',
         images: ['gorra-githut-2.jpg','gorra_github.jpg'],
         inStock: 15,
         price: 69000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'gorra-tech-github',
         type: 'Cap',
         tags: ['github'],
         title: "Github Cap",
         gender: 'Unisex',
       },
       {
         description:
           'Embroidered cap made of 100% cotton Vulcano drill, baseball style with button. Features include piped seams, a split front, and eyelets on both sides. Four seams on the visor and a crocodile buckle clasp. Crafted from Super 8 drill fabric (100%) weighing 155 grams. Adjustable standard adult size: 50-60 cm. Metal buckle',
         images: ['gorra_react.jpg', 'gorra_react.jpg'],
         inStock: 15,
         price: 69000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'gorra-tech-react',
         type: 'Cap',
         tags: ['react'],
         title: "React Cap",
         gender: 'Unisex',
       },
       {
         description:
           'Embroidered cap made of 100% cotton Vulcano drill, baseball style with button. Features include piped seams, a split front, and eyelets on both sides. Four seams on the visor and a crocodile buckle clasp. Crafted from Super 8 drill fabric (100%) weighing 155 grams. Adjustable standard adult size: 50-60 cm. Metal buckle',
         images: ['gorra-js.jpg', 'gorra-js.jpg'],
         inStock: 15,
         price: 69000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'gorra-tech-js',
         type: 'Cap',
         tags: ['js'],
         title: "Javascript Cap",
         gender: 'Unisex',
       },
       {
         description:
           'Embroidered cap made of 100% cotton Vulcano drill, baseball style with button. Features include piped seams, a split front, and eyelets on both sides. Four seams on the visor and a crocodile buckle clasp. Crafted from Super 8 drill fabric (100%) weighing 155 grams. Adjustable standard adult size: 50-60 cm. Metal buckle',
         images: ['gorra-ubuntu.jpg', 'gorra-ubuntu.jpg'],
         inStock: 15,
         price: 69000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'gorra-tech-ubuntu',
         type: 'Cap',
         tags: ['ubuntu'],
         title: "Ubuntu Cap",
         gender: 'Unisex',
       },
       {
         description:
           'Embroidered cap made of 100% cotton Vulcano drill, baseball style with button. Features include piped seams, a split front, and eyelets on both sides. Four seams on the visor and a crocodile buckle clasp. Crafted from Super 8 drill fabric (100%) weighing 155 grams. Adjustable standard adult size: 50-60 cm. Metal buckle',
         images: ['gorra-angular.jpg', 'gorra-angular.jpg'],
         inStock: 15,
         price: 69000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'gorra-tech-angular',
         type: 'Cap',
         tags: ['angular'],
         title: "Angular Cap",
         gender: 'Unisex',
       },
       {
         description:
         'Hooded sweatshirt with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-14.2.jpg', 'HOODIE-14.1.jpg'],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-special',
         type: 'Hoodie',
         tags: ['special'],
         title: "Special Hoodie",
         gender: 'Man',
       },
       {
         description:
           'Hooded sweatshirt with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-1.2.jpg', 'HOODIE-1.1_2.jpg'],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-frontend',
         type: 'Hoodie',
         tags: ['frontend'],
         title: "Frontend Hoodie",
         gender: 'Man',
       },
       {
         description:
           'Hooded sweatshirt with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-2.2.jpg', 'HOODIE-2.1_1.jpg' ],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-dev',
         type: 'Hoodie',
         tags: ['dev'],
         title: "Dev Hoodie",
         gender: 'Man',
       },
       {
         description:
           'Hooded sweatshirt with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-3.2_1.jpg', 'HOODIE-3.1.jpg'],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-hello-world',
         type: 'Hoodie',
         tags: ['hello-world'],
         title: "Hello World Hoodie",
         gender: 'Man',
       },
       {
         description:
           'Hooded sweatshirt with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-4.2.jpg','HOODIE-4.1_2.jpg'],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-binary',
         type: 'Hoodie',
         tags: ['binary'],
         title: "Binary Hoodie",
         gender: 'Man',
       },
       {
         description:
           'Hoodie with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-5.2_1.jpg','HOODIE-5.1_1.jpg'],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-phone',
         type: 'Hoodie',
         tags: ['phone'],
         title: "Phone Hoodie",
         gender: 'Man',
       },
       {
         description:
           'Hoodie with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-8.2_1.jpg','HOODIE-8.1_2.jpg'],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-cloud',
         type: 'Hoodie',
         tags: ['cloud'],
         title: "Cloud Hoodie",
         gender: 'Man',
       },
       {
         description:
           'Hoodie with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-9.2.jpg','HOODIE-9.1.jpg'],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-cloud-2',
         type: 'Hoodie',
         tags: ['cloud'],
         title: "Cloud Unisex Hoodie",
         gender: 'Unisex',
       },
       {
         description:
           'Hoodie with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-10.2.jpg','HOODIE-10.1.jpg'],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-python',
         type: 'Hoodie',
         tags: ['python'],
         title: "Python Hoodie",
         gender: 'Man',
       },
       {
         description:
           'Hoodie with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-11.2.jpg','HOODIE-11.4.jpg'],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-chrome',
         type: 'Hoodie',
         tags: ['chrome'],
         title: "Chrome Hoodie",
         gender: 'Man',
       },
       {
         description:
           'Hoodie with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-12.2.jpg','HOODIE-12.1.jpg'],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-atom',
         type: 'Hoodie',
         tags: ['atom'],
         title: "Atom Hoodie",
         gender: 'Man',
       },
       {
         description:
           'Hoodie with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-13.2_1.jpg','HOODIE-13.1.jpg'],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-hola',
         type: 'Hoodie',
         tags: ['hola'],
         title: "Hi Hoodie",
         gender: 'Man',
       },
       {
         description:
           'Hoodie with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-15.2_1.jpg','HOODIE-15.1.jpg'],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-emberd',
         type: 'Hoodie',
         tags: ['emberd'],
         title: "Emberd Hoodie",
         gender: 'Man',
       },
       {
         description:
           'Hoodie with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-16.2_1.jpg','HOODIE-16.1.jpg'],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-id',
         type: 'Hoodie',
         tags: ['dev-id'],
         title: "Id Hoodie",
         gender: 'Man',
       },
       {
         description:
           'Hoodie with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-17.2.jpg','HOODIE-17.1.jpg'],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-linux',
         type: 'Hoodie',
         tags: ['dev-linux'],
         title: "Linux Hoodie",
         gender: 'Man',
       },
       {
         description:
           'Hoodie with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-20.2.jpg','HOODIE-20.1.jpg'],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-starkoverflow',
         type: 'Hoodie',
         tags: ['dev-starkoverflow'],
         title: "Starkoverflow Hoodie",
         gender: 'Man',
       },
       {
         description:
           'Hoodie with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-21.2.jpg','HOODIE-22.1.jpg'],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-internet',
         type: 'Hoodie',
         tags: ['dev-internet'],
         title: "Internet Hoodie",
         gender: 'Man',
       },
       {
         description:
           'Hoodie with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-23.2.jpg','HOODIE-23.1.jpg'],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-github',
         type: 'Hoodie',
         tags: ['dev-github'],
         title: "Github Hoodie",
         gender: 'Man',
       },
       {
         description:
           'Hoodie with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-24.2.jpg','HOODIE-24.1.jpg'],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-json',
         type: 'Hoodie',
         tags: ['dev-json'],
         title: "Json Hoodie",
         gender: 'Man',
       },
       {
         description:
           'Hoodie with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-25.2.jpg','HOODIE-25.1.jpg'],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-json-2',
         type: 'Hoodie',
         tags: ['dev-json'],
         title: "Json new Hoodie",
         gender: 'Man',
       },
       {
         description:
           'Hoodie with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-27.2_1.jpg','HOODIE-28.1.jpg'],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-power-bi',
         type: 'Hoodie',
         tags: ['dev-power-bi'],
         title: "Power Bi Hoodie",
         gender: 'Man',
       },
       {
         description:
           'Hoodie with a kangaroo pocket made of brushed cotton of national quality, Patprimo. Printed with high-quality vinyl. Soft to the touch, durable, and excellent quality.',
         images: ['HOODIE-30.2.jpg','HOODIE-30.1.jpg'],
         inStock: 15,
         price: 126000,
         sizes: ['S', 'M', 'L', 'XL'],
         slug: 'buzo-you-are-code',
         type: 'Hoodie',
         tags: ['dev-code'],
         title: "Code Hoodie",
         gender: 'Man',
       }
    ]
 }