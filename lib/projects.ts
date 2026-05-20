export type Project = {
  slug: string;
  name: string;
  client: string;
  year: number;
  tagline: string;
  services: string[];
  cardSize: string;
  cover?: string;
  gallery?: {
    /** Par de imagens 4:5 lado a lado. */
    pair?: [string, string];
    /** Imagem 16:9 full-width. */
    wide?: string;
  };
  liveUrl?: string;
  /** Internal route to a live demo rendered inside the portfolio (e.g. "/projetos/carries/live"). */
  liveDemoPath?: string;
  overview: string;
  overviewHeading?: string;
  challenge: string;
  challengeHeading?: string;
  solution: string;
  solutionHeading?: string;
  impact: string;
  impactHeading?: string;
};

export const projects: Project[] = [
  {
    slug: "varos-academy",
    name: "VAROS Academy",
    client: "VAROS",
    year: 2025,
    tagline: "Plataforma de educação em investimentos.",
    services: ["UI Design"],
    cardSize: "24px",
    overview: "",
    challenge: "",
    solution: "",
    impact: "",
  },
  {
    slug: "bardot-consultoria",
    name: "Bardot Consultoria",
    client: "Bardot",
    year: 2025,
    tagline: "Consultoria de benefícios pra empresas.",
    services: ["UI Design", "Next.js"],
    cardSize: "24px",
    cover: "/projetos/bardot-consultoria/1.png",
    gallery: {
      wide: "/projetos/bardot-consultoria/2.png",
    },
    liveUrl: "https://www.bardotconsultoria.com.br/",
    overview:
      "A Bardot é uma corretora boutique de seguros e benefícios empresariais. O diferencial real está no acompanhamento contínuo — cotação, contratação e pós-venda no mesmo nível de atenção. O cliente queria que a landing deixasse isso explícito: a Bardot não é só mais uma corretora, é um braço que ajuda o empresário a tocar a empresa melhor.",
    overviewHeading: "A diferença mora no que vem depois da venda.",
    challenge:
      "Era a primeira landing da marca — copy, hierarquia e posicionamento visual, tudo do zero. O nó era escrever uma página que falasse a verdade sobre o jeito da Bardot operar, sem cair no discurso genérico de corretora nem na agressividade de quem tá empurrando plano. O usuário precisava navegar com leveza, absorver o conteúdo sem se sentir empurrado, e sair entendendo o serviço — não só impactado por uma promessa.",
    challengeHeading: "Falar a verdade sem soar como mais uma corretora.",
    solution:
      "A página foi construída em torno da copy. A hierarquia tipográfica puxa o olho num caminho de leitura claro — uma ideia por vez, sem competição visual. Componentes como o bloco rotativo de produtos e a sequência de situações foram pensados pra mostrar uma seção de cada vez, forçando o usuário a parar e assimilar em vez de escanear o scroll inteiro. A paleta sóbria — azul-marinho profundo, off-white, nenhuma cor gritando — reforça a vibe de consultoria séria, longe do banner promocional de corretora tradicional.",
    solutionHeading: "Página pensada pra ser lida, não escaneada.",
    impact: "",
  },
  {
    slug: "carries",
    name: "CARRIES",
    client: "Projeto autoral",
    year: 2026,
    tagline:
      "Café-tributo a uma dachshund. Identidade e landing bilíngue.",
    services: ["Brand Design", "UI Design", "Next.js"],
    cardSize: "24px",
    liveDemoPath: "/projetos/carries/live",
    overview:
      "CARRIES é um café fictício em Botafogo construído inteiramente em volta de Carrie — uma dachshund preta de pelo curto. O projeto começou como exercício de identidade visual e virou um sistema de marca + landing page bilíngue (PT/EN) que renderiza dentro do próprio portfolio, com tema isolado dos demais projetos.",
    overviewHeading: "Um cachorro virou marca, marca virou case.",
    challenge:
      "Como traduzir a personalidade de UM cachorro em uma marca inteira sem cair no kitsch? A maioria das marcas pet-themed se rende ao mascote sorridente. Aqui queria o oposto: uma identidade editorial, contemplativa, que tratasse o dachshund como musa — não personagem de embalagem. O tom tinha que casar com a cultura de specialty coffee de Botafogo, ser bilíngue desde a primeira linha de copy, e funcionar como case técnico de tema isolado dentro de um Next.js app.",
    challengeHeading: "Dachshund como musa, não como mascote.",
    solution:
      "Sistema de marca em duas tipografias contrastantes (Quicksand pra estrutura, Gloria Hallelujah pra alma manuscrita), paleta fechada em quatro cores terrosas (Linen, Ash Brown, Dust Grey, Graphite) e ilustração linear minimalista da Carrie usada como assinatura, não como mascote. A landing renderiza em /projetos/carries/live com um tema CSS escopado — os mesmos tokens semânticos do design system (--color-bg, --color-text) são sobrescritos dentro de uma classe wrapper, sem afetar o resto do portfolio. Copy bilíngue gerenciada por context React + toggle visível no header.",
    solutionHeading: "Duas tipografias, quatro cores, um tema CSS isolado.",
    impact:
      "O projeto vira um duplo case: identidade visual coerente (logo + tipografia + paleta + fotografia + ilustração) E demonstração técnica de como rodar uma marca com tema completamente diferente dentro do mesmo Next.js sem CSS leak. A landing é navegável, bilíngue, com modal de reserva e seções editoriais — não uma mockup, mas o produto final renderizando.",
    impactHeading: "Duplo case: identidade coerente e demonstração técnica.",
  },
  {
    slug: "varos-consultoria",
    name: "VAROS Consultoria",
    client: "VAROS",
    year: 2026,
    tagline: "Landing page de consultoria de investimentos.",
    services: ["UI Design", "Next.js", "Claude Code"],
    cardSize: "24px",
    liveUrl: "https://varos.com.br/consultoria-cliente",
    cover: "/projetos/varos-consultoria/Capa.png",
    overview:
      "A VAROS estava entrando numa nova etapa, focando o braço de consultoria como produto principal. A página existente não conversava com o público desse serviço — era hora de uma landing pensada do zero pra essa fase da empresa.",
    overviewHeading: "Uma nova fase pediu uma nova página.",
    challenge:
      "A página antiga não dialogava com o público de consultoria. Ela tinha sido feita pra outro momento da empresa, com outro tom e outra audiência. O desafio era criar uma LP que conversasse com a nova etapa da VAROS — uma fase em que a consultoria deixa de ser um serviço secundário e passa a ser o foco.",
    challengeHeading: "A página antiga falava com outro público.",
    solution:
      "Estruturei a página em segmentos claros, com hierarquia narrativa pensada pro público de consultoria. A Hero Section abre mostrando os rostos por trás do serviço — os donos da empresa em primeiro plano, criando proximidade desde o primeiro scroll. A segunda seção traz depoimentos e números reais, ancorando a credibilidade em prova social concreta. Ao longo de toda a página usei elementos do dia a dia real do investidor, trazendo o usuário de volta pras dores que ele realmente vive — não pra um discurso genérico de mercado.",
    solutionHeading: "Narrativa em segmentos, ancorada em pessoas reais.",
    impact:
      "A navegação ficou mais fluida: o usuário consegue preencher o formulário pra ser atendido a qualquer momento da página, através de um drawer que abre no contexto onde ele está — sem precisar voltar pro topo ou ir pro fim. O resultado é uma página que carrega o tom certo pra essa nova fase da VAROS, e que serve como ponto de partida pra um relacionamento de consultoria, não só pra um lead frio.",
    impactHeading: "Conversão no contexto, sem tirar o usuário do fluxo.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
