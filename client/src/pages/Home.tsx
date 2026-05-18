import { motion } from 'framer-motion';

/**
 * SOL LIMA - PREMIUM EDITORIAL LINK NA BIO (v2)
 * 
 * Design: Dark luxury editorial with glassmorphism,
 * animated gradient borders, and micro-interactions.
 * 
 * Buttons:
 * 1. Diagnóstico — Mulheres
 * 2. Diagnóstico — Homens
 * 3. MAGNETUS III — Mulheres
 * 4. MAGNETUS III — Homens
 * 5. Instagram
 * 6. Livro: Morte em Vida (lista de espera)
 * 7. Livro: Reposicione-se (lista de espera)
 * 8. Site: Relacione-se
 */

interface LinkButton {
  id: string;
  title: string;
  subtitle?: string;
  href?: string;
  disabled?: boolean;
  isWaitlist?: boolean;
  icon: string;
  gradient?: string;
  badge?: string;
}

export default function Home() {
  const buttons: LinkButton[] = [
    {
      id: 'diagnostico-feminina',
      title: 'Diagnóstico',
      subtitle: 'Anatomia da Presença Feminina',
      href: 'https://presenca-feminina.vercel.app/',
      icon: '✧',
      gradient: 'from-purple-500/20 via-pink-500/10 to-rose-500/20',
      badge: 'Comece Aqui',
    },
    {
      id: 'diagnostico-masculina',
      title: 'Diagnóstico',
      subtitle: 'Domínio e Ruína Masculina',
      href: 'https://diagnostico-presenca-masculina.vercel.app/',
      icon: '✦',
      gradient: 'from-blue-500/20 via-slate-500/10 to-indigo-500/20',
      badge: 'Comece Aqui',
    },
    {
      id: 'magnetus-mulheres',
      title: 'MAGNETUS III',
      subtitle: 'Protocolo para Mulheres',
      href: 'https://magnetus-Sales-page.vercel.app',
      icon: '♀',
      gradient: 'from-rose-500/20 via-pink-500/10 to-fuchsia-500/20',
    },
    {
      id: 'magnetus-homens',
      title: 'MAGNETUS III',
      subtitle: 'Protocolo para Homens',
      href: 'https://magnetus-homens.vercel.app',
      icon: '♂',
      gradient: 'from-blue-500/20 via-indigo-500/10 to-cyan-500/20',
    },
    {
      id: 'instagram',
      title: 'Instagram',
      subtitle: '@_sollimalove_',
      href: 'https://www.instagram.com/_sollimalove_',
      icon: '◎',
      gradient: 'from-purple-500/20 via-pink-500/10 to-orange-500/20',
    },
    {
      id: 'morte-vida',
      title: 'Morte em Vida',
      subtitle: 'A Anatomia do Feminicídio Emocional — Em espera',
      disabled: true,
      isWaitlist: true,
      icon: '◆',
    },
    {
      id: 'reposicione-se',
      title: 'Reposicione-se',
      subtitle: 'Livro — Lista de espera',
      disabled: true,
      isWaitlist: true,
      icon: '◇',
    },
    {
      id: 'relacione-se',
      title: 'Relacione-se',
      subtitle: 'Minha marca · Meu universo',
      href: 'https://relacione-se.com',
      icon: '❖',
      gradient: 'from-amber-500/20 via-yellow-500/10 to-orange-500/20',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="bio-page min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-[#050508]" />
      
      {/* Premium Background Image Overlay */}
      <div
        className="fixed inset-0 opacity-30"
        style={{
          backgroundImage: 'url(/bg-premium.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(40px)',
        }}
      />

      {/* Floating Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(198, 167, 105, 0.08) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(196, 138, 138, 0.06) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Noise Texture */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <motion.main
        className="relative z-10 max-w-lg mx-auto px-5 py-10 sm:py-14 md:py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Avatar & Identity */}
        <motion.div className="text-center mb-10 md:mb-14" variants={itemVariants}>
          {/* Animated Ring Avatar */}
          <div className="relative inline-block mb-6">
            <motion.div
              className="absolute -inset-1 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #C6A769, #C48A8A, #C6A769, #C48A8A, #C6A769)',
                filter: 'blur(3px)',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#0a0a0a] p-[3px]">
              <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] flex items-center justify-center">
                <img 
                  src="/perfil.jpg" 
                  alt="Sol Lima" 
                  className="w-full h-full object-cover object-[center_15%]"
                  onError={(e) => {
                    // Fallback to SL text if image not found
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.classList.add('bg-gradient-to-br');
                    const span = document.createElement('span');
                    span.className = "text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#C6A769] to-[#C48A8A]";
                    span.style.fontFamily = "'Playfair Display', serif";
                    span.innerText = "SL";
                    e.currentTarget.parentElement?.appendChild(span);
                  }}
                />
              </div>
            </div>
          </div>

          {/* Name */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#F5F0E8] via-[#C6A769] to-[#F5F0E8]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Sol Lima
          </h1>

          {/* Tagline */}
          <p
            className="text-sm sm:text-base text-[#F5F0E8]/70 font-light max-w-sm mx-auto leading-relaxed tracking-wide"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Se o seu posicionamento atual não te trouxe o que você merece, você não está posicionado. Você está estagnado.
          </p>

          {/* Brand Badge */}
          <motion.div
            className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full border border-[#C6A769]/20 bg-[#C6A769]/5"
            variants={pulseVariants}
            animate="animate"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A769] animate-pulse" />
            <span className="text-xs text-[#C6A769]/80 tracking-widest uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
              Relacione-se
            </span>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px mb-8 md:mb-10"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(198, 167, 105, 0.3), transparent)',
          }}
          variants={itemVariants}
        />

        {/* Buttons */}
        <motion.div className="space-y-3" variants={containerVariants}>
          {buttons.map((button) => (
            <motion.div key={button.id} variants={itemVariants}>
              {button.disabled ? (
                /* Waitlist / Disabled Button */
                <div className="bio-btn-waitlist group relative rounded-2xl p-[1px] overflow-hidden">
                  {/* Static border */}
                  <div className="absolute inset-0 rounded-2xl border border-[#C6A769]/15" />
                  
                  <div className="relative rounded-2xl px-5 py-4 sm:px-6 sm:py-5 bg-[#0a0a0a]/80 backdrop-blur-sm">
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#C6A769]/5 border border-[#C6A769]/10 flex items-center justify-center">
                        <span className="text-lg text-[#C6A769]/40">{button.icon}</span>
                      </div>
                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm sm:text-base text-[#F5F0E8]/40 tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {button.title}
                        </div>
                        {button.subtitle && (
                          <div className="text-xs text-[#F5F0E8]/25 mt-0.5 font-light tracking-wide" style={{ fontFamily: "'Lora', serif" }}>
                            {button.subtitle}
                          </div>
                        )}
                      </div>
                      {/* Waitlist Badge */}
                      <div className="flex-shrink-0">
                        <span className="text-[10px] tracking-widest uppercase text-[#C6A769]/40 border border-[#C6A769]/15 px-2.5 py-1 rounded-full" style={{ fontFamily: "'Inter', sans-serif" }}>
                          Em breve
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Active Button */
                <a
                  href={button.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bio-btn-active group relative block rounded-2xl p-[1px] overflow-hidden transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
                >
                  {/* Animated gradient border on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'conic-gradient(from 0deg, #C6A769, #C48A8A, #C6A769, #C48A8A, #C6A769)',
                    }}
                  />
                  {/* Default border */}
                  <div className="absolute inset-0 rounded-2xl border border-[#F5F0E8]/8 group-hover:border-transparent transition-all duration-500" />

                  <div className={`relative rounded-2xl px-5 py-4 sm:px-6 sm:py-5 bg-[#0c0c0f]/95 backdrop-blur-md group-hover:bg-[#0f0f14]/95 transition-all duration-500`}>
                    {/* Gradient accent overlay */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${button.gradient || ''} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative flex items-center gap-4">
                      {/* Icon */}
                      <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#C6A769]/10 border border-[#C6A769]/20 flex items-center justify-center group-hover:bg-[#C6A769]/15 group-hover:border-[#C6A769]/40 transition-all duration-500">
                        <span className="text-lg text-[#C6A769] group-hover:scale-110 transition-transform duration-300">{button.icon}</span>
                      </div>
                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <div className="font-semibold text-sm sm:text-base text-[#F5F0E8] tracking-wide group-hover:text-white transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                            {button.title}
                          </div>
                          {button.badge && (
                            <motion.span 
                              className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#C6A769]/20 to-[#C6A769]/10 border border-[#C6A769]/40 text-[9px] sm:text-[10px] text-[#C6A769] font-semibold tracking-widest uppercase whitespace-nowrap"
                              animate={{ boxShadow: ['0 0 0px rgba(198,167,105,0)', '0 0 12px rgba(198,167,105,0.4)', '0 0 0px rgba(198,167,105,0)'] }}
                              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                            >
                              {button.badge}
                            </motion.span>
                          )}
                        </div>
                        {button.subtitle && (
                          <div className="text-xs text-[#F5F0E8]/50 mt-0.5 font-light tracking-wide group-hover:text-[#F5F0E8]/70 transition-colors duration-300" style={{ fontFamily: "'Lora', serif" }}>
                            {button.subtitle}
                          </div>
                        )}
                      </div>
                      {/* Arrow */}
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F5F0E8]/5 flex items-center justify-center group-hover:bg-[#C6A769]/20 transition-all duration-300">
                        <svg
                          className="w-3.5 h-3.5 text-[#F5F0E8]/40 group-hover:text-[#C6A769] group-hover:translate-x-0.5 transition-all duration-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-12 md:mt-16 text-center"
          variants={itemVariants}
        >
          <div className="h-px mb-6" style={{ background: 'linear-gradient(90deg, transparent, rgba(198, 167, 105, 0.15), transparent)' }} />
          <p
            className="text-[11px] text-[#F5F0E8]/20 tracking-[0.2em] uppercase"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Sol Lima · Relacione-se
          </p>
        </motion.div>
      </motion.main>
    </div>
  );
}
