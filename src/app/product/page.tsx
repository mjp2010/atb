'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { ArrowLeft, Heart, Share2, Star, Sparkles, AlertCircle, CheckCircle2, ShieldCheck, Award, ThumbsUp } from 'lucide-react';
import Image from 'next/image';

export default function ProductPage() {
  const router = useRouter();

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
          <div className="relative aspect-square w-full rounded-[2.5rem] bg-[#f2e6d8] overflow-hidden shadow-sm mb-6 flex items-center justify-center">
            <div className="absolute top-6 left-6 z-10 bg-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm ring-1 ring-black/5">
              <ShieldCheck size={14} className="text-[#557161]" />
              <span className="font-label text-[9px] font-extrabold uppercase tracking-widest text-[#1a1c1a]">SAFETY CERTIFIED</span>
            </div>
            <div className="relative w-4/5 h-4/5 mix-blend-multiply">
              <Image
                alt="Safety-First Teething Ring"
                fill
                className="object-contain"
                src="/images/teether-blue.png"
                sizes="400px"
                priority
              />
            </div>
          </div>
          
          {/* Thumbnails */}
          <div className="flex gap-4 mb-8 overflow-x-auto pb-2 scrollbar-hide">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`w-20 h-20 rounded-2xl flex-shrink-0 flex items-center justify-center ring-2 transition-all ${i === 1 ? 'ring-[#557161] bg-[#e7eee9]' : 'ring-black/5 bg-[#eff0ed]'}`}>
                <div className="relative w-12 h-12 mix-blend-multiply opacity-60">
                  <Image alt={`Thumb ${i}`} fill className="object-contain" src="/images/teether-blue.png" sizes="48px" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI Assistant Section */}
        <section className="px-4 mb-8">
          <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-black/5">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="font-headline text-[18px] font-bold text-[#1a1c1a]">AI Teether Assistant</h3>
              <span className="bg-[#e7eee9] text-[#557161] text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">ACTIVE</span>
            </div>
            <p className="text-[13px] text-[#6f7a74] mb-6 leading-relaxed">
              Ask personalized questions about relief for your 4-month-old's specific needs.
            </p>
            <div className="space-y-3">
              {['Is this safe for overnight?', 'Any better alternatives?'].map((q) => (
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
                <h4 className="font-bold text-[14px] text-[#1a1c1a] mb-2 leading-tight">Most parents at your stage choose this.</h4>
                <p className="text-[12.5px] text-[#a55a4d] opacity-90 leading-relaxed max-w-[240px]">
                  84% of parents with 4-month-olds prefer this silicone teether for transitioning to intentional grasping.
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
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#8c9490] mb-2 block">SENSORY DEVELOPMENT</span>
          <h1 className="font-headline text-[32px] font-bold text-[#1a1c1a] leading-tight mb-2">Safety-First Teething Ring</h1>
          <div className="flex items-baseline gap-4 mb-4">
            <span className="font-headline text-2xl font-bold text-[#1a1c1a]">₹320.00</span>
            <div className="flex items-center gap-1.5 text-[12px] font-bold text-[#1a1c1a]">
              <Star size={14} className="text-[#fbdac9]" fill="#fbdac9" /> 4.9 (128 reviews)
            </div>
          </div>
        </section>

        {/* Why this is right */}
        <section className="px-4 mb-10">
          <div className="bg-[#f4f2ec] rounded-[2.2rem] p-8">
            <h3 className="font-headline text-[20px] font-bold text-[#1a1c1a] mb-6">Why this is right</h3>
            <div className="space-y-6">
              {[
                { title: 'BPA-Free Silicone', desc: '100% food-grade material, safe for constant oral exploration.' },
                { title: 'Textured Surface', desc: 'Varied bumps provide satisfying resistance for sore gums.' },
                { title: 'Ergonomic Grip', desc: 'Circular design optimized for 4-month palmar grasp reflex.' }
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <CheckCircle2 size={20} className="text-[#557161]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[14px] text-[#1a1c1a] mb-1">{item.title}</h4>
                    <p className="text-[12.5px] text-[#6f7a74] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Milestone Progress */}
        <section className="px-4 mb-10">
          <div className="bg-white rounded-[2.2rem] p-8 border border-black/5 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-[16px] text-[#1a1c1a]">Milestone Progress</h3>
              <span className="text-[11px] text-[#8c9490]">Stage: Early Teething</span>
            </div>
            <div className="space-y-2 mb-6 text-[12px] font-bold uppercase tracking-wider text-[#1a1c1a]">
              <div className="flex justify-between mb-2">
                <span>Relief Consistency</span>
                <span>75%</span>
              </div>
              <div className="w-full h-2 bg-[#eff0ed] rounded-full overflow-hidden">
                <div className="w-[75%] h-full bg-[#557161]" />
              </div>
            </div>
            <p className="text-[12px] italic text-[#6f7a74] leading-relaxed mb-6">
              This product aligns with the "Oral Discovery" function phase common at 12–18 weeks.
            </p>
            <button className="w-full py-4 bg-[#557161] text-white rounded-full font-bold text-[10px] uppercase tracking-widest shadow-md">
              Track Teething Milestones
            </button>
          </div>
        </section>

        {/* Expert Verification */}
        <section className="px-6 mb-16">
          <div className="flex justify-between items-end mb-8">
            <h3 className="font-headline text-[26px] font-bold text-[#1a1c1a] leading-tight">Expert<br/>Verification</h3>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#8c9490]">TRUST & QUALITY</span>
          </div>
          
          <div className="space-y-4">
            {[
              { icon: ShieldCheck, title: '15+ Years Experience', desc: 'Crafted by neonatal experts and child development consultants.' },
              { icon: Award, title: 'Safety Certified', desc: 'Exceeds all global safety standards for infant toys.' },
              { icon: ThumbsUp, title: 'Hospital Approved', desc: 'Used and recommended in over 50 leading maternity centers.' }
            ].map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="bg-[#faf9f6] p-8 rounded-[2rem] flex flex-col items-center text-center shadow-sm border border-black/5">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm border border-black/5">
                    <Icon size={24} className="text-[#557161]" />
                  </div>
                  <h4 className="font-bold text-[15px] mb-2">{card.title}</h4>
                  <p className="text-[12.5px] text-[#6f7a74] leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
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
            <Sparkles size={16} /> ADD TO CART — ₹320.00
          </motion.button>
        </div>
      </footer>
    </div>
  );
}

