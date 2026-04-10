import { motion } from 'framer-motion';

/**
 * SOL LIMA - PREMIUM EDITORIAL LINK NA BIO
 * 
 * Design Philosophy: Minimalismo Editorial Luxuoso
 * - Tipografia como protagonista (Playfair Display + Lora + Inter)
 * - Espaço em branco generoso
 * - Paleta: Off-white quente, preto sofisticado, dourado suave, rosé queimado
 * - Animações suaves e elegantes
 * - Botões com elevação e sombra sofisticada
 */

interface LinkButton {
  id: string;
  title: string;
  subtitle: string;
  href?: string;
  action?: () => void;
  disabled?: boolean;
  isComingSoon?: boolean;
  isLegacy?: boolean;
}

export default function Home() {
  const buttons: LinkButton[] = [
    {
      id: 'teste-feminino',
      title: 'DIAGNÓSTICO: ANATOMIA DA PRESENÇA FEMININA',
      subtitle: 'Descubra por que você é invisível onde deveria ser rainha.',
      href: 'https://presenca-feminina.vercel.app/',
    },
    {
      id: 'teste-masculino',
      title: 'PROTOCOLO: DOMÍNIO E RUÍNA MASCULINA',
      subtitle: 'Onde o seu código de autoridade foi prejudicado?',
      href: 'https://diagnostico-presenca-masculina.vercel.app/',
    },
    {
      id: 'morte-vida',
      title: 'LISTA DE ESPERA: MORTE EM VIDA',
      subtitle: 'Para quem pode carregar o próprio cadáver.',
      disabled: true,
      isComingSoon: true,
      isLegacy: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background Texture Overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310419663032454638/2DfqFw2tE4RAuJ8B9HaHye/texture-overlay-csEYCqPeXJ4ge36H2GX5GU.webp)',
          backgroundSize: '200px 200px',
        }}
      />

      <motion.main
        className="relative container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-28"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.div
          className="text-center mb-12 md:mb-16 lg:mb-20"
          variants={itemVariants}
        >
          {/* Hero Background Image */}
          <div className="mb-8 md:mb-12 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-0">
            <img
              src="/hero-reposicione.jpg"
              alt="Sol Lima - Reposicione-se"
              className="w-full h-auto rounded-2xl md:rounded-3xl shadow-md md:shadow-lg object-cover"
              loading="lazy"
            />
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-3 md:mb-4 text-foreground leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}>
            Sol Lima
          </h1>

          {/* Bio */}
          <p className="text-base sm:text-lg md:text-xl text-foreground/75 font-light max-w-md mx-auto leading-relaxed px-2"
             style={{ fontFamily: "'Lora', serif" }}>
            Se o seu posicionamento atual não te trouxe o que você merece, você não está posicionado. Você está estagnado.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="divider-gold mb-12 md:mb-16"
          variants={itemVariants}
        />

        {/* Buttons Grid */}
        <motion.div
          className="space-y-3 md:space-y-4"
          variants={containerVariants}
        >
          {buttons.map((button) => (
            <motion.div key={button.id} variants={itemVariants}>
              {button.href ? (
                <a
                  href={button.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium group block text-left hover:bg-primary/95 focus:outline-none focus:ring-2 focus:ring-muted focus:ring-offset-2 focus:ring-offset-background transition-all"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="font-semibold text-base md:text-lg leading-snug">
                        {button.title}
                      </div>
                      {button.subtitle && (
                        <div className="text-sm opacity-70 mt-1.5 font-light">
                          {button.subtitle}
                        </div>
                      )}
                    </div>
                    <div className="text-primary-foreground/60 group-hover:text-primary-foreground transition-colors flex-shrink-0">
                      →
                    </div>
                  </div>
                </a>
              ) : (
                <button
                  onClick={button.action}
                  disabled={button.disabled}
                  className={
                    button.isLegacy
                      ? 'btn-premium-legacy group text-left w-full'
                      : `btn-premium group text-left w-full hover:bg-primary/95 focus:outline-none focus:ring-2 focus:ring-muted focus:ring-offset-2 focus:ring-offset-background transition-all ${
                          button.disabled ? 'opacity-50 cursor-not-allowed hover:bg-primary' : ''
                        }`
                  }
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="font-semibold text-base md:text-lg leading-snug">
                        {button.title}
                      </div>
                      {button.subtitle && (
                        <div className="text-sm opacity-70 mt-1.5 font-light">
                          {button.subtitle}
                        </div>
                      )}
                    </div>
                    <div className="text-primary-foreground/60 group-hover:text-primary-foreground transition-colors flex-shrink-0">
                      →
                    </div>
                  </div>
                </button>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Spacing */}
        <motion.div
          className="mt-12 md:mt-16 lg:mt-20 text-center text-xs md:text-sm text-foreground/40"
          variants={itemVariants}
        >
          <p style={{ fontFamily: "'Lora', serif" }}>Desenvolvido com elegância</p>
        </motion.div>
      </motion.main>
    </div>
  );
}
