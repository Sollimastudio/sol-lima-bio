const values = ['Verdade', 'Discernimento', 'Autorresponsabilidade', 'Empatia', 'Limites', 'Fé', 'Processo', 'Liberdade interna', 'Legado'];

const projects = [
  ['Morte em Vida: A Anatomia do Feminicídio Emocional', 'Em breve', 'Uma obra sobre apagamento, autoanulação, tensão, hipervigilância e morte emocional em vida.'],
  ['Posicione-se', 'Em breve', 'Um livro sobre discernimento, influência, responsabilidade, padrões e frutos.'],
  ['Método Posicione-se™', 'Em breve', 'A travessia de discernimento, autorresponsabilidade e posicionamento sustentado.'],
  ['Magnetus™', 'Acessar', 'Protocolo de presença para homens e mulheres.'],
  ['MINDSETmagro™', 'Em breve', 'Transforme sua mente para redesenhar seu corpo. Um protocolo de desobesidade mental.']
];

export default function SobrePage() {
  return (
    <main style={styles.shell}>
      <nav style={styles.nav}>
        <a href="/" style={styles.navLink}>Início</a>
        <a href="/relacione-se" style={styles.navLink}>Relacione-se</a>
        <a href="/arvore" style={styles.navLink}>Árvore</a>
      </nav>

      <section style={styles.hero}>
        <div style={styles.heroCopy}>
          <p style={styles.eyebrow}>Relacione-se® apresenta</p>
          <h1 style={styles.title}>Sol Lima</h1>
          <p style={styles.lead}>
            Escritora, analista comportamental DISC, Coach Life Professional, formada em Master Love e Mulher Magnética, criadora do Método Posicione-se™ e do Ecossistema Relacione-se®.
          </p>
          <div style={styles.signature}>
            <strong>Esperança sem ação vira anestesia.</strong>
            <span>Esperar demais também pode ser uma forma de se abandonar.</span>
          </div>
          <div style={styles.actions}>
            <a href="/relacione-se" style={styles.primaryButton}>Conheça o Relacione-se</a>
            <a href="/arvore" style={styles.secondaryButton}>Suba na Árvore</a>
          </div>
        </div>
        <div style={styles.portraitWrap}>
          <img src="/sol-lima-hero.svg" alt="Sol Lima, criadora do Relacione-se" style={styles.portrait} />
          <div style={styles.seal}>Sua árvore, seus frutos</div>
        </div>
      </section>

      <section style={styles.section}>
        <p style={styles.eyebrow}>Minha história</p>
        <h2 style={styles.sectionTitle}>Minha história não começou na teoria. Começou na dor.</h2>
        <p style={styles.paragraph}>
          O Relacione-se® nasceu depois que eu vivi o que chamo de morte em vida: um processo de apagamento emocional, autoanulação, tensão constante e hipervigilância inconsciente, em que a pessoa continua funcionando por fora, mas vai desaparecendo por dentro.
        </p>
        <p style={styles.paragraph}>
          Eu não busquei reconstrução primeiro pela mulher em mim. Eu busquei pela mãe. Quando percebi que a minha história poderia alcançar meus filhos, algo em mim reagiu. A mulher talvez ainda estivesse fraca, confusa e ferida, mas a mãe levantou.
        </p>
        <p style={styles.paragraph}>
          Foi dessa virada que nasceu o Relacione-se®: um chamado para que, antes de se relacionar com o outro, cada pessoa aprenda a se relacionar consigo, entender seus padrões, acessar seus recursos internos e parar de buscar fora a validação que precisa reconstruir dentro.
        </p>
      </section>

      <section style={styles.panel}>
        <p style={styles.eyebrow}>CSI da mente</p>
        <h2 style={styles.sectionTitle}>Antes de reagir, eu investigo.</h2>
        <p style={styles.paragraph}>
          Eu investigo padrões, repetições, reações, vínculos, sintomas emocionais, modos operantes e frutos. Evidência não mente. Pode até ser mal interpretada, mas não mente.
        </p>
        <blockquote style={styles.quote}>Evidência não mente. Quem mente é a versão que a gente conta para não encarar o padrão.</blockquote>
      </section>

      <section style={styles.gridSection}>
        <div style={styles.missionCard}>
          <p style={styles.eyebrow}>Missão</p>
          <h2 style={styles.sectionTitle}>Transformar dor em consciência, consciência em processo e processo em propósito.</h2>
          <p style={styles.paragraph}>
            Ajudar pessoas a saírem da ignorância emocional, acessarem seus recursos internos e desenvolverem discernimento para construir vínculos, escolhas e vidas mais conscientes.
          </p>
        </div>
        <div style={styles.valuesCard}>
          <p style={styles.eyebrow}>Valores</p>
          <div style={styles.values}>{values.map((value) => <span key={value} style={styles.value}>{value}</span>)}</div>
        </div>
      </section>

      <section style={styles.section}>
        <p style={styles.eyebrow}>Livros, métodos e produtos</p>
        <h2 style={styles.sectionTitle}>Caminhos do ecossistema</h2>
        <div style={styles.projectGrid}>
          {projects.map(([title, status, desc]) => (
            <article style={styles.projectCard} key={title}>
              <span style={styles.status}>{status}</span>
              <h3 style={styles.projectTitle}>{title}</h3>
              <p style={styles.projectText}>{desc}</p>
              {title === 'Magnetus™' && <a href="https://magnetus.relacione-se.com" style={styles.smallButton}>Acessar Magnetus</a>}
            </article>
          ))}
        </div>
      </section>

      <section style={styles.cta}>
        <h2 style={styles.sectionTitle}>Antes de tentar se relacionar com o mundo, relacione-se com seus próprios recursos internos.</h2>
        <a href="/relacione-se" style={styles.primaryButton}>Comece aqui</a>
      </section>
    </main>
  );
}

