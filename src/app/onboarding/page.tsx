'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Check, Bell, Sparkles } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import Image from 'next/image';

const journeyOptions = [
  {
    id: 'pregnant' as const,
    title: 'I am Pregnant',
    body: 'Track your pregnancy journey and prepare for your little one\'s arrival.',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKERv3eW6FiPmpIe8nj78aSaTpU-fhUy7TQSrFOo5J5f5k4KsjOY617hLh9Rn-68V_A_9np39stZA5TRh7M2Bn09REqfQeKYup2kwiHiGAaryRvQn9BQxfA6b34QLlIJ5kadg_SiTO2xm2OWkoCri5L96-LwPhAG_yYoO6fJqF2NbA2oeK4YpKezAOUjUr7DRGLSElMSFR-uzWxKwi4ReXKVI3zTqWtIq6GLh-hF_Htjj_SEzj0BylhqUPy8Qgz5Bd_wt3ZYs62Zg',
    alt: 'Pregnant woman',
  },
  {
    id: 'parent' as const,
    title: 'I am a Parent',
    body: 'Personalized guidance tailored for your baby\'s specific development age.',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCg6qg_lSCr8PKuzObvSNIAlAEONig3MKXWsToWUlEWt86acLWSS72dTUnL1-FxlqpgNRqWQwoDaBM_47KbkgdPXv_gpuDcR59qKfj-54UZ18bRdRkWHaU54RkBGWR5lZDEAVE4QpJh3kEWOHhn3i8dL1FCXBsaUXEJ-lzVhjPrv6HTH7tkldEFDhulXOEzMOAnT4E-bCCVB66VmHcAqkDwuPto1pfepFxlsKFNpz-gN8DtOw9WOteg3HMscGGI1Gnh2kgoK4nQiFw',
    alt: 'Parent and infant',
  },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [journey, setJourney] = useState<'pregnant' | 'parent' | null>(null);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else router.push('/home');
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
    else router.push('/');
  };

  return (
    <div className="min-h-screen flex flex-col bg-atb-background">
      <header className="w-full sticky top-0 z-50 bg-atb-background px-6 py-6">
        <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
          <motion.button
            onClick={handleBack}
            whileTap={{ scale: 0.9 }}
            className="text-atb-primary hover:opacity-80 transition-opacity"
            aria-label="Go back"
          >
            <ArrowLeft size={24} />
          </motion.button>
          <div className="font-headline italic text-xl text-atb-primary">All Things Baby</div>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-grow flex flex-col justify-start items-center px-8 pt-6 pb-48 max-w-2xl mx-auto w-full">
        <div className="flex flex-col items-center mb-4">
          <p className="text-xs font-label uppercase tracking-widest text-atb-outline font-bold opacity-80">
            Step {step} of 3
          </p>
        </div>
        {/* Progress bar */}
        <div className="w-full flex gap-3 mb-10 max-w-xs">
          {[1, 2, 3].map((n) => (
            <motion.div
              key={n}
              className="h-1.5 flex-1 rounded-full"
              animate={{ backgroundColor: step >= n ? 'rgb(var(--color-primary))' : 'rgb(var(--color-surface-container-highest))' }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -32 }}
              transition={{ duration: 0.35 }}
              className="w-full"
            >
              <div className="text-center mb-10">
                <h1 className="font-headline text-3xl md:text-4xl font-normal text-atb-on-surface leading-tight tracking-tight mb-3">
                  Where are you in your journey?
                </h1>
                <p className="text-atb-on-surface-variant text-base font-body opacity-80">
                  Every story is unique. Tell us yours.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-5 w-full">
                {journeyOptions.map((opt) => (
                  <motion.button
                    key={opt.id}
                    onClick={() => setJourney(opt.id)}
                    whileTap={{ scale: 0.98 }}
                    className={`group relative flex flex-col items-center p-8 rounded-3xl bg-atb-surface-lowest transition-all duration-300 text-center focus:outline-none shadow-sm ${
                      journey === opt.id ? '!bg-white dark:!bg-[#1a1c1a]' : 'hover:opacity-90'
                    }`}
                  >
                    <div className="relative mb-6">
                      <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center ring-4 ring-white relative">
                        <Image src={opt.src} alt={opt.alt} fill className="object-cover mix-blend-multiply" sizes="96px" />
                      </div>
                      {journey === opt.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-1 -right-1 bg-atb-primary text-white rounded-full p-1 shadow-md"
                        >
                          <Check size={16} strokeWidth={3} />
                        </motion.div>
                      )}
                    </div>
                    <h3 className="font-headline text-2xl font-semibold text-atb-on-surface mb-2">{opt.title}</h3>
                    <p className="text-atb-on-surface-variant font-body text-sm leading-relaxed max-w-xs">{opt.body}</p>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -32 }}
              transition={{ duration: 0.35 }}
              className="w-full"
            >
              <div className="text-center mb-10">
                <h1 className="font-headline text-3xl md:text-4xl text-atb-on-surface mb-4 leading-tight">
                  Tell us about your little one.
                </h1>
                <p className="font-body text-base text-atb-on-surface-variant max-w-md mx-auto">
                  Every journey is unique. Let&apos;s tailor the experience to your family.
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-atb-surface-lowest p-6 rounded-3xl shadow-sm focus-within:ring-1 transition-all">
                  <label className="block font-label text-[10px] font-bold uppercase tracking-[0.15em] text-atb-primary mb-2 opacity-70">
                    Baby&apos;s Name
                  </label>
                  <input
                    className="w-full bg-transparent p-0 font-headline text-2xl text-atb-on-surface placeholder:text-atb-outline-variant focus:ring-0 focus:outline-none"
                    placeholder="Enter a name or nickname"
                    type="text"
                  />
                </div>
                <div className="bg-atb-surface-lowest p-6 rounded-3xl shadow-sm focus-within:ring-1 transition-all">
                  <label className="block font-label text-[10px] font-bold uppercase tracking-[0.15em] text-atb-primary mb-2 opacity-70">
                    Arrival Date
                  </label>
                  <input
                    className="w-full bg-transparent p-0 font-body text-lg text-atb-on-surface focus:ring-0 focus:outline-none"
                    type="date"
                  />
                  <p className="font-label text-[10px] text-atb-on-surface-variant italic mt-2 opacity-70">
                    Due Date or Birthday
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -32 }}
              transition={{ duration: 0.35 }}
              className="w-full flex flex-col items-center text-center"
            >
              <div className="relative mb-10">
                <div className="absolute inset-0 bg-atb-secondary-container rounded-full blur-2xl scale-150 opacity-20" />
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative w-32 h-32 rounded-full bg-atb-secondary flex items-center justify-center shadow-lg"
                >
                  <Bell size={48} className="text-white" fill="currentColor" />
                </motion.div>
                <div className="absolute -top-1 -right-1 w-10 h-10 rounded-full bg-atb-primary flex items-center justify-center shadow-md">
                  <Sparkles size={20} className="text-white" fill="currentColor" />
                </div>
              </div>
              <div className="space-y-4 mb-10">
                <h2 className="font-headline text-3xl md:text-4xl text-atb-on-surface leading-tight tracking-tight">
                  Stay connected with timely tips.
                </h2>
                <p className="font-body text-atb-on-surface-variant text-base px-2">
                  Expert guidance delivered right to your screen, exactly when you and your baby need it most.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer actions */}
        <div className="fixed bottom-0 left-0 w-full p-8 bg-gradient-to-t from-atb-background from-70% to-transparent flex justify-center">
          <div className="w-full max-w-2xl flex flex-col gap-4">
            <motion.button
              onClick={handleNext}
              disabled={step === 1 && !journey}
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.01 }}
              className="w-full py-5 rounded-full bg-atb-primary text-white font-semibold text-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:pointer-events-none"
            >
              {step === 3 ? 'Enable Notifications' : 'Continue'}
              {step < 3 && <ArrowRight size={20} />}
            </motion.button>
            {step === 3 && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => router.push('/home')}
                className="w-full py-4 rounded-full text-atb-on-surface-variant font-body font-medium text-base hover:bg-atb-surface-container transition-all duration-200"
              >
                Maybe Later
              </motion.button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
