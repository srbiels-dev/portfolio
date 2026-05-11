export type Project = {
  slug: string;
  name: string;
  client: string;
  year: number;
  tagline: string;
  services: string[];
  cardSize: string;
  cover?: string;
  gallery?: string[];
  liveUrl?: string;
  /** Internal route to a live demo rendered inside the portfolio (e.g. "/projetos/carries/live"). */
  liveDemoPath?: string;
  overview: string;
  challenge: string;
  solution: string;
  impact: string;
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
    tagline: "Consultoria de marca e posicionamento.",
    services: ["UI Design"],
    cardSize: "24px",
    overview: "",
    challenge: "",
    solution: "",
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
    challenge:
      "Como traduzir a personalidade de UM cachorro em uma marca inteira sem cair no kitsch? A maioria das marcas pet-themed se rende ao mascote sorridente. Aqui queria o oposto: uma identidade editorial, contemplativa, que tratasse o dachshund como musa — não personagem de embalagem. O tom tinha que casar com a cultura de specialty coffee de Botafogo, ser bilíngue desde a primeira linha de copy, e funcionar como case técnico de tema isolado dentro de um Next.js app.",
    solution:
      "Sistema de marca em duas tipografias contrastantes (Quicksand pra estrutura, Gloria Hallelujah pra alma manuscrita), paleta fechada em quatro cores terrosas (Linen, Ash Brown, Dust Grey, Graphite) e ilustração linear minimalista da Carrie usada como assinatura, não como mascote. A landing renderiza em /projetos/carries/live com um tema CSS escopado — os mesmos tokens semânticos do design system (--color-bg, --color-text) são sobrescritos dentro de uma classe wrapper, sem afetar o resto do portfolio. Copy bilíngue gerenciada por context React + toggle visível no header.",
    impact:
      "O projeto vira um duplo case: identidade visual coerente (logo + tipografia + paleta + fotografia + ilustração) E demonstração técnica de como rodar uma marca com tema completamente diferente dentro do mesmo Next.js sem CSS leak. A landing é navegável, bilíngue, com modal de reserva e seções editoriais — não uma mockup, mas o produto final renderizando.",
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
    challenge:
      "A página antiga não dialogava com o público de consultoria. Ela tinha sido feita pra outro momento da empresa, com outro tom e outra audiência. O desafio era criar uma LP que conversasse com a nova etapa da VAROS — uma fase em que a consultoria deixa de ser um serviço secundário e passa a ser o foco.",
    solution:
      "Estruturei a página em segmentos claros, com hierarquia narrativa pensada pro público de consultoria. A Hero Section abre mostrando os rostos por trás do serviço — os donos da empresa em primeiro plano, criando proximidade desde o primeiro scroll. A segunda seção traz depoimentos e números reais, ancorando a credibilidade em prova social concreta. Ao longo de toda a página usei elementos do dia a dia real do investidor, trazendo o usuário de volta pras dores que ele realmente vive — não pra um discurso genérico de mercado.",
    impact:
      "A navegação ficou mais fluida: o usuário consegue preencher o formulário pra ser atendido a qualquer momento da página, através de um drawer que abre no contexto onde ele está — sem precisar voltar pro topo ou ir pro fim. O resultado é uma página que carrega o tom certo pra essa nova fase da VAROS, e que serve como ponto de partida pra um relacionamento de consultoria, não só pra um lead frio.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
