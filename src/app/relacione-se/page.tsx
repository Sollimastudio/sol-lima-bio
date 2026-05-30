const ecosystem = [
  ['S.E.L.A.R', 'Acorda', 'Sinaliza o automático, espelha o padrão e provoca o primeiro clique de consciência.'],
  ['Árvore do Discernimento', 'Organiza', 'Ajuda a ler semente, solo, raízes, tronco, galhos, frutos, poda e nova semente.'],
  ['Posicione-se™', 'Transforma', 'Conduz a pessoa para discernimento, responsabilidade, vínculo consciente e posicionamento sustentado.']
];

const pillars = [
  ['Árvore do Discernimento', '/arvore', 'Ferramenta central para ler a vida antes de reagir.'],
  ['Magnetus™', 'https://magnetus.relacione-se.com', 'Protocolo de presença para homens e mulheres.'],
  ['MINDSETmagro™', 'https://mindsetmagro.relacione-se.com', 'Transforme sua mente para redesenhar seu corpo.'],
  ['Vínculos Conscientes', '#em-breve', 'Em breve: processo para amadurecer vínculos sem autoabandono.'],
  ['Método Posicione-se™', '#em-breve', 'Em breve: travessia completa de discernimento e posicionamento.'],
  ['Livros', '#livros', 'Morte em Vida e Posicione-se: em breve.']
];

