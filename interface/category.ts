export interface ICategory {
  id: number;
  title: string;
  description: string;
  image: Image;
  url?: string;
}

interface Image {
  mobile: string;
  tablet: string;
  desktop: string;
}
