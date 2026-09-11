import type { DatePeriod, ResumeData } from "../types/portfolio";

const monthNames = [
  "janeiro", "fevereiro", "março", "abril", "maio", "junho",
  "julho", "agosto", "setembro", "outubro", "novembro", "dezembro",
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
  if (remainingMonths) parts.push(`${remainingMonths} ${remainingMonths === 1 ? "mês" : "meses"}`);
  return parts.join(" e ") || "0 meses";
}

export function formatPeriod(period: DatePeriod, today = new Date()): string {
  const start = parseMonth(period.start);
  const end = period.end ? parseMonth(period.end) : {
    month: today.getMonth() + 1,
    year: today.getFullYear(),
  };
  const months = Math.max(1, (end.year * 12 + end.month) - (start.year * 12 + start.month) + 1);
  const startLabel = `${monthNames[start.month - 1]} de ${start.year}`;
  const endLabel = `${monthNames[end.month - 1]} de ${end.year}`;
  const range = period.end ? `${startLabel} até ${endLabel}` : startLabel;
  return `${range} (${formatDuration(months)})`;
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
      role: "Desenvolvedora Full Stack", company: "ACT Digital", companyUrl: "https://www.actdigital.com",
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
        Backend: ["Node.js", "REST"], "Banco de Dados": ["MongoDB", "SQL", "MySQL"],
        Infraestrutura: ["Azure DevOps", "AWS", "Docker", "Dynatrace", "Datadog", "Git"],
        Metodologias: ["Agile", "Scrum"], Ferramentas: ["Firebase", "Microsoft Office", "Figma", "Adobe XD"],
      },
    },
    {
      role: "Desenvolvedora Web Júnior", company: "TMontec", companyUrl: "https://www.tmontec.com.br",
      period: { start: "09/2020", end: "08/2022" },
      summary: "Desenvolvi e mantive sistemas para um CRM integrado a um sistema de PDV (Ponto de Venda), otimizando a gestão no setor de varejo.",
      bullets: [
        "Sustentei e evoluí aplicações em Laravel e PHP, garantindo estabilidade e performance.",
        "Estruturei a documentação técnica dos sistemas, padronizando processos internos e melhorando a eficiência da equipe.",
        "Atuei em uma equipe reduzida, sendo responsável por garantir a continuidade e modernização de sistemas legados.",
      ],
      skills: { Frontend: ["Vue.js", "JavaScript", "HTML", "CSS", "Bootstrap"], Backend: ["PHP", "Laravel"], "Banco de Dados": ["SQL", "MySQL", "Microsoft SQL Server"], Infraestrutura: ["Git", "GitLab"], Ferramentas: ["Microsoft Office"] },
    },
    {
      role: "Estagiária de Programação", company: "Turim", companyUrl: "https://site.turimsoft.com.br",
      period: { start: "02/2020", end: "05/2020" },
      summary: "Desenvolvi scripts para automação de processos de BPO, otimizando fluxos operacionais internos.",
      bullets: [
        "Prestei suporte e manutenção a sistemas PHP legados em uma empresa do setor fiscal.",
        "Iniciei a formalização da documentação técnica dos sistemas, estruturando um material interno que foi adotado pela empresa.",
      ],
      skills: { Frontend: ["JavaScript", "HTML", "CSS"], Backend: ["PHP", "Python"], "Banco de Dados": ["SQL", "MySQL", "Microsoft SQL Server"], Ferramentas: ["Microsoft Office"] },
    },
  ],
  education: { course: "Análise e Desenvolvimento de Sistemas", institution: "Fatec São Caetano do Sul - Antônio Russo", period: { start: "01/2017", end: "12/2020" } },
};
