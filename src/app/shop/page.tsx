'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import {
  BadgeCheck, Tag, Bookmark, Star, Leaf, ShieldCheck,
  MapPin, ArrowRight, Hand, Eye, Brain, ChevronRight,
  Snowflake, Quote, MessageCircle
} from 'lucide-react';
import Image from 'next/image';
import { getAllProducts } from '@/data/products';

const devReasons = [
  { icon: Hand, title: 'Palmar Grasp Milestone', body: 'At 4 months, babies begin using their whole hand to grab objects. These toys feature large, easy-to-grip edges perfect for this emerging skill.' },
  { icon: Eye, title: 'Color Perception', body: 'Aarav is now distinguishing between similar shades. High-contrast books help strengthen neural pathways in the visual cortex.' },
  { icon: Brain, title: 'Cause & Effect', body: 'Recognizing that actions lead out to basic reactions. Tactile feedback from varied textures encourages further exploration and curiosity.' },
];

export default function ShopPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#faf9f6] pb-0 font-body text-[#1a1c1a]">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-5 sticky top-0 z-40 bg-[#faf9f6]/95 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#fbdac9] flex items-center justify-center overflow-hidden relative shadow-sm ring-1 ring-black/5">
            <Image alt="Aarav" fill className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5VrLAgAc0MOwPDEx64hgJ_nxV5EQGIpqdicPMpb5158JKdrcFKdu4tvK6F4hqVhVWHKE1PXZ41JIAXDgQarX2ObnCBIX9JlbYm0dBkkn6gaTikrHo8-71-Vy_IO9V4fHyeu-b11_od9kwK0XxGJkv8660MjEdBMA60ha-gV-DRlcgkjYoqtYGj2BztiHiBG37lCoJR9dwWex9IC8xiAghl_9vagAxOdxYhp6V2QDNSj_UJVZkSbBg710axSj6yF9FrH0OGQK7ZrU" sizes="40px" />
          </div>
          <h1 className="font-headline text-lg italic font-medium text-[#496459] tracking-tight">Aarav - 4 Months Old</h1>
        </div>
        <BadgeCheck size={26} className="text-[#496459] hover:opacity-80 transition-opacity cursor-pointer flex-shrink-0" fill="currentColor" stroke="var(--color-background)" />
      </header>

      <main className="max-w-md mx-auto pb-32">
        {/* Title Block */}
        <section className="px-6 mt-4 mb-8">
          <p className="font-label text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#8c9490] mb-2">Curated Deals 2024</p>
          <h2 className="font-headline text-[38px] leading-tight text-[#1a1c1a] mb-5">Top Picks for 4 Months</h2>
          <div className="border-l-[3px] border-[#557161] pl-4 py-1">
            <p className="italic text-[#6b8577] text-[15px] leading-relaxed">
              Hand-selected essentials supporting Aarav's sensory development and motor skills.
            </p>
          </div>
        </section>

        {/* Primary Product: Featured Product */}
        <section className="px-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => router.push('/product?slug=safety-first-teething-ring')}
            className="bg-[#f9f8f6] rounded-[2.5rem] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] ring-1 ring-[#e3e2e0] cursor-pointer"
          >
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-white ring-1 ring-black/5 font-label text-[8px] font-extrabold uppercase tracking-widest text-[#4a4a4a] px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <Snowflake size={10} /> WINTER ESSENTIALS CLEARANCE
              </span>
              <span className="bg-[#fbdac9] font-label text-[8px] font-extrabold uppercase tracking-widest text-[#a55a4d] px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <Tag size={10} /> BABY STEPS
              </span>
            </div>

            <div className="relative w-full aspect-square mb-6 mix-blend-multiply">
              <Image alt="Teething Ring" fill className="object-contain" src="/images/teething-ring.png" sizes="(max-width: 768px) 100vw, 400px" />
            </div>

            <div className="flex justify-between items-start mb-2">
              <h3 className="font-headline text-[32px] leading-tight text-[#2f493b] pr-4">Safety-First Teething Ring</h3>
              <Bookmark className="text-[#2f493b] shrink-0 mt-2" size={24} fill="#2f493b" />
            </div>

            <div className="flex items-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => <Star key={i} className="text-[#fbdac9]" size={16} fill="#fbdac9" />)}
              <span className="text-[12px] text-[#8c9490] font-medium ml-1">500 Reviews</span>
            </div>

            <div className="flex gap-4 justify-between mb-8 pb-8 border-b border-[#e3e2e0]">
              <div className="flex flex-col items-center gap-2">
                <Leaf className="text-[#8aa395]" size={20} />
                <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#6f7a74]">Non-Toxic</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <MapPin className="text-[#8aa395]" size={20} />
                <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#6f7a74]">Sustainably Built</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <ShieldCheck className="text-[#8aa395]" size={20} />
                <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#6f7a74]">Box-Safe</span>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <div className="w-8 h-8 rounded-full bg-[#dce6e0] flex items-center justify-center shrink-0">
                <Leaf size={14} className="text-[#557161]" />
              </div>
              <p className="text-[13px] text-[#6f7a74] leading-snug pt-1">
                Multi-textured surfaces for soothing new 4-month early teething.
              </p>
            </div>

            <div className="bg-[#eff0ed] p-5 rounded-[1.5rem] rounded-tl-sm mb-8 relative">
              <p className="font-headline italic text-[14px] text-[#6f7a74] leading-relaxed">
                "From Dr. Ortman: Put this in the freezer 15 minutes before playtime for extra soothing on tender gums."
              </p>
            </div>

            <motion.button whileTap={{ scale: 0.98 }} className="w-full bg-[#557161] hover:bg-[#496459] transition-colors text-white rounded-full py-4 font-label text-[11px] font-extrabold uppercase tracking-[0.15em] mb-4 shadow-md leading-none">
              ADD TO CART — ₹320.00
            </motion.button>
            <p className="text-center font-label text-[8.5px] font-extrabold uppercase tracking-[0.15em] text-[#8c9490]">
              VIEW EXPERT REVIEW
            </p>
          </motion.div>
        </section>

        {/* Secondary Product: Featured Product 2 */}
        <section className="px-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onClick={() => router.push('/product?slug=heirloom-organic-swaddle')}
            className="bg-[#ecede8] rounded-[2rem] p-6 relative flex flex-col items-center group cursor-pointer hover:shadow-md transition-all shadow-sm ring-1 ring-[#e3e2e0]"
          >
            <div className="absolute top-4 right-4 bg-white/60 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1 ring-1 ring-black/5 z-10">
              <span className="font-label text-[8px] font-extrabold uppercase tracking-widest text-[#557161]">Expert Tips</span>
              <ChevronRight size={10} className="text-[#557161]" strokeWidth={3} />
            </div>

            <div className="relative w-full aspect-square mb-6 rounded-[1.5rem] overflow-hidden bg-[#e0dcd3] flex items-center justify-center shadow-inner pt-8">
              <div className="w-[180px] h-[220px] bg-[#b1bea5] shadow-xl rotate-1 group-hover:rotate-0 transition-transform duration-500 rounded-sm"></div> {/* Placeholder for book */}
            </div>

            <div className="w-full text-left">
              <h3 className="font-headline text-[24px] text-[#2f493b] mb-3">Heirloom Organic Swaddle</h3>
              <p className="text-[13px] text-[#6f7a74] leading-relaxed mb-5 pr-4">
                GOTS Certified organic cotton for gentle sleep transitions. Premium quality for durability and sustainability.
              </p>
              <button className="flex items-center gap-2 font-label text-[9px] font-extrabold uppercase tracking-[0.15em] text-[#557161]">
                VIEW DETAILS <ChevronRight size={12} strokeWidth={3} />
              </button>
            </div>
          </motion.div>
        </section>

        {/* Why this is recommended */}
        <section className="bg-[#f4f2ec] pt-14 pb-16 px-6 -mx-4 rounded-[2.5rem] mb-16">
          <div className="text-center mb-10 max-w-[280px] mx-auto flex flex-col items-center">
            <span className="font-label text-[8px] font-extrabold uppercase tracking-widest text-[#8c9490] mb-3 border border-[#dcdad3] px-3 py-1 rounded-full bg-white/50">
              PEDIATRICIAN DR. SARAH T.
            </span>
            <h2 className="font-headline text-[32px] leading-tight text-[#1a1c1a] mb-5">
              Why this is recommended for your stage
            </h2>
            <p className="text-[14.5px] text-[#6f7a74] leading-relaxed">
              As Aarav hits the 4-month milestone, he's transitioning from reflexes to intentional movements. Our recommendations focus on bridging this developmental gap.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {devReasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <div key={i} className="bg-white rounded-[1.5rem] p-6 shadow-sm ring-1 ring-[#e3e2e0]">
                  <div className="w-10 h-10 bg-[#e7eee9] rounded-full flex items-center justify-center mb-4">
                    <Icon size={18} className="text-[#3b5247]" strokeWidth={2.5} />
                  </div>
                  <h4 className="font-bold text-[15px] text-[#1a1c1a] mb-2">{r.title}</h4>
                  <p className="text-[13px] text-[#6f7a74] leading-relaxed">{r.body}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Quote Block */}
        <section className="px-4 mb-16">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-[#e0d5cb] aspect-[4/5] flex items-end p-8 shadow-inner ring-1 ring-black/5">
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
             {/* Fake image overlay */}
             <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[#cdad92] mix-blend-multiply opacity-50 z-0 rounded-b-[2.5rem]" /> 
             <div className="relative z-20 text-white pb-4">
               <Quote size={32} className="text-white/40 mb-4 transform -scale-x-100" />
               <h3 className="font-headline text-[26px] italic leading-tight mb-6 pr-4">
                 "Our primary way to build trust and connection is time, but it aren't just toys. It's a tool for developmental bridges."
               </h3>
               <p className="font-label text-[8px] font-extrabold uppercase tracking-[0.2em] text-white/80">
                 — DR. SARAH CHEN, CHILD DEVELOPMENT SPECIALIST
               </p>
             </div>
          </div>
        </section>

        {/* Developmental Impact */}
        <section className="px-6 mb-16 relative">
          <div className="relative z-10 mb-8">
            <div className="absolute -left-2 top-0 w-12 h-12 bg-[#fce5d8] rounded-full z-[-1]" />
            <h2 className="font-headline text-[32px] leading-tight text-[#1a1c1a] pt-1">
              Developmental<br/>Impact
            </h2>
          </div>

          <div className="space-y-8">
            <div className="flex gap-4">
              <span className="font-headline italic text-5xl text-[#e3e2e0] font-light min-w-[40px]">01</span>
              <div className="pt-2">
                <h4 className="font-bold text-[15px] text-[#1a1c1a] mb-2">Grasp Reflex Refinement</h4>
                <p className="text-[13.5px] text-[#6f7a74] leading-relaxed">The circular shape is specifically sized for a 4-month-old's palm, encouraging intentional reaching and grabbing.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <span className="font-headline italic text-5xl text-[#e3e2e0] font-light min-w-[40px]">02</span>
              <div className="pt-2">
                <h4 className="font-bold text-[15px] text-[#1a1c1a] mb-2">Oral Exploration</h4>
                <p className="text-[13.5px] text-[#6f7a74] leading-relaxed">As Aarav begins to explore the world with his mouth, the varied textures provide crucial sensory feedback.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <span className="font-headline italic text-5xl text-[#e3e2e0] font-light min-w-[40px]">03</span>
              <div className="pt-2">
                <h4 className="font-bold text-[15px] text-[#1a1c1a] mb-2">Gum Soothing</h4>
                <p className="text-[13.5px] text-[#6f7a74] leading-relaxed">Prepares for the first tooth emergence with firm but gentle resistance that provides relief during early teething stages.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Also recommended grid */}
        <section className="px-6 mb-8">
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-headline text-[24px] text-[#1a1c1a] leading-tight max-w-[200px]">
              Also recommended for this stage
            </h2>
            <button className="flex flex-col items-end gap-1 font-label text-[8px] font-extrabold uppercase tracking-widest text-[#8c9490] hover:text-[#1a1c1a]">
              EXPLORE<br/>MORE <ChevronRight size={10} strokeWidth={3} className="mt-0.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {getAllProducts().map((p) => (
              <motion.div
                key={p.id}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push(`/product?slug=${p.slug}`)}
                className="bg-white rounded-[1.5rem] p-3 shadow-[0_2px_10px_rgba(0,0,0,0.02)] ring-1 ring-[#e3e2e0] cursor-pointer group hover:shadow-md transition-all"
              >
                <div className="relative w-full aspect-square rounded-[1rem] bg-[#f9f8f6] mb-3 overflow-hidden">
                  <Image alt={p.title} fill className="object-cover" src={p.main_image} sizes="200px" />
                </div>
                <div className="px-1">
                  <span className="text-[8px] font-extrabold uppercase tracking-widest text-[#557161] mb-1.5 block">
                    {p.brand}
                  </span>
                  <h4 className="font-bold text-[13px] text-[#1a1c1a] leading-snug mb-2 pr-2 line-clamp-2">
                    {p.title}
                  </h4>
                  <div className="flex justify-between items-center text-[12px] text-[#6f7a74]">
                    <span className="font-bold text-[#1a1c1a]">
                      {p.price.currency === 'USD' ? `₹${p.price.selling_price.toFixed(2)}` : `₹${p.price.selling_price}`}
                    </span>
                    <div className="flex items-center gap-0.5">
                      <Star size={12} className="text-[#fbdac9]" fill="#fbdac9" />
                      <span className="text-[10px]">{p.rating}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
