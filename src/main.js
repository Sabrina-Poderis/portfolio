import Phaser from 'phaser'
import './style.css'
import { portfolioItems } from './data/portfolio.js'
import { PortfolioScene } from './game/scenes/PortfolioScene.js'

document.querySelector('#app').innerHTML = `
  <header class="site-header"><div class="brand"><span class="brand-mark">✦</span><span>portfolio.exe</span></div><div class="status"><span class="status-dot"></span> disponível para criar</div></header>
  <main class="game-shell"><div class="intro-copy"><p class="eyebrow">um portfólio explorável</p><h1>Chega aí<br><em>na minha salinha!</em></h1><p class="intro-text">Interaja com os objetos para me conhecer melhor</p></div><div id="game-container" aria-label="Sala de trabalho interativa"></div><div class="controls-hint"><span>W A S D</span> mover <span class="key-enter">E</span> interagir</div></main>
  <footer class="site-footer"><span>São Paulo, BR</span><span>v. 01 / sala inicial</span></footer>
  <div id="portfolio-modal" class="modal" aria-hidden="true"><div class="modal-backdrop" data-close-modal></div><section class="modal-card" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button class="modal-close" type="button" data-close-modal aria-label="Fechar">×</button><p class="modal-kicker" id="modal-kicker"></p><h2 id="modal-title"></h2><div id="modal-content"></div></section></div>
`

const modal = document.querySelector('#portfolio-modal')
const modalTitle = document.querySelector('#modal-title')
const modalKicker = document.querySelector('#modal-kicker')
const modalContent = document.querySelector('#modal-content')
function closeModal() { modal.classList.remove('is-open'); modal.setAttribute('aria-hidden', 'true') }
window.openPortfolioModal = (itemId) => { const item = portfolioItems.find((entry) => entry.id === itemId); if (!item) return; modalKicker.textContent = item.kicker; modalTitle.textContent = item.title; modalContent.innerHTML = item.content; modal.classList.add('is-open'); modal.setAttribute('aria-hidden', 'false'); document.querySelector('.modal-close').focus() }
document.querySelectorAll('[data-close-modal]').forEach((element) => element.addEventListener('click', closeModal))
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && modal.classList.contains('is-open')) closeModal() })

new Phaser.Game({ type: Phaser.AUTO, parent: 'game-container', width: 960, height: 600, backgroundColor: '#173231', render: { pixelArt: true, antialias: false }, physics: { default: 'arcade', arcade: { gravity: { y: 0 }, debug: false } }, scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH, width: 960, height: 600 }, scene: [PortfolioScene] })
