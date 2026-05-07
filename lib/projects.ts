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
