import React from 'react';
import { Product } from '@/types/product';

const Products: Product[] = [
  {
    id: 1,
    name: 'Product A',
    description: 'This is a description of Product A.',
    price: 29.99,
    variants: [
      {
        name: 'Variant 1',
        thumbnail: '/assets/images/products/product-a-variant-1-thumbnail.jpg',
        detailImage: '/assets/images/products/product-a-variant-1-detail.jpg',
      },
      {
        name: 'Variant 2',
        thumbnail: '/assets/images/products/product-a-variant-2-thumbnail.jpg',
        detailImage: '/assets/images/products/product-a-variant-2-detail.jpg',
      },
      {
        name: 'Variant 3',
        thumbnail: '/assets/images/products/product-a-variant-3-thumbnail.jpg',
        detailImage: '/assets/images/products/product-a-variant-3-detail.jpg',
      },
    ],
  },
  {
    id: 2,
    name: 'Product B',
    description: 'This is a description of Product B.',
    price: 39.99,
    variants: [
      {
        name: 'Variant 1',
        thumbnail: '/assets/images/products/product-b-variant-1-thumbnail.jpg',
        detailImage: '/assets/images/products/product-b-variant-1-detail.jpg',
      },
      {
        name: 'Variant 2',
        thumbnail: '/assets/images/products/product-b-variant-2-thumbnail.jpg',
        detailImage: '/assets/images/products/product-b-variant-2-detail.jpg',
      },
    ],
  },
  {
    id: 3,
    name: 'Product C',
    description: 'This is a description of Product C.',
    price: 49.99,
    variants: [
      {
        name: 'Variant 1',
        thumbnail: '/assets/images/products/product-c-variant-1-thumbnail.jpg',
        detailImage: '/assets/images/products/product-c-variant-1-detail.jpg',
      },
      {
        name: 'Variant 2',
        thumbnail: '/assets/images/products/product-c-variant-2-thumbnail.jpg',
        detailImage: '/assets/images/products/product-c-variant-2-detail.jpg',
      },
      {
        name: 'Variant 3',
        thumbnail: '/assets/images/products/product-c-variant-3-thumbnail.jpg',
        detailImage: '/assets/images/products/product-c-variant-3-detail.jpg',
      },
    ],
  },
];

export default Products;