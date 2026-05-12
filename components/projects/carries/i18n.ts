export type Locale = "pt" | "en";

type Copy = {
  nav: {
    sobre: string;
    menu: string;
    eventos: string;
    visite: string;
    reservar: string;
  };
  hero: {
    h1Top: string;
    h1Bottom: string;
    sub: string;
    signature: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  sobre: {
    eyebrow: string;
    h2: string;
    p1: string;
    p2: string;
    p3: string;
    quote: string;
  };
  bemEstar: {
    eyebrow: string;
    items: { title: string; body: string }[];
  };
  menu: {
    eyebrow: string;
    h2: string;
    items: { name: string; descriptor: string; price: string }[];
    full: string;
    note: string;
  };
  eventos: {
    eyebrow: string;
    h2: string;
    items: { date: string; title: string; meta: string; cta: string }[];
    all: string;
  };
  antesDeVir: {
    eyebrow: string;
    rules: string[];
  };
  faq: {
    eyebrow: string;
    items: { q: string; a: string }[];
  };
  visite: {
    eyebrow: string;
    h2: string;
    address: string;
    neighborhood: string;
    hours: string;
    hoursNote: string;
    contactLabel: string;
    ctaReserve: string;
    ctaDirections: string;
  };
  footer: {
    nav: string;
    contact: string;
    newsletter: string;
    newsletterPlaceholder: string;
    newsletterCta: string;
    closing: string;
  };
  reserve: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    dateLabel: string;
    timeLabel: string;
    partyLabel: string;
    notesLabel: string;
    notesPlaceholder: string;
    submit: string;
    success: string;
    cancel: string;
  };
};

