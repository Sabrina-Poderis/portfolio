/// <reference types="vite/client" />

import type { PortfolioProfile } from "./types/portfolio";

declare global {
  interface Window {
    selectedPortfolioProfile?: PortfolioProfile;
    openPortfolioModal?: (itemId: string) => void;
  }
}

export {};