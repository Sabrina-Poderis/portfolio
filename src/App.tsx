import { useEffect, useRef, useState, type ReactNode } from "react";
import Phaser from "phaser";
import {
  portfolioProfiles,
  recommendations,
  type ContentBlock,
  type PortfolioItem,
  type PortfolioProfile,
  type ProfileId,
} from "./data/portfolio";
import { PortfolioScene } from "./game/scenes/PortfolioScene";
import { resumeData } from "./data/resume";
import { ResumePage } from "./resume/ResumePage";
import { openResumePdf } from "./resume/createResumePdf";

type ModalItem = PortfolioItem | null;

const touchDirections = {
  up: { x: 0, y: -1 },
  left: { x: -1, y: 0 },
  down: { x: 0, y: 1 },
  right: { x: 1, y: 0 },
} as const;

function dispatchTouchEvent(name: string, detail?: unknown): void {
  window.dispatchEvent(new CustomEvent(name, { detail }));
}

function renderBlock(block: ContentBlock, onResumeClick: () => void): ReactNode {
  if (block.type === "paragraph") return <p key={block.text}>{block.text}</p>;
  if (block.type === "project") {
    const projectContent = (
      <>
        <span>{block.number}</span>
        <strong>{block.title}</strong>
        <small>{block.meta}</small>
      </>
    );
    const isExternal = block.url?.startsWith("http");

    if (block.url) {
      return (
        <a
          className="modal-action project-link"
          href={block.url}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer" : undefined}
          key={block.number}
        >
          {projectContent}
        </a>
      );
    }

    return (
      <div className="project-link" key={block.number}>
        {projectContent}
      </div>
    );
  }
  const isResumeLink = block.url === "/curriculo.pdf";
  return (
    <a
      className="modal-action"
      href={block.url}
      target={block.external ? "_blank" : undefined}
      rel={block.external ? "noreferrer" : undefined}
      onClick={isResumeLink ? (event) => {
        event.preventDefault();
        onResumeClick();
      } : undefined}
      key={block.url}
    >
      {block.label} <span>↗</span>
    </a>
  );
}

function ProfileSelection({
  onSelect,
}: {
  onSelect: (profileId: ProfileId) => void;
}): ReactNode {
  return (
    <main className="profile-select" aria-labelledby="profile-title">
      <div className="selection-intro">
        <p className="eyebrow">selecione sua classe</p>
        <h1 id="profile-title">
          Eaí!
          <br />
          <em>bem vindo(a)</em>
        </h1>
        <p>
          Escolha uma "classe" pra gente começar
        </p>
      </div>
      <div className="profile-options">
        <button
          className="profile-card profile-card--corporate"
          type="button"
          onClick={() => onSelect("corporate")}
        >
          <span className="profile-symbol">✦</span>
          <span className="profile-label">versão profissional</span>
          <strong>Poderis, Sabrina</strong>
          <span className="profile-class">desenvolvedora fullstack</span>
          <small>projetos · currículo · contato</small>
          <span className="profile-cta">
            entrar na sala <b>↗</b>
          </span>
        </button>
        <button
          className="profile-card profile-card--personal"
          type="button"
          onClick={() => onSelect("personal")}
        >
          <span className="profile-symbol">☼</span>
          <span className="profile-label">versão pessoal</span>
          <strong>Sasá</strong>
          <span className="profile-class">criativa errante</span>
          <small>interesses · criações · redes</small>
          <span className="profile-cta">
            entrar na sala <b>↗</b>
          </span>
        </button>
      </div>
    </main>
  );
}

function PortfolioModal({
  item,
  onClose,
  onResumeClick,
}: {
  item: ModalItem;
  onClose: () => void;
  onResumeClick: () => void;
}): ReactNode {
  return (
    <div
      className={`modal${item ? " is-open" : ""}`}
      aria-hidden={item ? "false" : "true"}
    >
      <div className="modal-backdrop" onClick={onClose} />
      <section
        className="modal-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          className="modal-close"
          type="button"
          onClick={onClose}
          aria-label="Fechar"
        >
          ×
        </button>
        {item && (
          <>
            <p className="modal-kicker">{item.kicker}</p>
            <h2 id="modal-title">{item.title}</h2>
            <div className="modal-body">{item.blocks.map((block) => renderBlock(block, onResumeClick))}</div>
          </>
        )}
      </section>
    </div>
  );
}

function RecommendationsModal({
  index,
  onChange,
  onClose,
}: {
  index: number;
  onChange: (nextIndex: number) => void;
  onClose: () => void;
}): ReactNode {
  const recommendation = recommendations[index];
  return (
    <div className="modal is-open" aria-hidden="false">
      <div className="modal-backdrop" onClick={onClose} />
      <section className="modal-card recommendations-modal" role="dialog" aria-modal="true" aria-labelledby="recommendations-title">
        <button className="modal-close" type="button" onClick={onClose} aria-label="Fechar">×</button>
        <p className="modal-kicker">cartas / recomendações</p>
        <h2 id="recommendations-title">Quem já trabalhou comigo</h2>
        <div className="recommendation-deck" aria-live="polite">
          {recommendations.map((card, cardIndex) => {
            const offset = (cardIndex - index + recommendations.length) % recommendations.length;
            return (
              <article className={`recommendation-card recommendation-card--${offset}`} key={card.name} aria-hidden={offset !== 0}>
                <img src={`${import.meta.env.BASE_URL}assets/recommendations/${card.image.src}`} alt={card.image.alt} />
                <div className="recommendation-card__content">
                  <p className="recommendation-card__role">{card.role}</p>
                  <h3>{card.name}</h3>
                  <blockquote>“{card.text}”</blockquote>
                </div>
              </article>
            );
          })}
        </div>
        <div className="recommendations-controls">
          <button type="button" onClick={() => onChange((index - 1 + recommendations.length) % recommendations.length)} aria-label="Recomendação anterior">←</button>
          <span>{String(index + 1).padStart(2, "0")} / {String(recommendations.length).padStart(2, "0")}</span>
          <button type="button" onClick={() => onChange((index + 1) % recommendations.length)} aria-label="Próxima recomendação">→</button>
        </div>
      </section>
    </div>
  );
}

