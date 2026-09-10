import type { PortfolioProfile } from "./data/portfolio";

declare global {
  interface Window {
    selectedPortfolioProfile?: PortfolioProfile;
    openPortfolioModal?: (itemId: string) => void;
  }
}

export {};