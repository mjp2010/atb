'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { BadgeCheck, ArrowRight, Utensils, Moon, Baby, Activity, ShoppingCart } from 'lucide-react';
import { BottomNav } from '@/components/BottomNav';
import Image from 'next/image';

const dailyLogs = [
 { icon: Utensils, label: 'FEEDING' },
 { icon: Moon, label: 'SLEEP' },
 { icon: Baby, label: 'DIAPERS' },
 { icon: Activity, label: 'KICKS' },
];

export default function HomePage() {
 const router = useRouter();

 return (
 <div className="min-h-screen flex flex-col items-center bg-atb-background font-body text-atb-on-background pb-32">
 <main className="max-w-md w-full min-h-screen flex flex-col">
 {/* Header */}
 <header className="flex items-center justify-between px-6 py-5 sticky top-0 z-50 bg-atb-background bg-opacity-95 backdrop-blur-sm">
 <div className="flex items-center gap-3">
 <div className="w-10 h-10 rounded-full bg-[#fbdac9] flex items-center justify-center overflow-hidden relative shadow-sm ">
 <Image alt="Aarav" fill className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbd3l7sVwlfakX6EdOnT65C3Nr4p16TNphTHnodjURipH0Uom6T_Exi7hgSv3YxD0uqwXhBqY4YCwaQbCdclqeRkdU90SDWs6N5hIhSSRNNV3FdhJuSZI5NIkUfNsKUYSBs0fk3-Dh4ljxhW0BmOBlDZU35UAQVcQb8F2MmKdlN8ANbIxv661qerQ67oJv7Sl5F58R2ZcpVQWOGBx7Aq7EceLsezJ51XQ_exGVtalUg1JF7ht5FnEXaV4ijWf2KmYUTLq7w37ksD4" sizes="40px" />
 </div>
 <h1 className="font-headline text-lg italic font-medium text-[#496459] tracking-tight">Aarav - 4 Months Old</h1>
 </div>
 <div className="flex items-center">
 <BadgeCheck size={26} className="text-[#496459] hover:opacity-80 transition-opacity cursor-pointer flex-shrink-0" fill="currentColor" stroke="var(--color-background)" />
 </div>
 </header>

 {/* Hero Card */}
 <section className="px-6 mt-1">
 <motion.div
 initial={{ opacity: 0, y: 16 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5 }}
 className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm transition-transform hover:shadow-md cursor-pointer"
 >
 <div className="relative aspect-[4/3] w-full bg-[#f6eee7]">
 <Image
 alt="4-month-old baby smiling"
 fill
 className="object-contain object-bottom"
 src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcWDWEEaOTQ5Xglak0kgF1hIidESUT_dxUuH0CPMNljDfsgyuHC0VyUohbt99CvidXqQeypZJkL1WpDfuuRsMF9Fcd9XoRGHb9nC_uZa3DpUp4QFtF3YRKM7msJCcuHKLXfMgzPxQbgVK4Kv6e7TTaB1ZA7RBQ3thWfBjzR8anxZYepR1UN84MxuofsmByeekAwk0MIxbtS61F1I9eeyjk5XET_Cnt-9rzrfXxl-lxSbBn0WNV5C42o3k6S96Ef5HD5S6wPilB7eg"
 sizes="(max-width: 768px) 100vw, 448px"
 priority
 />
 </div>
 <div className="p-8">
 <div className="flex items-center gap-3 mb-4">
 <span className="bg-[#fbe4d8] text-[#814a33] font-bold text-[9px] uppercase tracking-widest px-3 py-1 rounded-full">
 DAILY TIP
 </span>
 <span className="text-xs text-atb-on-surface-variant font-medium">4 Month Milestone</span>
 </div>
 <h2 className="font-headline text-[32px] font-medium text-atb-on-surface leading-tight mb-4">
 Tummy Time Tips for 4 Months
 </h2>
 <p className="text-sm font-body text-atb-on-surface-variant opacity-90 leading-relaxed mb-6">
 Strengthen neck and shoulder muscles while introducing tactile sensory play. Use high-contrast books to keep focus.
 </p>
 <button className="font-body font-bold text-sm text-[#496459] flex items-center gap-1 group hover:opacity-80 transition-opacity uppercase tracking-tight">
 Read full guide <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
 </button>
 </div>
 </motion.div>
 </section>

 {/* Daily Log */}
 <section className="px-6 mt-12">
 <div className="flex items-end justify-between mb-6">
 <h3 className="font-headline text-[26px] font-bold text-atb-on-surface">Daily Log</h3>
 <button className="text-[9px] uppercase tracking-[0.1em] font-bold text-atb-outline-variant hover:text-[#496459] transition-colors mb-1 pr-1">
 TAP TO UPDATE
 </button>
 </div>
 <div className="flex justify-between items-center gap-2">
 {dailyLogs.map((log, i) => {
 const Icon = log.icon;
 return (
 <motion.button
 key={log.label}
 whileHover={{ scale: 1.05 }}
 whileTap={{ scale: 0.95 }}
 initial={{ opacity: 0, y: 16 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: i * 0.1, duration: 0.4 }}
 className="flex flex-col items-center gap-3 hover:opacity-80 transition-opacity"
 >
 <div className="w-[72px] h-[72px] rounded-full bg-[#f5f5f3] flex items-center justify-center text-[#4a5f54] shadow-sm">
 <Icon size={24} strokeWidth={2} className="opacity-90" />
 </div>
 <span className="text-[9px] font-bold uppercase tracking-[0.1em] text-atb-on-surface">{log.label}</span>
 </motion.button>
 );
 })}
 </div>
 </section>

 {/* What to expect */}
 <section className="px-6 mt-14 flex flex-col items-start">
 <h3 className="font-headline text-[30px] font-bold text-atb-on-surface mb-3 leading-tight pr-4">What to expect at 4 months</h3>
 <p className="text-sm font-body text-atb-on-surface-variant opacity-90 leading-relaxed mb-6 pr-2">
 Your baby is beginning to recognize their name and starting to roll over. This is a crucial window for cognitive development and social engagement.
 </p>
 <motion.button 
 whileHover={{ scale: 1.02 }}
 whileTap={{ scale: 0.97 }}
 className="bg-[#e4e4e2] text-atb-on-surface px-6 py-3 rounded-full font-bold text-[10px] uppercase tracking-[0.15em] hover:bg-[#d8d8d5] transition-colors mb-8 inline-block shadow-sm"
 >
 EXPLORE STAGE
 </motion.button>
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 className="w-full relative rounded-3xl overflow-hidden aspect-[4/5] bg-[#e3e2e0]"
 >
 <Image
 alt="Mother looking at belly"
 fill
 className="object-cover"
 src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKERv3eW6FiPmpIe8nj78aSaTpU-fhUy7TQSrFOo5J5f5k4KsjOY617hLh9Rn-68V_A_9np39stZA5TRh7M2Bn09REqfQeKYup2kwiHiGAaryRvQn9BQxfA6b34QLlIJ5kadg_SiTO2xm2OWkoCri5L96-LwPhAG_yYoO6fJqF2NbA2oeK4YpKezAOUjUr7DRGLSElMSFR-uzWxKwi4ReXKVI3zTqWtIq6GLh-hF_Htjj_SEzj0BylhqUPy8Qgz5Bd_wt3ZYs62Zg"
 sizes="(max-width: 768px) 100vw, 448px"
 />
 </motion.div>
 </section>

 {/* Premium CTA */}
 <section className="px-6 mt-14">
 <motion.div
 initial={{ opacity: 0, scale: 0.98 }}
 whileInView={{ opacity: 1, scale: 1 }}
 viewport={{ once: true }}
 className="bg-[#6b8577] text-white py-12 px-6 rounded-[2rem] relative overflow-hidden shadow-lg flex flex-col items-center justify-center min-h-[220px]"
 >
 {/* Background design element (Star) */}
 <div className="absolute right-[-40px] top-[-10px] text-[#557161] opacity-[0.35] rotate-[20deg] pointer-events-none">
 <svg width="250" height="250" viewBox="0 0 24 24" fill="currentColor">
 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
 </svg>
 </div>
 
 <div className="relative z-10 text-center flex flex-col items-center w-full">
 <h3 className="font-headline text-[22px] font-bold mb-3 tracking-wide">Unlock Premium Care</h3>
 <p className="font-body text-[13px] mb-8 leading-[1.6] text-white text-opacity-90 max-w-[280px]">
 Get 24/7 Expert Support, Sleep Coaching, and Ad-Free Experience for your growing family.
 </p>
 <motion.button 
 whileHover={{ scale: 1.03 }}
 whileTap={{ scale: 0.97 }}
 className="bg-white text-[#557161] px-8 py-3.5 rounded-full font-bold text-[10px] uppercase tracking-[0.15em] shadow-md w-max mx-auto hover:bg-slate-50 transition-colors"
 >
 START 7-DAY FREE TRIAL
 </motion.button>
 </div>
 </motion.div>
 </section>

 {/* Recommended for Aarav */}
 <section className="px-6 mt-14 mb-10">
 <h3 className="font-headline text-[22px] font-bold text-atb-on-surface mb-6">Recommended for Aarav</h3>
 <motion.div
 initial={{ opacity: 0, y: 16 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 whileTap={{ scale: 0.98 }}
 className="bg-[#fcfbf9] p-4 rounded-3xl flex gap-5 shadow-sm hover:shadow-md cursor-pointer transition-shadow"
 >
 <div className="w-24 h-24 rounded-2xl bg-white shrink-0 relative shadow-sm flex items-center justify-center p-3 overflow-hidden">
 <Image
 alt="Safe Silicone Teether"
 fill
 className="object-contain"
 src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMMH329SWawZZwh-amCucKRj3v-BmBXKf7WT3O7VKPVeECLouGcJ75odn37JtG5ep6F7bhvQhI8XqaY3Lv6q8kUuzX9vVvbf76mMEAIQvu3N-BYYXYxorUviXP-gXAEhwh1fRz-eohVySY32OGyPwFXRB6JZLM0kpT206Hve-N4_w6VcI-LbwM3wpe5bn-KhjDytnD8y06B_uN6LQNVHOWsLQWal84_ckJ_NfjNvdESgg-CLDjMrPpDlivE52HuAU1SgqhsMAb3Uo"
 sizes="96px"
 />
 </div>
 <div className="flex-1 flex flex-col justify-center py-1">
 <span className="text-[#a56b4d] font-extrabold text-[8px] uppercase tracking-[0.15em] mb-1.5">
 ORGANIC CHOICE
 </span>
 <h4 className="font-headline text-[17px] font-bold text-atb-on-surface mb-1 leading-tight">
 Safe Silicone Teether
 </h4>
 <p className="text-[11px] font-body text-atb-on-surface-variant opacity-80 leading-snug line-clamp-2 mb-2 pr-1">
 BPA-free medical grade silicone. Perfect for Aarav's...
 </p>
 <div className="flex items-center justify-between mt-auto">
 <span className="font-body font-bold text-[#496459] text-[15px]">₹14.00</span>
 <button className="text-[#496459] hover:opacity-70 transition-opacity p-1">
 <ShoppingCart size={20} />
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
