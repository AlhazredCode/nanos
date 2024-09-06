interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  defaultImage: string; 
  variants: {
    name: string;
    materialImage: string;
    image: string; 
  }[];
}

export type { Product }; 