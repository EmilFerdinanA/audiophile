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
      new_product: true,
    },
    features: {
      description:
        "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound. \nThe YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
      box: [
        {
          id: 1,
          stock: 2,
          unit: "Earphone Unit",
        },
        {
          id: 2,
          stock: 6,
          unit: "Multi-size Earplugs",
        },
        {
          id: 3,
          stock: 1,
          unit: "User Manual",
        },
        {
          id: 4,
          stock: 1,
          unit: "USB-C Charging Cable",
        },
        {
          id: 5,
          stock: 1,
          unit: "Travel Pouch",
        },
      ],
    },
    detail_image: {
      alt: "yx1",
      image1: {
        mobile: "/assets/product-yx1-earphones/mobile/image-gallery-1.jpg",
        tablet: "/assets/product-yx1-earphones/tablet/image-gallery-1.jpg",
        desktop: "/assets/product-yx1-earphones/desktop/image-gallery-1.jpg",
      },
      image2: {
        mobile: "/assets/product-yx1-earphones/mobile/image-gallery-2.jpg",
        tablet: "/assets/product-yx1-earphones/tablet/image-gallery-2.jpg",
        desktop: "/assets/product-yx1-earphones/desktop/image-gallery-2.jpg",
      },
      image3: {
        mobile: "/assets/product-yx1-earphones/mobile/image-gallery-3.jpg",
        tablet: "/assets/product-yx1-earphones/tablet/image-gallery-3.jpg",
        desktop: "/assets/product-yx1-earphones/desktop/image-gallery-3.jpg",
      },
    },
    also_like: [
      {
        title: "XX99 MARK I",
        image: {
          mobile: "/assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
          tablet: "/assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
          desktop: "/assets/shared/desktop/image-xx99-mark-one-headphones.jpg",
        },
        url: "",
      },
      {
        title: "XX59",
        image: {
          mobile: "/assets/shared/mobile/image-xx59-headphones.jpg",
          tablet: "/assets/shared/tablet/image-xx59-headphones.jpg",
          desktop: "/assets/shared/desktop/image-xx59-headphones.jpg",
        },
        url: "",
      },
      {
        title: "ZX9 SPEAKER",
        image: {
          mobile: "/assets/shared/mobile/image-zx9-speaker.jpg",
          tablet: "/assets/shared/tablet/image-zx9-speaker.jpg",
          desktop: "/assets/shared/desktop/image-zx9-speaker.jpg",
        },
        url: "",
      },
    ],
  },
];

export interface IDetailProduct {
  id: string;
  data: DataDetailProduct;
  features: IFeatures;
  detail_image: IDetailImage;
  also_like: IAlsoLike;
}

export interface DataDetailProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  image: Image;
  new_product: boolean;
}

interface Image {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface IFeatures {
  description: string;
  box: Box[];
}

interface Box {
  id: number;
  stock: number;
  unit: string;
}

interface Image {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface IDetailImage {
  alt: string;
  image1: Image;
  image2: Image;
  image3: Image;
}

export interface IAlsoLike {
  title: string;
  image: Image;
  url: string;
}
