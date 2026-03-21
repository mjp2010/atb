'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Share2, Check, ChevronRight, Camera, Star, UserPlus, Users, Plus, HeartPulse } from 'lucide-react';
import { BottomNav } from '@/components/BottomNav';
import { ThemeToggle } from '@/components/ThemeToggle';
import Image from 'next/image';

const milestones = [
  { done: true, title: 'Rolling front to back', sub: 'Physical Development' },
  { done: false, title: 'Pushing up on elbows', sub: 'Strength & Motor Skills' },
  { done: false, title: 'Responding to sounds', sub: 'Cognitive Awareness' },
];

export default function TimelinePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-atb-background text-atb-on-background font-body pb-32">
      {/* Header */}
      <header className="bg-atb-background sticky top-0 z-50 w-full">
        <div className="flex justify-between items-center px-6 py-4 w-full">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-atb-surface-container overflow-hidden relative">
              <Image alt="Baby profile" fill className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbd3l7sVwlfakX6EdOnT65C3Nr4p16TNphTHnodjURipH0Uom6T_Exi7hgSv3YxD0uqwXhBqY4YCwaQbCdclqeRkdU90SDWs6N5hIhSSRNNV3FdhJuSZI5NIkUfNsKUYSBs0fk3-Dh4ljxhW0BmOBlDZU35UAQVcQb8F2MmKdlN8ANbIxv661qerQ67oJv7Sl5F58R2ZcpVQWOGBx7Aq7EceLsezJ51XQ_exGVtalUg1JF7ht5FnEXaV4ijWf2KmYUTLq7w37ksD4" sizes="40px" />
            </div>
            <h1 className="font-headline text-lg italic tracking-tight text-atb-primary">Aarav – 4 Months Old</h1>
          </div>
          <div className="flex items-center gap-2">
            <motion.button whileTap={{ scale: 0.9 }} className="p-2 text-atb-primary rounded-full hover:bg-atb-surface-container transition-colors" aria-label="Share">
              <Share2 size={20} />
            </motion.button>
            <ThemeToggle />
          </div>
        </div>
        <div className="bg-atb-outline-variant h-px w-full" />
      </header>

      <main className="pt-6 px-6 max-w-2xl mx-auto space-y-10">
        {/* Progress card */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-atb-surface-low p-6 rounded-3xl space-y-4 border border-atb-secondary-container"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-headline text-xl text-atb-secondary italic">Aarav is Growing!</h2>
              <p className="text-xs text-atb-on-surface-variant font-medium">4-Month Milestone Progress</p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-headline text-atb-primary">75%</span>
              <p className="text-[10px] uppercase tracking-wider text-atb-outline">Complete</p>
            </div>
          </div>
          <div className="h-3 w-full bg-atb-surface-highest rounded-full overflow-hidden">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '75%' }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
              className="h-full bg-atb-primary rounded-full"
            />
          </div>
          <p className="text-sm font-medium text-atb-secondary flex items-center gap-2">
            <Star size={16} className="text-atb-secondary" fill="currentColor" />
            3 more smiles until the next big chapter!
          </p>
        </motion.section>

        {/* Little wins */}
        <section className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="font-headline text-2xl text-atb-on-surface">Little Wins Today</h2>
            <button className="text-[10px] font-bold uppercase tracking-widest text-atb-primary border border-atb-primary border-opacity-20 px-3 py-1 rounded-full">
              See All
            </button>
          </div>
          <div className="grid gap-3">
            {milestones.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-atb-surface-lowest border border-atb-outline-variant shadow-sm"
              >
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${m.done ? 'bg-atb-primary border-atb-primary text-white' : 'border-atb-primary-container'}`}>
                  {m.done && <Check size={14} strokeWidth={3} />}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-atb-on-surface">{m.title}</p>
                  <p className="text-xs text-atb-outline">{m.sub}</p>
                </div>
                <ChevronRight size={20} className="text-atb-outline-variant" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Add memory CTA */}
        <section className="relative p-8 rounded-3xl bg-atb-primary-container overflow-hidden">
          <div className="relative z-10 space-y-4">
            <h3 className="font-headline text-2xl text-atb-primary italic">Capture a new magic moment</h3>
            <p className="text-sm text-atb-on-surface-variant max-w-[200px]">Did Aarav do something cute today? Save it forever.</p>
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              className="bg-atb-primary text-white px-6 py-3 rounded-full font-label text-sm font-bold shadow-lg flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              <Camera size={20} />
              Add a New Memory
            </motion.button>
          </div>
        </section>

        {/* Growth journey timeline */}
        <section className="space-y-8">
          <div className="space-y-1">
            <h2 className="font-headline text-2xl text-atb-on-surface">Growth Journey</h2>
            <p className="text-sm italic text-atb-on-surface-variant opacity-70">&quot;A beautiful map of your first year together.&quot;</p>
          </div>

          <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-atb-primary before:to-transparent before:opacity-30">
            {[
              {
                icon: Camera, bg: 'bg-atb-primary-container', color: 'text-atb-on-surface',
                date: 'March 12, 2024', badge: 'Memory Captured', badgeBg: 'bg-atb-primary-fixed',
                title: 'First beach day at Sunset Bay',
                body: '"Aarav was so curious about the sand. He didn\'t like the cold water much yet!"',
                imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAifO3hF3nO95yATAvROrPSQ4Bda34-FY5cYlVRCKUCojNjjT4sWZXVoF4x7OKfk_VNV-zj8tksSGSMU0JU9JtzbhxyCqGNKnN-LcYHcGxGyCOeb2Eqj8_6mQKS9GYEULknLRBGNlBR2J9R_kf8BwL53FjOlvA4RpJOVtD1O4GmYp6liqn5inxrtxmlP2hqsvx5_OA4wN-KD5KrXsvYAsyg4jZDk4Dj7Nc6SfNy71UrRkjrc8s6uF7epqPdd89jOv0cquzkpNSyZLk',
              },
              {
                icon: Star, bg: 'bg-atb-secondary', color: 'text-white',
                date: 'Feb 28, 2024', badge: 'BIG MILESTONE', badgeBg: 'bg-atb-secondary-fixed',
                title: 'First Social Smile',
                body: 'Finally caught that intentional grin when Grandpa was singing. It melted our hearts!',
                category: 'Social', age: '3.5 Months',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex items-start gap-4"
                >
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-atb-background ${item.bg} ${item.color} shadow shrink-0 z-10`}>
                    <Icon size={18} fill={i === 1 ? 'currentColor' : 'none'} />
                  </div>
                  <div className="flex-1 p-6 rounded-2xl bg-atb-surface-lowest shadow-sm border border-atb-outline-variant">
                    <div className="flex items-center justify-between mb-3">
                      <time className="font-label text-[10px] uppercase tracking-widest text-atb-outline">{item.date}</time>
                      <span className={`px-2 py-0.5 rounded-full ${item.badgeBg} text-atb-on-surface text-[10px] font-bold italic`}>{item.badge}</span>
                    </div>
                    <h4 className="font-headline text-xl mb-3 text-atb-on-surface">{item.title}</h4>
                    {item.imgSrc && (
                      <div className="relative rounded-xl overflow-hidden mb-4 aspect-[4/3]">
                        <Image alt={item.title} fill className="object-cover" src={item.imgSrc} sizes="400px" />
                      </div>
                    )}
                    <p className="font-body text-sm text-atb-on-surface-variant leading-relaxed italic border-l-2 border-atb-secondary-container pl-3">{item.body}</p>
                    {item.category && (
                      <div className="flex gap-2 mt-3">
                        <div className="p-2 rounded-lg bg-atb-surface-low border border-atb-outline-variant flex-1 text-center">
                          <p className="text-[9px] uppercase text-atb-outline mb-0.5">Category</p>
                          <p className="text-xs font-bold text-atb-on-surface">{item.category}</p>
                        </div>
                        <div className="p-2 rounded-lg bg-atb-surface-low border border-atb-outline-variant flex-1 text-center">
                          <p className="text-[9px] uppercase text-atb-outline mb-0.5">Age</p>
                          <p className="text-xs font-bold text-atb-on-surface">{item.age}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Share section */}
        <section className="bg-atb-surface-low p-6 rounded-3xl space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-atb-secondary-container flex items-center justify-center">
              <HeartPulse size={24} className="text-atb-secondary" />
            </div>
            <div>
              <h3 className="font-bold text-atb-on-surface">Share the Joy</h3>
              <p className="text-xs text-atb-on-surface-variant">Let Grandma & Grandpa follow Aarav&apos;s journey</p>
            </div>
          </div>
          <div className="flex gap-3">
            <motion.button whileTap={{ scale: 0.96 }} className="flex-1 py-3 bg-atb-surface-lowest border border-atb-outline-variant rounded-2xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-atb-surface-low transition-colors text-atb-on-surface">
              <UserPlus size={16} /> Invite Spouse
            </motion.button>
            <motion.button whileTap={{ scale: 0.96 }} className="flex-1 py-3 bg-atb-surface-lowest border border-atb-outline-variant rounded-2xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-atb-surface-low transition-colors text-atb-on-surface">
              <Users size={16} /> Grandparents
            </motion.button>
          </div>
        </section>
      </main>

      <motion.button
        whileTap={{ scale: 0.88 }}
        whileHover={{ scale: 1.05 }}
        className="fixed bottom-24 right-6 w-16 h-16 rounded-full bg-atb-primary text-white shadow-2xl flex items-center justify-center z-40"
        aria-label="Add new memory"
      >
        <Plus size={32} />
      </motion.button>

      <BottomNav />
    </div>
  );
}