export default function RelacioneSePage() {
  return (
    <main style={styles.shell}>
      <nav style={styles.nav}>
        <a href="/" style={styles.navLink}>Início</a>
        <a href="/sobre" style={styles.navLink}>Sobre Sol</a>
        <a href="/arvore" style={styles.navLink}>Árvore</a>
      </nav>

      <section style={styles.hero}>
        <p style={styles.eyebrow}>Ecossistema Relacione-se®</p>
        <h1 style={styles.title}>Antes de relacionar-se, relacione-se.</h1>
        <p style={styles.lead}>
          O Relacione-se® é o ecossistema criado por Sol Lima para ajudar pessoas a acessarem seus recursos internos, investigarem padrões, filtrarem influências e viverem vínculos com discernimento.
        </p>
        <div style={styles.actions}>
          <a href="/arvore" style={styles.primaryButton}>Suba na Árvore</a>
          <a href="/sobre" style={styles.secondaryButton}>Conheça minha história</a>
        </div>
      </section>

      <section style={styles.manifesto}>
        <p style={styles.eyebrow}>O que é</p>
        <h2 style={styles.sectionTitle}>Uma marca-mãe para transformar dor em consciência, consciência em processo e processo em propósito.</h2>
        <p style={styles.paragraph}>
          O Relacione-se® nasceu da compreensão de que muitas pessoas tentam mudar o relacionamento, o corpo, a carreira ou a vida inteira sem antes investigar a própria árvore. Tentam trocar o fruto, mas continuam regando o mesmo solo.
        </p>
        <p style={styles.paragraph}>
          Aqui, relacionamento não é só casal. É vínculo com você, com sua história, com sua fé, com seu corpo, com seus filhos, com dinheiro, com escolhas e com as narrativas que tentam pensar por você.
        </p>
      </section>

      <section style={styles.diagram}>
        <p style={styles.eyebrow}>Como o processo se conecta</p>
        <h2 style={styles.sectionTitle}>S.E.L.A.R acorda. A árvore organiza. Posicione-se transforma.</h2>
        <div style={styles.flow}>
          {ecosystem.map(([name, verb, text], index) => (
            <article style={styles.flowCard} key={name}>
              <span style={styles.flowNumber}>{index + 1}</span>
              <h3 style={styles.flowTitle}>{name}</h3>
              <strong style={styles.flowVerb}>{verb}</strong>
              <p style={styles.flowText}>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={styles.grid}>
        {pillars.map(([title, href, desc]) => (
          <a href={href} key={title} style={styles.card}>
            <h3 style={styles.cardTitle}>{title}</h3>
            <p style={styles.cardText}>{desc}</p>
          </a>
        ))}
      </section>

      <section id="livros" style={styles.books}>
        <p style={styles.eyebrow}>Livros e legado</p>
        <h2 style={styles.sectionTitle}>Em breve</h2>
        <div style={styles.bookGrid}>
          <article style={styles.bookCard}>
            <h3 style={styles.cardTitle}>Morte em Vida: A Anatomia do Feminicídio Emocional</h3>
            <p style={styles.cardText}>Uma obra sobre apagamento, autoanulação, tensão, hipervigilância e morte emocional em vida.</p>
          </article>
          <article style={styles.bookCard}>
            <h3 style={styles.cardTitle}>Posicione-se</h3>
            <p style={styles.cardText}>Um livro sobre discernimento, influência, responsabilidade, padrões e frutos.</p>
          </article>
        </div>
      </section>

      <section style={styles.cta}>
        <h2 style={styles.sectionTitle}>Quem entende o processo vive o propósito.</h2>
        <p style={styles.paragraph}>Propósito sem processo vira fantasia.</p>
        <a href="/arvore" style={styles.primaryButton}>Conheça a Árvore do Discernimento</a>
      </section>
    </main>
  );
}

const styles = {
  shell: { minHeight: '100vh', padding: '28px', color: '#F7EAD5', background: 'radial-gradient(circle at top right, rgba(211,166,72,.25), transparent 30rem), linear-gradient(135deg, #030302, #062014 42%, #210806)', fontFamily: 'Georgia, Times New Roman, serif' },
  nav: { maxWidth: '1180px', margin: '0 auto 22px', display: 'flex', gap: '18px', flexWrap: 'wrap' },
  navLink: { color: '#E3C06F', textDecoration: 'none', fontFamily: 'Arial, sans-serif', letterSpacing: '.14em', textTransform: 'uppercase', fontSize: '12px' },
  hero: { maxWidth: '1180px', margin: '0 auto', border: '1px solid rgba(227,192,111,.36)', borderRadius: '34px', padding: '56px', background: 'rgba(0,0,0,.36)', boxShadow: '0 24px 70px rgba(0,0,0,.32)' },
  eyebrow: { color: '#E3C06F', letterSpacing: '.32em', textTransform: 'uppercase', fontSize: '12px', margin: '0 0 18px' },
  title: { fontSize: 'clamp(52px, 9vw, 108px)', lineHeight: '.92', margin: '0 0 24px', letterSpacing: '-.06em' },
  lead: { fontFamily: 'Arial, sans-serif', fontSize: '21px', lineHeight: 1.75, maxWidth: '900px', color: 'rgba(247,234,213,.82)' },
  actions: { display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '28px' },
  primaryButton: { display: 'inline-flex', background: 'linear-gradient(135deg, #F4D58A, #A9782D)', color: '#1B1206', padding: '15px 22px', borderRadius: '999px', textDecoration: 'none', fontFamily: 'Arial, sans-serif', fontWeight: 800 },
  secondaryButton: { display: 'inline-flex', border: '1px solid rgba(244,213,138,.55)', color: '#F4D58A', padding: '14px 22px', borderRadius: '999px', textDecoration: 'none', fontFamily: 'Arial, sans-serif', fontWeight: 800 },
  manifesto: { maxWidth: '1180px', margin: '72px auto 28px' },
  sectionTitle: { fontSize: 'clamp(34px, 5vw, 66px)', lineHeight: 1, margin: '0 0 22px' },
  paragraph: { fontFamily: 'Arial, sans-serif', fontSize: '18px', lineHeight: 1.85, color: 'rgba(247,234,213,.76)' },
  diagram: { maxWidth: '1180px', margin: '70px auto 30px' },
  flow: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginTop: '24px' },
  flowCard: { border: '1px solid rgba(227,192,111,.32)', borderRadius: '26px', padding: '28px', background: 'rgba(255,255,255,.045)', minHeight: '280px' },
  flowNumber: { display: 'inline-grid', placeItems: 'center', width: '44px', height: '44px', borderRadius: '50%', background: '#E3C06F', color: '#1B1206', fontFamily: 'Arial, sans-serif', fontWeight: 900 },
  flowTitle: { color: '#F4D58A', fontSize: '34px', margin: '22px 0 8px' },
  flowVerb: { display: 'block', color: '#fff3d3', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase', letterSpacing: '.12em' },
  flowText: { fontFamily: 'Arial, sans-serif', lineHeight: 1.7, color: 'rgba(247,234,213,.74)' },
  grid: { maxWidth: '1180px', margin: '30px auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' },
  card: { border: '1px solid rgba(227,192,111,.30)', borderRadius: '24px', padding: '26px', background: 'rgba(0,0,0,.22)', textDecoration: 'none', color: '#F7EAD5', minHeight: '190px' },
  cardTitle: { color: '#F4D58A', fontSize: '28px', margin: '0 0 12px' },
  cardText: { fontFamily: 'Arial, sans-serif', lineHeight: 1.7, color: 'rgba(247,234,213,.74)' },
  books: { maxWidth: '1180px', margin: '70px auto 26px' },
  bookGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' },
  bookCard: { border: '1px solid rgba(227,192,111,.30)', borderRadius: '24px', padding: '26px', background: 'rgba(255,255,255,.045)' },
  cta: { maxWidth: '1180px', margin: '30px auto 0', textAlign: 'center', padding: '50px', borderRadius: '30px', border: '1px solid rgba(227,192,111,.34)', background: 'rgba(0,0,0,.28)' }
};
