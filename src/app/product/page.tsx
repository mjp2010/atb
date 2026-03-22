'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Heart, Share2, Star, Sparkles, AlertCircle, CheckCircle2, ShieldCheck, Award, ThumbsUp, Droplet, Zap } from 'lucide-react';
import Image from 'next/image';
import { getProductBySlug } from '@/data/products';
import { useEffect, useState } from 'react';

function ProductContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const productSlug = searchParams.get('slug') || 'heirloom-organic-swaddle';
  const [product, setProduct] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const prod = getProductBySlug(productSlug);
    setProduct(prod);
  }, [productSlug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#faf9f6] flex items-center justify-center">
        <p className="text-[#1a1c1a]">Loading...</p>
      </div>
    );
  }

  const formatPrice = (price: number, currency: string) => {
    if (currency === 'USD') return `₹${price.toFixed(2)}`;
    if (currency === 'INR') return `₹${price}`;
    return `${currency} ${price}`;
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] pb-24 font-body text-[#1a1c1a]">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-[#faf9f6]/80 backdrop-blur-md border-b border-black/5">
        <motion.button
          onClick={() => router.push('/shop')}
          whileTap={{ scale: 0.9 }}
          className="text-[#1a1c1a]"
          aria-label="Back to shop"
        >
          <ArrowLeft size={24} />
        </motion.button>
        <h2 className="font-headline text-lg italic text-[#496459]">All Things Baby</h2>
        <div className="flex gap-4">
          <Heart size={24} className="text-[#1a1c1a]" />
          <Share2 size={24} className="text-[#1a1c1a]" />
        </div>
      </header>

      <main className="max-w-md mx-auto pt-20">
        {/* Hero Section */}
        <section className="px-6 py-4">
          <div className="relative aspect-square w-full rounded-[2.5rem] bg-[#f0e9dc] overflow-hidden shadow-sm mb-6 flex items-center justify-center">
            <div className="absolute top-6 left-6 z-10 bg-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm ring-1 ring-black/5">
              <ShieldCheck size={14} className="text-[#557161]" />
              <span className="font-label text-[9px] font-extrabold uppercase tracking-widest text-[#1a1c1a]">{product.availability}</span>
            </div>
            <div className="relative w-full h-full">
              <Image
                alt={product.title}
                fill
                className="object-cover"
                src={product.images[selectedImage] || product.main_image}
                sizes="400px"
                priority
              />
            </div>
          </div>
          
          {/* Image Thumbnails */}
          {product.images && product.images.length > 1 && (
            <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
              {product.images.map((img: string, idx: number) => (
                <motion.button
                  key={idx}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-14 h-14 rounded-lg flex-shrink-0 overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? 'border-[#557161]' : 'border-transparent'
                  }`}
                >
                  <Image
                    alt={`View ${idx + 1}`}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                    src={img}
                  />
                </motion.button>
              ))}
            </div>
          )}
        </section>

        {/* AI Assistant Section */}
        <section className="px-4 mb-8">
          <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-black/5">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="font-headline text-[18px] font-bold text-[#1a1c1a]">AI Product Assistant</h3>
              <span className="bg-[#e7eee9] text-[#557161] text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">ACTIVE</span>
            </div>
            <p className="text-[13px] text-[#6f7a74] mb-6 leading-relaxed">
              Ask personalized questions about {product.title} and whether it's right for your baby's specific needs.
            </p>
            <div className="space-y-3">
              {['Is this product safe for newborns?', 'How often can I use this?'].map((q) => (
                <button key={q} className="w-full text-left px-5 py-3.5 bg-[#faf9f6] rounded-2xl text-[13px] text-[#1a1c1a] border border-black/5 hover:bg-[#eff0ed] transition-colors">
                  {q}
                </button>
              ))}
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Type your own question..." 
                  className="w-full px-5 py-4 bg-white rounded-2xl text-[13px] border border-black/10 focus:outline-none focus:ring-1 focus:ring-[#557161]"
                />
                <Sparkles size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-[#557161]" />
              </div>
            </div>
          </div>
        </section>

        {/* Smart Comparison */}
        <section className="px-4 mb-10">
          <div className="bg-[#fce5d8] rounded-[2rem] p-6 relative overflow-hidden">
            <div className="flex gap-4 items-start relative z-10">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                <Sparkles size={18} className="text-[#a55a4d]" />
              </div>
              <div>
                <h4 className="font-bold text-[14px] text-[#1a1c1a] mb-2 leading-tight">Recommended by experts.</h4>
                <p className="text-[12.5px] text-[#a55a4d] opacity-90 leading-relaxed max-w-[240px]">
                  Thousands of parents trust {product.brand} products for quality and safety. Rated {product.rating} stars by {product.reviews_count}+ customers.
                </p>
              </div>
            </div>
            <button className="w-full mt-6 py-3.5 bg-white/60 hover:bg-white/80 transition-colors rounded-2xl font-bold text-[11px] uppercase tracking-wider text-[#a55a4d]">
              Ask AI to compare with other brands
            </button>
          </div>
        </section>

        {/* Product Details Header */}
        <section className="px-6 mb-8">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#8c9490] mb-2 block">{product.category}</span>
          <h1 className="font-headline text-[32px] font-bold text-[#1a1c1a] leading-tight mb-2">{product.title}</h1>
          <div className="flex items-baseline gap-4 mb-4">
            <span className="font-headline text-2xl font-bold text-[#1a1c1a]">{formatPrice(product.price.selling_price, product.price.currency)}</span>
            <div className="flex items-center gap-1.5 text-[12px] font-bold text-[#1a1c1a]">
              <Star size={14} className="text-[#fbdac9]" fill="#fbdac9" /> {product.rating} ({product.reviews_count} reviews)
            </div>
          </div>
        </section>

        {/* Why this is right */}
        <section className="px-4 mb-10">
          <div className="bg-[#f4f2ec] rounded-[2.2rem] p-8">
            <h3 className="font-headline text-[20px] font-bold text-[#1a1c1a] mb-6">Key Highlights</h3>
            <div className="space-y-6">
              {product.highlights.map((highlight: string, idx: number) => (
                <div key={idx} className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <CheckCircle2 size={20} className="text-[#557161]" />
                  </div>
                  <div>
                    <p className="text-[13px] text-[#6f7a74] leading-relaxed">{highlight}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        {product.certifications && product.certifications.length > 0 && (
          <section className="px-6 mb-10">
            <h3 className="font-headline text-[20px] font-bold text-[#1a1c1a] mb-6">Certifications & Standards</h3>
            <div className="grid grid-cols-2 gap-4">
              {product.certifications.map((cert: string, idx: number) => (
                <div key={idx} className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                    <ShieldCheck size={24} className="text-blue-700" />
                  </div>
                  <p className="font-bold text-[13px] text-blue-900">{cert}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Milestone Progress */}
        <section className="px-4 mb-10">
          <div className="bg-white rounded-[2.2rem] p-8 border border-black/5 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-[16px] text-[#1a1c1a]">Product Details</h3>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between py-2 border-b border-black/5">
                <span className="text-[13px] text-[#6f7a74] font-medium">Brand</span>
                <span className="text-[13px] font-bold text-[#1a1c1a]">{product.brand}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-black/5">
                <span className="text-[13px] text-[#6f7a74] font-medium">Product Type</span>
                <span className="text-[13px] font-bold text-[#1a1c1a]">{product.product_type}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-black/5">
                <span className="text-[13px] text-[#6f7a74] font-medium">Variant</span>
                <span className="text-[13px] font-bold text-[#1a1c1a]">{product.variant}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-black/5">
                <span className="text-[13px] text-[#6f7a74] font-medium">SKU</span>
                <span className="text-[13px] font-bold text-[#1a1c1a]">{product.sku}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-[13px] text-[#6f7a74] font-medium">Availability</span>
                <span className="text-[13px] font-bold text-[#557161]">{product.availability}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Description */}
        {product.description && (
          <section className="px-6 mb-10">
            <h3 className="font-headline text-[20px] font-bold text-[#1a1c1a] mb-4">About This Product</h3>
            <p className="text-[13.5px] text-[#6f7a74] leading-relaxed">{product.description}</p>
          </section>
        )}

        {/* Benefits */}
        {product.benefits && product.benefits.length > 0 && (
          <section className="px-6 mb-10">
            <h3 className="font-headline text-[20px] font-bold text-[#1a1c1a] mb-4">Benefits</h3>
            <div className="space-y-3">
              {product.benefits.map((benefit: string, idx: number) => (
                <div key={idx} className="flex gap-3 items-start">
                  <Droplet size={18} className="text-[#557161] shrink-0 mt-1" />
                  <p className="text-[13px] text-[#6f7a74] leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Usage Instructions */}
        {product.usage && product.usage.length > 0 && (
          <section className="px-6 mb-10">
            <h3 className="font-headline text-[20px] font-bold text-[#1a1c1a] mb-4">How to Use</h3>
            <ol className="space-y-3">
              {product.usage.map((step: string, idx: number) => (
                <li key={idx} className="flex gap-3">
                  <span className="font-bold text-[#557161] text-[14px] shrink-0">{idx + 1}.</span>
                  <p className="text-[13px] text-[#6f7a74] leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Ingredients */}
        {product.ingredients && product.ingredients.length > 0 && (
          <section className="px-6 mb-10">
            <h3 className="font-headline text-[20px] font-bold text-[#1a1c1a] mb-4">Ingredients</h3>
            <div className="bg-[#f4f2ec] rounded-[1.5rem] p-6">
              <p className="text-[13px] text-[#6f7a74] leading-relaxed">{product.ingredients.join(', ')}</p>
            </div>
          </section>
        )}

        {/* Safety Information */}
        {product.safety && product.safety.length > 0 && (
          <section className="px-6 mb-10">
            <h3 className="font-headline text-[20px] font-bold text-[#1a1c1a] mb-4">Safety Information</h3>
            <div className="space-y-3">
              {product.safety.map((item: string, idx: number) => (
                <div key={idx} className="flex gap-3 items-start bg-[#e7eee9] rounded-lg p-4">
                  <Zap size={18} className="text-[#557161] shrink-0 mt-0.5" />
                  <p className="text-[13px] text-[#6f7a74] leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Additional Info Sections */}
        <section className="px-6 mb-16 space-y-6">
          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-[#faf9f6] flex items-center justify-center shrink-0 mt-1">
              <ShieldCheck size={18} className="text-[#557161]" />
            </div>
            <div>
              <h4 className="font-bold text-[14px] text-[#1a1c1a] mb-1">Expert Verified</h4>
              <p className="text-[12px] text-[#6f7a74]">Tested and recommended by child development experts.</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-[#faf9f6] flex items-center justify-center shrink-0 mt-1">
              <Award size={18} className="text-[#557161]" />
            </div>
            <div>
              <h4 className="font-bold text-[14px] text-[#1a1c1a] mb-1">Quality Assured</h4>
              <p className="text-[12px] text-[#6f7a74]">Meets or exceeds all international safety standards.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Action Bar */}
      <footer className="fixed bottom-0 left-0 w-full px-6 py-5 bg-white/95 backdrop-blur-md border-t border-black/5 z-50">
        <div className="max-w-md mx-auto flex gap-4 items-center">
          <button className="w-16 h-16 rounded-2xl flex items-center justify-center bg-[#eff0ed] text-[#1a1c1a]">
            <Heart size={24} />
          </button>
          <motion.button
            whileTap={{ scale: 0.97 }}
            className="flex-1 bg-[#557161] hover:bg-[#496459] text-white py-5 rounded-2xl font-bold text-[12px] uppercase tracking-[0.15em] shadow-lg flex items-center justify-center gap-2"
          >
            <Sparkles size={16} /> ADD TO CART — {formatPrice(product.price.selling_price, product.price.currency)}
          </motion.button>
        </div>
      </footer>
    </div>
  );
}

export default function ProductPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#faf9f6] flex items-center justify-center">
        <p className="text-[#1a1c1a]">Loading...</p>
      </div>
    }>
      <ProductContent />
    </Suspense>
  );
}