const pt: Copy = {
  nav: {
    sobre: "Sobre",
    menu: "Menu",
    eventos: "Eventos",
    visite: "Visite",
    reservar: "Reservar mesa",
  },
  hero: {
    h1Top: "Um café agitado.",
    h1Bottom: "Em Icaraí, em quatro patas curtas.",
    sub: "Café especial, cozinha lenta e uma dachshund chamada Carrie te observando do canto preferido dela.",
    signature: "com amor, Carrie",
    ctaPrimary: "Reservar mesa",
    ctaSecondary: "Conheça a Carrie",
  },
  sobre: {
    eyebrow: "A história",
    h2: "Quem é a Carrie",
    p1: "A Carrie tem cinco anos, sete quilos e uma seriedade incompatível com o tamanho.",
    p2: "Cresceu entre cafeteiras, livros e tardes vagarosas. Aprendeu cedo que pressa não combina com xícara.",
    p3: "O CARRIES é uma extensão do apartamento dela — só que com mesa pra mais gente.",
    quote: "ela escolheu o cardápio",
  },
  bemEstar: {
    eyebrow: "Como ela vive aqui",
    items: [
      {
        title: "Ela vem primeiro",
        body: "Bem-estar da Carrie é prioridade. Folga semanal, veterinário em dia, espaço só dela quando o salão enche.",
      },
      {
        title: "Espaço pra todos",
        body: "Pets bem-comportados são bem-vindos. Mas é a Carrie que escolhe quando dizer oi.",
      },
      {
        title: "Café sério",
        body: "Grãos brasileiros de microlote, torra clara, baristas que sabem o que estão fazendo.",
      },
    ],
  },
  menu: {
    eyebrow: "O que servimos",
    h2: "Menu",
    items: [
      { name: "Espresso duplo", descriptor: "Microlote da semana", price: "R$ 9" },
      { name: "Carrie's Brew", descriptor: "Latte com canela e mel", price: "R$ 16" },
      { name: "Cookie de aveia", descriptor: "Receita da casa, ainda quente", price: "R$ 12" },
      { name: "Petisco da Carrie", descriptor: "Biscoito caseiro pro seu cão", price: "R$ 7" },
    ],
    full: "Ver menu completo",
    note: "menu do dia escrito à mão na lousa lá dentro",
  },
  eventos: {
    eyebrow: "Agenda",
    h2: "Eventos",
    items: [
      {
        date: "SAB · 14 JUN",
        title: "Encontro de dachshunds",
        meta: "10h · gratuito",
        cta: "Inscrever",
      },
      {
        date: "DOM · 22 JUN",
        title: "Brunch lento",
        meta: "10h às 14h",
        cta: "Reservar",
      },
      {
        date: "TER · 02 JUL",
        title: "Aniversário da Carrie",
        meta: "tarde inteira",
        cta: "Confirmar",
      },
    ],
    all: "Toda a agenda",
  },
  antesDeVir: {
    eyebrow: "Antes de vir",
    rules: [
      "Reserve sua mesa",
      "Pets bem-comportados são bem-vindos",
      "A Carrie escolhe quando dizer oi",
      "Sem flash nas fotos",
    ],
  },
  faq: {
    eyebrow: "Perguntas frequentes",
    items: [
      {
        q: "Preciso reservar?",
        a: "Não obrigatório, mas recomendamos — a reserva é gratuita e só garante o lugar. Sem ela, sujeito à disponibilidade.",
      },
      {
        q: "Posso trazer meu cachorro?",
        a: "Sim. Pedimos só que esteja bem-comportado, vacinado e com guia. A Carrie é a anfitriã, então ela decide se vai dizer oi.",
      },
      {
        q: "A Carrie sempre está no café?",
        a: "Quase. Segundas são folga dela. Em outros dias ela pode estar dormindo nos fundos — faz parte do bem-estar.",
      },
      {
        q: "Vocês têm opções veganas e sem glúten?",
        a: "Sim, parte do menu de doces e salgados é vegana. Sem glúten temos rotação semanal — pergunte ao chegar.",
      },
      {
        q: "Aceitam crianças?",
        a: "Sim, desde que acompanhadas. Pedimos só voz baixa e sem correr — pelos cães e pelo café de quem está ao lado.",
      },
      {
        q: "Tem estacionamento?",
        a: "Não temos estacionamento próprio, mas há rotativo na quadra e Plaza Shopping a 5 min a pé.",
      },
    ],
  },
  visite: {
    eyebrow: "Onde estamos",
    h2: "Visite a gente",
    address: "Avenida Quintino Bocaiúva, 000",
    neighborhood: "Icaraí · Niterói",
    hours: "Terça a domingo · 8h às 19h",
    hoursNote: "segunda fechada — folga da Carrie",
    contactLabel: "Fale com a gente",
    ctaReserve: "Reservar mesa",
    ctaDirections: "Como chegar",
  },
  footer: {
    nav: "Navegação",
    contact: "Contato",
    newsletter: "Receba a agenda no e-mail",
    newsletterPlaceholder: "seu e-mail",
    newsletterCta: "Inscrever",
    closing: "feito com amor em Niterói",
  },
  reserve: {
    title: "Reservar mesa",
    subtitle: "É grátis. Só garante seu lugar.",
    nameLabel: "Nome",
    namePlaceholder: "como te chamamos?",
    dateLabel: "Data",
    timeLabel: "Horário",
    partyLabel: "Pessoas",
    notesLabel: "Observações",
    notesPlaceholder: "vai trazer cachorro? alguma preferência?",
    submit: "Confirmar reserva",
    success: "Reserva enviada. Te vemos em breve.",
    cancel: "cancelar",
  },
};

