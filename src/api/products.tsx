import React from 'react';
import { Product } from '@/types/product';
import Variants from './variants';

const Products: Product[] = [
  {
    id: 1,
    name: 'Tripod Base',
    description: `
   
      This classic tripod base is designed for stability and durability. 
      It's perfect for busy restaurants or retail spaces that need a reliable clothing rack. 
      Features a premium BEHR paint finish for a long-lasting, stylish look.
    `,
    price: 39.99,
    defaultImage: '/assets/images/products/Model1/Satin-ClassicOak.png',
    tags: ['Tripod', '3 Hangers', 'Heavy-Duty', 'Restaurant'], // Nuevo campo "tags"
    variants: Variants.map((variant) => ({
      ...variant,
      image: `/assets/images/products/Model1/${variant.name}.png`, 
    })),
  },
  {
    id: 2,
    name: 'Circular Base',
    description: `
     
      This sleek circular base offers a modern and stylish look. 
      Its unique design makes it a great addition to any contemporary restaurant or cafe. 
      Finished with a premium BEHR paint that resists scratches and wear.
    `,
    price: 39.99,
    defaultImage: '/assets/images/products/Model2/Satin-ClassicOak.png',
    tags: ['Circular', '4 Hangers', 'Modern Design', 'Restaurant'], // Nuevo campo "tags"
    variants: Variants.map((variant) => ({
      ...variant,
      image: `/assets/images/products/Model2/${variant.name}.png`,
    })),
  },
  {
    id: 3,
    name: 'Classic Base',
    description: `
   
      This vintage-inspired base adds a touch of elegance and sophistication. 
      Its ornate details and sturdy construction make it ideal for upscale restaurants or boutiques. 
      Protected by a durable BEHR paint finish that enhances its classic appeal. 
    `,
    price: 39.99,
    defaultImage: '/assets/images/products/Model3/Satin-ClassicOak.png',
    tags: ['Vintage', '4 Hangers', 'Ornate', 'Restaurant', 'Classy'], // Nuevo campo "tags"
    variants: Variants.map((variant) => ({
      ...variant,
      image: `/assets/images/products/Model3/${variant.name}.png`,
    })),
  },
];

export default Products;