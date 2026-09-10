export type ProfileId = "corporate" | "personal";

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "project"; number: string; title: string; meta: string }
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

const corporateItems: PortfolioItem[] = [
  { id: "about", kicker: "dossiê / 001", title: "Sobre mim", blocks: [{ type: "paragraph", text: "Desenvolvedora que transforma ideias em experiências digitais claras, cuidadosas e cheias de personalidade." }] },
  { id: "projects", kicker: "portfólio / 002", title: "Projetos selecionados", blocks: [{ type: "paragraph", text: "Uma coleção de trabalhos em desenvolvimento, com estudos de caso, interfaces e experimentos interativos." }, { type: "project", number: "01", title: "Projeto em destaque", meta: "em breve / estudo de caso" }, { type: "project", number: "02", title: "Experimento visual", meta: "em breve / laboratório" }] },
  { id: "resume", kicker: "credenciais / 003", title: "Currículo", blocks: [{ type: "paragraph", text: "Experiências, habilidades e caminhos profissionais reunidos em um só lugar." }, { type: "link", label: "Abrir currículo", url: "/curriculo.pdf" }] },
  { id: "contact", kicker: "contato / 004", title: "Vamos conversar?", blocks: [{ type: "paragraph", text: "Tem um projeto, uma ideia ou uma sala que precisa ser construída? Me encontre pelos canais abaixo." }, { type: "link", label: "Email", url: "mailto:oi@seuemail.com" }, { type: "link", label: "GitHub", url: "https://github.com", external: true }, { type: "link", label: "LinkedIn", url: "https://linkedin.com", external: true }] },
];

const personalItems: PortfolioItem[] = [
  { id: "about", kicker: "quem sou / 001", title: "Sobre a Sasá", blocks: [{ type: "paragraph", text: "Programadora de gambiarras, gamer e pessoa curiosa que gosta de transformar referências inesperadas em coisas novas." }] },
  { id: "projects", kicker: "criações / 002", title: "Coisas que faço", blocks: [{ type: "paragraph", text: "Experimentos, ideias e projetos que nascem da vontade de brincar com código, imagem e narrativa." }, { type: "project", number: "01", title: "Salinha interativa", meta: "um cantinho feito à mão" }, { type: "project", number: "02", title: "Laboratório de ideias", meta: "em breve / rabiscos digitais" }] },
  { id: "resume", kicker: "curiosidades / 003", title: "Interesses", blocks: [{ type: "paragraph", text: "Jogos, criaturas pré-históricas, arte pixelada, mundos imaginários e tudo que transforma uma tela em lugar para visitar." }] },
  { id: "contact", kicker: "pela internet / 004", title: "Onde me encontrar", blocks: [{ type: "paragraph", text: "Para acompanhar o que estou fazendo ou simplesmente trocar uma ideia:" }, { type: "link", label: "GitHub", url: "https://github.com", external: true }, { type: "link", label: "LinkedIn", url: "https://linkedin.com", external: true }, { type: "link", label: "Instagram", url: "https://instagram.com", external: true }] },
];

export const portfolioProfiles: Record<ProfileId, PortfolioProfile> = {
  corporate: { id: "corporate", brandName: "poderis_sabrina.exe", name: "Poderis, Sabrina", className: "estrategista digital", description: "A versão profissional: projetos, trajetória e formas de construir algo juntas.", items: corporateItems, stations: { about: "SOBRE MIM", projects: "PROJETOS", resume: "CURRÍCULO", contact: "CONTATO" } },
  personal: { id: "personal", brandName: "sasá.exe", name: "Sasá", className: "criativa errante", description: "A versão pessoal: interesses, criações e os lugares onde a Sasá aparece por aí.", items: personalItems, stations: { about: "SOBRE A SASÁ", projects: "CRIAÇÕES", resume: "INTERESSES", contact: "REDES" } },
};
