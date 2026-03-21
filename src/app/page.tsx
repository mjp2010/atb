'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Sparkles, Calendar, HeartPulse } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import Image from 'next/image';

const features = [
 {
 icon: Sparkles,
 title: 'Expert Curation',
 body: 'Daily insights tailored to your baby\'s exact developmental age and unique needs.',
 },
 {
 icon: Calendar,
 title: 'Milestone Tracking',
 body: 'Document every giggle and step in a beautiful, digital heirloom memory book.',
 },
 {
 icon: HeartPulse,
 title: 'Holistic Support',
 body: 'Connecting you with lactation consultants, sleep experts, and pediatric care guides.',
 },
];

export default function WelcomePage() {
 const router = useRouter();

 return (
 <div className="min-h-screen flex flex-col bg-atb-background">
 <header className="w-full sticky top-0 z-50 bg-atb-background bg-opacity-80 backdrop-blur-md">
 <div className="flex items-center justify-between px-6 py-6 w-full max-w-screen-xl mx-auto">
 <span className="font-headline italic text-2xl text-atb-primary tracking-tight">
 All Things Baby
 </span>
 <ThemeToggle />
 </div>
 </header>

 <main className="relative flex-1 flex flex-col">
 {/* Hero */}
 <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-4 gap-12">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6, ease: 'easeOut' }}
 className="w-full md:w-1/2 flex flex-col space-y-8 z-10 md:pl-8"
 >
 <div className="space-y-4">
 <span className="font-label text-atb-primary uppercase tracking-[0.2em] text-xs font-semibold">
 Welcome to the journey
 </span>
 <h1 className="font-headline text-5xl md:text-7xl text-atb-on-surface leading-tight font-normal">
 Welcome to your{' '}
 <span className="italic text-atb-primary">Nurturing Atelier.</span>
 </h1>
 </div>
 <p className="font-body text-lg md:text-xl text-atb-on-surface-variant leading-relaxed max-w-md">
 Expert guidance, milestone tracking, and stage-specific care for your baby's first years.
 </p>
 <div className="flex flex-col space-y-6 pt-4">
 <motion.button
 onClick={() => router.push('/onboarding')}
 whileHover={{ scale: 1.02 }}
 whileTap={{ scale: 0.97 }}
 className="w-full md:w-max px-12 py-5 bg-atb-primary text-white font-body font-semibold text-lg rounded-full shadow-lg transition-opacity"
 >
 Get Started
 </motion.button>
 <div className="flex items-center space-x-2">
 <span className="font-body text-atb-on-surface-variant">Already a member?</span>
 <button
 onClick={() => router.push('/home')}
 className="font-body font-bold text-atb-primary hover:underline underline-offset-4"
 >
 Log In
 </button>
 </div>
 </div>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, scale: 0.96 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
 className="w-full md:w-1/2 relative"
 >
 <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
 <Image
 alt="Parent and baby in a sun-drenched nursery"
 fill
 className="object-cover"
 src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMMH329SWawZZwh-amCucKRj3v-BmBXKf7WT3O7VKPVeECLouGcJ75odn37JtG5ep6F7bhvQhI8XqaY3Lv6q8kUuzX9vVvbf76mMEAIQvu3N-BYYXYxorUviXP-gXAEhwh1fRz-eohVySY32OGyPwFXRB6JZLM0kpT206Hve-N4_w6VcI-LbwM3wpe5bn-KhjDytnD8y06B_uN6LQNVHOWsLQWal84_ckJ_NfjNvdESgg-CLDjMrPpDlivE52HuAU1SgqhsMAb3Uo"
 sizes="(max-width: 768px) 100vw, 50vw"
 />
 <div className="absolute inset-0 bg-gradient-to-tr from-atb-surface opacity-20" />
 </div>
 </motion.div>
 </section>

 {/* Feature cards */}
 <section className="bg-atb-surface-low mt-24 px-6 md:px-12 py-20 rounded-t-[4rem]">
 <div className="max-w-screen-xl mx-auto">
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {features.map((f, i) => {
 const Icon = f.icon;
 return (
 <motion.div
 key={f.title}
 initial={{ opacity: 0, y: 32 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: i * 0.12 }}
 className={`bg-atb-surface-lowest p-10 rounded-3xl space-y-6 ${i === 1 ? 'md:translate-y-8' : ''}`}
 >
 <div className="w-12 h-12 bg-atb-primary-container rounded-full flex items-center justify-center text-atb-primary">
 <Icon size={24} />
 </div>
 <h3 className="font-headline text-2xl text-atb-on-surface">{f.title}</h3>
 <p className="font-body text-atb-on-surface-variant leading-relaxed">{f.body}</p>
 </motion.div>
 );
 })}
 </div>
 </div>
 </section>
 </main>
 </div>
 );
}
