'use client';

import { useMemo, useState } from 'react';

type TreeArea = 'semente' | 'solo' | 'raizes' | 'tronco' | 'galhos' | 'frutos' | 'poda' | 'novaSemente';

type Question = {
  id: number;
  area: TreeArea;
  text: string;
  pull: string;
};

type Result = {
  title: string;
  label: string;
  diagnosis: string;
  shadow: string;
  nextStep: string;
  cta: string;
};

const scale = [
  { value: 0, label: 'Nunca' },
  { value: 1, label: 'Raramente' },
  { value: 2, label: 'Às vezes' },
  { value: 3, label: 'Frequentemente' },
  { value: 4, label: 'Quase sempre' }
];

const questions: Question[] = [
  { id: 1, area: 'semente', text: 'Eu digo que quero mudar, mas continuo plantando as mesmas escolhas de ontem.', pull: 'Desejo sem decisão vira enfeite emocional.' },
  { id: 2, area: 'semente', text: 'Eu espero clareza total antes de agir e uso isso como desculpa para não começar.', pull: 'Às vezes a dúvida é só medo usando óculos de prudência.' },
  { id: 3, area: 'semente', text: 'Eu sei o que preciso fazer, mas adio porque ainda quero uma versão sem desconforto.', pull: 'Conforto demais também anestesia.' },
  { id: 4, area: 'semente', text: 'Minhas decisões nascem mais da reação do momento do que de um propósito escolhido.', pull: 'Quem não escolhe a semente, colhe o improviso.' },

  { id: 5, area: 'solo', text: 'Minha mente transforma qualquer limite em culpa.', pull: 'Culpa crônica costuma ser solo contaminado.' },
  { id: 6, area: 'solo', text: 'Eu acredito que preciso provar valor para merecer amor, respeito ou oportunidade.', pull: 'Prova de valor demais vira escravidão bonita.' },
  { id: 7, area: 'solo', text: 'Eu confundo paz com evitar conflito.', pull: 'Nem todo silêncio é paz; às vezes é só medo bem-comportado.' },
  { id: 8, area: 'solo', text: 'Meu primeiro impulso é desconfiar de mim e acreditar mais na leitura dos outros.', pull: 'Quando o solo é frágil, qualquer opinião vira sentença.' },

  { id: 9, area: 'raizes', text: 'Eu repito dores parecidas com pessoas, cenários ou nomes diferentes.', pull: 'Não é azar. É padrão trocando de roupa.' },
  { id: 10, area: 'raizes', text: 'Eu reajo hoje como alguém que ainda está tentando sobreviver ao passado.', pull: 'A raiz antiga não pede culpa. Pede leitura.' },
  { id: 11, area: 'raizes', text: 'Eu carrego papéis familiares que nunca escolhi conscientemente.', pull: 'Script herdado também dirige vida de adulto.' },
  { id: 12, area: 'raizes', text: 'Eu justifico comportamentos atuais com feridas antigas, sem transformar o padrão.', pull: 'Explicar a ferida não autoriza repetir o fruto.' },

  { id: 13, area: 'tronco', text: 'Eu negocio meus limites para não perder aprovação.', pull: 'Limite negociado por medo vira tronco oco.' },
  { id: 14, area: 'tronco', text: 'Eu mudo de opinião, postura ou presença dependendo de quem está olhando.', pull: 'Sem tronco, qualquer vento vira direção.' },
  { id: 15, area: 'tronco', text: 'Eu sei meus valores, mas na hora da pressão ajo contra eles.', pull: 'Valor que não sustenta decisão ainda não virou posição.' },
  { id: 16, area: 'tronco', text: 'Eu peço desculpa até quando só estou tentando existir com dignidade.', pull: 'Autoperdão também é estrutura.' },

  { id: 17, area: 'galhos', text: 'Minhas áreas da vida não conversam: uma parte de mim evolui enquanto outra apodrece em silêncio.', pull: 'Galho ignorado também adoece a árvore.' },
  { id: 18, area: 'galhos', text: 'Eu atraio vínculos que combinam mais com minha carência do que com minha consciência.', pull: 'Atração sem leitura vira repetição com maquiagem.' },
  { id: 19, area: 'galhos', text: 'Minha vida online mostra uma versão mais organizada do que minha vida real sustenta.', pull: 'Imagem sem raiz cobra juros emocionais.' },
  { id: 20, area: 'galhos', text: 'Eu tento resolver tudo em uma área, mas o problema aparece em várias.', pull: 'Quando o padrão é sistêmico, o galho só denuncia.' },

  { id: 21, area: 'frutos', text: 'Meus resultados atuais contradizem a história que conto para mim.', pull: 'O fruto é o laudo da árvore.' },
  { id: 22, area: 'frutos', text: 'Eu chamo de fase aquilo que já virou ciclo.', pull: 'Repetição elimina inocência.' },
  { id: 23, area: 'frutos', text: 'Eu fico procurando intenção dos outros para não olhar o efeito das minhas escolhas.', pull: 'O fruto não está debatendo. Ele está mostrando.' },
  { id: 24, area: 'frutos', text: 'Eu já tenho evidências suficientes, mas ainda espero um sinal mais confortável.', pull: 'O óbvio ignorado vira professor caro.' },

  { id: 25, area: 'poda', text: 'Eu sei o que precisa sair, mas tenho medo da versão de mim que vai existir depois do corte.', pull: 'Poda não é perda. É recuperação de energia.' },
  { id: 26, area: 'poda', text: 'Eu mantenho vínculos, hábitos ou narrativas porque já investi demais neles.', pull: 'Tempo investido não transforma dano em destino.' },
  { id: 27, area: 'poda', text: 'Eu confundo empatia com continuar disponível para o que me fere.', pull: 'Empatia sem limite vira autoabandono elegante.' },
  { id: 28, area: 'poda', text: 'Eu tento melhorar a árvore sem cortar o excesso que drena a raiz.', pull: 'Crescimento sem poda vira matagal emocional.' },

  { id: 29, area: 'novaSemente', text: 'Depois de entender o padrão, eu ainda volto para a velha escolha por familiaridade.', pull: 'Consciência sem nova semente vira palestra interna.' },
  { id: 30, area: 'novaSemente', text: 'Eu espero motivação para fazer o que já entendi que precisa ser feito.', pull: 'Posicionamento não depende de clima emocional.' },
  { id: 31, area: 'novaSemente', text: 'Eu faço planos, mas não transformo em um próximo passo simples e visível.', pull: 'Propósito sem processo vira fantasia.' },
  { id: 32, area: 'novaSemente', text: 'Eu sei onde dói, mas ainda não plantei uma decisão nova.', pull: 'Dor chama. Processo organiza. Propósito sustenta.' }
];

