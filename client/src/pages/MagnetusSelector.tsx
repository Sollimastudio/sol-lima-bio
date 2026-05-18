import { motion } from 'framer-motion';

const magnetusOptions = [
  {
    id: 'mulheres',
    title: 'MAGNETUS III',
    eyebrow: 'Para mulheres',
    description: 'Presença feminina, magnetismo emocional e reposicionamento sem mendigar validação.',
    href: 'https://magnetus-Sales-page.vercel.app',
    icon: '♀',
    gradient: 'from-rose-500/25 via-pink-500/10 to-fuchsia-500/20',
    cta: 'Entrar no Magnetus Feminino',
  },
  {
    id: 'homens',
    title: 'MAGNETUS III',
    eyebrow: 'Para homens',
    description: 'Postura masculina, domínio emocional e presença que não precisa fazer barulho para ser sentida.',
    href: 'https://magnetus-homens.vercel.app',
    icon: '♂',
    gradient: 'from-blue-500/25 via-indigo-500/10 to-cyan-500/20',
    cta: 'Entrar no Magnetus Masculino',
  },
];

export default function MagnetusSelector() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#050508] text-[#F5F0E8]">
      <div
        className="fixed inset-0 opacity-35"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 0%, rgba(198,167,105,.34), transparent 40%), radial-gradient(circle at 0% 100%, rgba(196,138,138,.22), transparent 38%), radial-gradient(circle at 100% 100%, rgba(62,95,180,.24), transparent 35%)',
        }}
      />

      <motion.div
        className="fixed top-[-120px] left-1/2 h-[340px] w-[340px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: 'rgba(198,167,105,.16)' }}
        animate={{ scale: [1, 1.12, 1], opacity: [.35, .58, .35] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div
        className="fixed inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <motion.main
        className="relative z-10 max-w-lg mx-auto px-5 py-9 sm:py-14 md:py-20"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <header className="text-center mb-8 sm:mb-10">
          <motion.div
            className="relative mx-auto mb-6 h-32 w-32 sm:h-36 sm:w-36"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.div
              className="absolute -inset-1 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #C6A769, #C48A8A, #6B7FD7, #C6A769)',
                filter: 'blur(3px)',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
            />
            <div className="relative h-full w-full rounded-full bg-[#0a0a0a] p-[3px] shadow-2xl shadow-[#C6A769]/10">
              <div className="relative h-full w-full overflow-hidden rounded-full bg-gradient-to-br from-[#161318] via-[#09090b] to-[#1c1115] flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(198,167,105,.28),transparent_42%)]" />
                <div className="relative h-20 w-20 rounded-full border border-[#C6A769]/35 bg-[#C6A769]/10 flex items-center justify-center">
                  <span className="text-5xl">✧</span>
                </div>
                <motion.div
                  className="absolute inset-3 rounded-full border border-[#C6A769]/20"
                  animate={{ scale: [1, 1.05, 1], opacity: [.35, .8, .35] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-[#C6A769]/25 bg-[#C6A769]/10"
            animate={{ boxShadow: ['0 0 0px rgba(198,167,105,0)', '0 0 18px rgba(198,167,105,.22)', '0 0 0px rgba(198,167,105,0)'] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A769]" />
            <span className="text-[10px] tracking-[0.22em] uppercase text-[#C6A769] font-semibold">
              Escolha seu acesso
            </span>
          </motion.div>

          <h1
            className="text-4xl sm:text-5xl font-bold leading-[0.98] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#F5F0E8] via-[#C6A769] to-[#F5F0E8]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Qual Magnetus é para você?
          </h1>

          <p
            className="mt-4 text-sm sm:text-base text-[#F5F0E8]/68 leading-relaxed max-w-sm mx-auto"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Dois caminhos. Uma decisão. Clique no seu perfil e vá direto para a página certa.
          </p>
        </header>

        <section className="space-y-4">
          {magnetusOptions.map((option, index) => (
            <motion.a
              key={option.id}
              href={option.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-[28px] p-[1px] overflow-hidden active:scale-[0.98] transition-transform"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + index * 0.12, duration: 0.55 }}
            >
              <div className="absolute inset-0 rounded-[28px] border border-[#F5F0E8]/10 group-hover:border-transparent transition-colors" />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'conic-gradient(from 0deg, #C6A769, #C48A8A, #C6A769, #6B7FD7, #C6A769)' }}
              />

              <div className="relative rounded-[28px] bg-[#0c0c0f]/95 backdrop-blur-md px-5 py-5 sm:px-6 sm:py-6 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${option.gradient} opacity-60 group-hover:opacity-100 transition-opacity`} />
                <div className="relative flex gap-4 items-center">
                  <div className="w-14 h-14 rounded-2xl border border-[#C6A769]/30 bg-[#C6A769]/10 flex items-center justify-center shrink-0">
                    <span className="text-2xl text-[#C6A769]">{option.icon}</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-[#C6A769] font-semibold mb-1">
                      {option.eyebrow}
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {option.title}
                    </h2>
                    <p className="mt-1 text-xs sm:text-sm text-[#F5F0E8]/62 leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
                      {option.description}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#C6A769]">
                      {option.cta}
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </section>

        <footer className="mt-10 text-center">
          <a href="/" className="text-xs text-[#F5F0E8]/38 hover:text-[#C6A769] transition-colors">
            Voltar para a bio da Sol
          </a>
          <p className="mt-5 text-[10px] text-[#F5F0E8]/20 tracking-[0.2em] uppercase">
            Sol Lima · Relacione-se
          </p>
        </footer>
      </motion.main>
    </div>
  );
}
