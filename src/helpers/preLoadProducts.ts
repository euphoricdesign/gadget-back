import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

const productsToPreLoad: IProduct[] = [
  {
    name: "iPhone 11",
    price: 699,
    description:
      "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
    image:
      "https://d28hi93gr697ol.cloudfront.net/9ef84dda-32dd-4016-7da3-1c0a824fffb4/img/Producto/2ad30421-8829-a476-1028-e20102cb5fe0/iphone-11-black-65972af1513f2.webp",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "Apple Vision Pro",
    price: 999,
    description:
      "With Apple Vision Pro, you have an infinite canvas that transforms how you use the apps you love. Arrange apps anywhere and scale them to the perfect size, making the workspace of your dreams a reality — all while staying present in the world around you.",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTA8yg-HAqKDg_rswkmU_i_xTkYI9HJdvtJiPyIhsBglndtAA1G17VzddIVjhYQusGOL-XWoxJ-PhG-63fHOGbZmLDyqjLI",
    categoryId: 2,
    stock: 10,
  },
  {
    name: "iPad Pro",
    price: 799,
    description:
      "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
    image:
      "https://ofertones.com.ar/cdn/shop/products/D_NQ_NP_803992-MLA52988770428_122022-F.jpg?v=1705949937&width=750",
    categoryId: 3,
    stock: 10,
  },
  {
    name: "Apple Watch Series 6",
    price: 399,
    description:
      "Stay connected and healthy with the Apple Watch Series 6: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.",
    image:
      "https://mac-center.com.pe/cdn/shop/products/IMG-5782599_4808a4eb-6132-4b8a-bc59-48aadc807161_823x.jpg?v=1660915002",
    categoryId: 4,
    stock: 10,
  },
  {
    name: "AirPods Pro",
    price: 249,
    description:
      "Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.",
    image:
      "https://plazavea.vteximg.com.br/arquivos/ids/28719943-650-650/20394403.jpg",
    categoryId: 5,
    stock: 10,
  },
  {
    name: "HomePod mini",
    price: 99,
    description:
      "Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_800774-MLA45740145234_042021-O.webp",
    categoryId: 6,
    stock: 10,
  },
  {
    name: "MacBook Pro",
    price: 1299,
    description:
      "Power through any task with the MacBook Pro: featuring the M1 chip for unmatched performance, a stunning Retina display, and all-day battery life, the MacBook Pro is the ultimate tool for professionals and creatives alike. Elevate your work with the MacBook Pro.",
    image:
      "https://ar.oneclickstore.com/wp-content/uploads/2021/12/MacBook_Pro_16-in_Space_Gray_PDP_Image_Position-1__MXLA.jpeg",
    categoryId: 7,
    stock: 10,
  },
  {
    name: "Apple TV 4K",
    price: 179,
    description:
      "Experience the ultimate home entertainment with the Apple TV 4K: with stunning 4K HDR visuals, immersive sound, and access to your favorite streaming services, the Apple TV 4K brings a cinematic experience to your living room.",
    image:
      "https://m.media-amazon.com/images/I/51Y-Dulc3bL._AC_SL1024_.jpg",
    categoryId: 8,
    stock: 10,
  },
  {
    name: "AirTag",
    price: 29,
    description:
      "Keep track of your belongings with the AirTag: attach it to your keys, backpack, or any other item, and easily locate it using the Find My app. With AirTag, your essentials are always within reach.",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airtag-4pack-select-202104_FV1?wid=890&hei=740&fmt=jpeg&qlt=90&.v=1617761668000",
    categoryId: 9,
    stock: 10,
  },
  {
    name: "Magic Keyboard",
    price: 99,
    description:
      "Elevate your typing experience with the Magic Keyboard: featuring a sleek design, comfortable keys, and a built-in rechargeable battery, the Magic Keyboard is the perfect companion for your Mac, iPad, or iPhone.",
    image:
      "https://dcdn.mitiendanube.com/stores/002/363/620/products/mmmr3y1-f09edb6a447bf795bf16615276168211-640-0.jpg",
    categoryId: 10,
    stock: 10,
  },
  {
    name: "iMac 24-inch",
    price: 1299,
    description:
      "Transform your workspace with the iMac 24-inch: featuring the M1 chip, a stunning 4.5K Retina display, and a sleek, all-in-one design, the iMac is perfect for everything from work to entertainment.",
    image:
      "https://i.ebayimg.com/images/g/0dEAAOSwoMxl4waQ/s-l1600.jpg",
    categoryId: 11,
    stock: 10,
  }
];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
