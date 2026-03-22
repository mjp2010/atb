'use client';

import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Home, Zap, Users, MessageSquare } from 'lucide-react';

export function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();

  // Hide bottom nav on root, onboarding and aicoach pages
  if (pathname === '/' || pathname === '/onboarding' || pathname === '/aicoach') {
    return null;
  }

  const navItems = [
    { icon: Home, label: 'Home', href: '/home', active: pathname === '/home' },
    { icon: Zap, label: 'Timeline', href: '/timeline', active: pathname === '/timeline' },
    { icon: Users, label: 'Shop', href: '/shop', active: pathname === '/shop' },
    { icon: Users, label: 'Experts', href: '/experts', active: pathname === '/experts' },
    { icon: MessageSquare, label: 'Parent-pal', href: '/aicoach', active: pathname === '/aicoach' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#faf9f6] border-t border-black/5 backdrop-blur-md z-40">
      <div className="max-w-md mx-auto flex items-center px-4 py-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <motion.button
              key={item.href}
              onClick={() => {
                // Pass current page as 'from' parameter when navigating to AI Assistant
                if (item.href === '/aicoach') {
                  router.push(`${item.href}?from=${pathname}`);
                } else {
                  router.push(item.href);
                }
              }}
              whileTap={{ scale: 0.9 }}
              className={`flex-1 flex flex-col items-center justify-center py-2 rounded-lg transition-colors ${
                item.active
                  ? 'text-[#557161] bg-[#e7eee9]'
                  : 'text-[#8c9490] hover:text-[#557161]'
              }`}
            >
              <Icon size={20} className="mb-1" />
              <span className="text-[10px] font-bold uppercase tracking-widest">{item.label}</span>
            </motion.button>
          );
        })}
      </div>
    </nav>
  );
}
