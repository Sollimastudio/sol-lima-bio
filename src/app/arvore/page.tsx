const stages = [
  ['1', 'Semente', 'O que estou plantando?', 'Atitudes conscientes.'],
  ['2', 'Solo', 'Em que terreno isso cai?', 'Mindset e sistema operacional.'],
  ['3', 'Raízes', 'De onde vem esse padrão?', 'Origem dos padrões.'],
  ['4', 'Tronco', 'O que sustenta minha posição?', 'Discernimento e metacognição.'],
  ['5', 'Galhos', 'Onde isso aparece?', 'Vínculos e áreas da vida.'],
  ['6', 'Frutos', 'O que minha vida está produzindo?', 'Consequências e resultados.'],
  ['7', 'Poda', 'O que precisa sair?', 'Limites e reorganização.'],
  ['8', 'Nova semente', 'O que vou plantar agora?', 'Recomeço consciente.']
];

const commands = [
  ['Suba na árvore', 'Saia da reação imediata e observe o todo.'],
  ['Deixe na árvore', 'Suspenda o julgamento antes de decidir.'],
  ['Desça da árvore', 'Volte para a vida com decisão consciente.'],
  ['Sua árvore, seus frutos', 'Assuma o que sua vida está produzindo.']
];

export default function ArvorePage() {
  return (
    <main style={styles.shell}>
      <header style={styles.header}>
        <a href="/" style={styles.brand}><span style={styles.treeMark}>♣</span> Relacione-se®</a>
        <nav style={styles.nav}>
          <a href="/" style={styles.navLink}>Início</a>
          <a href="/sobre" style={styles.navLink}>Sobre</a>
          <a href="/relacione-se" style={styles.navLink}>Relacione-se</a>
          <a href="/arvore" style={styles.navButton}>Área da Árvore</a>
        </nav>
      </header>

      <section style={styles.hero}>
        <div style={styles.heroCopy}>
          <span style={styles.badge}>Método Posicione-se™</span>
          <h1 style={styles.title}>Árvore do Discernimento</h1>
          <p style={styles.subtitle}>Antes de reagir ao fruto, aprenda a ler a árvore.</p>
          <p style={styles.lead}>Uma estrutura para investigar padrões, acessar recursos internos e voltar para a vida com discernimento.</p>
          <a href="#mapa" style={styles.primaryButton}>Suba na árvore</a>
        </div>
        <div style={styles.heroArt} aria-hidden="true">
          <div style={styles.treeTop}>✦</div>
          <div style={styles.canopy}>🌳</div>
          <div style={styles.roots}>╱╲╱╲╱╲</div>
        </div>
      </section>

      <section style={styles.storySection}>
        <h2 style={styles.sectionTitle}>A história da árvore</h2>
        <div style={styles.storyGrid}>
          <div style={styles.memoryCard}>
            <div style={styles.branchArt}>🌿</div>
            <strong>O Cajueiro de Pirangi</strong>
            <span>Natal/RN</span>
          </div>
          <article style={styles.textPanel}>
            <p>
              Eu sempre amei árvores. Para mim, árvore é estrutura, sombra, frescor e fruto. Mas a origem simbólica deste método ganhou forma na minha primeira viagem para ver o mar, em Natal/RN.
            </p>
            <p>
              Eu achei que o grande impacto seria o mar. Mas foi o Cajueiro de Pirangi — o maior cajueiro do mundo — que me atravessou. O cheiro do caju, a abundância dos frutos, os galhos tocando o chão e subindo de novo, e a vista do mirante mostrando que uma floresta inteira podia continuar a partir de uma única árvore.
            </p>
            <p>
              Foi ali que a árvore deixou de ser só símbolo. Virou estrutura, método e caminho.
            </p>
          </article>
        </div>
      </section>

      <section id="mapa" style={styles.mapSection}>
        <h2 style={styles.sectionTitle}>Veja a árvore por inteiro</h2>
        <div style={styles.infographic}>
          <div style={styles.stageColumn}>{stages.slice(0, 4).map(stageCard)}</div>
          <div style={styles.centralTree}>
            <div style={styles.fruits}>● ● ● ● ●</div>
            <div style={styles.crown}>☘ ☘ ☘</div>
            <div style={styles.trunk}></div>
            <div style={styles.rootMass}>⌁⌁⌁</div>
          </div>
          <div style={styles.stageColumn}>{stages.slice(4).map(stageCard)}</div>
        </div>
      </section>

      <section style={styles.commandsSection}>
        <h2 style={styles.sectionTitle}>Comandos da Árvore</h2>
        <div style={styles.commandsGrid}>
          {commands.map(([title, text]) => (
            <article style={styles.commandCard} key={title}>
              <div style={styles.commandIcon}>✦</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={styles.footerCta}>
        <h2>O fruto é o laudo da árvore.</h2>
        <p>Quem entende o processo vive o propósito.</p>
        <a href="/relacione-se" style={styles.footerButton}>Conheça o Relacione-se®</a>
      </section>
    </main>
  );
}

function stageCard([number, title, question, desc]) {
  return (
    <article style={styles.stageCard} key={title}>
      <span style={styles.stageNumber}>{number}</span>
      <div>
        <h3 style={styles.stageTitle}>{title}</h3>
        <strong style={styles.stageQuestion}>{question}</strong>
        <p style={styles.stageDesc}>{desc}</p>
      </div>
    </article>
  );
}

const styles = {
  shell: { minHeight: '100vh', background: '#f7edda', color: '#2d1712', fontFamily: 'Georgia, Times New Roman, serif' },
  header: { position: 'sticky', top: 0, zIndex: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 18, padding: '18px 6vw', background: 'linear-gradient(90deg,#080403,#190707)', borderBottom: '1px solid rgba(195,149,58,.45)' },
  brand: { color: '#fff4dc', textDecoration: 'none', fontSize: 25, fontWeight: 700, letterSpacing: '.04em' },
  treeMark: { color: '#d2a748', marginRight: 8 },
  nav: { display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' },
  navLink: { color: '#fff4dc', textDecoration: 'none', fontFamily: 'Arial, sans-serif', fontSize: 14 },
  navButton: { color: '#f4d58a', textDecoration: 'none', fontFamily: 'Arial, sans-serif', border: '1px solid #b98a32', padding: '10px 16px', borderRadius: 8 },
  hero: { display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(280px, .9fr)', gap: 24, alignItems: 'center', padding: '70px 6vw 58px', background: 'radial-gradient(circle at 75% 45%, rgba(199,157,64,.18), transparent 24rem), #fbf1de' },
  heroCopy: { maxWidth: 650 },
  badge: { display: 'inline-flex', color: '#631925', border: '1px solid #d0a04e', borderRadius: 8, padding: '8px 14px', marginBottom: 18, background: 'rgba(255,255,255,.55)' },
  title: { fontSize: 'clamp(50px, 8vw, 98px)', lineHeight: .92, color: '#5a1420', margin: '0 0 18px', letterSpacing: '-.055em' },
  subtitle: { color: '#9c6426', fontSize: 'clamp(22px,3vw,34px)', fontStyle: 'italic', margin: '0 0 18px' },
  lead: { fontFamily: 'Arial, sans-serif', fontSize: 19, lineHeight: 1.65, maxWidth: 520 },
  primaryButton: { display: 'inline-flex', background: 'linear-gradient(135deg,#701827,#250707)', color: '#fff4dc', border: '1px solid #c59a44', padding: '14px 28px', borderRadius: 12, textDecoration: 'none', fontWeight: 800, fontFamily: 'Arial, sans-serif', boxShadow: '0 10px 22px rgba(92,26,34,.25)' },
  heroArt: { minHeight: 360, display: 'grid', placeItems: 'center', color: '#6f4a19', position: 'relative' },
  treeTop: { position: 'absolute', top: 20, color: '#c4973f' },
  canopy: { fontSize: 'clamp(150px, 22vw, 260px)', filter: 'drop-shadow(0 20px 18px rgba(60,35,12,.25))' },
  roots: { position: 'absolute', bottom: 40, fontSize: 46, color: '#56351c', opacity: .72 },
  storySection: { padding: '48px 6vw 28px' },
  sectionTitle: { textAlign: 'center', fontSize: 'clamp(34px, 5vw, 58px)', color: '#2d1712', margin: '0 0 28px' },
  storyGrid: { maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(260px,.78fr) minmax(0,1.22fr)', gap: 26, alignItems: 'stretch' },
  memoryCard: { border: '2px solid #c79d40', borderRadius: 18, background: '#fff8ea', minHeight: 260, display: 'grid', placeItems: 'center', textAlign: 'center', boxShadow: '0 14px 32px rgba(64,34,12,.12)' },
  branchArt: { fontSize: 86, marginBottom: 8 },
  textPanel: { border: '1px solid #d2a748', borderRadius: 18, background: '#fff8ea', padding: 28, fontFamily: 'Arial, sans-serif', fontSize: 17, lineHeight: 1.72 },
  mapSection: { padding: '36px 6vw' },
  infographic: { maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(250px, .78fr) minmax(250px, 1fr) minmax(250px, .78fr)', gap: 24, alignItems: 'center' },
  stageColumn: { display: 'grid', gap: 15 },
  stageCard: { display: 'flex', gap: 14, alignItems: 'center', border: '1px solid #c79d40', borderRadius: 14, padding: 15, background: '#fff8ea', boxShadow: '0 10px 24px rgba(64,34,12,.10)' },
  stageNumber: { width: 42, height: 42, borderRadius: '50%', display: 'grid', placeItems: 'center', background: '#631925', color: '#fff5df', fontWeight: 900, flex: '0 0 auto' },
  stageTitle: { margin: '0 0 4px', color: '#2d1712', fontSize: 24 },
  stageQuestion: { display: 'block', fontFamily: 'Arial, sans-serif', fontSize: 13, color: '#351f17' },
  stageDesc: { margin: '5px 0 0', fontFamily: 'Arial, sans-serif', fontSize: 13, color: '#4c392d' },
  centralTree: { minHeight: 520, display: 'grid', justifyItems: 'center', alignContent: 'center', position: 'relative' },
  fruits: { color: '#b68325', fontSize: 24, letterSpacing: 16, marginBottom: -12 },
  crown: { color: '#476028', fontSize: 'clamp(88px, 15vw, 160px)', lineHeight: .8, filter: 'drop-shadow(0 10px 8px rgba(50,40,20,.18))' },
  trunk: { width: 54, height: 150, background: 'linear-gradient(90deg,#3a2112,#8b5c2d,#3a2112)', borderRadius: '30px 30px 10px 10px', marginTop: -14 },
  rootMass: { color: '#5a351b', fontSize: 78, marginTop: -20 },
  commandsSection: { padding: '30px 6vw 56px' },
  commandsGrid: { maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: 18 },
  commandCard: { border: '1px solid #c79d40', borderRadius: 16, background: '#fff8ea', padding: 22, textAlign: 'center', minHeight: 190 },
  commandIcon: { width: 72, height: 72, margin: '0 auto 14px', borderRadius: '50%', background: '#12351f', color: '#d4aa48', display: 'grid', placeItems: 'center', fontSize: 28, border: '2px solid #d4aa48' },
  footerCta: { background: 'linear-gradient(135deg,#220707,#651927)', color: '#fff4dc', textAlign: 'center', padding: '54px 6vw 68px' },
  footerButton: { display: 'inline-flex', color: '#fff4dc', border: '1px solid #d4aa48', background: '#6b1726', textDecoration: 'none', padding: '14px 28px', borderRadius: 12, fontFamily: 'Arial, sans-serif', fontWeight: 800 }
};
