'use client';

import { Home, Calendar, Bot, ShoppingBag, BriefcaseMedical } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState, useEffect } from 'react';

const navItems = [
  { id: 'home', path: '/home', icon: Home, label: 'HOME' },
  { id: 'timeline', path: '/timeline', icon: Calendar, label: 'TIMELINE' },
  { id: 'aicoach', path: '/aicoach', icon: Bot, label: 'AI ASSISTANT' },
  { id: 'shop', path: '/shop', icon: ShoppingBag, label: 'SHOP' },
  { id: 'experts', path: '/experts', icon: BriefcaseMedical, label: 'EXPERTS', isSpecial: true },
];

export function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  // Don't show on specific utility/marketing/detail pages
  const hideOnPaths = ['/', '/onboarding', '/product'];
  if (hideOnPaths.includes(pathname)) return null;

  // Auto-hide on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 50) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  
  // Show after scrolling stops for a bit
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setHidden(false), 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
      <div className="max-w-md mx-auto w-full px-0">
        <motion.nav 
          initial={{ y: 0 }}
          animate={{ y: hidden ? 100 : 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="bg-white rounded-t-[32px] shadow-[0_-10px_40px_rgba(0,0,0,0.06)] flex items-end justify-between px-5 pb-5 pt-4 pointer-events-auto ring-1 ring-black/5"
        >
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            const Icon = item.icon;

            if (item.id === 'experts') {
              return (
                <motion.button
                  key={item.id}
                  onClick={() => router.push(item.path)}
                  whileTap={{ scale: 0.92 }}
                  className="relative flex items-center justify-center w-14 h-14 bg-[#557161] rounded-full shadow-lg -translate-y-1 mb-1 focus:outline-none"
                  aria-label={item.label}
                >
                  <Icon size={24} className="text-white" strokeWidth={2.5} />
                  {isActive && (
                    <motion.div layoutId="nav-active-expert" className="absolute inset-0 rounded-full ring-4 ring-[#557161]/20" />
                  )}
                </motion.button>
              );
            }

            return (
              <motion.button
                key={item.id}
                onClick={() => router.push(item.path)}
                whileTap={{ scale: 0.9 }}
                className="flex flex-col items-center justify-center gap-1.5 min-w-[3.5rem] py-1 focus:outline-none relative"
                aria-label={item.label}
              >
                <div className={`transition-colors duration-200 ${isActive ? 'text-[#557161]' : 'text-[#8c9490]'}`}>
                  <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                </div>
                <span className={`font-label text-[8px] font-extrabold tracking-widest transition-colors duration-200 ${isActive ? 'text-[#557161]' : 'text-[#8c9490]'}`}>
                  {item.label}
                </span>
                {isActive && (
                  <motion.div 
                    layoutId="nav-pill" 
                    className="absolute -top-1 w-1 h-1 bg-[#557161] rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.nav>
      </div>
    </div>
  );
}
