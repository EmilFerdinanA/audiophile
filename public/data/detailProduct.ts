export const dataDetailProduct = [
  {
    id: "yx1",
    data: {
      id: 1,
      title: "YX1 WIRELESS EARPHONES",
      description:
        "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
      price: 599,
      image: {
        mobile: "/assets/product-yx1-earphones/mobile/image-product.jpg",
        tablet: "/assets/product-yx1-earphones/tablet/image-product.jpg",
        desktop: "/assets/product-yx1-earphones/desktop/image-product.jpg",
      },
      url: "headphones/xx99II",
      new_product: true,
    },
  },
];

export interface IDetailProduct {
  id: string;
  data: Data;
}

export interface Data {
  id: number;
  title: string;
  description: string;
  price: number;
  image: Image;
  url: string;
  new_product: boolean;
}

interface Image {
  mobile: string;
  tablet: string;
  desktop: string;
}
