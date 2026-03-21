'use client';

import { Home, Calendar, Bot, ShoppingBag, Stethoscope } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState, useEffect } from 'react';

const navItems = [
 { id: 'home', path: '/home', icon: Home, label: 'HOME' },
 { id: 'timeline', path: '/timeline', icon: Calendar, label: 'TIMELINE' },
 { id: 'aicoach', path: '/aicoach', icon: Bot, label: 'AI ASSISTANT' },
 { id: 'shop', path: '/shop', icon: ShoppingBag, label: 'SHOP' },
 { id: 'experts', path: '/experts', icon: Stethoscope, label: 'EXPERTS' },
];

export function BottomNav() {
 const router = useRouter();
 const pathname = usePathname();
 const { scrollY } = useScroll();
 const [hidden, setHidden] = useState(false);

 useMotionValueEvent(scrollY, "change", (latest) => {
   const previous = scrollY.getPrevious() || 0;
   if (latest > previous && latest > 50) {
     setHidden(true);
   } else {
     setHidden(false);
   }
 });
 
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
 <motion.nav 
   initial={{ y: 0 }}
   animate={{ y: hidden ? 120 : 0 }}
   transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
   className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-md flex justify-between items-center px-3 py-2 bg-white dark:bg-[#1a1c1a] bg-opacity-[0.97] dark:bg-opacity-95 backdrop-blur-2xl rounded-[2rem] z-50 shadow-[0_12px_40px_rgb(0,0,0,0.15)] dark:shadow-[0_12px_40px_rgb(0,0,0,0.4)]"
 >
 {navItems.map((item) => {
 const isActive = pathname === item.path;
 const Icon = item.icon;

 return (
 <motion.button
 key={item.id}
 onClick={() => router.push(item.path)}
 whileTap={{ scale: 0.9 }}
 className="relative flex flex-col items-center justify-center w-[3.25rem] h-14 bg-transparent focus:outline-none group"
 aria-label={item.label}
 aria-current={isActive ? 'page' : undefined}
 >
 {isActive ? (
   <div className="flex flex-col items-center justify-center w-full h-full relative">
     <motion.div
       layoutId="nav-pill"
       className="w-10 h-10 rounded-full bg-[#6b8577] flex items-center justify-center shadow-md absolute top-0.5"
       transition={{ type: 'spring', stiffness: 450, damping: 28 }}
     >
       <Icon size={20} className="text-white" strokeWidth={2.5} />
     </motion.div>
     <span className="font-label text-[7px] uppercase tracking-[0.1em] font-extrabold text-[#6b8577] absolute bottom-[-4px] whitespace-nowrap truncate">
       {item.label}
     </span>
   </div>
 ) : (
   <div className="flex flex-col items-center gap-[5px] text-[#8c9490] hover:text-[#6b8577] transition-colors absolute top-2.5">
     <Icon size={22} strokeWidth={2} className="opacity-90" />
     <span className="font-label text-[7px] uppercase tracking-[0.1em] font-extrabold opacity-[0.85] whitespace-nowrap truncate">
       {item.label}
     </span>
   </div>
 )}
 </motion.button>
 );
 })}
 </motion.nav>
 );
}