const results: Record<TreeArea, Result> = {
  semente: {
    title: 'Semente',
    label: 'O que você está plantando?',
    diagnosis: 'Seu ponto dominante está na decisão inicial. Você deseja mudança, mas ainda planta escolhas antigas, adiamentos e reações automáticas.',
    shadow: 'O tapete aqui: talvez você não esteja sem caminho. Talvez esteja evitando a primeira decisão que desorganiza sua desculpa favorita.',
    nextStep: 'Escolha uma decisão pequena, concreta e verificável para as próximas 24 horas. Semente sem ação vira intenção decorativa.',
    cta: 'Comece pela Pedagogia Posicione-se™ para transformar intenção em processo.'
  },
  solo: {
    title: 'Solo',
    label: 'Em que terreno isso cai?',
    diagnosis: 'Seu ponto dominante está no sistema interno: crenças, culpa, medo, narrativa e programação emocional.',
    shadow: 'O tapete aqui: você pode estar tentando plantar uma vida nova em um solo que ainda chama sobrevivência de identidade.',
    nextStep: 'Observe qual crença aparece antes da sua reação. Pergunte: isso é fato, interpretação ou ferida ativada?',
    cta: 'O Relacione-se® te ajuda a acessar recursos internos antes de buscar validação fora.'
  },
  raizes: {
    title: 'Raízes',
    label: 'De onde vem esse padrão?',
    diagnosis: 'Seu ponto dominante está na origem dos ciclos. A dor atual provavelmente é uma cena antiga usando figurino novo.',
    shadow: 'O tapete aqui: não é dedo podre, azar ou perseguição cósmica. É raiz pedindo leitura antes de virar fruto de novo.',
    nextStep: 'Rastreie a cena repetida: onde você já viu esse filme antes? Quem reagia assim? Quem você aprendeu a ser para sobreviver?',
    cta: 'A Árvore do Discernimento ensina a ler raiz antes de culpar fruto.'
  },
  tronco: {
    title: 'Tronco',
    label: 'O que sustenta sua posição?',
    diagnosis: 'Seu ponto dominante está na sustentação: valores, limites, coerência, presença e autorrespeito.',
    shadow: 'O tapete aqui: talvez você saiba o que pensa, mas ainda abandone sua posição quando alguém aperta seu medo de rejeição.',
    nextStep: 'Defina um limite que proteja seu valor mais violado. Não explique demais. Sustente com clareza.',
    cta: 'Posicione-se™ é a travessia para sair da consciência e virar sustentação real.'
  },
  galhos: {
    title: 'Galhos',
    label: 'Onde isso aparece na vida?',
    diagnosis: 'Seu ponto dominante está nas manifestações: vínculos, corpo, dinheiro, trabalho, fé, identidade e redes sociais.',
    shadow: 'O tapete aqui: o problema talvez não esteja em uma área isolada. É o mesmo padrão abrindo filiais emocionais.',
    nextStep: 'Mapeie onde esse padrão aparece. Relacionamento? Corpo? Dinheiro? Família? Rede social? O galho mostra o sistema.',
    cta: 'Relacione-se® organiza vínculos, identidade e escolhas como partes da mesma árvore.'
  },
  frutos: {
    title: 'Frutos',
    label: 'O que sua vida está produzindo?',
    diagnosis: 'Seu ponto dominante está nas evidências. Os resultados já estão mostrando o que sua narrativa tenta esconder.',
    shadow: 'O tapete aqui: você talvez não precise de mais sinais. Precisa parar de negociar com o óbvio.',
    nextStep: 'Liste três frutos que sua vida está produzindo. Sem defesa. Sem legenda bonita. Só evidência.',
    cta: 'Quem aprende a auditar frutos para de chamar padrão de destino.'
  },
  poda: {
    title: 'Poda',
    label: 'O que precisa sair?',
    diagnosis: 'Seu ponto dominante está no corte: excesso, vínculo, hábito, narrativa, culpa ou papel antigo que drena sua energia.',
    shadow: 'O tapete aqui: o que você mantém, você escolhe. Mesmo quando mantém por medo, costume ou pena.',
    nextStep: 'Escolha uma poda. Uma. O que precisa ser reduzido, encerrado, limitado ou reorganizado?',
    cta: 'A Pedagogia Posicione-se™ transforma limite em maturidade, não em culpa.'
  },
  novaSemente: {
    title: 'Nova Semente',
    label: 'O que você vai plantar agora?',
    diagnosis: 'Seu ponto dominante está no recomeço. Você já percebeu muita coisa, mas ainda precisa converter consciência em decisão nova.',
    shadow: 'O tapete aqui: entender não é mudar. Depois da consciência, permanecer na ignorância também é escolha.',
    nextStep: 'Plante uma nova semente: uma decisão, um limite, uma conversa, uma rotina ou uma recusa consciente.',
    cta: 'Quem entende o processo vive o propósito. O próximo passo é aprender o método.'
  }
};

