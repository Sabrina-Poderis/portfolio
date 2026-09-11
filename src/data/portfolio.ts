export type ProfileId = "corporate" | "personal";

export interface DatePeriod {
  start: string;
  end: string | null;
}

const monthNames = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

function parseMonth(value: string): { month: number; year: number } {
  const [month, year] = value.split("/").map(Number);
  if (!month || month < 1 || month > 12 || !year) {
    throw new Error(`Período inválido: ${value}. Use o formato MM/YYYY.`);
  }
  return { month, year };
}

function formatDuration(months: number): string {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  const parts: string[] = [];

  if (years) parts.push(`${years} ${years === 1 ? "ano" : "anos"}`);
  if (remainingMonths) {
    parts.push(`${remainingMonths} ${remainingMonths === 1 ? "mês" : "meses"}`);
  }

  return parts.join(" e ") || "0 meses";
}

export function formatPeriod(period: DatePeriod, today = new Date()): string {
  const start = parseMonth(period.start);
  const end = period.end ? parseMonth(period.end) : {
    month: today.getMonth() + 1,
    year: today.getFullYear(),
  };
  const startIndex = start.year * 12 + start.month;
  const endIndex = end.year * 12 + end.month;
  const months = Math.max(1, endIndex - startIndex + 1);
  const startLabel = `${monthNames[start.month - 1]} de ${start.year}`;
  const endLabel = `${monthNames[end.month - 1]} de ${end.year}`;
  const range = period.end ? `${startLabel} até ${endLabel}` : startLabel;

  return `${range} (${formatDuration(months)})`;
}

export interface ResumeExperience {
  role: string;
  company: string;
  companyUrl: string;
  period: DatePeriod;
  summary: string;
  bullets: string[];
  skills: Record<string, string[]>;
}

export interface ResumeData {
  name: string;
  role: string;
  contact: {
    github: string;
    email: string;
    linkedin: string;
    website: string;
  };
  summary: string[];
  experience: ResumeExperience[];
  education: {
    course: string;
    institution: string;
    period: DatePeriod;
  };
}

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "resume"; data: ResumeData }
  | { type: "project"; number: string; title: string; meta: string, url?: string; }
  | { type: "link"; label: string; url: string; external?: boolean };

export interface PortfolioItem {
  id: string;
  kicker: string;
  title: string;
  blocks: ContentBlock[];
}

export interface PortfolioProfile {
  id: ProfileId;
  brandName: string;
  name: string;
  className: string;
  description: string;
  items: PortfolioItem[];
  stations: Record<string, string>;
}

