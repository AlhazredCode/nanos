interface Variant {
    name: string;
    thumbnail: string;
    detailImage: string;
  }
  
  interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    variants: Variant[];
  }
  
  export type { Product, Variant };