export type ProfileId = "corporate" | "personal";

export interface Recommendation {
  name: string;
  role: string;
  image: { src: string; alt: string };
  text: string;
}

export type ContentBlock =
  | { type: "paragraph"; text: string }
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

export const recommendations: Recommendation[] = [
  {
    name: "Caio Pereira Mascarenhas",
    role: "Engenheiro de Software",
    image: { src: "profile-caio-mascarenhas-image.jpg", alt: "Foto de perfil de Caio Mascarenhas" },
    text: "Tive o prazer de trabalhar com a Sabrina e posso dizer que ela é uma profissional extremamente comprometida e exploradora. Sempre busca entender o propósito do que está desenvolvendo, contribuindo com ideias e melhorias em todas as etapas do projeto. Seu envolvimento vai além do código: ela se preocupa com o impacto do produto final e está sempre disposta a fazer acontecer. É uma profissional que agrega muito valor e faz a diferença no time!",
  },
  {
    name: "Yan Victor Chaves Pinheiro",
    role: "Desenvolvedor de Software",
    image: { src: "profile-yan-pinheiro-image.jpg", alt: "Foto de perfil de Yan Pinheiro" },
    text: "A Sabrina é uma excelente profissional, no qual sempre encarava os desafios que lhe eram impostos com bastante competência, aprendi bastante com ela. Ela também é uma pessoa muito organizada e motivada que nunca fugia de um desafio e é muito gratificante trabalhar com ela.",
  },
  {
    name: "Alessandro L. Menezes",
    role: "Desenvolvedor Full Stack",
    image: { src: "profile-alessandro-menezes-image.jpg", alt: "Foto de perfil de Alessandro Menezes" },
    text: "Recomendo a Sabrina. Trabalhar com ela foi uma experiência transformadora: sua maneira descontraída de lidar com os desafios torna o ambiente mais leve, sem jamais perder a seriedade e a precisão quando necessário. Tive a oportunidade de aprender muito sobre organização de projetos ao lado da pessoa mais organizada com quem já trabalhei, e sua curiosidade em aprender e testar novas tecnologias continuamente eleva o nível dos nossos projetos. Sabrina é, sem dúvida, uma profissional inspiradora e um grande trunfo para qualquer equipe.",
  },
  {
    name: "Tiffany Cordeiro",
    role: "Engenheira de Software",
    image: { src: "profile-tiffany-cordeiro-image.jpg", alt: "Foto de perfil de Tiffany Cordeiro" },
    text: "Trabalhar com a Sabrina foi uma experiência incrível! Ela é extremamente organizada, sempre mantendo tudo em ordem e garantindo que o trabalho flua da melhor maneira possível. Além disso, sua disposição para ajudar faz toda a diferença no dia a dia. É o tipo de pessoa que está sempre pronta para colaborar e tornar o ambiente mais leve e produtivo. Sem dúvida, uma profissional que agrega muito valor a qualquer equipe!",
  },
  {
    name: "Amanda Mastrodomenico",
    role: "Product Owner",
    image: { src: "profile-amanda-mastrodomenico-image.jpg", alt: "Foto de perfil de Amanda Mastrodomenico" },
    text: "Sabrina é uma desenvolvedora comprometida com entregas e prazos e muito determinada a superar os próprios desafios, assumindo demandas fora da sua zona de conforto. Se comunica com clareza e de forma objetiva, sabendo explicar problemas técnicos a nível de negócio sem dificuldades. O período que trabalhamos juntas esteve muito dedicada em documentar processos e fluxos garantindo que todos do time teriam visibilidade do que e como foi feito!",
  },
];

const corporateItems: PortfolioItem[] = [
  {
    id: "about",
    kicker: "dossiê / 001",
    title: "Sobre mim",
    blocks: [
      {
        type: "paragraph",
        text: "Desenvolvedora que transforma ideias em experiências digitais claras, cuidadosas e cheias de personalidade.",
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
        title: "Experimento visual",
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
      { type: "link", label: "Abrir currículo", url: "/curriculo.pdf" },
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
      recommendations: "RECOMENDAÇÕES",
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