export const resumeData: ResumeData = {
  name: "Sabrina Poderis",
  role: "Desenvolvedora Full Stack",
  contact: {
    github: "https://github.com/Sabrina-Poderis",
    email: "sabrina.poderis@gmail.com",
    linkedin: "https://www.linkedin.com/in/sabrina-poderis",
    website: "https://sabrina-poderis.github.io/portfolio",
  },
  summary: [
    "Desenvolvedora Full Stack com sólida experiência no ecossistema JavaScript/TypeScript, atuando com React, React Native e Node.js.",
    "Paixão pelo desenvolvimento frontend, com forte atuação em backend e mobile para entregar soluções completas e escaláveis.",
    "Perfil analítico e organizado, com foco na otimização de processos, documentação eficiente e criação de código limpo e sustentável.",
    "Comunicação clara e colaboração ativa com times multidisciplinares, facilitando a integração entre tecnologia e negócio.",
  ],
  experience: [
    {
      role: "Desenvolvedora Full Stack",
      company: "ACT Digital",
      companyUrl: "https://www.actdigital.com",
      period: { start: "04/2022", end: "03/2025" },
      summary: "Desenvolvi soluções para plataformas web e mobile com React.js, React Native e TypeScript, garantindo escalabilidade, qualidade de código e otimização de processos.",
      bullets: [
        "Liderei a manutenção e evolução de um site para exames genéticos personalizados, colaborando diretamente com POs e stakeholders para alinhar objetivos técnicos e de negócio.",
        "Atuei na modernização do app Meu Einstein, garantindo compatibilidade entre React e Flutter e implementando feature flags para um rollout seguro.",
        "Desenvolvi features estratégicas para a agenda médica, otimizando o fluxo de trabalho para secretárias e médicos e integrando novos serviços ao ecossistema.",
        "Implementei e expandi a cultura de documentação técnica dentro da equipe, estruturando changelogs e wikis para facilitar a manutenção e onboarding de novos membros.",
      ],
      skills: {
        Frontend: ["React.js", "React Native", "TypeScript", "Redux.js", "Storybook", "Styled Components", "HTML", "CSS"],
        Backend: ["Node.js", "REST"],
        "Banco de Dados": ["MongoDB", "SQL", "MySQL"],
        Infraestrutura: ["Azure DevOps", "AWS", "Docker", "Dynatrace", "Datadog", "Git"],
        Metodologias: ["Agile", "Scrum"],
        Ferramentas: ["Firebase", "Microsoft Office", "Figma", "Adobe XD"],
      },
    },
    {
      role: "Desenvolvedora Web Júnior",
      company: "TMontec",
      companyUrl: "https://www.tmontec.com.br",
      period: { start: "09/2020", end: "08/2022" },
      summary: "Desenvolvi e mantive sistemas para um CRM integrado a um sistema de PDV (Ponto de Venda), otimizando a gestão no setor de varejo.",
      bullets: [
        "Sustentei e evoluí aplicações em Laravel e PHP, garantindo estabilidade e performance.",
        "Estruturei a documentação técnica dos sistemas, padronizando processos internos e melhorando a eficiência da equipe.",
        "Atuei em uma equipe reduzida, sendo responsável por garantir a continuidade e modernização de sistemas legados.",
      ],
      skills: {
        Frontend: ["Vue.js", "JavaScript", "HTML", "CSS", "Bootstrap"],
        Backend: ["PHP", "Laravel"],
        "Banco de Dados": ["SQL", "MySQL", "Microsoft SQL Server"],
        Infraestrutura: ["Git", "GitLab"],
        Ferramentas: ["Microsoft Office"],
      },
    },
    {
      role: "Estagiária de Programação",
      company: "Turim",
      companyUrl: "https://site.turimsoft.com.br",
      period: { start: "02/2020", end: "05/2020" },
      summary: "Desenvolvi scripts para automação de processos de BPO, otimizando fluxos operacionais internos.",
      bullets: [
        "Prestei suporte e manutenção a sistemas PHP legados em uma empresa do setor fiscal.",
        "Iniciei a formalização da documentação técnica dos sistemas, estruturando um material interno que foi adotado pela empresa.",
      ],
      skills: {
        Frontend: ["JavaScript", "HTML", "CSS"],
        Backend: ["PHP", "Python"],
        "Banco de Dados": ["SQL", "MySQL", "Microsoft SQL Server"],
        Ferramentas: ["Microsoft Office"],
      },
    },
  ],
  education: {
    course: "Análise e Desenvolvimento de Sistemas",
    institution: "Fatec São Caetano do Sul - Antônio Russo",
    period: { start: "01/2017", end: "12/2020" },
  },
};