const areaOrder: TreeArea[] = ['semente', 'solo', 'raizes', 'tronco', 'galhos', 'frutos', 'poda', 'novaSemente'];

export default function TesteDaArvorePage() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);

  const answeredCount = Object.keys(answers).length;
  const progress = Math.round((answeredCount / questions.length) * 100);
  const question = questions[current];

  const scores = useMemo(() => {
    const base = areaOrder.reduce((acc, area) => ({ ...acc, [area]: 0 }), {} as Record<TreeArea, number>);
    questions.forEach((q) => {
      base[q.area] += answers[q.id] ?? 0;
    });
    return base;
  }, [answers]);

  const dominant = useMemo(() => {
    return areaOrder.reduce((winner, area) => (scores[area] > scores[winner] ? area : winner), 'semente' as TreeArea);
  }, [scores]);

  const totalScore = Object.values(scores).reduce((sum, value) => sum + value, 0);
  const intensity = totalScore >= 88 ? 'crítico' : totalScore >= 52 ? 'moderado' : 'leve';
  const result = results[dominant];

  function answer(value: number) {
    setAnswers((prev) => ({ ...prev, [question.id]: value }));
  }

  function next() {
    if (current < questions.length - 1) {
      setCurrent((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  }

  function previous() {
    setCurrent((prev) => Math.max(0, prev - 1));
  }

  function restart() {
    setAnswers({});
    setCurrent(0);
    setShowResult(false);
  }

  if (showResult) {
    return (
      <main className="quizShell">
        <section className="resultHero">
          <p className="eyebrow">Laudo da Árvore do Discernimento</p>
          <h1>Seu ponto dominante hoje: <span>{result.title}</span></h1>
          <p className="resultLabel">{result.label}</p>
          <div className="resultBadge">Intensidade: {intensity}</div>
        </section>

        <section className="resultGrid">
          <article className="resultCard">
            <h2>O diagnóstico</h2>
            <p>{result.diagnosis}</p>
          </article>
          <article className="resultCard danger">
            <h2>O tapete emocional</h2>
            <p>{result.shadow}</p>
          </article>
          <article className="resultCard">
            <h2>Seu próximo passo</h2>
            <p>{result.nextStep}</p>
          </article>
        </section>

        <section className="scoreBoard">
          <h2>Mapa das suas áreas</h2>
          <div className="bars">
            {areaOrder.map((area) => (
              <div className="barRow" key={area}>
                <span>{results[area].title}</span>
                <div className="barTrack"><div className="barFill" style={{ width: `${Math.min(100, (scores[area] / 16) * 100)}%` }} /></div>
                <strong>{scores[area]}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="ctaBox">
          <p className="eyebrow">Relacione-se®</p>
          <h2>{result.cta}</h2>
          <p>Antes de relacionar-se, relacione-se. Acesse seus recursos internos e aprenda a ler sua árvore antes de repetir seus frutos.</p>
          <div className="ctaActions">
            <a href="/" className="primary">Conhecer o Relacione-se®</a>
            <a href="https://magnetus.relacione-se.com" className="secondary">Conhecer Magnetus™</a>
            <button type="button" onClick={restart} className="ghost">Refazer teste</button>
          </div>
        </section>
        <QuizStyles />
      </main>
    );
  }

  return (
    <main className="quizShell">
      <section className="quizIntro">
        <p className="eyebrow">Teste da Árvore do Discernimento</p>
        <h1>O fruto não mente. Vamos descobrir onde sua árvore está pedindo atenção.</h1>
        <p>Responda com veredito frio: não marque o que seria bonito. Marque o que é verdadeiro. O objetivo não é te agradar. É te localizar.</p>
        <div className="notice">Instrumento de autopercepção. Não substitui acompanhamento psicológico, médico ou terapêutico.</div>
      </section>

      <section className="quizCard">
        <div className="progressTop">
          <span>Pergunta {current + 1} de {questions.length}</span>
          <strong>{progress}% respondido</strong>
        </div>
        <div className="progressTrack"><div className="progressFill" style={{ width: `${progress}%` }} /></div>

        <p className="areaTag">{results[question.area].title}</p>
        <h2>{question.text}</h2>
        <blockquote>{question.pull}</blockquote>

        <div className="answerGrid">
          {scale.map((item) => (
            <button
              type="button"
              key={item.value}
              onClick={() => answer(item.value)}
              className={answers[question.id] === item.value ? 'answer active' : 'answer'}
            >
              <span>{item.value}</span>
              {item.label}
            </button>
          ))}
        </div>

        <div className="navActions">
          <button type="button" onClick={previous} disabled={current === 0}>Voltar</button>
          <button type="button" onClick={next} disabled={answers[question.id] === undefined} className="next">
            {current === questions.length - 1 ? 'Ver meu laudo' : 'Próxima'}
          </button>
        </div>
      </section>
      <QuizStyles />
    </main>
  );
}

function QuizStyles() {
  return (
    <style jsx global>{`
      body { margin: 0; background: #050302; }
      .quizShell { min-height: 100vh; padding: 28px; color: #f7ead5; background: radial-gradient(circle at top right, rgba(211,166,72,.22), transparent 34rem), linear-gradient(135deg, #030302 0%, #260707 48%, #07170e 100%); font-family: Georgia, 'Times New Roman', serif; }
      .quizIntro, .resultHero, .quizCard, .scoreBoard, .ctaBox { max-width: 980px; margin: 0 auto; }
      .quizIntro, .resultHero { padding: 44px 0 24px; }
      .eyebrow { color: #e3c06f; letter-spacing: .28em; text-transform: uppercase; font: 700 12px Arial, sans-serif; margin: 0 0 18px; }
      h1 { font-size: clamp(42px, 8vw, 82px); line-height: .94; letter-spacing: -.055em; margin: 0 0 20px; }
      h1 span { color: #f4d58a; }
      .quizIntro p, .resultLabel, .ctaBox p { font: 19px/1.75 Arial, sans-serif; color: rgba(247,234,213,.80); max-width: 760px; }
      .notice { display: inline-flex; margin-top: 18px; border: 1px solid rgba(244,213,138,.35); border-radius: 999px; padding: 10px 14px; color: rgba(247,234,213,.72); font: 12px Arial, sans-serif; }
      .quizCard { border: 1px solid rgba(211,166,72,.34); border-radius: 30px; padding: clamp(24px, 5vw, 42px); background: rgba(5,4,3,.78); box-shadow: 0 28px 90px rgba(0,0,0,.42); }
      .progressTop, .navActions, .ctaActions { display: flex; align-items: center; justify-content: space-between; gap: 14px; flex-wrap: wrap; }
      .progressTop { font: 13px Arial, sans-serif; color: rgba(247,234,213,.70); }
      .progressTrack, .barTrack { height: 10px; border-radius: 999px; background: rgba(255,255,255,.09); overflow: hidden; margin: 14px 0 28px; }
      .progressFill, .barFill { height: 100%; background: linear-gradient(135deg, #f4d58a, #a9782d); border-radius: inherit; transition: width .25s ease; }
      .areaTag { display: inline-flex; border: 1px solid rgba(244,213,138,.38); color: #f4d58a; border-radius: 999px; padding: 8px 12px; margin: 0 0 18px; font: 700 12px Arial, sans-serif; text-transform: uppercase; letter-spacing: .14em; }
      .quizCard h2 { font-size: clamp(28px, 5vw, 48px); line-height: 1.05; margin: 0 0 18px; }
      blockquote { margin: 0 0 26px; padding: 18px 20px; border-left: 3px solid #d3a648; border-radius: 18px; color: #f4d58a; background: rgba(255,255,255,.045); font-size: clamp(20px, 4vw, 28px); }
      .answerGrid { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 12px; }
      .answer { cursor: pointer; border: 1px solid rgba(244,213,138,.32); border-radius: 18px; padding: 16px 10px; background: rgba(255,255,255,.045); color: #f7ead5; font: 700 14px Arial, sans-serif; }
      .answer span { display: grid; place-items: center; width: 34px; height: 34px; margin: 0 auto 8px; border-radius: 50%; background: rgba(244,213,138,.12); color: #f4d58a; }
      .answer.active { background: linear-gradient(135deg, #f4d58a, #a9782d); color: #1b1206; transform: translateY(-2px); }
      .answer.active span { background: rgba(27,18,6,.16); color: #1b1206; }
      .navActions { margin-top: 28px; }
      .navActions button, .primary, .secondary, .ghost { border: 0; border-radius: 999px; padding: 14px 20px; font: 800 14px Arial, sans-serif; text-decoration: none; cursor: pointer; }
      .navActions button { background: rgba(255,255,255,.08); color: #f7ead5; }
      .navActions button:disabled { opacity: .35; cursor: not-allowed; }
      .navActions .next, .primary { background: linear-gradient(135deg, #f4d58a, #a9782d); color: #1b1206; }
      .secondary { border: 1px solid rgba(244,213,138,.5); color: #f4d58a; background: transparent; }
      .ghost { border: 1px solid rgba(255,255,255,.20); color: #f7ead5; background: rgba(255,255,255,.08); }
      .resultBadge { display: inline-flex; padding: 10px 14px; border-radius: 999px; background: rgba(244,213,138,.14); color: #f4d58a; font: 800 13px Arial, sans-serif; text-transform: uppercase; letter-spacing: .12em; }
      .resultGrid { max-width: 1180px; margin: 16px auto; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
      .resultCard, .scoreBoard, .ctaBox { border: 1px solid rgba(211,166,72,.32); border-radius: 26px; padding: 26px; background: rgba(255,255,255,.045); }
      .resultCard.danger { background: rgba(105,22,38,.25); }
      .resultCard h2, .scoreBoard h2, .ctaBox h2 { color: #f4d58a; font-size: 30px; margin: 0 0 12px; }
      .resultCard p { font: 17px/1.7 Arial, sans-serif; color: rgba(247,234,213,.78); }
      .scoreBoard { max-width: 1180px; margin-top: 16px; }
      .barRow { display: grid; grid-template-columns: 130px 1fr 34px; gap: 12px; align-items: center; font: 13px Arial, sans-serif; color: rgba(247,234,213,.78); }
      .barTrack { margin: 8px 0; }
      .ctaBox { margin-top: 16px; }
      @media (max-width: 760px) {
        .quizShell { padding: 18px; }
        .answerGrid { grid-template-columns: 1fr; }
        .resultGrid { grid-template-columns: 1fr; }
        .barRow { grid-template-columns: 1fr; gap: 4px; margin-bottom: 12px; }
        .notice { border-radius: 18px; }
      }
    `}</style>
  );
}
