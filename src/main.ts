import Phaser from "phaser";
import "./style.css";
import { portfolioProfiles, type PortfolioProfile, type ProfileId } from "./data/portfolio";
import { PortfolioScene } from "./game/scenes/PortfolioScene";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <header class="site-header"><div class="brand"><span class="brand-mark">✦</span><span id="brand-name">portfolio.exe</span></div><button class="status" id="profile-switcher" type="button"><span class="status-dot"></span> escolha sua versão</button></header>
  <main class="profile-select" aria-labelledby="profile-title"><div class="selection-intro"><p class="eyebrow">selecione sua classe</p><h1 id="profile-title">Duas formas<br><em>de me conhecer.</em></h1><p>Escolha uma porta de entrada. O cenário muda de tom, mas a salinha continua sendo minha.</p></div><div class="profile-options"><button class="profile-card profile-card--corporate" type="button" data-profile="corporate"><span class="profile-symbol">✦</span><span class="profile-label">versão profissional</span><strong>Poderis, Sabrina</strong><span class="profile-class">estrategista digital</span><small>projetos · currículo · contato</small><span class="profile-cta">entrar na sala <b>↗</b></span></button><button class="profile-card profile-card--personal" type="button" data-profile="personal"><span class="profile-symbol">☼</span><span class="profile-label">versão pessoal</span><strong>Sasá</strong><span class="profile-class">criativa errante</span><small>interesses · criações · redes</small><span class="profile-cta">entrar na sala <b>↗</b></span></button></div></main>
  <main class="game-shell" hidden><div class="intro-copy"><p class="eyebrow">um portfólio explorável</p><h1>Chega aí<br><em>na minha salinha!</em></h1><p class="intro-text">Interaja com os objetos para me conhecer melhor</p></div><div id="game-container" aria-label="Sala de trabalho interativa"></div><div class="controls-hint"><span>W A S D</span> mover <span class="key-enter">E</span> interagir</div></main>
  <footer class="site-footer"><span>São Paulo, BR</span><span id="footer-version">v. 01 / escolha inicial</span></footer>
  <div id="portfolio-modal" class="modal" aria-hidden="true"><div class="modal-backdrop" data-close-modal></div><section class="modal-card" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button class="modal-close" type="button" data-close-modal aria-label="Fechar">×</button><p class="modal-kicker" id="modal-kicker"></p><h2 id="modal-title"></h2><div id="modal-content"></div></section></div>
`;

const modal = document.querySelector<HTMLElement>("#portfolio-modal")!;
const modalTitle = document.querySelector<HTMLElement>("#modal-title")!;
const modalKicker = document.querySelector<HTMLElement>("#modal-kicker")!;
const modalContent = document.querySelector<HTMLElement>("#modal-content")!;
const profileSelect = document.querySelector<HTMLElement>(".profile-select")!;
const gameShell = document.querySelector<HTMLElement>(".game-shell")!;
const profileSwitcher = document.querySelector<HTMLButtonElement>("#profile-switcher")!;
let activeProfile: PortfolioProfile | undefined;
let game: Phaser.Game | undefined;

function closeModal(): void {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

window.openPortfolioModal = (itemId: string): void => {
  const item = activeProfile?.items.find((entry) => entry.id === itemId);
  if (!item) return;
  modalKicker.textContent = item.kicker;
  modalTitle.textContent = item.title;
  modalContent.innerHTML = item.content;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.querySelector<HTMLButtonElement>(".modal-close")?.focus();
};

document.querySelectorAll<HTMLElement>("[data-close-modal]").forEach((element) => element.addEventListener("click", closeModal));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) closeModal();
});

function selectProfile(profileId: ProfileId): void {
  activeProfile = portfolioProfiles[profileId];
  window.selectedPortfolioProfile = activeProfile;
  document.querySelector<HTMLElement>("#brand-name")!.textContent = activeProfile.brandName;
  document.querySelector<HTMLElement>("#footer-version")!.textContent = `v. 01 / ${activeProfile.className}`;
  profileSelect.hidden = true;
  gameShell.hidden = false;

  game = new Phaser.Game({
    type: Phaser.AUTO,
    parent: "game-container",
    width: 960,
    height: 600,
    backgroundColor: "#4b3f72",
    render: { pixelArt: true, antialias: false },
    physics: { default: "arcade", arcade: { gravity: { x: 0, y: 0 }, debug: false } },
    scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH, width: 960, height: 600 },
    scene: [PortfolioScene],
  });
}

function returnToProfileSelection(): void {
  game?.destroy(true);
  game = undefined;
  activeProfile = undefined;
  window.selectedPortfolioProfile = undefined;
  closeModal();
  profileSelect.hidden = false;
  gameShell.hidden = true;
  document.querySelector<HTMLElement>("#brand-name")!.textContent = "portfolio.exe";
  document.querySelector<HTMLElement>("#footer-version")!.textContent = "v. 01 / escolha inicial";
}

document.querySelectorAll<HTMLButtonElement>("[data-profile]").forEach((button) => {
  button.addEventListener("click", () => selectProfile(button.dataset.profile as ProfileId));
});
profileSwitcher.addEventListener("click", returnToProfileSelection);