'use client';

import { motion } from 'motion/react';
import {
  BadgeCheck, Stethoscope, Baby, Apple, Activity,
  Star, Video, MessageCircle, Globe, ShieldCheck, Headset
} from 'lucide-react';
import { BottomNav } from '@/components/BottomNav';
import { ThemeToggle } from '@/components/ThemeToggle';
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
  { label: 'Evening', time: '4:30 PM', disabled: false },
  { label: 'Evening', time: '5:15 PM', disabled: false },
  { label: 'Night', time: 'Full', disabled: true },
];

const trust = [
  { icon: ShieldCheck, title: 'Strict Vetting', body: 'Medical credentials & background checked by our clinical board.' },
  { icon: Headset, title: 'Care Concierge', body: '24/7 dedicated assistance to find the right specialist for you.' },
];

export default function ExpertsPage() {
  return (
    <div className="min-h-screen bg-atb-background pb-32">
      <header className="bg-atb-background sticky top-0 z-50 w-full">
        <div className="flex justify-between items-center px-6 py-4 w-full">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-atb-surface-container overflow-hidden relative">
              <Image alt="Baby profile photo" fill className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-HKJtSCCI2lQR5XOZbJO3Nx565WjPSfLFSK1CQWGg4J7_PXuibye2Z2-nUoLMnzpLrl-TuH9xOzWMqCKBrFu46E3jmKpKrHfGaic8EwmH4rFUwQ__Zw6-0xtwppt1bbM56CmkWhCgVdtofDxIIxUr8-Wt9zgcDg3Bb3FbHF6xSQHvxfnTkgj4ER4z7WXdnfjTN720bJMA_O9lBZIDAyf3zOpTDx1TtPseaukk_DxO5MO-SqMC4w0zJs7fEDJeBJGwOjFi93nSnFk" sizes="40px" />
            </div>
            <h1 className="font-headline text-lg italic tracking-tight text-atb-primary">Aarav – 4 Months Old</h1>
          </div>
          <div className="flex items-center gap-2">
            <BadgeCheck size={24} className="text-atb-primary" fill="currentColor" stroke="white" />
            <ThemeToggle />
          </div>
        </div>
        <div className="bg-atb-outline-variant h-px w-full" />
      </header>

      <main className="pt-8 px-6 max-w-screen-md mx-auto">
        {/* Header */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="font-headline text-4xl mb-2 text-atb-on-background leading-tight">
            Expert care for your <span className="italic">little one.</span>
          </h2>
          <p className="font-body text-atb-on-surface-variant text-lg">
            Book a personalized session with certified specialists.
          </p>
        </motion.section>

        {/* Category tabs */}
        <section className="mb-10 -mx-6 px-6 overflow-x-auto hide-scrollbar">
          <div className="flex gap-2 min-w-max pb-2">
            {categories.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.button
                  key={c.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-2.5 rounded-full font-label text-sm font-semibold flex items-center gap-2 transition-colors ${
                    c.active
                      ? 'bg-atb-primary text-white'
                      : 'bg-atb-surface-container text-atb-on-surface-variant hover:bg-atb-surface-high'
                  }`}
                >
                  <Icon size={18} /> {c.label}
                </motion.button>
              );
            })}
          </div>
        </section>

        {/* Featured expert */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-headline text-2xl text-atb-on-surface">Recommended for you</h3>
            <span className="font-label text-xs uppercase tracking-widest text-atb-primary font-bold cursor-pointer">View All</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-atb-surface-lowest rounded-2xl p-6 shadow-lg border border-atb-outline-variant relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-atb-secondary text-white px-4 py-1.5 rounded-bl-xl font-label text-[10px] font-bold uppercase tracking-wider z-20">
              Premium: 30% Off
            </div>

            <div className="relative z-10 flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/3 aspect-[4/5] rounded-2xl overflow-hidden relative shadow-md">
                <Image alt="Dr. Kavita Sharma" fill className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwo-bl5J7u_diaqP5nESpcHjYo6pn7ZwQf7yjc-YBR_BE37libz6zzqOnw_8tjapsir2lYgYtxYI7V7Ib9e1Ui9ZSNTQvKMoku1_J96abhMj_zZfuH4bfw5pwJsfu-S4LFvarPl4vUksJ-FyQ-tdE_Gl2N2_14ztSKiUiOTN7farkS_plWT4gXu9X2tA_y5aYUluJoTIJ1qaGjGHLuki3fYBt0WbWmOkU8PsyWc_aONqN-jWpah2xBh0Zci1i412r7SBLeX44t6mg" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute bottom-3 left-3 bg-white bg-opacity-95 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <Star size={14} className="text-yellow-500" fill="currentColor" />
                  <span className="font-body font-bold text-[11px] text-atb-on-surface">4.9 (124)</span>
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-headline text-2xl text-atb-on-surface">Dr. Kavita Sharma</h4>
                    <BadgeCheck size={20} className="text-atb-primary" fill="currentColor" stroke="white" />
                  </div>
                  <p className="font-body text-atb-primary font-semibold text-sm">MBBS, MD – Senior Pediatrician</p>
                  <p className="font-body text-atb-on-surface-variant text-sm mt-2 leading-relaxed">
                    Expert in newborn care & developmental milestones with 15+ years of clinical experience.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {modes.map((m) => {
                    const MIcon = m.icon;
                    return (
                      <div key={m.label} className="bg-atb-surface-high px-3 py-1.5 rounded-full flex items-center gap-2">
                        <MIcon size={14} className="text-atb-primary" />
                        <span className="text-[11px] font-bold uppercase tracking-tight text-atb-on-surface">{m.label}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="mb-8">
                  <p className="font-label text-[10px] uppercase tracking-widest text-atb-on-surface-variant mb-3 font-bold">Available Today</p>
                  <div className="flex gap-2">
                    {slots.map((slot) => (
                      <button
                        key={slot.time}
                        disabled={slot.disabled}
                        className={`flex-1 py-2 rounded-xl border text-atb-on-surface transition-colors ${
                          slot.disabled
                            ? 'border-transparent bg-atb-surface-container text-atb-on-surface-variant opacity-40 cursor-not-allowed'
                            : 'border-atb-primary border-opacity-20 hover:bg-atb-primary-fixed'
                        }`}
                      >
                        <span className="block text-[10px] uppercase opacity-60">{slot.label}</span>
                        <span className="block font-bold text-xs">{slot.time}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-atb-outline-variant">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="font-label text-[10px] uppercase tracking-widest text-atb-on-surface-variant mb-1 font-bold">Consultation Fee</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold font-body text-atb-on-surface">$45</span>
                        <span className="text-xs text-atb-on-surface-variant line-through opacity-60">$65</span>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.96 }}
                      className="bg-atb-primary text-white px-8 py-3.5 rounded-full font-body font-bold shadow-lg hover:opacity-90 transition-all"
                    >
                      Book Session
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Trust signals */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {trust.map((t, i) => {
            const TIcon = t.icon;
            return (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-atb-surface-low p-6 rounded-2xl flex gap-4 items-start"
              >
                <div className="bg-atb-surface-lowest p-2.5 rounded-xl shadow-sm text-atb-primary">
                  <TIcon size={24} />
                </div>
                <div>
                  <h5 className="font-headline text-lg mb-1 text-atb-on-surface">{t.title}</h5>
                  <p className="font-body text-xs text-atb-on-surface-variant leading-relaxed">{t.body}</p>
                </div>
              </motion.div>
            );
          })}
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
