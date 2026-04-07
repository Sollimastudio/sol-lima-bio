import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import { toast } from 'sonner';

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
  const [copiedPixKey, setCopiedPixKey] = useState(false);
  const pixKey = 'sollimalovecoach@gmail.com';

  const handlePixCopy = () => {
    navigator.clipboard.writeText(pixKey);
    setCopiedPixKey(true);
    toast.success('Chave Pix copiada!', {
      description: 'Você pode colar em seu app de banco',
      duration: 3000,
    });
    setTimeout(() => setCopiedPixKey(false), 2000);
  };

  const buttons: LinkButton[] = [
    {
      id: 'teste-masculino',
      title: 'Nível de Presença Alfa',
      subtitle: 'Descubra por que você está invisível no jogo.',
      href: 'https://diagnostico-presenca-masculina.vercel.app/',
    },
    {
      id: 'teste-feminino',
      title: 'Raio-X do Magnetismo Feminino',
      subtitle: 'O que está sabotando a sua atração agora?',
      href: 'https://presenca-feminina.vercel.app/',
    },
    {
      id: 'apoiar',
      title: 'Financie o Exército',
      subtitle: 'Pix',
      action: handlePixCopy,
    },
    {
      id: 'morte-vida',
      title: 'Morte em Vida (O Livro)',
      subtitle: 'A anatomia do feminicídio emocional. Você sabe o que é.',
      disabled: true,
      isComingSoon: true,
      isLegacy: true,
    },
    {
      id: 'posicione',
      title: 'Método Posicione-se',
      subtitle: 'Não é o mundo que te ignora. Mude o jogo.',
      disabled: true,
      isComingSoon: true,
      isLegacy: true,
    },
    {
      id: 'mentoria',
      title: 'Mentoria',
      subtitle: 'A tensão como mola para o extraordinário.',
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
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663032454638/2DfqFw2tE4RAuJ8B9HaHye/hero-sol-lima_a4d0f75e.jpg"
              alt="Sol Lima - Posicione-se"
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
            Autoconhecimento não é coach, é sobrevivência. Escolha a sua saída do cativeiro.
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
                      {button.action && !copiedPixKey ? (
                        <Copy size={18} />
                      ) : button.action && copiedPixKey ? (
                        <Check size={18} className="text-green-400" />
                      ) : (
                        '→'
                      )}
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