const corporateItems: PortfolioItem[] = [
  {
    id: "about",
    kicker: "dossiê / 001",
    title: "Sobre mim",
    blocks: [
      {
        type: "list",
        items: resumeData.summary,
      },
    ],
  },
  {
    id: "projects",
    kicker: "portfólio / 002",
    title: "Projetos selecionados",
    blocks: [
      {
        type: "paragraph",
        text: "Uma coleção de trabalhos em desenvolvimento, com estudos de caso, interfaces e experimentos interativos.",
      },
      {
        type: "project",
        number: "01",
        title: "Código Sujo",
        meta: "Tutorial reverso de 'más' práticas de programação",
        url: "https://sabrina-poderis.github.io/dirty-code/"
      },
      {
        type: "project",
        number: "02",
        title: "Salinha interativa",
        meta: "um cantinho feito à mão (esse site aqui!)",
      },
      {
        type: "project",
        number: "03",
        title: "Experimentos gerais",
        meta: "em breve / laboratório",
      },
    ],
  },
  {
    id: "resume",
    kicker: "credenciais / 003",
    title: "Currículo",
    blocks: [
      {
        type: "paragraph",
        text: "Experiências, habilidades e caminhos profissionais reunidos em um só lugar.",
      },
      { type: "resume", data: resumeData },
    ],
  },
  {
    id: "contact",
    kicker: "contato / 004",
    title: "Vamos conversar?",
    blocks: [
      {
        type: "paragraph",
        text: "Tem um projeto ou uma ideia que gostaria de conversar? Me encontre pelos canais abaixo.",
      },
      { type: "link", label: "Email", url: "mailto:sabrina.poderis@gmail.com" },
      {
        type: "link",
        label: "GitHub",
        url: "https://github.com/Sabrina-Poderis",
        external: true,
      },
      {
        type: "link",
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/sabrina-poderis",
        external: true,
      },
    ],
  },
];

const personalItems: PortfolioItem[] = [
  {
    id: "about",
    kicker: "quem sou / 001",
    title: "Sobre a Sasá",
    blocks: [
      {
        type: "paragraph",
        text: "Programadora de gambiarras, gamer e fã de paleoarte que gosta de transformar referências inesperadas em coisas novas.",
      },
    ],
  },
  {
    id: "projects",
    kicker: "criações / 002",
    title: "Coisas que faço",
    blocks: [
      {
        type: "paragraph",
        text: "Experimentos, ideias e projetos que nascem da vontade de brincar com código, imagem e narrativa.",
      },
      {
        type: "project",
        number: "01",
        title: "Salinha interativa",
        meta: "um cantinho feito à mão (esse site aqui!)",
      },
      {
        type: "project",
        number: "02",
        title: "Laboratório de ideias",
        meta: "em breve / rabiscos digitais",
      },
    ],
  },
  {
    id: "resume",
    kicker: "curiosidades / 003",
    title: "Interesses",
    blocks: [
      {
        type: "paragraph",
        text: "Jogos, criaturas pré-históricas, arte pixelada, mundos imaginários e tudo que transforma uma tela em lugar para visitar.",
      },
    ],
  },
  {
    id: "contact",
    kicker: "pela internet / 004",
    title: "Onde me encontrar",
    blocks: [
      {
        type: "paragraph",
        text: "Para acompanhar o que estou fazendo ou simplesmente trocar uma ideia:",
      },
      {
        type: "link",
        label: "Instagram",
        url: "https://www.instagram.com/sabrina.poderis",
        external: true,
      },
    ],
  },
];

export const portfolioProfiles: Record<ProfileId, PortfolioProfile> = {
  corporate: {
    id: "corporate",
    brandName: "poderis_sabrina.exe",
    name: "Poderis, Sabrina",
    className: "desenvolvedora fullstack",
    description:
      "A versão profissional: projetos, trajetória e formas de construir algo juntas.",
    items: corporateItems,
    stations: {
      about: "SOBRE MIM",
      projects: "PROJETOS",
      resume: "CURRÍCULO",
      contact: "CONTATO",
    },
  },
  personal: {
    id: "personal",
    brandName: "sasá.exe",
    name: "Sasá",
    className: "criativa errante",
    description:
      "A versão pessoal: interesses, criações e os lugares onde a Sasá aparece por aí.",
    items: personalItems,
    stations: {
      about: "SOBRE A SASÁ",
      projects: "CRIAÇÕES",
      resume: "INTERESSES",
      contact: "REDES",
    },
  },
};
