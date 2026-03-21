'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import {
  BadgeCheck, Award, Tag, Bookmark, Star, Leaf, ShieldCheck,
  Droplets, ArrowRight, Hand, Eye, Brain, ShoppingCart, ChevronRight
} from 'lucide-react';
import { BottomNav } from '@/components/BottomNav';
import { ThemeToggle } from '@/components/ThemeToggle';
import Image from 'next/image';

const moreProducts = [
  { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDotyuXVeVC7vrMLDPFU1og1FfWSvc4Pi51DHfcCBaSZDZbaKnnE8bdliy5spgLZjrI-MHJLdVbNw2gXskM1WLOq4NbnMosT7xQtcmC5it1taBEu8d9kkMfUwdUNJ-xQhRqnhD0Tbj5F2XubxHoXy-aqc37rvlK3lHIlTpYJFhJhgNqPFdCFLvTKG86WE_zK33SmAhP0okhExAG7Ouvi6a6gXtisADTTM0VcL6ZIF6TJkRqT_tg2Pd6YmT3w_PjAzy-6-0eiD6ypX4', cat: 'Playtime', name: 'Wooden Activity Gym', price: '$45.00', pts: '+450 pts', alt: 'Activity Gym' },
  { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRB_LwA53a4aj5U2qqjwsw4fifCgyZA4_0-LUbLUnu8ZzCjFB5BfHwrqUdTHBTwqwPqhfGILXNfUUiQolhkseGr4KaYfltJJmgeFfs8TBkF6sbSVF-yC2DAa2iy0dETcItO97FWeoKLH4Jv1dfUEvbFbzeyNLw88pO81jukwFOvSDDdwML0xk3xd1f-xMczHhkRQok_VAnI83CLvn0i7ea5Q7SSa-jj5tvwm9oTeBBm0Rb9mmjaXgaKMg5Ck4ZQSGqqEW-r-NG0GU', cat: 'Visuals', name: 'Art Cards for Baby', price: '$15.00', pts: '+150 pts', alt: 'High Contrast Cards' },
  { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2cW4l6ejgU61pkOPheZuZlObSgdDWigOfOSPXtZwOHXgx-Tv0DbZSztxPIp-ocBGtvW1rgQWWHL8peMcmBYFi3E_gIlFlnYwXCYOxmIRbRl8eZnluw-6gNoVqR2Gu415Itopv-GRM2QR8A2VmRS8GMIBZpI_ppFj3C6Vy3TH35X06mUfxs-UvJFu7wNMkOHYVSazFx9ANoLkbLYqs1djmkW66GoQd8BVJPfwxUzznF2kWw8agjR-0uAx4vAUbExOjjYimZTGZNSI', cat: 'Sleep', name: 'Organic Cotton Swaddle', price: '$32.00', pts: '+320 pts', alt: 'Swaddle' },
  { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjOwKRqadUQHLaAVWEKTRDWeWZI7MHSg9LvvqJe-4A--uFpmHFGVDNwcY0wrthE8TBe17IunnTeUPSQoNq9YaTMrC-zV_9wN-DaKVfR91Orb_MH2ZPXmkvQD0BdllpH3JlhOQKA6ibZHVyB9U0fkUOW45ve3guJJI3rPrKwgLKHj74OGUqsoHXg9DbjHxBYvucGl8QrJqH173ZXfE6Npt9oIDy0bP4ybKRadGsmi4MeWwu2wYDDVfuvmDbuO6olclOvVQ6i981uXM', cat: 'Care', name: 'Calming Lavender Balm', price: '$12.00', pts: '+120 pts', alt: 'Baby Lotion' },
];

const devReasons = [
  { icon: Hand, title: 'Palm Grasp Milestone', body: 'At 4 months, babies begin using their whole hand to pick up items. These toys feature large, easy-to-grip edges perfect for this emerging skill.' },
  { icon: Eye, title: 'Color Perception', body: 'Aarav is now distinguishing between similar shades. High-contrast books help strengthen neural pathways in the visual cortex.' },
  { icon: Brain, title: 'Cause & Effect', body: 'Beginning to understand that actions have results. Tactile feedback from varied textures encourages further exploration and curiosity.' },
];

export default function ShopPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-atb-background pb-32">
      <header className="bg-atb-background sticky top-0 z-50 w-full">
        <div className="flex justify-between items-center px-6 py-4 w-full">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-atb-surface-container relative">
              <Image alt="Baby profile photo" fill className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5VrLAgAc0MOwPDEx64hgJ_nxV5EQGIpqdicPMpb5158JKdrcFKdu4tvK6F4hqVhVWHKE1PXZ41JIAXDgQarX2ObnCBIX9JlbYm0dBkkn6gaTikrHo8-71-Vy_IO9V4fHyeu-b11_od9kwK0XxGJkv8660MjEdBMA60ha-gV-DRlcgkjYoqtYGj2BztiHiBG37lCoJR9dwWex9IC8xiAghl_9vagAxOdxYhp6V2QDNSj_UJVZkSbBg710axSj6yF9FrH0OGQK7ZrU" sizes="40px" />
            </div>
            <h1 className="font-headline text-lg italic tracking-tight text-atb-primary">Aarav – 4 Months Old</h1>
          </div>
          <div className="flex items-center gap-2">
            <BadgeCheck className="text-atb-primary cursor-pointer hover:opacity-80 transition-opacity" size={24} />
            <ThemeToggle />
          </div>
        </div>
        <div className="bg-atb-outline-variant h-px w-full" />
      </header>

      <main className="pt-8 px-6 max-w-screen-xl mx-auto">
        {/* Hero */}
        <section className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4"
          >
            <div className="max-w-xl">
              <span className="font-label text-[10px] uppercase tracking-[0.2em] text-atb-secondary font-bold mb-2 block">Curated Selection</span>
              <h2 className="font-headline text-4xl md:text-5xl text-atb-on-surface leading-tight">Top Picks for 4 Months</h2>
            </div>
            <p className="font-body text-atb-on-surface-variant max-w-xs italic border-l-2 border-atb-primary-container pl-4">
              Hand-selected essentials supporting Aarav&apos;s sensory development and motor skills.
            </p>
          </motion.div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Featured */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-8 bg-atb-surface-low rounded-2xl overflow-hidden flex flex-col md:flex-row group transition-all duration-500 hover:shadow-xl border border-atb-outline-variant"
            >
              <div className="md:w-1/2 relative overflow-hidden aspect-square md:aspect-auto">
                <Image alt="Teething Ring" fill className="object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWfSOD5Lad5LpWjSty5p1xKSQQmRqnTRbVUQPUtyWz6V9Dc1lDNWQeJBlXx8BL3pvI5A_rJlFjHOHcNwFiKwW4Bw1GsqUSYlT_ZiCJwqheJNdFMq12fX2rCuSIZW4_SzKOKp38b_FPubFVczSE6JJprVTzd7YqLcU8KKfTvjKLmNBEKq5pPFSkup6BZyR_AkznfSOJeoPxbiPjz1LVQ2pERrKPYxCqGHDzoxWxKy6bObjdQQIDkZnelG4rdSh8AFFJ7SCNuuV7ido" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <div className="bg-white bg-opacity-90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                    <Award className="text-atb-primary" size={16} />
                    <span className="font-label text-[10px] font-bold tracking-wider text-atb-on-surface uppercase">Pediatrician Recommended</span>
                  </div>
                  <div className="bg-atb-secondary-container bg-opacity-90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm self-start">
                    <Tag className="text-atb-secondary" size={14} />
                    <span className="font-label text-[10px] font-bold tracking-tight text-atb-secondary uppercase">Earn 180 Points</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-headline text-3xl text-atb-on-surface">Safety-First Teething Ring</h3>
                    <motion.button whileTap={{ scale: 0.9 }} aria-label="Bookmark"><Bookmark className="text-atb-primary" size={24} /></motion.button>
                  </div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="text-atb-secondary-container" size={16} fill="currentColor" />)}
                    <span className="text-xs text-atb-on-surface-variant ml-2 font-medium">(120+ Reviews)</span>
                  </div>
                  <div className="flex gap-4 mb-6 py-3 border-y border-atb-outline-variant">
                    {[{ icon: Leaf, label: 'Non-Toxic' }, { icon: ShieldCheck, label: 'FDA Approved' }, { icon: Droplets, label: 'Easy Clean' }].map((b) => {
                      const BIcon = b.icon;
                      return (
                        <div key={b.label} className="flex flex-col items-center gap-1">
                          <BIcon className="text-atb-primary-container" size={20} />
                          <span className="text-[9px] font-bold uppercase tracking-tighter text-atb-on-surface-variant">{b.label}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="p-3 bg-atb-secondary-container bg-opacity-10 rounded-lg border-l-4 border-atb-secondary border-opacity-20 mb-8">
                    <p className="text-xs italic text-atb-on-surface-variant">&quot;Parent Tip: Chill this in the fridge for 15 minutes before play for extra soothing on Aarav&apos;s gums.&quot;</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <motion.button whileTap={{ scale: 0.97 }} className="w-full py-4 rounded-full bg-atb-primary text-white font-label font-bold text-sm tracking-widest uppercase shadow-lg">
                    Add to Cart — $18.00
                  </motion.button>
                  <div className="flex justify-center">
                    <button className="font-label text-xs font-bold text-atb-primary tracking-widest uppercase hover:opacity-70 transition-opacity">Read Expert Review</button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Secondary */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-4 bg-atb-surface-container rounded-2xl p-6 flex flex-col justify-between group relative"
            >
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-atb-primary bg-opacity-10 text-atb-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Expert Choice</span>
              </div>
              <div className="relative rounded-xl overflow-hidden mb-6 aspect-square bg-atb-surface-lowest shadow-inner">
                <Image alt="Soft Book" fill className="object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAssTAbcaVuAOYs-iI7mUTBH-LC5S_Wvt7lQSwT29r-YfyoVRfEiZOM6oxjbFaYUiDFm4UqI4UP11-dzryEkN6HaXsVyMHV4eqvGfL_ZNfaBIgJP1hWu8KXuD8d32GfhebMKWn5KX2DuFgK_OWjJVc1gTzpWcFsVzvdB_zVCYS7AetN9_OEi5kuW-ldBbX7TBSfoLvngyfV7MlCTiqfhy1lO2AkxnZ4D2aSatjTk86jJ-7opC8o7SgH_kTBZCb1mU4sMuW2uyo-ybA" sizes="300px" />
              </div>
              <div>
                <h4 className="font-headline text-xl mb-2 text-atb-on-surface">Organic Texture Book</h4>
                <p className="text-sm text-atb-on-surface-variant mb-6 line-clamp-2">Stimulate visual and tactile senses with high-contrast patterns for 4m+ focus.</p>
                <button className="text-atb-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                  View Details <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why recommended */}
        <section className="mb-16 bg-atb-surface-high rounded-3xl p-8 md:p-12 border border-atb-outline-variant border-opacity-40">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="font-label text-[10px] uppercase tracking-[0.2em] text-atb-primary font-bold mb-4 block">Personalized Insight</span>
            <h2 className="font-headline text-3xl md:text-4xl text-atb-on-surface mb-6">Why this is recommended for your stage</h2>
            <p className="text-atb-on-surface-variant leading-relaxed">As Aarav hits the 4-month milestone, he&apos;s transitioning from reflexive to intentional movements. Our recommendations focus on bridging this developmental gap.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {devReasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-atb-surface-lowest p-6 rounded-2xl shadow-sm"
                >
                  <div className="w-12 h-12 bg-atb-primary-container rounded-full flex items-center justify-center mb-6">
                    <Icon className="text-atb-primary" size={24} />
                  </div>
                  <h4 className="font-bold text-lg mb-3 text-atb-on-surface">{r.title}</h4>
                  <p className="text-sm text-atb-on-surface-variant leading-relaxed">{r.body}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* More recommendations */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-headline text-2xl text-atb-on-surface">Also recommended for this stage</h3>
            <button className="text-atb-primary text-xs font-bold uppercase tracking-widest flex items-center gap-1">
              Explore More <ChevronRight size={16} />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {moreProducts.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileTap={{ scale: 0.97 }}
                className="bg-atb-surface-lowest p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className="aspect-square rounded-xl bg-atb-surface-low mb-4 overflow-hidden relative">
                  <Image alt={p.alt} fill className="object-cover" src={p.img} sizes="200px" />
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-atb-surface-lowest shadow-md rounded-full w-8 h-8 flex items-center justify-center text-atb-primary">
                      <ShoppingCart size={16} />
                    </span>
                  </div>
                </div>
                <p className="font-label text-[10px] font-bold text-atb-secondary uppercase tracking-tighter mb-1">{p.cat}</p>
                <h6 className="font-bold text-sm truncate text-atb-on-surface">{p.name}</h6>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-xs text-atb-on-surface-variant font-medium">{p.price}</p>
                  <span className="text-[9px] font-bold text-atb-primary">{p.pts}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
