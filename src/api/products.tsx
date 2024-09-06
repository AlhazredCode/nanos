import React from 'react';
import { Product } from '@/types/product';
import Variants from './variants';

const Products: Product[] = [
  {
    id: 1,
    name: 'Tripod Base',
    description: 'Tripod Clothing Rack - 3 Hangers - Heavy-Duty - Restaurant.',
    price: 39.99,
    defaultImage: '/assets/images/products/Model1/Satin-ClassicOak.png',
    variants: Variants.map((variant) => ({
      ...variant,
      image: `/assets/images/products/Model1/${variant.name}.png`, 
    })),
  },
  {
    id: 2,
    name: 'Circular Base',
    description: 'Round Clothing Rack - 4 Hangers - Modern Design - Restaurant',
    price: 39.99,
    defaultImage: '/assets/images/products/Model2/Satin-ClassicOak.png',
    variants: Variants.map((variant) => ({
      ...variant,
      image: `/assets/images/products/Model2/${variant.name}.png`,
    })),
  },
  {
    id: 3,
    name: 'Classic Base',
    description: 'Vintage Clothing Rack - 4 Hangers - Ornate - Restaurant - Classy.',
    price: 39.99,
    defaultImage: '/assets/images/products/Model3/Satin-ClassicOak.png',
    variants: Variants.map((variant) => ({
      ...variant,
      image: `/assets/images/products/Model3/${variant.name}.png`,
    })),
  },
];

export default Products;