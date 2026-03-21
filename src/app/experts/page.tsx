'use client';

import { motion } from 'motion/react';
import {
  BadgeCheck, Stethoscope, Baby, Apple, Activity,
  Star, Video, MessageCircle, Globe, ShieldCheck, Headset
} from 'lucide-react';
import Image from 'next/image';

const categories = [
  { icon: Stethoscope, label: 'Pediatricians', active: true },
  { icon: Baby, label: 'Lactation', active: false },
  { icon: Apple, label: 'Nutritionists', active: false },
  { icon: Activity, label: 'Yoga', active: false },
];

const modes = [
  { icon: Video, label: 'Video' },
  { icon: MessageCircle, label: 'Chat' },
  { icon: Globe, label: 'EN, HI' },
];

const slots = [
  { label: 'EVENING', time: '4:30 PM', disabled: false },
  { label: 'EVENING', time: '5:15 PM', disabled: false },
  { label: 'NIGHT', time: 'Full', disabled: true },
];

const trust = [
  { icon: ShieldCheck, title: 'Strict Vetting', body: 'Medical credentials & background checked by our clinical board.' },
  { icon: Headset, title: 'Care Concierge', body: '24/7 dedicated assistance to find the right specialist for you.' },
];

export default function ExpertsPage() {
  return (
    <div className="min-h-screen bg-[#faf9f6] pb-0 font-body text-[#1a1c1a]">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-5 sticky top-0 z-40 bg-[#faf9f6]/95 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#fbdac9] flex items-center justify-center overflow-hidden relative shadow-sm ring-1 ring-black/5">
            <Image alt="Aarav" fill className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-HKJtSCCI2lQR5XOZbJO3Nx565WjPSfLFSK1CQWGg4J7_PXuibye2Z2-nUoLMnzpLrl-TuH9xOzWMqCKBrFu46E3jmKpKrHfGaic8EwmH4rFUwQ__Zw6-0xtwppt1bbM56CmkWhCgVdtofDxIIxUr8-Wt9zgcDg3Bb3FbHF6xSQHvxfnTkgj4ER4z7WXdnfjTN720bJMA_O9lBZIDAyf3zOpTDx1TtPseaukk_DxO5MO-SqMC4w0zJs7fEDJeBJGwOjFi93nSnFk" sizes="40px" />
          </div>
          <h1 className="font-headline text-lg italic font-medium text-[#496459] tracking-tight">Aarav - 4 Months Old</h1>
        </div>
        <BadgeCheck size={26} className="text-[#496459] hover:opacity-80 transition-opacity cursor-pointer flex-shrink-0" fill="currentColor" stroke="var(--color-background)" />
      </header>

      <main className="max-w-md mx-auto pt-4 pb-32">
        {/* Title Area */}
        <section className="px-6 mb-8">
          <h2 className="font-headline text-[38px] leading-[1.1] text-[#1a1c1a] mb-3">
            Expert care for your <span className="italic font-serif font-light">little one.</span>
          </h2>
          <p className="text-[14.5px] text-[#6f7a74] leading-relaxed pr-8">
            Book a personalized session with certified specialists.
          </p>
        </section>

        {/* Filter Pills */}
        <section className="pl-6 mb-10 overflow-x-auto hide-scrollbar">
          <div className="flex gap-2.5 min-w-max pb-2 pr-6">
            {categories.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.button
                  key={c.label}
                  whileTap={{ scale: 0.96 }}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-label text-[11px] font-extrabold uppercase tracking-wide transition-colors ${
                    c.active
                      ? 'bg-[#496459] text-white shadow-sm'
                      : 'bg-[#f0f1ed] text-[#1a1c1a] hover:bg-[#e6e8e3]'
                  }`}
                >
                  <Icon size={14} className={c.active ? 'text-white' : 'text-[#6f7a74]'} strokeWidth={2.5} />
                  {c.label}
                </motion.button>
              );
            })}
          </div>
        </section>

        {/* Recommended for you Header */}
        <section className="px-6 mb-6 flex justify-between items-end">
          <h3 className="font-headline text-[24px] text-[#2f493b] leading-none">Recommended for you</h3>
          <span className="font-label text-[9px] font-extrabold uppercase tracking-[0.15em] text-[#557161] hover:opacity-70 cursor-pointer">
            VIEW ALL
          </span>
        </section>

        {/* Doctor Card */}
        <section className="px-4 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-[2rem] p-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)] ring-1 ring-[#e3e2e0] relative"
          >
            {/* Premium tag overlapping top right */}
            <div className="absolute top-0 right-4 bg-[#8c6b5d] text-white px-3 py-1.5 rounded-b-xl font-label text-[8px] font-extrabold uppercase tracking-widest z-20 shadow-sm">
              PREMIUM: 30% OFF
            </div>

            {/* Doctor Photo */}
            <div className="relative w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-[#e0dcd3] mb-5 ring-1 ring-black/5">
              <Image alt="Dr. Kavita Sharma" fill className="object-cover object-top" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwo-bl5J7u_diaqP5nESpcHjYo6pn7ZwQf7yjc-YBR_BE37libz6zzqOnw_8tjapsir2lYgYtxYI7V7Ib9e1Ui9ZSNTQvKMoku1_J96abhMj_zZfuH4bfw5pwJsfu-S4LFvarPl4vUksJ-FyQ-tdE_Gl2N2_14ztSKiUiOTN7farkS_plWT4gXu9X2tA_y5aYUluJoTIJ1qaGjGHLuki3fYBt0WbWmOkU8PsyWc_aONqN-jWpah2xBh0Zci1i412r7SBLeX44t6mg" sizes="(max-width: 768px) 100vw, 400px" />
              {/* Floating Star Tag */}
              <div className="absolute bottom-3 left-3 bg-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                <span className="text-yellow-500 text-[10px]">⭐</span>
                <span className="font-bold text-[11px] text-[#1a1c1a]">4.9 (124)</span>
              </div>
            </div>

            <div className="px-1">
              {/* Name and Designation */}
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-headline text-[26px] text-[#1a1c1a]">Dr. Kavita Sharma</h4>
                <BadgeCheck size={20} className="text-[#496459]" fill="currentColor" stroke="white" />
              </div>
              <p className="font-bold text-[12px] text-[#496459] mb-3">
                MBBS, MD – Senior Pediatrician
              </p>
              <p className="text-[13px] text-[#6f7a74] leading-relaxed mb-5">
                Expert in newborn care & developmental milestones with 15+ years of clinical experience.
              </p>

              {/* Interaction Modes */}
              <div className="flex flex-wrap gap-2 mb-6">
                {modes.map((m) => {
                  const MIcon = m.icon;
                  return (
                    <div key={m.label} className="bg-[#f0f1ed] px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      <MIcon size={12} className="text-[#496459]" strokeWidth={2.5} />
                      <span className="font-label text-[9px] font-extrabold uppercase tracking-widest text-[#1a1c1a]">{m.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* Availability */}
              <div className="mb-6">
                <p className="font-label text-[9px] font-extrabold uppercase tracking-widest text-[#1a1c1a] mb-3">
                  AVAILABLE TODAY
                </p>
                <div className="flex gap-2">
                  {slots.map((slot, idx) => (
                    <button
                      key={idx}
                      disabled={slot.disabled}
                      className={`flex-1 py-2.5 rounded-[1rem] flex flex-col items-center justify-center transition-all ${
                        slot.disabled
                          ? 'bg-[#f4f2ec] text-[#a0a5a2] opacity-80 cursor-not-allowed'
                          : 'bg-white ring-1 ring-[#e3e2e0] hover:ring-[#496459] text-[#1a1c1a] shadow-sm'
                      }`}
                    >
                      <span className="font-label text-[8px] uppercase tracking-widest mb-0.5 opacity-80">{slot.label}</span>
                      <span className="font-bold text-[13px]">{slot.time}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-px w-full bg-[#f0f1ed] my-6" />

              {/* Footer: Price and CTA */}
              <div className="flex items-center justify-between pb-2">
                <div>
                  <p className="font-label text-[8px] font-extrabold uppercase tracking-widest text-[#6f7a74] mb-1">
                    CONSULTATION FEE
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-headline text-[28px] font-bold text-[#1a1c1a]">₹45</span>
                    <span className="font-headline text-[13px] text-[#a0a5a2] line-through">₹65</span>
                  </div>
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#496459] hover:bg-[#3b5247] transition-colors text-white font-label text-[11px] font-extrabold tracking-widest px-8 py-3.5 rounded-[1.5rem] shadow-md"
                >
                  Book Session
                </motion.button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Value Propositions */}
        <section className="grid grid-cols-1 gap-4 px-6 mb-8">
          {trust.map((t, i) => {
            const TIcon = t.icon;
            return (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-[#f9f9f8] p-5 rounded-[1.5rem] flex items-center gap-4 border border-[#e3e2e0]/50"
              >
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center shrink-0 ring-1 ring-black/5">
                  <TIcon size={20} className="text-[#496459]" strokeWidth={2.5} />
                </div>
                <div>
                  <h5 className="font-headline text-[17px] text-[#1a1c1a] mb-1 leading-tight">{t.title}</h5>
                  <p className="text-[12.5px] text-[#6f7a74] leading-snug">{t.body}</p>
                </div>
              </motion.div>
            );
          })}
        </section>
      </main>
    </div>
  );
}
