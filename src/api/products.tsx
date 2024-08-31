import React from 'react';
import { Product } from '@/types/product';

const Products: Product[] = [
  {
    id: 1,
    name: 'Tripod Base',
    description: 'Tripod Clothing Rack - 3 Hangers - Heavy-Duty - Restaurant.',
    price: 39.99,
    variants: [
      {
        name: 'Grain Wood',
        lightImage: '/assets/images/products/model-1-variant-1-light.png',
        darkImage: '/assets/images/products/model-1-variant-1-dark.png',
        materialImage: '/assets/images/products/model-1-variant-1-material.png',
        detailImage: '/assets/images/products/model-1-variant-1-detail.png',
      },
      {
        name: 'Dark Wood',
        lightImage: '/assets/images/products/model-1-variant-2-light.png',
        darkImage: '/assets/images/products/model-1-variant-2-dark.png',
        materialImage: '/assets/images/products/model-1-variant-2-material.png',
        detailImage: '/assets/images/products/model-1-variant-2-detail.png',
      },
    ],
  },
  {
    id: 2,
    name: 'Circular Base',
    description: 'Round Clothing Rack - 4 Hangers - Modern Design - Restaurant',
    price: 39.99,
    variants: [
      {
        name: 'Grain Wood',
        lightImage: '/assets/images/products/model-2-variant-1-light.png',
        darkImage: '/assets/images/products/model-2-variant-1-dark.png',
        materialImage: '/assets/images/products/model-2-variant-1-material.png',
        detailImage: '/assets/images/products/model-2-variant-1-detail.png',
      },
      {
        name: 'Dark Wood',
        lightImage: '/assets/images/products/model-2-variant-2-light.png',
        darkImage: '/assets/images/products/model-2-variant-2-dark.png',
        materialImage: '/assets/images/products/model-2-variant-2-material.png',
        detailImage: '/assets/images/products/model-2-variant-2-detail.png',
      },
    ],
  },
  {
    id: 3,
    name: 'Classic Base',
    description: 'Vintage Clothing Rack - 4 Hangers - Ornate - Restaurant - Classy.',
    price: 39.99,
    variants: [
      {
        name: 'Classic Wood',
        lightImage: '/assets/images/products/model-3-variant-1-light.png',
        darkImage: '/assets/images/products/model-3-variant-1-dark.png',
        materialImage: '/assets/images/products/model-3-variant-1-material.png',
        detailImage: '/assets/images/products/model-3-variant-1-detail.png',
      },
      
    ],
  },
];

export default Products;