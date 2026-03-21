'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { BadgeCheck, ArrowRight, ShoppingCart, UtensilsCrossed, Moon, Baby, HeartPulse, Star } from 'lucide-react';
import { BottomNav } from '@/components/BottomNav';
import Image from 'next/image';

const dailyLogs = [
  { icon: UtensilsCrossed, label: 'FEEDING' },
  { icon: Moon, label: 'SLEEP' },
  { icon: Baby, label: 'DIAPERS' },
  { icon: HeartPulse, label: 'KICKS' },
];

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#faf9f6] font-body text-[#1a1c1a] pb-32">
      <main className="max-w-md w-full min-h-screen flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-5 sticky top-0 z-50 bg-[#faf9f6]/95 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#fbdac9] flex items-center justify-center overflow-hidden relative shadow-sm ring-1 ring-black/5">
              <Image alt="Aarav" fill className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbd3l7sVwlfakX6EdOnT65C3Nr4p16TNphTHnodjURipH0Uom6T_Exi7hgSv3YxD0uqwXhBqY4YCwaQbCdclqeRkdU90SDWs6N5hIhSSRNNV3FdhJuSZI5NIkUfNsKUYSBs0fk3-Dh4ljxhW0BmOBlDZU35UAQVcQb8F2MmKdlN8ANbIxv661qerQ67oJv7Sl5F58R2ZcpVQWOGBx7Aq7EceLsezJ51XQ_exGVtalUg1JF7ht5FnEXaV4ijWf2KmYUTLq7w37ksD4" sizes="40px" />
            </div>
            <h1 className="font-headline text-lg italic font-medium text-[#496459] tracking-tight">Aarav - 4 Months Old</h1>
          </div>
          <BadgeCheck size={26} className="text-[#496459] hover:opacity-80 transition-opacity cursor-pointer flex-shrink-0" fill="currentColor" stroke="var(--color-background)" />
        </header>

        {/* Hero Card */}
        <section className="px-6 mt-1">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col bg-white rounded-[2.5rem] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] ring-1 ring-[#e3e2e0] transition-all hover:shadow-md cursor-pointer"
          >
            <div className="relative aspect-[4/3] w-full bg-[#f6eee7] flex items-center justify-center pt-8">
              <Image
                alt="4-month-old baby smiling"
                fill
                className="object-contain object-bottom scale-95 origin-bottom"
                src="/images/tummy-time.jpg"
                sizes="(max-width: 768px) 100vw, 448px"
                priority
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#fbe4d8] text-[#814a33] font-extrabold text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                  DAILY TIP
                </span>
                <span className="text-[11px] font-bold text-[#6f7a74] tracking-wide">4 Month Milestone</span>
              </div>
              <h2 className="font-headline text-[32px] font-medium text-[#1a1c1a] leading-tight mb-4">
                Tummy Time Tips for 4 Months
              </h2>
              <p className="text-[14px] font-body text-[#6f7a74] leading-relaxed mb-6 opacity-90 pr-2">
                Strengthen neck and shoulder muscles while introducing tactile sensory play. Use high-contrast books to keep focus.
              </p>
              <button className="font-body font-bold text-[13px] text-[#496459] flex items-center gap-1.5 group hover:opacity-80 transition-opacity tracking-tight">
                Read full guide <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" strokeWidth={3} />
              </button>
            </div>
          </motion.div>
        </section>

        {/* Daily Log */}
        <section className="px-6 mt-14">
          <div className="flex items-end justify-between mb-8">
            <h3 className="font-headline text-[26px] font-bold text-[#1a1c1a]">Daily Log</h3>
            <button className="text-[9px] uppercase tracking-[0.15em] font-extrabold text-[#a0a5a2] hover:text-[#496459] transition-colors mb-1.5">
              TAP TO UPDATE
            </button>
          </div>
          <div className="flex justify-between items-center gap-1">
            {dailyLogs.map((log, i) => {
              const Icon = log.icon;
              return (
                <motion.button
                  key={log.label}
                  whileTap={{ scale: 0.94 }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex flex-col items-center gap-3 w-[74px]"
                >
                  <div className="w-[74px] h-[74px] rounded-full bg-[#f4f2ec] flex items-center justify-center text-[#2f493b] shadow-sm transform transition-all active:bg-[#e4e2dd]">
                    <Icon size={24} strokeWidth={2.5} className="opacity-90" />
                  </div>
                  <span className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-[#1a1c1a]">{log.label}</span>
                </motion.button>
              );
            })}
          </div>
        </section>

        {/* What to expect */}
        <section className="px-6 mt-16 flex flex-col items-start mb-16">
          <h3 className="font-headline text-[32px] font-bold text-[#1a1c1a] mb-4 leading-tight pr-4">What to expect at 4 months</h3>
          <p className="text-[14.5px] font-body text-[#6f7a74] leading-relaxed mb-8 opacity-90 pr-2">
            Your baby is beginning to recognize their name and starting to roll over. This is a crucial window for cognitive development and social engagement.
          </p>
          <motion.button 
            whileTap={{ scale: 0.96 }}
            className="bg-[#e4e4e2] text-[#1a1c1a] px-8 py-3.5 rounded-full font-extrabold text-[10px] uppercase tracking-[0.2em] shadow-sm hover:bg-[#d8d8d5] transition-colors mb-10"
          >
            EXPLORE STAGE
          </motion.button>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full relative rounded-[2.5rem] overflow-hidden aspect-[4/5] bg-[#e3e2e0] ring-1 ring-black/5"
          >
            <Image
              alt="Mother looking at her baby"
              fill
              className="object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKERv3eW6FiPmpIe8nj78aSaTpU-fhUy7TQSrFOo5J5f5k4KsjOY617hLh9Rn-68V_A_9np39stZA5TRh7M2Bn09REqfQeKYup2kwiHiGAaryRvQn9BQxfA6b34QLlIJ5kadg_SiTO2xm2OWkoCri5L96-LwPhAG_yYoO6fJqF2NbA2oeK4YpKezAOUjUr7DRGLSElMSFR-uzWxKwi4ReXKVI3zTqWtIq6GLh-hF_Htjj_SEzj0BylhqUPy8Qgz5Bd_wt3ZYs62Zg"
              sizes="(max-width: 768px) 100vw, 448px"
            />
          </motion.div>
        </section>

        {/* Premium CTA */}
        <section className="px-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#6b8577] text-white py-14 px-8 rounded-[2.5rem] relative overflow-hidden shadow-lg flex flex-col items-center justify-center text-center"
          >
            {/* Background design element (Star) */}
            <Star size={220} className="absolute right-[-40px] top-[-30px] text-[#557161] opacity-30 rotate-[20deg] pointer-events-none" fill="currentColor" stroke="none" />
            
            <div className="relative z-10 w-full flex flex-col items-center">
              <h3 className="font-headline text-[24px] font-bold mb-4 tracking-tight">Unlock Premium Care</h3>
              <p className="font-body text-[13.5px] mb-10 leading-[1.6] text-white opacity-95 max-w-[280px]">
                Get 24/7 Expert Support, Sleep Coaching, and Ad-Free Experience for your growing family.
              </p>
              <motion.button 
                whileTap={{ scale: 0.96 }}
                className="bg-white text-[#557161] px-10 py-4 rounded-full font-extrabold text-[10px] uppercase tracking-[0.2em] shadow-md hover:bg-slate-50 transition-colors"
              >
                START 7-DAY FREE TRIAL
              </motion.button>
            </div>
          </motion.div>
        </section>

        {/* Recommended for Aarav */}
        <section className="px-6 mb-12">
          <h3 className="font-headline text-[24px] font-bold text-[#1a1c1a] mb-8">Recommended for Aarav</h3>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#f4f2ec] p-5 rounded-[2.2rem] flex gap-5 shadow-sm hover:shadow-md cursor-pointer transition-shadow ring-1 ring-[#e3e2e0]/50"
          >
            <div className="w-24 h-24 rounded-2xl bg-white shrink-0 relative shadow-sm flex items-center justify-center p-4 overflow-hidden ring-1 ring-black/5">
              <Image
                alt="Safe Silicone Teether"
                fill
                className="object-contain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMMH329SWawZZwh-amCucKRj3v-BmBXKf7WT3O7VKPVeECLouGcJ75odn37JtG5ep6F7bhvQhI8XqaY3Lv6q8kUuzX9vVvbf76mMEAIQvu3N-BYYXYxorUviXP-gXAEhwh1fRz-eohVySY32OGyPwFXRB6JZLM0kpT206Hve-N4_w6VcI-LbwM3wpe5bn-KhjDytnD8y06B_uN6LQNVHOWsLQWal84_ckJ_NfjNvdESgg-CLDjMrPpDlivE52HuAU1SgqhsMAb3Uo"
                sizes="96px"
              />
            </div>
            <div className="flex-1 flex flex-col justify-center py-1">
              <span className="text-[#a56b4d] font-extrabold text-[9px] uppercase tracking-[0.18em] mb-2 leading-none">
                ORGANIC CHOICE
              </span>
              <h4 className="font-headline text-[18px] font-bold text-[#1a1c1a] mb-1.5 leading-tight">
                Safe Silicone Teether
              </h4>
              <p className="text-[12px] font-body text-[#6f7a74] leading-snug line-clamp-2 pr-2 opacity-90">
                BPA-free medical grade silicone. Perfect for Aarav's early motor skill development.
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="font-body font-bold text-[#496459] text-[16px]">₹14.00</span>
                <button className="text-[#496459] hover:opacity-70 transition-opacity p-1">
                  <ShoppingCart size={20} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </motion.div>
        </section>

      </main>
      <BottomNav />
    </div>
  );
}

