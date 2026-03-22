'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Sparkles, Check, ArrowLeft, Star } from 'lucide-react';

const premiumPerks = [
 'Unlimited 24/7 AI Coach access',
 'Personalized daily milestone tracking',
 '1 free video consult per month',
 'Exclusive discounts in the Curated Shop',
];

const freePerks = [
 'Pregnancy Tracker',
 'Baby Tracker',
 'Kick Counter',
 'Limited Parenting articles',
];

export default function PremiumPage() {
 const router = useRouter();

 return (
 <div className="min-h-screen bg-atb-background flex flex-col">
 <header className="w-full sticky top-0 z-50 bg-atb-background bg-opacity-80 backdrop-blur-md px-6 py-4 flex items-center justify-between">
 <motion.button
 onClick={() => router.push('/home')}
 whileTap={{ scale: 0.9 }}
 className="w-10 h-10 rounded-full bg-atb-surface-container flex items-center justify-center text-atb-on-surface hover:bg-atb-surface-high transition-colors"
 aria-label="Back"
 >
 <ArrowLeft size={20} />
 </motion.button>
 </header>

 <main className="flex-1 px-6 py-8 max-w-2xl mx-auto w-full space-y-10">
 {/* Hero */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5 }}
 className="text-center space-y-6"
 >
 <motion.div
 animate={{ scale: [1, 1.05, 1] }}
 transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
 className="w-20 h-20 mx-auto rounded-full bg-atb-primary flex items-center justify-center shadow-lg"
 >
 <Sparkles size={32} className="text-white" fill="currentColor" />
 </motion.div>
 <h1 className="font-headline text-4xl text-atb-on-surface leading-tight">
 Unlock the Full<br />
 <span className="italic text-atb-primary">Nurturing Experience</span>
 </h1>
 <p className="font-body text-lg text-atb-on-surface-variant max-w-md mx-auto">
 Get personalized insights, unlimited expert access, and exclusive content tailored to your baby&apos;s journey.
 </p>
 </motion.section>

 {/* Plans */}
 <section className="space-y-4">
 {/* Premium Plan - featured */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5, delay: 0.1 }}
 className="bg-atb-surface-lowest p-6 rounded-3xl shadow-lg relative overflow-hidden"
 >
 <div className="absolute top-0 right-0 bg-atb-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-xl">
 Most Popular
 </div>
 <h3 className="font-headline text-2xl text-atb-on-surface mb-2">Premium Plan</h3>
 <div className="flex items-baseline gap-1 mb-4">
 <span className="font-headline text-4xl text-atb-primary">₹10,000</span>
 <span className="font-body text-sm text-atb-on-surface-variant">/ 3 Months</span>
 </div>
 <p className="font-label text-xs uppercase tracking-widest text-atb-secondary font-bold mb-6">Everything in Free + Premium features</p>
 <ul className="space-y-4 mb-8">
 {premiumPerks.map((perk, i) => (
 <motion.li
 key={perk}
 initial={{ opacity: 0, x: -12 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ delay: 0.2 + i * 0.07 }}
 className="flex items-start gap-3"
 >
 <div className="w-6 h-6 rounded-full bg-atb-primary-container flex items-center justify-center text-atb-primary shrink-0 mt-0.5">
 <Check size={14} strokeWidth={3} />
 </div>
 <span className="font-body text-sm text-atb-on-surface">{perk}</span>
 </motion.li>
 ))}
 </ul>
 <motion.button
 whileHover={{ scale: 1.02 }}
 whileTap={{ scale: 0.97 }}
 className="w-full py-4 bg-atb-primary text-white font-bold rounded-full shadow-lg hover:opacity-90 transition-opacity"
 >
 Start 7-Day Free Trial
 </motion.button>
 </motion.div>

 {/* Free Plan */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5, delay: 0.2 }}
 className="bg-atb-surface-low p-6 rounded-3xl"
 >
 <div className="flex items-baseline gap-1 mb-4">
 <span className="font-headline text-2xl text-atb-on-surface">Free Plan</span>
 </div>
 <ul className="space-y-3 mb-6">
 {freePerks.map((perk, i) => (
 <motion.li
 key={perk}
 initial={{ opacity: 0, x: -12 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ delay: 0.3 + i * 0.05 }}
 className="flex items-start gap-3"
 >
 <div className="w-5 h-5 rounded-full bg-atb-surface-container flex items-center justify-center text-atb-outline shrink-0 mt-0.5">
 <Check size={12} strokeWidth={3} />
 </div>
 <span className="font-body text-sm text-atb-on-surface">{perk}</span>
 </motion.li>
 ))}
 </ul>
 <motion.button
 whileTap={{ scale: 0.97 }}
 className="w-full py-3 bg-atb-surface-container text-atb-on-surface font-bold rounded-full hover:bg-atb-surface-high transition-colors"
 >
 Get Started Free
 </motion.button>
 </motion.div>
 </section>

 {/* Testimonial */}
 <section className="text-center space-y-4 pb-8">
 <div className="flex justify-center gap-1 text-atb-secondary mb-2">
 {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
 </div>
 <p className="font-body text-sm text-atb-on-surface-variant italic max-w-sm mx-auto">
 &quot;The AI Coach alone is worth the subscription. It&apos;s like having a pediatrician in my pocket at 3 AM.&quot;
 </p>
 <p className="font-label text-xs uppercase tracking-widest text-atb-outline font-bold">— Sarah, Mom of 2</p>
 </section>
 </main>
 </div>
 );
}