const en: Copy = {
  nav: {
    sobre: "About",
    menu: "Menu",
    eventos: "Events",
    visite: "Visit",
    reservar: "Book a table",
  },
  hero: {
    h1Top: "A busy café.",
    h1Bottom: "In Icaraí, on four short legs.",
    sub: "Specialty coffee, slow food and a dachshund called Carrie keeping an eye on you from her favourite corner.",
    signature: "with love, Carrie",
    ctaPrimary: "Book a table",
    ctaSecondary: "Meet Carrie",
  },
  sobre: {
    eyebrow: "The story",
    h2: "Meet Carrie",
    p1: "Carrie is five years old, weighs seven kilos and carries a seriousness wildly out of scale with her size.",
    p2: "She grew up among espresso machines, books and slow afternoons. She figured out early that rushing has no business near a cup.",
    p3: "CARRIES is an extension of her apartment — only with room for more people.",
    quote: "she picked the menu",
  },
  bemEstar: {
    eyebrow: "How she lives here",
    items: [
      {
        title: "She comes first",
        body: "Carrie's wellbeing is the rule. Weekly days off, regular vet care, a quiet space of her own when the room fills up.",
      },
      {
        title: "Room for everyone",
        body: "Well-behaved pets are welcome. But it's Carrie who decides when to say hi.",
      },
      {
        title: "Serious coffee",
        body: "Brazilian microlots, light roast, baristas who actually know what they're doing.",
      },
    ],
  },
  menu: {
    eyebrow: "What we serve",
    h2: "Menu",
    items: [
      { name: "Double espresso", descriptor: "Microlot of the week", price: "R$ 9" },
      { name: "Carrie's Brew", descriptor: "Latte with cinnamon and honey", price: "R$ 16" },
      { name: "Oat cookie", descriptor: "House recipe, still warm", price: "R$ 12" },
      { name: "Carrie's treat", descriptor: "House-baked biscuit for your dog", price: "R$ 7" },
    ],
    full: "See full menu",
    note: "today's menu chalked on the wall by the bar",
  },
  eventos: {
    eyebrow: "What's on",
    h2: "Events",
    items: [
      {
        date: "SAT · JUN 14",
        title: "Dachshund meet-up",
        meta: "10am · free",
        cta: "Sign up",
      },
      {
        date: "SUN · JUN 22",
        title: "Slow brunch",
        meta: "10am to 2pm",
        cta: "Book",
      },
      {
        date: "TUE · JUL 02",
        title: "Carrie's birthday",
        meta: "all afternoon",
        cta: "Confirm",
      },
    ],
    all: "Full calendar",
  },
  antesDeVir: {
    eyebrow: "Before you visit",
    rules: [
      "Book your table",
      "Well-behaved pets welcome",
      "Carrie decides when to say hi",
      "No flash photography",
    ],
  },
  faq: {
    eyebrow: "Frequently asked",
    items: [
      {
        q: "Do I need to book?",
        a: "Not required, but we recommend it — booking is free and just secures your seat. Without it, subject to availability.",
      },
      {
        q: "Can I bring my dog?",
        a: "Yes. We just ask that they're well-behaved, vaccinated and leashed. Carrie is the host, so she decides whether to greet.",
      },
      {
        q: "Is Carrie always at the café?",
        a: "Almost. Mondays are her day off. On other days she might be napping in the back — part of her wellbeing routine.",
      },
      {
        q: "Vegan and gluten-free options?",
        a: "Yes. Part of the pastry menu is vegan. Gluten-free items rotate weekly — ask at the counter.",
      },
      {
        q: "Are children welcome?",
        a: "Yes, with an adult. We just ask for quiet voices and no running — for the dogs and for the people next to you.",
      },
      {
        q: "Is there parking?",
        a: "No private parking, but there's metered street parking on the block and Plaza Shopping is a 5-min walk.",
      },
    ],
  },
  visite: {
    eyebrow: "Where we are",
    h2: "Come visit",
    address: "Avenida Quintino Bocaiúva, 000",
    neighborhood: "Icaraí · Niterói",
    hours: "Tuesday to Sunday · 8am to 7pm",
    hoursNote: "closed Mondays — Carrie's day off",
    contactLabel: "Get in touch",
    ctaReserve: "Book a table",
    ctaDirections: "Get directions",
  },
  footer: {
    nav: "Navigation",
    contact: "Contact",
    newsletter: "Get the agenda by e-mail",
    newsletterPlaceholder: "your email",
    newsletterCta: "Subscribe",
    closing: "made with love in Niterói",
  },
  reserve: {
    title: "Book a table",
    subtitle: "It's free. Just secures your seat.",
    nameLabel: "Name",
    namePlaceholder: "what should we call you?",
    dateLabel: "Date",
    timeLabel: "Time",
    partyLabel: "Party",
    notesLabel: "Notes",
    notesPlaceholder: "bringing a dog? any preference?",
    submit: "Confirm booking",
    success: "Booking received. See you soon.",
    cancel: "cancel",
  },
};

export const copy: Record<Locale, Copy> = { pt, en };
