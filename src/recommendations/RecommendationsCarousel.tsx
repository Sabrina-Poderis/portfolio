import { useState, type ReactNode } from "react";
import type { Recommendation } from "../data/portfolio";

type RecommendationsCarouselProps = {
  items: Recommendation[];
};

export function RecommendationsCarousel({ items }: RecommendationsCarouselProps): ReactNode {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];

  const move = (direction: number): void => {
    setActiveIndex((current) => (current + direction + items.length) % items.length);
  };

  return (
    <div className="recommendation-carousel" aria-label="Recomendações profissionais">
      <div className="recommendation-deck">
        {items.map((item, index) => {
          const offset = (index - activeIndex + items.length) % items.length;
          return (
            <article
              className={`recommendation-card${offset === 0 ? " is-active" : ""}`}
              key={item.name}
              style={{ zIndex: items.length - offset, transform: `translate(${offset * 10}px, ${offset * -7}px) rotate(${offset === 0 ? 0 : offset % 2 ? 3 : -3}deg)` }}
              aria-hidden={offset !== 0}
            >
              <img src={`/assets/recommendations/${item.image.src}`} alt={item.image.alt} />
              <div className="recommendation-card-body">
                <p className="recommendation-quote">“</p>
                <p>{item.text}</p>
                <footer>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </footer>
              </div>
            </article>
          );
        })}
      </div>
      <div className="recommendation-controls">
        <button type="button" onClick={() => move(-1)} aria-label="Recomendação anterior">←</button>
        <span>{activeIndex + 1} / {items.length}</span>
        <button type="button" onClick={() => move(1)} aria-label="Próxima recomendação">→</button>
      </div>
      <p className="recommendation-current">{activeItem.name}</p>
    </div>
  );
}
