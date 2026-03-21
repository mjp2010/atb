'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Share2, CheckCircle2, ChevronRight, Sparkles, ImagePlus, Filter, Camera, Star, Heart, UserPlus, Users, Plus, BookOpen } from 'lucide-react';
import Image from 'next/image';

const milestones = [
 { done: true, title: 'Rolling front to back', sub: 'Physical Development' },
 { done: false, title: 'Pushing up on elbows', sub: 'Strength & Motor Skills' },
 { done: false, title: 'Responding to sounds', sub: 'Cognitive Awareness' },
];

export default function TimelinePage() {
 const router = useRouter();

 return (
 <div className="min-h-screen bg-[#faf9f6] text-atb-on-background font-body pb-0">
 {/* Header */}
 <header className="flex items-center justify-between px-6 py-5 sticky top-0 z-40 bg-[#faf9f6] bg-opacity-95 backdrop-blur-sm">
   <div className="flex items-center gap-3">
     <div className="w-10 h-10 rounded-full bg-[#fbdac9] flex items-center justify-center overflow-hidden relative shadow-sm ring-1 ring-black/5">
       <Image alt="Aarav" fill className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbd3l7sVwlfakX6EdOnT65C3Nr4p16TNphTHnodjURipH0Uom6T_Exi7hgSv3YxD0uqwXhBqY4YCwaQbCdclqeRkdU90SDWs6N5hIhSSRNNV3FdhJuSZI5NIkUfNsKUYSBs0fk3-Dh4ljxhW0BmOBlDZU35UAQVcQb8F2MmKdlN8ANbIxv661qerQ67oJv7Sl5F58R2ZcpVQWOGBx7Aq7EceLsezJ51XQ_exGVtalUg1JF7ht5FnEXaV4ijWf2KmYUTLq7w37ksD4" sizes="40px" />
     </div>
     <h1 className="font-headline text-lg italic font-medium text-[#496459] tracking-tight">Aarav - 4 Months Old</h1>
   </div>
   <Share2 size={24} className="text-[#496459] hover:opacity-80 transition-opacity cursor-pointer flex-shrink-0" strokeWidth={2.5} />
 </header>

 <main className="pt-2 px-6 max-w-md mx-auto space-y-10 pb-[120px]">
 {/* Progress card */}
 <motion.section
   initial={{ opacity: 0, y: 16 }}
   animate={{ opacity: 1, y: 0 }}
   transition={{ duration: 0.5 }}
   className="bg-[#fffdfb] p-6 rounded-[2rem] space-y-4 shadow-[0_2px_15px_rgba(0,0,0,0.02)] ring-1 ring-[#f4eee9]"
 >
   <div className="flex items-center justify-between">
     <div>
       <h2 className="font-headline text-[22px] font-bold text-[#a55a4d] italic tracking-tight">Aarav is Growing!</h2>
       <p className="text-[10px] text-[#8c9490] font-bold uppercase tracking-widest mt-1">4-Month Milestone Progress</p>
     </div>
     <div className="text-right flex flex-col items-end justify-center">
       <span className="text-[26px] font-medium text-[#557161] leading-none mb-1 -mr-1">75%</span>
       <span className="text-[7.5px] uppercase font-extrabold tracking-[0.2em] text-[#a1a8a4]">Complete</span>
     </div>
   </div>
   <div className="h-[6px] w-full bg-[#ebe8e4] rounded-full overflow-hidden mt-1">
     <motion.div
       initial={{ width: '0%' }}
       animate={{ width: '75%' }}
       transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
       className="h-full bg-[#7a8f83] rounded-full"
     />
   </div>
   <p className="text-[11px] font-medium text-[#a55a4d] italic flex items-center gap-1.5 pt-1">
     <Sparkles size={13} className="text-[#a55a4d] shrink-0" fill="currentColor" />
     3 more smiles until the next big chapter!
   </p>
 </motion.section>

 {/* Little wins */}
 <section className="space-y-5">
   <div className="flex justify-between items-end mb-2">
     <h2 className="font-headline text-[26px] font-bold text-[#1a1c1a]">Little Wins Today</h2>
     <button className="bg-white ring-1 ring-[#e3e2e0] shadow-[0_2px_8px_rgba(0,0,0,0.03)] px-3 py-1.5 rounded-full text-[8px] font-extrabold uppercase tracking-[0.15em] text-[#557161] hover:bg-slate-50 transition-colors mb-1.5">
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
         className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] ring-1 ring-[#e3e2e0] cursor-pointer hover:shadow-sm"
       >
         {m.done ? (
           <CheckCircle2 size={24} className="text-white shrink-0" strokeWidth={2.5} fill="#557161" />
         ) : (
           <div className="w-6 h-6 rounded-full ring-[2.5px] ring-[#7a8f83] ring-inset shrink-0" />
         )}
         <div className="flex-1">
           <p className="text-[13px] font-bold text-[#1a1c1a]">{m.title}</p>
           <p className="text-[11px] text-[#8c9490] leading-snug">{m.sub}</p>
         </div>
         <ChevronRight size={18} className="text-[#a8a6a2] shrink-0" strokeWidth={2.5} />
       </motion.div>
     ))}
   </div>
 </section>

 {/* Add memory CTA */}
 <section className="relative p-6 rounded-[2rem] bg-[#eff0ed] overflow-hidden flex flex-col justify-center min-h-[160px]">
   <div className="absolute right-[-40px] bottom-[-30px] opacity-[0.15] text-[#2f493b] pointer-events-none transform rotate-12 scale-[1.3]">
     <BookOpen size={180} strokeWidth={1} />
   </div>
   <div className="relative z-10 w-full max-w-[200px]">
     <h3 className="font-headline text-[22px] text-[#2f493b] italic leading-tight mb-2 font-bold">Capture a new magic moment</h3>
     <p className="text-[12px] text-[#6f7a74] leading-relaxed mb-5 pr-2">
       Did Aarav do something cute today? Save it forever.
     </p>
     <motion.button
       whileTap={{ scale: 0.96 }}
       className="bg-[#557161] text-white px-5 py-3 rounded-full font-label text-[11px] font-extrabold tracking-wide flex items-center justify-center gap-2 shadow-md hover:bg-[#496459] transition-colors"
     >
       <ImagePlus size={16} strokeWidth={2.5} />
       Add a New Memory
     </motion.button>
   </div>
 </section>

 {/* Growth journey timeline */}
 <section className="space-y-6">
   <div className="space-y-1 mb-8">
     <h2 className="font-headline text-[26px] font-bold text-[#1a1c1a] leading-tight">Growth Journey</h2>
     <p className="text-[13px] italic text-[#8c9490] font-headline">"A beautiful map of your first year together."</p>
   </div>

   <div className="flex items-center gap-2 mb-8">
     <button className="bg-[#fce5d8] text-[#814a33] px-5 py-1.5 rounded-full font-bold text-[10px] tracking-wide">All</button>
     <button className="text-[#8c9490] px-3 py-1.5 font-bold text-[10px] tracking-wide hover:text-[#1a1c1a]">Memories</button>
     <button className="text-[#8c9490] px-3 py-1.5 font-bold text-[10px] tracking-wide hover:text-[#1a1c1a]">Milestones</button>
     <button className="ml-auto text-[#8c9490] py-1.5 hover:text-[#1a1c1a]">
       <Filter size={18} strokeWidth={2.5} />
     </button>
   </div>

   <div className="relative pb-4">
     {/* Vertical Line */}
     <div className="absolute left-[15px] top-6 bottom-0 w-[1px] bg-[#e3e2e0] z-0" />
     
     <div className="space-y-10">
       {/* Memory Item */}
       <motion.div
         initial={{ opacity: 0, y: 24 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.5 }}
         className="relative flex items-start w-full"
       >
         <div className="w-[31px] h-[31px] rounded-full bg-[#8aa395] flex items-center justify-center shrink-0 z-10 shadow-sm ring-4 ring-[#faf9f6]">
           <Camera size={15} className="text-white" strokeWidth={2.5} />
         </div>
         <div className="flex-1 p-5 rounded-[2rem] bg-white shadow-[0_4px_25px_rgba(0,0,0,0.03)] ring-1 ring-[#e3e2e0] ml-[20px]">
           <div className="flex items-center justify-between mb-3">
             <time className="font-label text-[8px] font-extrabold uppercase tracking-widest text-[#a8a6a2]">March 12, 2024</time>
             <span className="px-2.5 py-[2px] rounded-full bg-[#f4efe6] text-[#4a4641] text-[8px] font-extrabold italic tracking-wide">Memory Captured</span>
           </div>
           <h4 className="font-headline text-[19px] font-bold leading-tight mb-4 text-[#1a1c1a]">First beach day at Sunset Bay</h4>
           <div className="relative rounded-[1.5rem] overflow-hidden mb-4 aspect-[4/3] ring-1 ring-black/5">
             <Image alt="Beach" fill className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAifO3hF3nO95yATAvROrPSQ4Bda34-FY5cYlVRCKUCojNjjT4sWZXVoF4x7OKfk_VNV-zj8tksSGSMU0JU9JtzbhxyCqGNKnN-LcYHcGxGyCOeb2Eqj8_6mQKS9GYEULknLRBGNlBR2J9R_kf8BwL53FjOlvA4RpJOVtD1O4GmYp6liqn5inxrtxmlP2hqsvx5_OA4wN-KD5KrXsvYAsyg4jZDk4Dj7Nc6SfNy71UrRkjrc8s6uF7epqPdd89jOv0cquzkpNSyZLk" sizes="(max-width: 768px) 100vw, 400px" />
           </div>
           <div className="border-l-[3px] border-[#fce5d8] pl-3 mb-5">
             <p className="font-headline text-[13px] text-[#6f7a74] leading-relaxed italic pr-2">
               &quot;Aarav was so curious about the sand. He didn't like the cold water much yet!&quot;
             </p>
           </div>
           <div className="flex items-center justify-between pt-1">
             <div className="flex -space-x-1.5">
               <div className="w-[18px] h-[18px] rounded-full bg-[#fbdac9] ring-2 ring-white flex items-center justify-center text-[8px] font-bold text-[#814a33]">H</div>
               <div className="w-[18px] h-[18px] rounded-full bg-[#8aa395] ring-2 ring-white flex items-center justify-center text-[8px] font-bold text-white">D</div>
             </div>
             <button className="flex items-center gap-1.5 text-[#557161] hover:opacity-70 transition-opacity">
               <Share2 size={12} strokeWidth={3} />
               <span className="font-bold text-[9px] tracking-wide">Share with Family</span>
             </button>
           </div>
         </div>
       </motion.div>

       {/* Milestone Item */}
       <motion.div
         initial={{ opacity: 0, y: 24 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.5, delay: 0.1 }}
         className="relative flex items-start w-full"
       >
         <div className="w-[31px] h-[31px] rounded-full bg-[#814a33] flex items-center justify-center shrink-0 z-10 shadow-sm ring-4 ring-[#faf9f6]">
           <Star size={14} className="text-white" strokeWidth={2.5} fill="white" />
         </div>
         <div className="flex-1 p-5 rounded-[2rem] bg-white shadow-[0_4px_25px_rgba(0,0,0,0.03)] ring-1 ring-[#e3e2e0] ml-[20px]">
           <div className="flex items-center justify-between mb-3">
             <time className="font-label text-[8px] font-extrabold uppercase tracking-widest text-[#a8a6a2]">Feb 28, 2024</time>
             <span className="px-2.5 py-[2px] rounded-full bg-[#fce5d8] text-[#814a33] text-[8px] font-extrabold uppercase tracking-widest">Big Milestone</span>
           </div>
           <h4 className="font-headline text-[19px] font-bold italic leading-tight mb-3 text-[#1a1c1a]">First Social Smile</h4>
           <p className="font-body text-[13px] text-[#6f7a74] leading-relaxed mb-6 pr-2">
             Finally caught that intentional grin when Grandpa was singing. It melted our hearts!
           </p>
           <div className="flex gap-2">
             <div className="px-4 py-2.5 rounded-full ring-1 ring-[#e3e2e0] flex items-center justify-center flex-col shrink-0 min-w-[90px]">
               <p className="text-[7.5px] font-extrabold uppercase tracking-[0.1em] text-[#a8a6a2] mb-0.5">Category</p>
               <p className="text-[11px] font-bold text-[#1a1c1a]">Social</p>
             </div>
             <div className="px-4 py-2.5 rounded-full ring-1 ring-[#e3e2e0] flex items-center justify-center flex-col shrink-0 min-w-[90px]">
               <p className="text-[7.5px] font-extrabold uppercase tracking-[0.1em] text-[#a8a6a2] mb-0.5">Age</p>
               <p className="text-[11px] font-bold text-[#1a1c1a]">3.5 Months</p>
             </div>
           </div>
         </div>
       </motion.div>
     </div>
   </div>
 </section>

 {/* Share section */}
 <section className="bg-[#f4f7f5] p-6 rounded-[2rem] space-y-5 mt-6 mb-16 flex flex-col items-center">
   <div className="flex items-center gap-4 w-full">
     <div className="w-[52px] h-[52px] rounded-full bg-[#fbdac9] flex items-center justify-center shrink-0">
       <Heart size={24} className="text-[#814a33]" fill="#814a33" />
     </div>
     <div className="flex-1 pr-2">
       <h3 className="font-bold text-[16px] text-[#1a1c1a] mb-0.5 leading-none">Share the Joy</h3>
       <p className="text-[11px] text-[#8c9490] leading-snug">Let Grandma & Grandpa follow Aarav's journey</p>
     </div>
   </div>
   <div className="flex gap-3 w-full">
     <motion.button whileTap={{ scale: 0.96 }} className="flex-1 py-3.5 bg-white rounded-full text-[11px] font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors text-[#1a1c1a] shadow-[0_2px_8px_rgba(0,0,0,0.03)] ring-1 ring-[#e3e2e0]">
       <UserPlus size={15} strokeWidth={2.5} /> Invite Spouse
     </motion.button>
     <motion.button whileTap={{ scale: 0.96 }} className="flex-1 py-3.5 bg-white rounded-full text-[11px] font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors text-[#1a1c1a] shadow-[0_2px_8px_rgba(0,0,0,0.03)] ring-1 ring-[#e3e2e0]">
       <Users size={15} strokeWidth={2.5} /> Grandparents
     </motion.button>
   </div>
 </section>
 </main>

 <motion.button
   whileTap={{ scale: 0.88 }}
   whileHover={{ scale: 1.05 }}
   className="fixed bottom-[88px] right-5 w-14 h-14 rounded-full bg-[#557161] hover:bg-[#496459] transition-colors text-white shadow-lg flex items-center justify-center z-40"
   aria-label="Add new memory"
 >
   <Plus size={26} strokeWidth={2.5} />
 </motion.button>

 </div>
 );
}
