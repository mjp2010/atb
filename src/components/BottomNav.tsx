'use client';

import { Home, Calendar, Bot, ShoppingBag, Stethoscope } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'motion/react';

const navItems = [
  { id: 'home', path: '/home', icon: Home, label: 'Home' },
  { id: 'timeline', path: '/timeline', icon: Calendar, label: 'Timeline' },
  { id: 'aicoach', path: '/aicoach', icon: Bot, label: 'AI Coach' },
  { id: 'shop', path: '/shop', icon: ShoppingBag, label: 'Shop' },
  { id: 'experts', path: '/experts', icon: Stethoscope, label: 'Experts' },
];

export function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-end px-4 pb-6 pt-2 bg-atb-surface-lowest bg-opacity-90 backdrop-blur-xl rounded-t-[2.5rem] z-50 shadow-lg border-t border-atb-outline-variant">
      {navItems.map((item) => {
        const isActive = pathname === item.path;
        const Icon = item.icon;

        return (
          <motion.button
            key={item.id}
            onClick={() => router.push(item.path)}
            whileTap={{ scale: 0.88 }}
            className="flex flex-col items-center justify-center p-2 focus:outline-none"
            aria-label={item.label}
            aria-current={isActive ? 'page' : undefined}
          >
            {isActive ? (
              <motion.div
                layoutId="nav-pill"
                className="w-12 h-12 rounded-2xl bg-atb-primary flex items-center justify-center shadow-lg mb-1"
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
              >
                <Icon size={22} className="text-white" />
              </motion.div>
            ) : (
              <div className="flex flex-col items-center gap-1 p-2 text-atb-outline hover:text-atb-primary transition-colors">
                <Icon size={24} />
                <span className="font-label text-[10px] uppercase tracking-widest font-medium">
                  {item.label}
                </span>
              </div>
            )}
          </motion.button>
        );
      })}
    </nav>
  );
}
