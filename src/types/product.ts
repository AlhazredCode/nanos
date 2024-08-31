interface Variant {
  name: string;
  lightImage: string;
  darkImage: string;
  materialImage: string;
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