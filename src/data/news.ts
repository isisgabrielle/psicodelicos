export interface NewsPost {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  instagramUrl: string;
  badgeEmoji: string;
}

export const NEWS_POSTS: NewsPost[] = [
  {
    id: "plano-cultural",
    title: "Abertura das Associações 2026 - Plano Cultural",
    category: "Associação",
    date: "Recente",
    description: "Faça parte do nosso plano de associados! Tenha acesso exclusivo ao Clube do Livro, sessões de Arteterapia e debates no CinePsi.",
    instagramUrl: "https://www.instagram.com/atlpsicodelicos/",
    badgeEmoji: "",
  },
  {
    id: "clube-do-livro",
    title: "Clube do Livro Psicodélicos",
    category: "Cultura & Leituras",
    date: "Em andamento",
    description: "Espaço mensal para compartilhar reflexões, leituras da psicologia e literatura humanizada. Aberto a todos os associados.",
    instagramUrl: "https://www.instagram.com/atlpsicodelicos/",
    badgeEmoji: "",
  },
  {
    id: "cinepsi-arteterapia",
    title: "Arteterapia e CinePsi: Vivências e Encontros",
    category: "Vivências",
    date: "Em breve",
    description: "Expressão artística, debates cinematográficos e acolhimento para aliviar a rotina acadêmica dos estudantes da UNIT.",
    instagramUrl: "https://www.instagram.com/atlpsicodelicos/",
    badgeEmoji: "",
  },
];
