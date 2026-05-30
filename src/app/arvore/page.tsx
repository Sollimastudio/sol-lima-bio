const stages = [
  ['Semente', 'O que estou plantando?', 'Atitudes, escolhas, impulsos e decisões depois da consciência.'],
  ['Solo', 'Em que terreno essa atitude cai?', 'Mindset, crenças, filtros mentais, influências, narrativas e ambiente interno.'],
  ['Raízes', 'De onde vem esse padrão?', 'História familiar, infância, feridas, repetições e lealdades invisíveis.'],
  ['Tronco', 'O que sustenta minha posição?', 'Discernimento, metacognição, limites, valores e autorresponsabilidade.'],
  ['Galhos', 'Onde isso aparece?', 'Vínculos: amor, família, filhos, corpo, dinheiro, fé, trabalho, identidade e influência.'],
  ['Frutos', 'O que minha vida está produzindo?', 'Consequências, paz, caos, maturidade, repetição ou propósito.'],
  ['Poda', 'O que precisa sair?', 'Padrões, crenças, hábitos, personagens, desculpas e vínculos que drenam a árvore.'],
  ['Nova Semente', 'O que vou plantar agora?', 'Nova decisão, nova postura, prática sustentada e propósito aplicado.']
];

const commands = [
  ['Suba na árvore', 'Saia da reação imediata e observe o todo antes de transformar uma dor em sentença.'],
  ['Deixe na árvore', 'Suspenda julgamento, orgulho, narrativa e impulso até passar pelo discernimento.'],
  ['Desça da árvore', 'Volte para a vida com decisão consciente: conversar, reparar, limitar, podar ou plantar.'],
  ['Sua árvore, seus frutos', 'Encerre com autorresponsabilidade: o fruto da sua vida está tentando te mostrar algo.']
];

export default function ArvorePage() {
  return (
    <main style={styles.shell}>
      <nav style={styles.nav}>
        <a href="/" style={styles.navLink}>Sol Lima</a>
        <a href="/relacione-se" style={styles.navLink}>Relacione-se®</a>
      </nav>

      <section style={styles.hero}>
        <p style={styles.eyebrow}>Método Posicione-se™</p>
        <h1 style={styles.title}>Árvore do Discernimento</h1>
        <p style={styles.lead}>
          A árvore é o mapa para suspender o julgamento, enxergar o padrão, ler os frutos e voltar para a vida com discernimento.
        </p>
        <div style={styles.mantra}>O fruto é o laudo da árvore.</div>
      </section>

      <section style={styles.grid}>
        {stages.map(([name, question, desc], index) => (
          <article style={styles.card} key={name}>
            <span style={styles.number}>{String(index + 1).padStart(2, '0')}</span>
            <h2 style={styles.cardTitle}>{name}</h2>
            <strong style={styles.question}>{question}</strong>
            <p style={styles.desc}>{desc}</p>
          </article>
        ))}
      </section>

      <section style={styles.commands}>
        <p style={styles.eyebrow}>Comandos da Árvore</p>
        <h2 style={styles.sectionTitle}>Um jeito simples de pensar antes de reagir.</h2>
        <div style={styles.commandGrid}>
          {commands.map(([name, desc]) => (
            <article style={styles.commandCard} key={name}>
              <h3 style={styles.commandTitle}>{name}</h3>
              <p style={styles.desc}>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={styles.cta}>
        <h2 style={styles.sectionTitle}>Antes de mudar o fruto, investigue a árvore.</h2>
        <p style={styles.desc}>Dor chama. Fruto denuncia. Processo organiza. Propósito sustenta.</p>
        <a href="/relacione-se" style={styles.button}>Voltar ao Relacione-se®</a>
      </section>
    </main>
  );
}

const styles = {
  shell: { minHeight: '100vh', padding: '28px', color: '#F7EAD5', background: 'radial-gradient(circle at top left, rgba(42,105,71,.34), transparent 26rem), linear-gradient(135deg, #030302, #122318 45%, #240707)', fontFamily: 'Georgia, Times New Roman, serif' },
  nav: { maxWidth: '1180px', margin: '0 auto 22px', display: 'flex', gap: '12px', justifyContent: 'space-between' },
  navLink: { color: '#E3C06F', textDecoration: 'none', fontFamily: 'Arial, sans-serif', letterSpacing: '.12em', textTransform: 'uppercase', fontSize: '12px' },
  hero: { maxWidth: '1180px', margin: '0 auto', border: '1px solid rgba(227,192,111,.36)', borderRadius: '34px', padding: '56px', background: 'rgba(0,0,0,.36)' },
  eyebrow: { color: '#E3C06F', letterSpacing: '.32em', textTransform: 'uppercase', fontSize: '12px', margin: '0 0 18px' },
  title: { fontSize: 'clamp(52px, 9vw, 110px)', lineHeight: '.92', margin: '0 0 24px', letterSpacing: '-.06em' },
  lead: { fontFamily: 'Arial, sans-serif', fontSize: '21px', lineHeight: 1.75, maxWidth: '850px', color: 'rgba(247,234,213,.82)' },
  mantra: { marginTop: '28px', color: '#E3C06F', fontSize: 'clamp(28px, 4vw, 46px)' },
  grid: { maxWidth: '1180px', margin: '26px auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' },
  card: { border: '1px solid rgba(227,192,111,.28)', borderRadius: '24px', padding: '24px', background: 'rgba(255,255,255,.045)', minHeight: '230px' },
  number: { color: '#E3C06F', fontFamily: 'Arial, sans-serif', fontWeight: 800, letterSpacing: '.18em' },
  cardTitle: { fontSize: '32px', margin: '18px 0 10px', color: '#F4D58A' },
  question: { display: 'block', fontFamily: 'Arial, sans-serif', color: '#F7EAD5', marginBottom: '10px' },
  desc: { fontFamily: 'Arial, sans-serif', lineHeight: 1.7, color: 'rgba(247,234,213,.75)' },
  commands: { maxWidth: '1180px', margin: '70px auto 26px' },
  sectionTitle: { fontSize: 'clamp(34px, 5vw, 66px)', lineHeight: 1, margin: '0 0 22px' },
  commandGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' },
  commandCard: { border: '1px solid rgba(227,192,111,.28)', borderRadius: '24px', padding: '24px', background: 'rgba(0,0,0,.24)' },
  commandTitle: { color: '#F4D58A', fontSize: '28px', margin: '0 0 12px' },
  cta: { maxWidth: '1180px', margin: '30px auto 0', borderRadius: '30px', border: '1px solid rgba(227,192,111,.34)', padding: '44px', textAlign: 'center', background: 'rgba(0,0,0,.28)' },
  button: { display: 'inline-flex', marginTop: '18px', background: 'linear-gradient(135deg, #F4D58A, #A9782D)', color: '#1B1206', padding: '15px 22px', borderRadius: '999px', textDecoration: 'none', fontFamily: 'Arial, sans-serif', fontWeight: 800 }
};
