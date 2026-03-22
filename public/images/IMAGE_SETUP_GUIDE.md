# Image Setup Guide

The product images have been configured to use local paths instead of external URLs. Place the following images in this directory (`/public/images/`):

## Mustela Gentle Baby Shampoo Images

1. **mustela-shampoo-main.jpg** - Main product image (bottle front view)
   - Used as the primary product image on the detail page

2. **mustela-shampoo-avocado.jpg** - Avocado ingredient feature image
   - Shows "95% Natural Ingredients" with avocado imagery

3. **mustela-shampoo-certifications.jpg** - Certifications showcase
   - Display image showing Biodegradable, Vegan, Tear Free, Paraben-Free badges

4. **mustela-shampoo-gel.jpg** - Product texture/application image
   - Shows the "light gel" texture and how to apply

## Other Product Images (Already Configured Locally)

- `swaddle.png` - Heirloom Organic Swaddle main image
- `swaddle-2.png` - Secondary swaddle image
- `swaddle-3.png` - Tertiary swaddle image
- `teether-blue.png` - Blue teething ring
- `teether-green.png` - Green teething ring
- `teether-pink.png` - Pink teething ring

## Image Format Requirements

- **Format**: JPG or PNG
- **Size**: Recommended 800x800px or larger (will be optimized by Next.js Image component)
- **Quality**: High quality product images for e-commerce

## How to Add Images

1. Download the Mustela product images
2. Save them with the exact filenames listed above
3. Place them in the `/public/images/` directory
4. The application will automatically reference them through the product data

All images are now referenced through the product database in `src/data/products.ts` with local file paths instead of external URLs.
