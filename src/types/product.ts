interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  defaultImage: string; 
  tags: string[]; // Nuevo campo "tags"
  variants: {
    name: string;
    materialImage: string;
    image: string; 
  }[];
}

export type { Product }; 