const styles = {
  shell: { minHeight: '100vh', padding: 28, color: '#f5ead7', background: 'radial-gradient(circle at top right, rgba(198,154,69,.20), transparent 28rem), linear-gradient(135deg, #030302 0%, #240707 55%, #070403 100%)', fontFamily: 'Georgia, Times New Roman, serif' },
  nav: { maxWidth: 1180, margin: '0 auto 22px', display: 'flex', gap: 18, flexWrap: 'wrap' },
  navLink: { color: '#efd08a', textDecoration: 'none', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase', letterSpacing: '.14em', fontSize: 12 },
  hero: { maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0, 1.05fr) minmax(280px, .72fr)', gap: 34, alignItems: 'center', border: '1px solid rgba(198,154,69,.35)', borderRadius: 34, padding: 40, background: 'rgba(5,4,3,.72)', boxShadow: '0 30px 90px rgba(0,0,0,.42)' },
  heroCopy: { maxWidth: 760 },
  eyebrow: { color: '#efd08a', textTransform: 'uppercase', letterSpacing: '.30em', fontSize: 12, margin: '0 0 18px' },
  title: { fontSize: 'clamp(58px, 9vw, 112px)', lineHeight: .9, margin: '0 0 24px', letterSpacing: '-.06em' },
  lead: { fontFamily: 'Arial, sans-serif', fontSize: 20, lineHeight: 1.75, color: 'rgba(245,234,215,.82)' },
  signature: { border: '1px solid rgba(198,154,69,.34)', borderRadius: 24, padding: 22, marginTop: 26, background: 'rgba(255,255,255,.045)' },
  actions: { display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 26 },
  primaryButton: { display: 'inline-flex', background: 'linear-gradient(135deg, #f4d68b, #a7792e)', color: '#1b1206', padding: '15px 22px', borderRadius: 999, textDecoration: 'none', fontFamily: 'Arial, sans-serif', fontWeight: 800 },
  secondaryButton: { display: 'inline-flex', border: '1px solid rgba(244,213,138,.55)', color: '#f4d68b', padding: '14px 22px', borderRadius: 999, textDecoration: 'none', fontFamily: 'Arial, sans-serif', fontWeight: 800 },
  portraitWrap: { position: 'relative', justifySelf: 'center', width: 'min(100%, 420px)' },
  portrait: { width: '100%', borderRadius: 30, border: '1px solid rgba(239,208,138,.55)', display: 'block', boxShadow: '0 24px 70px rgba(0,0,0,.55)' },
  seal: { position: 'absolute', right: -8, bottom: 22, background: 'linear-gradient(135deg, #f4d68b, #a7792e)', color: '#1b1206', padding: '12px 16px', borderRadius: 999, fontFamily: 'Arial, sans-serif', fontWeight: 900, fontSize: 11, textTransform: 'uppercase', letterSpacing: '.12em' },
  section: { maxWidth: 980, margin: '78px auto 0' },
  panel: { maxWidth: 1080, margin: '78px auto 0', padding: 38, border: '1px solid rgba(198,154,69,.34)', borderRadius: 30, background: 'rgba(255,255,255,.045)' },
  sectionTitle: { fontSize: 'clamp(34px, 5vw, 64px)', lineHeight: 1, margin: '0 0 22px', color: '#fff5df' },
  paragraph: { fontFamily: 'Arial, sans-serif', fontSize: 18, lineHeight: 1.85, color: 'rgba(245,234,215,.76)' },
  quote: { margin: '24px 0 0', color: '#efd08a', fontSize: 'clamp(26px, 4vw, 44px)', lineHeight: 1.08 },
  gridSection: { maxWidth: 1180, margin: '78px auto 0', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(280px, .72fr)', gap: 18 },
  missionCard: { border: '1px solid rgba(198,154,69,.34)', borderRadius: 30, padding: 34, background: 'rgba(255,255,255,.045)' },
  valuesCard: { border: '1px solid rgba(198,154,69,.34)', borderRadius: 30, padding: 34, background: 'rgba(0,0,0,.24)' },
  values: { display: 'flex', flexWrap: 'wrap', gap: 10 },
  value: { border: '1px solid rgba(239,208,138,.36)', borderRadius: 999, padding: '10px 13px', color: '#efd08a', fontFamily: 'Arial, sans-serif' },
  projectGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16 },
  projectCard: { border: '1px solid rgba(198,154,69,.30)', borderRadius: 24, padding: 24, background: 'rgba(255,255,255,.045)' },
  status: { color: '#efd08a', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase', letterSpacing: '.14em', fontSize: 11 },
  projectTitle: { fontSize: 27, color: '#efd08a', margin: '14px 0 10px' },
  projectText: { fontFamily: 'Arial, sans-serif', lineHeight: 1.65, color: 'rgba(245,234,215,.72)' },
  smallButton: { display: 'inline-flex', marginTop: 12, color: '#1b1206', background: '#efd08a', borderRadius: 999, padding: '10px 14px', textDecoration: 'none', fontFamily: 'Arial, sans-serif', fontWeight: 800 },
  cta: { maxWidth: 1180, margin: '78px auto 0', textAlign: 'center', padding: 44, borderRadius: 30, border: '1px solid rgba(198,154,69,.34)', background: 'rgba(0,0,0,.24)' }
};
