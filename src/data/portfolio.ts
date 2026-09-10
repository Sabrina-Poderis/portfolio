export type ProfileId = "corporate" | "personal";

export interface PortfolioItem {
  id: string;
  kicker: string;
  title: string;
  content: string;
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

const corporateItems: PortfolioItem[] = [
  { id: "about", kicker: "dossiê / 001", title: "Sobre mim", content: "<p>Desenvolvedora que transforma ideias em experiências digitais claras, cuidadosas e cheias de personalidade.</p>" },
  { id: "projects", kicker: "portfólio / 002", title: "Projetos selecionados", content: "<p>Uma coleção de trabalhos em desenvolvimento, com estudos de caso, interfaces e experimentos interativos.</p><div class=\"project-link\"><span>01</span><strong>Projeto em destaque</strong><small>em breve / estudo de caso</small></div><div class=\"project-link\"><span>02</span><strong>Experimento visual</strong><small>em breve / laboratório</small></div>" },
  { id: "resume", kicker: "credenciais / 003", title: "Currículo", content: "<p>Experiências, habilidades e caminhos profissionais reunidos em um só lugar.</p><a class=\"modal-action\" href=\"/curriculo.pdf\" target=\"_blank\" rel=\"noreferrer\">Abrir currículo <span>↗</span></a>" },
  { id: "contact", kicker: "contato / 004", title: "Vamos conversar?", content: "<p>Tem um projeto, uma ideia ou uma sala que precisa ser construída? Me encontre pelos canais abaixo.</p><div class=\"contact-links\"><a href=\"mailto:oi@seuemail.com\">Email <span>↗</span></a><a href=\"https://github.com\" target=\"_blank\" rel=\"noreferrer\">GitHub <span>↗</span></a><a href=\"https://linkedin.com\" target=\"_blank\" rel=\"noreferrer\">LinkedIn <span>↗</span></a></div>" },
];

const personalItems: PortfolioItem[] = [
  { id: "about", kicker: "quem sou / 001", title: "Sobre a Sasá", content: "<p>Programadora de gambiarras, gamer e pessoa curiosa que gosta de transformar referências inesperadas em coisas novas.</p>" },
  { id: "projects", kicker: "criações / 002", title: "Coisas que faço", content: "<p>Experimentos, ideias e projetos que nascem da vontade de brincar com código, imagem e narrativa.</p><div class=\"project-link\"><span>01</span><strong>Salinha interativa</strong><small>um cantinho feito à mão</small></div><div class=\"project-link\"><span>02</span><strong>Laboratório de ideias</strong><small>em breve / rabiscos digitais</small></div>" },
  { id: "resume", kicker: "curiosidades / 003", title: "Interesses", content: "<p>Jogos, criaturas pré-históricas, arte pixelada, mundos imaginários e tudo que transforma uma tela em lugar para visitar.</p>" },
  { id: "contact", kicker: "pela internet / 004", title: "Onde me encontrar", content: "<p>Para acompanhar o que estou fazendo ou simplesmente trocar uma ideia:</p><div class=\"contact-links\"><a href=\"https://github.com\" target=\"_blank\" rel=\"noreferrer\">GitHub <span>↗</span></a><a href=\"https://linkedin.com\" target=\"_blank\" rel=\"noreferrer\">LinkedIn <span>↗</span></a><a href=\"https://instagram.com\" target=\"_blank\" rel=\"noreferrer\">Instagram <span>↗</span></a></div>" },
];

export const portfolioProfiles: Record<ProfileId, PortfolioProfile> = {
  corporate: {
    id: "corporate",
    brandName: "poderis_sabrina.exe",
    name: "Poderis, Sabrina",
    className: "estrategista digital",
    description: "A versão profissional: projetos, trajetória e formas de construir algo juntas.",
    items: corporateItems,
    stations: { about: "SOBRE MIM", projects: "PROJETOS", resume: "CURRÍCULO", contact: "CONTATO" },
  },
  personal: {
    id: "personal",
    brandName: "sasá.exe",
    name: "Sasá",
    className: "criativa errante",
    description: "A versão pessoal: interesses, criações e os lugares onde a Sasá aparece por aí.",
    items: personalItems,
    stations: { about: "SOBRE A SASÁ", projects: "CRIAÇÕES", resume: "INTERESSES", contact: "REDES" },
  },
};