const profileImage = '/sol-retrato-relacione-se.jpeg';

const pillars = [
  {
    title: 'Pedagogia Posicione-se',
    text: 'Um método para sair do automático, pensar com discernimento e transformar dor em processo.'
  },
  {
    title: 'Árvore do Discernimento',
    text: 'Semente, solo, raiz, tronco, galhos, frutos, poda e nova semente: uma estrutura simples para ler a vida sem terceirizar a consciência.'
  },
  {
    title: 'Relacione-se',
    text: 'Acesse seus recursos internos, assuma seus B.Os, processe seus frutos e viva seu propósito.'
  }
];

const credentials = [
  'Criadora da Pedagogia Posicione-se',
  'Analista comportamental DISC',
  'Formações em relacionamentos e desenvolvimento humano',
  'Estudiosa de vínculos, padrões emocionais e escolhas afetivas',
  'Autora de Morte em Vida e Posicione-se'
];

export default function SobrePage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Relacione-se apresenta</p>
          <h1>
            Sol Lima transforma caos emocional em método, consciência e posicionamento.
          </h1>
          <p className="lead">
            Eu estudo padrões, vínculos e escolhas emocionais para ajudar pessoas a deixarem de
            reagir no automático e começarem a ler os próprios frutos com discernimento.
          </p>
          <div className="signature-card">
            <span>Frase-mestra</span>
            <strong>Esperança sem ação vira anestesia.</strong>
            <p>Esperar demais também pode ser uma forma de se abandonar.</p>
          </div>
        </div>

        <div className="portrait-card" aria-label="Retrato de Sol Lima">
          <div className="portrait-frame">
            <img src={profileImage} alt="Sol Lima, criadora do método Relacione-se" />
            <div className="portrait-fallback">
              <span>Adicione a imagem em</span>
              <strong>public/sol-retrato-relacione-se.jpeg</strong>
            </div>
          </div>
          <div className="gold-seal">Sua árvore, seus frutos</div>
        </div>
      </section>

      <section className="manifesto">
        <p className="section-label">Sobre a criadora</p>
        <h2>Eu não ensino pessoas a performarem perfeição. Eu ensino a investigar processos.</h2>
        <p>
          O Relacione-se nasceu da compreensão de que a maioria das dores humanas não começa no
          relacionamento atual, no corpo atual, na crise atual ou na escolha atual. Muitas vezes,
          o fruto de hoje é apenas o laudo de uma árvore inteira que nunca foi lida com coragem.
        </p>
        <p>
          Minha missão é ensinar pessoas a subirem na árvore antes de reagirem: olhar a raiz,
          reconhecer o solo, nomear os padrões, filtrar influências, podar excessos e plantar novas
          atitudes com responsabilidade.
        </p>
      </section>

      <section className="pillars-grid">
        {pillars.map((pillar) => (
          <article className="pillar-card" key={pillar.title}>
            <span className="ornament">✦</span>
            <h3>{pillar.title}</h3>
            <p>{pillar.text}</p>
          </article>
        ))}
      </section>

      <section className="bio-band">
        <div>
          <p className="section-label">Autoridade com alma</p>
          <h2>Quem entende o processo vive o propósito.</h2>
          <p>
            Meu trabalho une comportamento humano, comunicação, vínculos, fé, metacognição,
            discernimento e linguagem autoral para criar ferramentas aplicáveis na vida real.
          </p>
        </div>
        <ul>
          {credentials.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="quote-panel">
        <p>“Não é dedo podre. É padrão repetindo.”</p>
        <span>
          A proposta não é culpar o fruto. É aprender a cuidar da árvore que continua produzindo
          o mesmo resultado.
        </span>
      </section>

      <section className="cta">
        <p className="eyebrow">Método Posicione-se</p>
        <h2>Antes de se relacionar com o mundo, relacione-se com seus próprios recursos internos.</h2>
        <a href="https://magnetus.relacione-se.com">Conheça o ecossistema Relacione-se</a>
      </section>

      <style>{`
        :root {
          --black: #050403;
          --wine: #240707;
          --wine-2: #4a1213;
          --cream: #f5ead7;
          --muted: #c9b694;
          --gold: #c69a45;
          --gold-light: #efd08a;
          --line: rgba(198, 154, 69, 0.35);
        }

        .page-shell {
          min-height: 100vh;
          color: var(--cream);
          background:
            radial-gradient(circle at 80% 10%, rgba(198,154,69,.22), transparent 24rem),
            radial-gradient(circle at 10% 30%, rgba(74,18,19,.8), transparent 28rem),
            linear-gradient(135deg, #030302 0%, var(--wine) 48%, #090403 100%);
          padding: 32px;
          font-family: Georgia, 'Times New Roman', serif;
        }

        .hero,
        .manifesto,
        .pillars-grid,
        .bio-band,
        .quote-panel,
        .cta {
          max-width: 1180px;
          margin: 0 auto;
        }

        .hero {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(320px, .72fr);
          gap: 40px;
          min-height: 84vh;
          align-items: center;
          border: 1px solid var(--line);
          border-radius: 34px;
          padding: 56px;
          position: relative;
          overflow: hidden;
          background: linear-gradient(120deg, rgba(5,4,3,.86), rgba(36,7,7,.72));
          box-shadow: 0 30px 90px rgba(0,0,0,.45);
        }

        .hero:before {
          content: 'RELACIONE-SE';
          position: absolute;
          left: -18px;
          bottom: 18px;
          font-size: clamp(72px, 12vw, 190px);
          letter-spacing: .12em;
          color: rgba(239,208,138,.045);
          white-space: nowrap;
          pointer-events: none;
        }

        .eyebrow,
        .section-label {
          color: var(--gold-light);
          text-transform: uppercase;
          letter-spacing: .32em;
          font-size: 12px;
          margin: 0 0 18px;
        }

        h1,
        h2,
        h3,
        p {
          margin-top: 0;
        }

        h1 {
          font-size: clamp(44px, 7vw, 86px);
          line-height: .96;
          letter-spacing: -.04em;
          max-width: 840px;
          margin-bottom: 28px;
        }

        .lead {
          font-family: Arial, Helvetica, sans-serif;
          font-size: clamp(18px, 2vw, 23px);
          line-height: 1.72;
          color: rgba(245,234,215,.82);
          max-width: 760px;
        }

        .signature-card {
          margin-top: 34px;
          max-width: 560px;
          padding: 24px;
          border: 1px solid var(--line);
          border-radius: 24px;
          background: rgba(255,255,255,.045);
          backdrop-filter: blur(16px);
        }

        .signature-card span {
          display: block;
          color: var(--muted);
          font-family: Arial, Helvetica, sans-serif;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: .26em;
          margin-bottom: 10px;
        }

        .signature-card strong {
          display: block;
          color: var(--gold-light);
          font-size: clamp(24px, 3vw, 36px);
          line-height: 1.1;
        }

        .signature-card p {
          font-family: Arial, Helvetica, sans-serif;
          color: rgba(245,234,215,.72);
          margin: 12px 0 0;
          line-height: 1.6;
        }

        .portrait-card {
          position: relative;
          justify-self: center;
          width: min(100%, 430px);
        }

        .portrait-frame {
          aspect-ratio: 4 / 5;
          border-radius: 34px;
          overflow: hidden;
          position: relative;
          border: 1px solid rgba(239,208,138,.55);
          background:
            linear-gradient(145deg, rgba(198,154,69,.18), transparent),
            #15100c;
          box-shadow: 0 24px 70px rgba(0,0,0,.58);
        }

        .portrait-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          filter: contrast(1.04) saturate(1.06);
        }

        .portrait-frame img[src$='.jpeg'] + .portrait-fallback {
          display: none;
        }

        .portrait-fallback {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          padding: 32px;
          text-align: center;
          font-family: Arial, Helvetica, sans-serif;
          color: var(--muted);
        }

        .portrait-fallback strong {
          color: var(--gold-light);
          display: block;
          margin-top: 8px;
        }

        .gold-seal {
          position: absolute;
          right: -18px;
          bottom: 28px;
          padding: 14px 18px;
          border-radius: 999px;
          color: #1d1305;
          background: linear-gradient(135deg, #f5d88f, #a67628);
          font-family: Arial, Helvetica, sans-serif;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .16em;
          box-shadow: 0 16px 36px rgba(0,0,0,.4);
        }

        .manifesto {
          padding: 90px 20px 48px;
        }

        .manifesto h2,
        .bio-band h2,
        .cta h2 {
          font-size: clamp(34px, 5vw, 64px);
          line-height: 1.02;
          letter-spacing: -.035em;
          color: #fff5df;
        }

        .manifesto p,
        .bio-band p {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 18px;
          line-height: 1.85;
          color: rgba(245,234,215,.74);
          max-width: 900px;
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          padding: 24px 0 70px;
        }

        .pillar-card,
        .bio-band,
        .quote-panel,
        .cta {
          border: 1px solid var(--line);
          border-radius: 28px;
          background: rgba(255,255,255,.045);
          box-shadow: 0 22px 60px rgba(0,0,0,.25);
        }

        .pillar-card {
          padding: 28px;
          min-height: 240px;
        }

        .ornament {
          color: var(--gold-light);
          font-size: 24px;
        }

        .pillar-card h3 {
          margin: 22px 0 14px;
          font-size: 30px;
          color: var(--gold-light);
        }

        .pillar-card p,
        .quote-panel span,
        .cta a {
          font-family: Arial, Helvetica, sans-serif;
        }

        .pillar-card p {
          color: rgba(245,234,215,.74);
          line-height: 1.75;
          font-size: 16px;
        }

        .bio-band {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(300px, .72fr);
          gap: 36px;
          padding: 44px;
        }

        .bio-band ul {
          margin: 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 14px;
        }

        .bio-band li {
          font-family: Arial, Helvetica, sans-serif;
          padding: 16px 18px;
          border: 1px solid var(--line);
          border-radius: 16px;
          color: rgba(245,234,215,.82);
          background: rgba(0,0,0,.18);
        }

        .quote-panel {
          margin-top: 24px;
          padding: 64px 44px;
          text-align: center;
        }

        .quote-panel p {
          color: var(--gold-light);
          font-size: clamp(36px, 6vw, 82px);
          line-height: 1;
          letter-spacing: -.04em;
          margin-bottom: 22px;
        }

        .quote-panel span {
          display: block;
          max-width: 780px;
          margin: 0 auto;
          color: rgba(245,234,215,.72);
          font-size: 18px;
          line-height: 1.7;
        }

        .cta {
          margin-top: 24px;
          padding: 54px 44px;
          text-align: center;
          margin-bottom: 32px;
        }

        .cta h2 {
          max-width: 920px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta a {
          display: inline-flex;
          margin-top: 22px;
          padding: 16px 24px;
          border-radius: 999px;
          background: linear-gradient(135deg, #f4d68b, #a7792e);
          color: #1d1305;
          text-decoration: none;
          font-weight: 800;
          letter-spacing: .03em;
        }

        @media (max-width: 900px) {
          .page-shell { padding: 16px; }
          .hero { grid-template-columns: 1fr; padding: 32px 22px; }
          .pillars-grid, .bio-band { grid-template-columns: 1fr; }
          .gold-seal { right: 12px; bottom: 12px; }
        }
      `}</style>
    </main>
  );
}
