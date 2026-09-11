import { resumeData } from "./resume";
import type { ContentBlock, PortfolioItem, PortfolioProfile, ProfileId } from "../types/portfolio";

export type { ContentBlock, PortfolioItem, PortfolioProfile, ProfileId } from "../types/portfolio";
export { resumeData } from "./resume";

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