export function App(): ReactNode {
  const [activeProfile, setActiveProfile] = useState<PortfolioProfile | null>(
    null,
  );
  const [modalItem, setModalItem] = useState<ModalItem>(null);
  const [recommendationIndex, setRecommendationIndex] = useState<number | null>(null);
  const gameRef = useRef<Phaser.Game | null>(null);
  const resumeRef = useRef<HTMLElement | null>(null);

  const handleResumeClick = (): void => {
    if (resumeRef.current) void openResumePdf(resumeRef.current);
  };

  useEffect(() => {
    window.openPortfolioModal = (itemId: string) =>
      itemId === "recommendations"
        ? setRecommendationIndex(0)
        : setModalItem(activeProfile?.items.find((item) => item.id === itemId) ?? null);
    return () => {
      window.openPortfolioModal = undefined;
    };
  }, [activeProfile]);

  useEffect(() => {
    if (!activeProfile) return;
    window.selectedPortfolioProfile = activeProfile;
    gameRef.current = new Phaser.Game({
      type: Phaser.AUTO,
      parent: "game-container",
      width: 960,
      height: 600,
      backgroundColor: "#4b3f72",
      render: { pixelArt: true, antialias: false },
      physics: {
        default: "arcade",
        arcade: { gravity: { x: 0, y: 0 }, debug: false },
      },
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 960,
        height: 600,
      },
      scene: [PortfolioScene],
    });
    return () => {
      gameRef.current?.destroy(true);
      gameRef.current = null;
      window.selectedPortfolioProfile = undefined;
    };
  }, [activeProfile]);

  const resetProfile = (): void => {
    setModalItem(null);
    setRecommendationIndex(null);
    setActiveProfile(null);
  };

  return (
    <>
      <header className="site-header">
        <div className="brand">
          <span className="brand-mark">✦</span>
          <span>{activeProfile?.brandName ?? "portfolio.exe"}</span>
        </div>
        <button className="status" type="button" onClick={resetProfile}>
          <span className="status-dot" /> escolha sua classe
        </button>
      </header>
      {activeProfile ? (
        <main className="game-shell">
          <div className="intro-copy">
            <p className="eyebrow">um portfólio explorável</p>
            <h1>
              Chega aí
              <br />
              <em>na minha salinha!</em>
            </h1>
            <p className="intro-text">
              Interaja com os objetos para me conhecer melhor
            </p>
          </div>
          <div id="game-container" aria-label="Sala de trabalho interativa" />
          <div className="touch-controls" aria-label="Controles da sala">
            <div className="touch-pad">
              <button type="button" aria-label="Mover para cima" onPointerDown={() => dispatchTouchEvent("portfolio-touch-move", touchDirections.up)} onPointerUp={() => dispatchTouchEvent("portfolio-touch-stop")} onPointerLeave={() => dispatchTouchEvent("portfolio-touch-stop")}>▲</button>
              <div>
                <button type="button" aria-label="Mover para esquerda" onPointerDown={() => dispatchTouchEvent("portfolio-touch-move", touchDirections.left)} onPointerUp={() => dispatchTouchEvent("portfolio-touch-stop")} onPointerLeave={() => dispatchTouchEvent("portfolio-touch-stop")}>◀</button>
                <button type="button" aria-label="Mover para baixo" onPointerDown={() => dispatchTouchEvent("portfolio-touch-move", touchDirections.down)} onPointerUp={() => dispatchTouchEvent("portfolio-touch-stop")} onPointerLeave={() => dispatchTouchEvent("portfolio-touch-stop")}>▼</button>
                <button type="button" aria-label="Mover para direita" onPointerDown={() => dispatchTouchEvent("portfolio-touch-move", touchDirections.right)} onPointerUp={() => dispatchTouchEvent("portfolio-touch-stop")} onPointerLeave={() => dispatchTouchEvent("portfolio-touch-stop")}>▶</button>
              </div>
            </div>
            <button className="touch-action" type="button" aria-label="Interagir" onClick={() => dispatchTouchEvent("portfolio-touch-interact")}>E</button>
          </div>
          <div className="controls-hint">
            <span>W A S D</span> mover <span className="key-enter">E</span>{" "}
            interagir
          </div>
        </main>
      ) : (
        <ProfileSelection
          onSelect={(profileId) =>
            setActiveProfile(portfolioProfiles[profileId])
          }
        />
      )}
      <footer className="site-footer">
        <span>São Paulo, BR</span>
        <span>v. 01 / {activeProfile?.className ?? "escolha inicial"}</span>
      </footer>
      <div className="resume-render-source" aria-hidden="true">
        <ResumePage data={resumeData} pageRef={(element) => { resumeRef.current = element; }} />
      </div>
      <PortfolioModal item={modalItem} onClose={() => setModalItem(null)} onResumeClick={handleResumeClick} />
      {recommendationIndex !== null && (
        <RecommendationsModal
          index={recommendationIndex}
          onChange={setRecommendationIndex}
          onClose={() => setRecommendationIndex(null)}
        />
      )}
    </>
  );
}
