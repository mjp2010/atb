'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { ArrowLeft, Heart, Share2, Star, ShoppingBag } from 'lucide-react';
import Image from 'next/image';

export default function ProductPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-atb-background pb-24">
      {/* Transparent header over hero image */}
      <header className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-gradient-to-b from-black/50 to-transparent">
        <motion.button
          onClick={() => router.push('/shop')}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 rounded-full bg-white bg-opacity-20 backdrop-blur-md flex items-center justify-center text-white hover:bg-opacity-30 transition-colors"
          aria-label="Back to shop"
        >
          <ArrowLeft size={20} />
        </motion.button>
        <div className="flex gap-3">
          {[Share2, Heart].map((Icon, i) => (
            <motion.button
              key={i}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-white bg-opacity-20 backdrop-blur-md flex items-center justify-center text-white hover:bg-opacity-30 transition-colors"
            >
              <Icon size={20} />
            </motion.button>
          ))}
        </div>
      </header>

      <main className="max-w-2xl mx-auto">
        {/* Hero product image */}
        <section className="relative aspect-[4/5] w-full bg-atb-surface-container">
          <Image
            alt="Silicone Teether Set"
            fill
            className="object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMMH329SWawZZwh-amCucKRj3v-BmBXKf7WT3O7VKPVeECLouGcJ75odn37JtG5ep6F7bhvQhI8XqaY3Lv6q8kUuzX9vVvbf76mMEAIQvu3N-BYYXYxorUviXP-gXAEhwh1fRz-eohVySY32OGyPwFXRB6JZLM0kpT206Hve-N4_w6VcI-LbwM3wpe5bn-KhjDytnD8y06B_uN6LQNVHOWsLQWal84_ckJ_NfjNvdESgg-CLDjMrPpDlivE52HuAU1SgqhsMAb3Uo"
            sizes="448px"
            priority
          />
        </section>

        {/* Product details sheet */}
        <motion.section
          initial={{ y: 32, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 200, damping: 25 }}
          className="px-6 py-8 space-y-6 bg-atb-surface -mt-8 relative rounded-t-[2rem] shadow-lg"
        >
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="font-label text-xs uppercase tracking-widest text-atb-primary font-bold">
                Teething Essentials
              </p>
              <div className="flex items-center gap-1 text-sm font-bold text-atb-on-surface">
                <Star size={14} className="text-atb-secondary" fill="currentColor" /> 4.9 (128)
              </div>
            </div>
            <h1 className="font-headline text-3xl text-atb-on-surface leading-tight">Silicone Teether Set</h1>
            <p className="font-headline text-2xl text-atb-primary">$24.00</p>
          </div>

          <div className="space-y-4 border-t border-atb-outline-variant pt-6">
            <h3 className="font-headline text-lg text-atb-on-surface">Description</h3>
            <p className="font-body text-sm text-atb-on-surface-variant leading-relaxed">
              Soothe your baby&apos;s tender gums with our 100% food-grade silicone teether set. Designed for tiny hands to grasp easily, these textured teethers provide gentle relief during the teething phase. Free from BPA, PVC, and phthalates.
            </p>
          </div>

          <div className="space-y-4 border-t border-atb-outline-variant pt-6">
            <h3 className="font-headline text-lg text-atb-on-surface">Why Experts Love It</h3>
            <div className="bg-atb-secondary-container bg-opacity-20 p-4 rounded-2xl border border-atb-secondary border-opacity-10 flex gap-4">
              <div className="w-10 h-10 rounded-full bg-atb-secondary-container flex items-center justify-center text-atb-secondary shrink-0">
                <Star size={16} fill="currentColor" />
              </div>
              <p className="font-body text-sm text-atb-on-surface-variant leading-relaxed italic">
                &quot;The varied textures on these teethers are perfect for sensory development while providing safe, effective relief for sore gums.&quot; – Dr. Sarah Jenkins
              </p>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Fixed bottom bar */}
      <div className="fixed bottom-0 left-0 w-full px-6 py-4 bg-atb-surface-lowest border-t border-atb-outline-variant z-50">
        <div className="max-w-2xl mx-auto flex gap-4">
          <motion.button
            whileTap={{ scale: 0.92 }}
            className="w-14 h-14 rounded-2xl border border-atb-outline-variant flex items-center justify-center text-atb-on-surface hover:bg-atb-surface-container transition-colors"
            aria-label="Save to wishlist"
          >
            <ShoppingBag size={24} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="flex-1 bg-atb-primary text-white font-bold rounded-2xl shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            Add to Cart – $24.00
          </motion.button>
        </div>
      </div>
    </div>
  );
}
