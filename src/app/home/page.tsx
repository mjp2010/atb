'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Calendar, Plus, Utensils, Moon, Droplets, ArrowLeft } from 'lucide-react';
import { BottomNav } from '@/components/BottomNav';
import { ThemeToggle } from '@/components/ThemeToggle';
import Image from 'next/image';

const activities = [
  { icon: Utensils, label: 'Feeding', sub: '150ml Milk • 2h ago', time: '10:30 AM', bg: 'bg-atb-primary-fixed', color: 'text-atb-primary' },
  { icon: Moon, label: 'Nap Time', sub: '45 mins • 4h ago', time: '08:15 AM', bg: 'bg-atb-secondary-container', color: 'text-atb-secondary', fill: true },
  { icon: Droplets, label: 'Diaper Change', sub: 'Dry & Fresh', time: '07:45 AM', bg: 'bg-atb-primary-container', color: 'text-atb-primary' },
];

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center bg-atb-background pb-24">
      <main className="max-w-md w-full bg-atb-surface min-h-screen shadow-2xl flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between p-6">
          <motion.button
            onClick={() => router.push('/')}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-atb-surface-low text-atb-on-surface hover:bg-atb-surface-container transition-colors"
            aria-label="Back"
          >
            <ArrowLeft size={24} />
          </motion.button>
          <h1 className="font-headline text-xl font-bold text-atb-on-surface">Daily Journal</h1>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-atb-surface-low text-atb-on-surface hover:bg-atb-surface-container transition-colors"
              aria-label="Calendar"
            >
              <Calendar size={24} />
            </motion.button>
          </div>
        </header>

        {/* Hero highlight */}
        <section className="relative px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-4"
          >
            <p className="font-label text-xs uppercase tracking-widest text-atb-on-surface-variant mb-1">
              Today&apos;s Highlight
            </p>
            <h2 className="font-headline text-3xl font-bold text-atb-primary leading-tight">
              First Tummy Time Milestone
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              alt="4-month-old baby smiling"
              fill
              className="object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcWDWEEaOTQ5Xglak0kgF1hIidESUT_dxUuH0CPMNljDfsgyuHC0VyUohbt99CvidXqQeypZJkL1WpDfuuRsMF9Fcd9XoRGHb9nC_uZa3DpUp4QFtF3YRKM7msJCcuHKLXfMgzPxQbgVK4Kv6e7TTaB1ZA7RBQ3thWfBjzR8anxZYepR1UN84MxuofsmByeekAwk0MIxbtS61F1I9eeyjk5XET_Cnt-9rzrfXxl-lxSbBn0WNV5C42o3k6S96Ef5HD5S6wPilB7eg"
              sizes="448px"
            />
            <div className="absolute bottom-4 left-4 bg-atb-surface-lowest bg-opacity-80 backdrop-blur-md px-4 py-2 rounded-full">
              <span className="text-xs font-semibold text-atb-primary">4 Months Old</span>
            </div>
          </motion.div>

          <div className="mt-6 p-6 rounded-2xl bg-atb-surface-low border border-atb-outline-variant">
            <p className="text-atb-on-surface-variant leading-relaxed">
              Aarav had his longest tummy time session today! He&apos;s starting to push up with so much strength. His little smiles are getting more intentional every day.
            </p>
          </div>
        </section>

        {/* Recent activities */}
        <section className="px-6 mt-10">
          <h3 className="font-headline text-xl font-bold mb-6 text-atb-on-surface">Recent Activities</h3>
          <div className="space-y-4">
            {activities.map((act, i) => {
              const Icon = act.icon;
              return (
                <motion.div
                  key={act.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-4 p-4 bg-atb-surface-lowest rounded-2xl border border-atb-outline-variant shadow-sm"
                >
                  <div className={`w-12 h-12 rounded-full ${act.bg} flex items-center justify-center ${act.color}`}>
                    <Icon size={20} fill={act.fill ? 'currentColor' : 'none'} />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-sm text-atb-on-surface">{act.label}</p>
                    <p className="text-xs text-atb-on-surface-variant">{act.sub}</p>
                  </div>
                  <span className="text-xs text-atb-on-surface-variant">{act.time}</span>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-10 px-6 pb-6">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-4 bg-atb-primary text-white font-bold rounded-full shadow-md flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            <Plus size={20} />
            Log New Entry
          </motion.button>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
