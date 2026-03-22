export interface Product {
  id: string;
  slug: string;
  title: string;
  brand: string;
  category: string;
  variant: string;
  product_type: string;
  price: {
    mrp: number;
    selling_price: number;
    discount: number;
    currency: string;
  };
  images: string[];
  main_image: string;
  highlights: string[];
  description: string;
  ingredients?: string[];
  usage?: string[];
  benefits: string[];
  safety: string[];
  sku: string;
  availability: string;
  rating: number;
  reviews_count: number;
  tags?: string[];
  certifications?: string[];
}

export const products: Record<string, Product> = {
  'mustela-baby-shampoo': {
    id: 'mustela-baby-shampoo',
    slug: 'mustela-baby-shampoo',
    title: 'Mustela Gentle Baby Shampoo',
    brand: 'Mustela',
    category: 'Baby Care > Bath & Hygiene',
    variant: '200ml',
    product_type: 'Baby Shampoo',
    price: {
      mrp: 799,
      selling_price: 799,
      discount: 0,
      currency: 'INR',
    },
    images: [
      '/images/mustela-shampoo-main.webp',
      '/images/mustela-shampoo-avocado.webp',
      '/images/mustela-shampoo-certifications.webp',
      '/images/mustela-shampoo-gel.webp',
    ],
    main_image: '/images/mustela-shampoo-main.webp',
    highlights: [
      'Tear-free formula',
      'Gentle cleansing for baby scalp',
      'Suitable for newborns',
      'Hypoallergenic',
      'Free from parabens and harmful chemicals',
      '95% Natural Ingredients',
      'Lightweight gel texture',
    ],
    description:
      'Mustela Gentle Baby Shampoo is specially formulated for delicate baby hair and scalp. It gently cleanses without drying, maintains natural balance, and is safe for everyday use. With Avocado Perseose to protect and hydrate your baby\'s delicate scalp.',
    ingredients: ['Aqua (Water)', 'Coco-Glucoside', 'Glycerin', 'Chamomile Extract', 'Avocado Perseose', 'Citric Acid'],
    usage: [
      'Apply a small amount on wet hair',
      'Gently massage the scalp',
      'Rinse thoroughly with water',
    ],
    benefits: [
      'Cleanses gently without irritation',
      'Does not sting eyes',
      'Maintains scalp moisture',
      'Safe for daily use',
      'Protects and hydrates with Avocado Perseose',
    ],
    safety: [
      'Dermatologically tested',
      'Safe for newborns',
      'Tear-free formula',
      'Vegan and biodegradable',
      '0% Paraben, Phenoxyethanol',
      'Avoid contact with eyes',
    ],
    certifications: ['Biodegradable', 'Vegan', 'Tear Free', 'Paraben-Free'],
    sku: 'MUSTELA-SHAMPOO-200ML',
    availability: 'In Stock',
    rating: 4.8,
    reviews_count: 245,
    tags: ['baby-care', 'shampoo', 'tear-free', 'newborn-safe', 'gentle', 'natural-ingredients'],
  },
  'heirloom-organic-swaddle': {
    id: 'heirloom-organic-swaddle',
    slug: 'heirloom-organic-swaddle',
    title: 'Heirloom Organic Swaddle',
    brand: 'Heirloom',
    category: 'Sleep & Comfort',
    variant: 'One Size',
    product_type: 'Organic Swaddle',
    price: {
      mrp: 48,
      selling_price: 48,
      discount: 0,
      currency: 'USD',
    },
    images: [
      '/images/heirloom-swaddle-baby.png',
      '/images/heirloom-swaddle-folded-1.png',
      '/images/heirloom-swaddle-folded-2.jpg',
    ],
    main_image: '/images/heirloom-swaddle-baby.png',
    highlights: [
      'GOTS Certified Organic',
      'Thermoregulating fabric',
      'Premium construction',
      'Sustainably sourced',
      'Perfect for sleep transitions',
    ],
    description:
      'Heirloom Organic Swaddle is crafted from 100% certified organic cotton, providing the perfect balance of softness and durability for your baby\'s sleep comfort.',
    benefits: [
      'Thermoregulates during sleep transitions',
      'Breathable and hypoallergenic',
      'Lasts through multiple children',
      'Sustainable and eco-friendly',
    ],
    safety: [
      'GOTS Certified',
      'Free from harmful chemicals',
      'Hospital approved',
    ],
    sku: 'HEIRLOOM-SWADDLE-ORGANIC',
    availability: 'In Stock',
    rating: 4.9,
    reviews_count: 320,
    tags: ['sleep', 'organic', 'eco-friendly', 'swaddle'],
  },
  'safety-first-teething-ring': {
    id: 'safety-first-teething-ring',
    slug: 'safety-first-teething-ring',
    title: 'Safety-First Teething Ring',
    brand: 'SafeFirst',
    category: 'Teething & Sensory',
    variant: 'Standard',
    product_type: 'Teething Ring',
    price: {
      mrp: 320,
      selling_price: 320,
      discount: 0,
      currency: 'INR',
    },
    images: [
      '/images/teether-blue.png',
    ],
    main_image: '/images/teether-blue.png',
    highlights: [
      'BPA-Free Silicone',
      'Textured surface for gum relief',
      'Ergonomic grip design',
      'Dishwasher safe',
      'Freezer safe',
    ],
    description:
      'Safety-First Teething Ring is specially designed for 4-month-old babies, featuring multiple textures to soothe sore gums and support sensory development.',
    benefits: [
      'Relieves teething discomfort',
      'Supports motor skill development',
      'Safe for intentional grasping',
      'Easy to clean and maintain',
    ],
    safety: [
      'BPA-Free and food-grade',
      'Clinically tested',
      'Non-toxic materials',
    ],
    sku: 'SAFEFIRST-TEETHE-RING',
    availability: 'In Stock',
    rating: 4.9,
    reviews_count: 500,
    tags: ['teething', 'sensory', 'bpa-free', 'baby-care'],
  },
};

export function getProductBySlug(slug: string): Product | undefined {
  return products[slug];
}

export function getAllProducts(): Product[] {
  return Object.values(products);
}
