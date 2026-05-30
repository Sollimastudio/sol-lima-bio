const links = [
  { href: '/relacione-se', label: 'Relacione-se®', desc: 'A origem, missão, valores e propósito do ecossistema.' },
  { href: '/arvore', label: 'Árvore do Discernimento', desc: 'O mapa do Método Posicione-se™: semente, solo, raízes, tronco, galhos, frutos, poda e nova semente.' },
  { href: 'https://magnetus.relacione-se.com', label: 'Magnetus™', desc: 'Protocolo de presença para homens e mulheres.' },
  { href: 'https://mindsetmagro.relacione-se.com', label: 'MINDSETmagro™', desc: 'Transforme sua mente para redesenhar seu corpo.' }
];

const phrases = [
  'Antes de relacionar-se, relacione-se.',
  'Evidência não mente. Quem mente é a versão que a gente conta para não encarar o padrão.',
  'Quem entende o processo vive o propósito.',
  'O fruto é o laudo da árvore.'
];

export default function HomePage() {
  return (
    <main style={styles.shell}>
      <section style={styles.hero}>
        <div style={styles.heroText}>
          <p style={styles.eyebrow}>Sol Lima • Relacione-se®</p>
          <h1 style={styles.title}>Esperança sem ação vira anestesia.</h1>
          <p style={styles.lead}>
            Eu ensino pessoas a investigarem padrões, filtrarem influências, acessarem seus recursos internos e se posicionarem com consciência antes de repetir a própria dor.
          </p>
          <div style={styles.actions}>
            <a href="/relacione-se" style={styles.primaryButton}>Conheça o Relacione-se®</a>
            <a href="/arvore" style={styles.secondaryButton}>Suba na Árvore</a>
          </div>
        </div>
        <div style={styles.portraitCard}>
          <div style={styles.photoPlaceholder}>
            <span style={styles.photoInitial}>SOL</span>
            <small style={styles.photoHint}>adicione sua foto em public/sol-retrato-relacione-se.jpeg</small>
          </div>
          <div style={styles.seal}>Sua árvore, seus frutos</div>
        </div>
      </section>

      <section style={styles.story}>
        <p style={styles.eyebrow}>CSI da mente</p>
        <h2 style={styles.sectionTitle}>Antes de reagir, eu investigo.</h2>
        <p style={styles.paragraph}>
          O Relacione-se® nasceu depois de um processo de morte em vida: apagamento emocional, autoanulação, tensão constante e hipervigilância inconsciente. A virada não veio primeiro pela mulher em mim. Veio pela mãe. Quando percebi que minha história poderia alcançar meus filhos, algo levantou.
        </p>
        <p style={styles.paragraph}>
          Dessa travessia nasceu uma linguagem autoral: investigar evidências emocionais, padrões, modos operantes, vínculos e frutos. Não para culpar o fruto, mas para entender a árvore.
        </p>
      </section>

      <section style={styles.linkGrid}>
        {links.map((link) => (
          <a href={link.href} key={link.label} style={styles.linkCard}>
            <span style={styles.cardLabel}>{link.label}</span>
            <p style={styles.cardDesc}>{link.desc}</p>
          </a>
        ))}
      </section>

      <section style={styles.phrases}>
        {phrases.map((phrase) => (
          <blockquote key={phrase} style={styles.quote}>{phrase}</blockquote>
        ))}
      </section>
    </main>
  );
}

const styles = {
  shell: {
    minHeight: '100vh',
    color: '#F7EAD5',
    background: 'radial-gradient(circle at top right, rgba(211,166,72,.24), transparent 32rem), linear-gradient(135deg, #040302 0%, #240707 48%, #070403 100%)',
    padding: '28px',
    fontFamily: 'Georgia, Times New Roman, serif'
  },
  hero: {
    maxWidth: '1180px',
    margin: '0 auto',
    minHeight: '78vh',
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1.08fr) minmax(280px, .68fr)',
    gap: '36px',
    alignItems: 'center',
    border: '1px solid rgba(211,166,72,.34)',
    borderRadius: '34px',
    padding: '56px',
    background: 'rgba(5,4,3,.72)',
    boxShadow: '0 28px 90px rgba(0,0,0,.42)'
  },
  heroText: { maxWidth: '760px' },
  eyebrow: { color: '#E3C06F', letterSpacing: '.32em', textTransform: 'uppercase', fontSize: '12px', margin: '0 0 18px' },
  title: { fontSize: 'clamp(46px, 8vw, 92px)', lineHeight: '.94', margin: '0 0 26px', letterSpacing: '-.055em' },
  lead: { fontFamily: 'Arial, sans-serif', fontSize: '20px', lineHeight: 1.75, color: 'rgba(247,234,213,.82)', margin: 0 },
  actions: { display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '34px' },
  primaryButton: { background: 'linear-gradient(135deg, #F4D58A, #A9782D)', color: '#1B1206', padding: '15px 22px', borderRadius: '999px', textDecoration: 'none', fontFamily: 'Arial, sans-serif', fontWeight: 800 },
  secondaryButton: { border: '1px solid rgba(244,213,138,.55)', color: '#F4D58A', padding: '14px 22px', borderRadius: '999px', textDecoration: 'none', fontFamily: 'Arial, sans-serif', fontWeight: 800 },
  portraitCard: { position: 'relative' },
  photoPlaceholder: { aspectRatio: '4 / 5', borderRadius: '32px', display: 'grid', placeItems: 'center', textAlign: 'center', padding: '28px', border: '1px solid rgba(244,213,138,.48)', background: 'radial-gradient(circle at top, rgba(244,213,138,.18), transparent 18rem), #130D0A' },
  photoInitial: { fontSize: '76px', color: '#F4D58A', letterSpacing: '.12em' },
  photoHint: { fontFamily: 'Arial, sans-serif', color: 'rgba(247,234,213,.58)', lineHeight: 1.4 },
  seal: { position: 'absolute', right: '-10px', bottom: '22px', background: 'linear-gradient(135deg, #F4D58A, #A9782D)', color: '#1B1206', padding: '12px 16px', borderRadius: '999px', fontFamily: 'Arial, sans-serif', fontSize: '11px', fontWeight: 900, letterSpacing: '.14em', textTransform: 'uppercase' },
  story: { maxWidth: '980px', margin: '78px auto 34px' },
  sectionTitle: { fontSize: 'clamp(34px, 5vw, 64px)', lineHeight: 1, margin: '0 0 22px' },
  paragraph: { fontFamily: 'Arial, sans-serif', fontSize: '18px', lineHeight: 1.85, color: 'rgba(247,234,213,.76)' },
  linkGrid: { maxWidth: '1180px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' },
  linkCard: { border: '1px solid rgba(211,166,72,.32)', borderRadius: '24px', padding: '26px', background: 'rgba(255,255,255,.045)', textDecoration: 'none', color: '#F7EAD5', minHeight: '190px' },
  cardLabel: { color: '#F4D58A', fontSize: '28px', lineHeight: 1.05 },
  cardDesc: { fontFamily: 'Arial, sans-serif', lineHeight: 1.65, color: 'rgba(247,234,213,.72)' },
  phrases: { maxWidth: '1180px', margin: '34px auto 0', display: 'grid', gap: '12px' },
  quote: { margin: 0, padding: '22px 24px', borderLeft: '3px solid #D3A648', background: 'rgba(0,0,0,.22)', borderRadius: '18px', color: '#F4D58A', fontSize: '24px' }
};
