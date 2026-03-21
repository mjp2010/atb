'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Bot, Send, Sparkles, AlertCircle, Info, ChevronRight, MessageSquare } from 'lucide-react';
import { BottomNav } from '@/components/BottomNav';
import { ThemeToggle } from '@/components/ThemeToggle';

const suggestions = [
  { icon: Sparkles, bg: 'bg-atb-secondary-container', color: 'text-atb-secondary', label: 'Sleep regression tips' },
  { icon: Info, bg: 'bg-atb-primary-container', color: 'text-atb-primary', label: 'Starting solid foods' },
  { icon: AlertCircle, bg: 'bg-red-100', color: 'text-red-500', label: 'Is this rash normal?' },
];

export default function AICoachPage() {
  const [query, setQuery] = useState('');

  return (
    <div className="min-h-screen bg-atb-background flex flex-col pb-24">
      <header className="bg-atb-surface-lowest px-6 py-4 sticky top-0 z-50 border-b border-atb-outline-variant">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-atb-primary-container flex items-center justify-center text-atb-primary">
              <Bot size={24} />
            </div>
            <div>
              <h1 className="font-headline text-xl text-atb-on-surface">Nurture AI</h1>
              <p className="font-label text-[10px] uppercase tracking-widest text-atb-primary font-bold">
                Your 24/7 Parenting Guide
              </p>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-1 px-6 py-6 max-w-2xl mx-auto w-full space-y-8">
        {/* Hero prompt card */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-atb-primary-container bg-opacity-40 p-6 rounded-3xl border border-atb-primary border-opacity-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-atb-primary opacity-5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 space-y-4">
            <h2 className="font-headline text-2xl text-atb-on-surface">
              How can I help with Aarav today?
            </h2>
            <p className="font-body text-sm text-atb-on-surface-variant leading-relaxed">
              I&apos;m trained on expert pediatric guidelines, sleep science, and developmental milestones. Ask me anything about your 4-month-old.
            </p>
          </div>
        </motion.section>

        {/* Suggested prompts */}
        <section className="space-y-4">
          <h3 className="font-label text-xs uppercase tracking-widest text-atb-outline font-bold px-2">
            Suggested for 4 Months
          </h3>
          <div className="grid gap-3">
            {suggestions.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.button
                  key={s.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-between p-4 bg-atb-surface-lowest rounded-2xl border border-atb-outline-variant shadow-sm hover:border-atb-primary hover:border-opacity-30 transition-colors text-left group"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full ${s.bg} flex items-center justify-center ${s.color}`}>
                      <Icon size={16} />
                    </div>
                    <span className="font-body text-sm font-medium text-atb-on-surface">{s.label}</span>
                  </div>
                  <ChevronRight size={16} className="text-atb-outline-variant group-hover:text-atb-primary transition-colors" />
                </motion.button>
              );
            })}
          </div>
        </section>

        {/* Recent conversations */}
        <section className="space-y-4">
          <h3 className="font-label text-xs uppercase tracking-widest text-atb-outline font-bold px-2">
            Recent Conversations
          </h3>
          <div className="p-4 bg-atb-surface-lowest rounded-2xl border border-atb-outline-variant">
            <div className="flex items-start gap-3 mb-2">
              <MessageSquare size={16} className="text-atb-outline mt-0.5" />
              <p className="font-body text-sm text-atb-on-surface font-medium">How much tummy time per day?</p>
            </div>
            <p className="font-body text-xs text-atb-on-surface-variant line-clamp-2 pl-7">
              At 4 months, aim for 20-30 minutes of tummy time a day, broken up into shorter sessions. If Aarav gets fussy...
            </p>
          </div>
        </section>
      </main>

      {/* Chat input */}
      <div className="fixed bottom-[88px] left-0 w-full px-6 py-4 bg-gradient-to-t from-atb-background from-60% to-transparent z-40">
        <div className="max-w-2xl mx-auto relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask about sleep, feeding, milestones..."
            className="w-full bg-atb-surface-lowest border border-atb-outline-variant rounded-full py-4 pl-6 pr-14 font-body text-sm shadow-lg focus:outline-none focus:border-atb-primary focus:ring-1 transition-all text-atb-on-surface placeholder:text-atb-outline"
          />
          <motion.button
            whileTap={{ scale: 0.9 }}
            className={`absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
              query.trim() ? 'bg-atb-primary text-white' : 'bg-atb-surface-container text-atb-outline'
            }`}
            aria-label="Send"
          >
            <Send size={18} className={query.trim() ? 'ml-0.5' : ''} />
          </motion.button>
        </div>
        <p className="text-center text-[9px] text-atb-outline mt-3 font-body">
          AI can make mistakes. Always consult your pediatrician for medical advice.
        </p>
      </div>

      <BottomNav />
    </div>
  );
}
