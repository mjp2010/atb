'use client';

import { useRouter } from 'next/navigation';
import { Bot, BadgeCheck, RotateCcw, CheckCircle2, ArrowRight, BookOpen, Send, Headset } from 'lucide-react';
import { BottomNav } from '@/components/BottomNav';
import Image from 'next/image';

const recentQuestions = [
  'Night wakings',
  'Solid food transition'
];

const suggestions = [
  'Is he eating enough?',
  'Soothing techniques',
  'Tummy time'
];

export default function AICoachPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#faf9f6] flex flex-col font-body text-atb-on-background pb-0">
      <header className="flex items-center justify-between px-6 py-5 sticky top-0 z-40 bg-[#faf9f6] bg-opacity-95 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#fbdac9] flex items-center justify-center overflow-hidden relative shadow-sm ring-1 ring-black/5">
            <Image alt="Aarav" fill className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbd3l7sVwlfakX6EdOnT65C3Nr4p16TNphTHnodjURipH0Uom6T_Exi7hgSv3YxD0uqwXhBqY4YCwaQbCdclqeRkdU90SDWs6N5hIhSSRNNV3FdhJuSZI5NIkUfNsKUYSBs0fk3-Dh4ljxhW0BmOBlDZU35UAQVcQb8F2MmKdlN8ANbIxv661qerQ67oJv7Sl5F58R2ZcpVQWOGBx7Aq7EceLsezJ51XQ_exGVtalUg1JF7ht5FnEXaV4ijWf2KmYUTLq7w37ksD4" sizes="40px" />
          </div>
          <h1 className="font-headline text-lg italic font-medium text-[#496459] tracking-tight">Aarav - 4 Months Old</h1>
        </div>
        <BadgeCheck size={26} className="text-[#496459] hover:opacity-80 transition-opacity cursor-pointer flex-shrink-0" fill="currentColor" stroke="var(--color-background)" />
      </header>

      <main className="max-w-md mx-auto w-full flex-grow flex flex-col relative pb-[280px]">
        
        {/* Title Area */}
        <section className="flex flex-col items-center mt-6 px-6">
          <div className="w-16 h-16 bg-[#6b8577] shadow-[0_8px_20px_rgba(107,133,119,0.3)] rounded-[1.25rem] flex items-center justify-center mb-5">
            <Bot size={32} className="text-white" strokeWidth={2.5} />
          </div>
          <h2 className="font-headline text-[26px] font-bold text-atb-on-surface text-center leading-tight mb-2">
            AI Parenting Companion
          </h2>
          <p className="font-label text-[9px] uppercase tracking-[0.2em] font-extrabold text-[#8c9490] text-center">
            Expert-Verified Guidance 24/7
          </p>
        </section>

        {/* Recent Questions */}
        <section className="mt-10">
          <div className="flex justify-between items-center px-6 mb-4">
            <h3 className="font-label text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#8c9490]">
              Recent Questions
            </h3>
            <button className="font-label text-[9px] font-extrabold uppercase tracking-[0.15em] text-[#557161] hover:opacity-70">
              Clear All
            </button>
          </div>
          <div className="flex gap-3 px-6 overflow-x-auto hide-scrollbar pb-2">
            {recentQuestions.map(q => (
              <button key={q} className="whitespace-nowrap flex items-center gap-2 bg-[#f4f2ec] ring-1 ring-black/5 px-4 py-2 rounded-full hover:bg-[#ebe8e1] transition-colors">
                <RotateCcw size={12} className="text-[#8c9490]" />
                <span className="text-[12px] text-atb-on-surface-variant font-medium">{q}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Chat Thread */}
        <section className="mt-8 px-6 flex flex-col gap-6">
          
          {/* User Message */}
          <div className="bg-[#f0ece5] self-end rounded-[1.5rem] rounded-tr-sm p-5 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.02)] max-w-[90%]">
            <p className="text-[14px] leading-relaxed text-[#4a4641]">
              How can I help my baby sleep longer during the night? He wakes up every 2 hours.
            </p>
          </div>

          {/* AI Response Container */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-[#557161] flex items-center justify-center shadow-sm">
                <Bot size={14} className="text-white" strokeWidth={2.5} />
              </div>
              <span className="font-label text-[9px] font-extrabold uppercase tracking-[0.15em] text-[#557161]">
                Verified Response
              </span>
            </div>

            <div className="bg-white rounded-[1.5rem] p-6 shadow-[0_4px_30px_rgba(0,0,0,0.03)] flex flex-col ring-1 ring-[#f0ede6]">
              <p className="text-[13px] leading-[1.6] text-atb-on-surface-variant mb-5">
                At 4 months, Aarav might be going through a sleep regression. To help him stretch his sleep, try these expert-backed steps:
              </p>
              
              <ul className="space-y-4 mb-6 relative">
                <li className="flex items-start gap-4">
                  <div className="shrink-0 mt-0.5 w-[18px] h-[18px] flex items-center justify-center bg-white rounded-full relative z-10">
                    <CheckCircle2 size={18} className="text-[#557161]" strokeWidth={2.5} fill="rgba(85,113,97,0.1)" />
                  </div>
                  <span className="text-[13px] leading-snug text-atb-on-surface-variant">
                    Establish a consistent 15-minute soothing routine (bath, book, then bed).
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="shrink-0 mt-0.5 w-[18px] h-[18px] flex items-center justify-center bg-white rounded-full relative z-10">
                    <CheckCircle2 size={18} className="text-[#557161]" strokeWidth={2.5} fill="rgba(85,113,97,0.1)" />
                  </div>
                  <span className="text-[13px] leading-snug text-atb-on-surface-variant">
                    Ensure his last nap ends at least 2 hours before bedtime.
                  </span>
                </li>
              </ul>

              {/* Recommended Product */}
              <div className="bg-[#eeeadd] rounded-[1.5rem] p-4 flex gap-4 items-center shadow-[inset_0_0_0_1px_rgba(0,0,0,0.03)] hover:shadow-md cursor-pointer transition-shadow mt-2">
                <div className="w-16 h-16 rounded-full bg-[#faf9f6] flex items-center justify-center shrink-0 shadow-sm relative overflow-hidden ring-1 ring-black/5">
                   <div className="relative w-full h-full p-2">
                      <Image
                        alt="Product image"
                        fill
                        className="object-contain"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMMH329SWawZZwh-amCucKRj3v-BmBXKf7WT3O7VKPVeECLouGcJ75odn37JtG5ep6F7bhvQhI8XqaY3Lv6q8kUuzX9vVvbf76mMEAIQvu3N-BYYXYxorUviXP-gXAEhwh1fRz-eohVySY32OGyPwFXRB6JZLM0kpT206Hve-N4_w6VcI-LbwM3wpe5bn-KhjDytnD8y06B_uN6LQNVHOWsLQWal84_ckJ_NfjNvdESgg-CLDjMrPpDlivE52HuAU1SgqhsMAb3Uo"
                        sizes="64px"
                      />
                   </div>
                </div>
                <div className="flex flex-col justify-center flex-1 py-1 pr-1">
                  <span className="font-label text-[8px] font-extrabold uppercase tracking-[0.15em] text-[#814a33] mb-1">
                    Recommended Product
                  </span>
                  <h4 className="font-headline text-[14px] font-bold text-atb-on-surface leading-tight mb-1.5">
                    Luna Dream White Noise Machine
                  </h4>
                  <p className="text-[10px] leading-snug text-[#8c9490] mb-2 pr-2">
                    Helps block sudden noises that cause waking.
                  </p>
                  <button className="text-[#3b5247] text-[10px] font-bold flex items-center gap-1 hover:opacity-80 transition-opacity">
                    View Details <ArrowRight size={10} />
                  </button>
                </div>
              </div>

              {/* Divider */}
              <div className="h-[1px] bg-[#f0ede6] w-full my-6"></div>

              {/* Article Card */}
              <div className="flex gap-4 items-center hover:bg-slate-50 cursor-pointer px-1 py-2 -my-2 rounded-xl transition-colors">
                <div className="w-10 h-10 rounded-full bg-[#dbe8e0] flex items-center justify-center shrink-0 text-[#3b5247]">
                  <BookOpen size={18} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-headline text-[12px] font-bold text-atb-on-surface leading-snug mb-0.5 pr-2">
                    The 4-Month Sleep Regression Survival Guide
                  </h4>
                  <p className="text-[9px] text-[#8c9490]">
                    Written by Dr. Sarah Chen, Pediatrician
                  </p>
                </div>
              </div>

            </div>
          </div>
          
        </section>
        
        {/* Floating Input Area */}
        <div className="fixed bottom-0 left-0 w-full flex justify-center pb-[104px] z-40 bg-gradient-to-t from-[#faf9f6] via-[#faf9f6]/95 to-transparent pt-32 pointer-events-none">
          <div className="w-full max-w-md px-4 flex flex-col gap-4 pointer-events-auto">
            
            {/* Suggested Prompts */}
            <div className="flex gap-2 overflow-x-auto hide-scrollbar px-1 -mx-1">
              {suggestions.map(s => (
                <button key={s} className="whitespace-nowrap bg-white ring-1 ring-[#e3e2e0] shadow-[0_2px_10px_rgba(0,0,0,0.03)] px-4 py-2.5 rounded-full text-[12px] text-[#4a4641] font-medium hover:bg-slate-50 transition-colors">
                  {s}
                </button>
              ))}
            </div>
            
            {/* Real Input */}
            <div className="relative shadow-[0_8px_30px_rgba(0,0,0,0.06)] ring-1 ring-[#e3e2e0] rounded-full bg-white flex items-center p-[5px] pl-6 h-[60px]">
              <input
                type="text"
                placeholder="Ask anything about Aarav's development..."
                className="w-full bg-transparent p-0 border-none outline-none focus:ring-0 text-[14px] text-atb-on-surface placeholder:text-[#a8a6a2]"
              />
              <button className="w-12 h-12 rounded-full bg-[#557161] flex items-center justify-center shrink-0 shadow-md hover:bg-[#496459] transition-colors ml-2 pointer-events-auto">
                <Send size={18} className="text-white ml-0.5" strokeWidth={2.5} />
              </button>
            </div>
            
            {/* Talk to Human */}
            <button className="bg-[#f0ebe3] hover:bg-[#e8e2d8] transition-colors text-[#a56b4d] px-6 py-3 rounded-full font-label font-extrabold text-[9px] uppercase tracking-[0.15em] mx-auto flex w-max items-center justify-center gap-2 mt-1 shadow-sm">
              <Headset size={14} strokeWidth={2.5} />
              TALK TO A HUMAN EXPERT <ArrowRight size={10} strokeWidth={3} className="ml-1" />
            </button>
            
          </div>
        </div>

      </main>
      
      <BottomNav />
    </div>
  );
}
