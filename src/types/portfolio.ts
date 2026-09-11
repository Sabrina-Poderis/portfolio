export type ProfileId = "corporate" | "personal";

export interface DatePeriod {
  start: string;
  end: string | null;
}

export interface ResumeExperience {
  role: string;
  company: string;
  companyUrl: string;
  period: DatePeriod;
  summary: string;
  bullets: string[];
  skills: Record<string, string[]>;
}

export interface ResumeData {
  name: string;
  role: string;
  contact: {
    github: string;
    email: string;
    linkedin: string;
    website: string;
  };
  summary: string[];
  experience: ResumeExperience[];
  education: {
    course: string;
    institution: string;
    period: DatePeriod;
  };
}

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "resume"; data: ResumeData }
  | { type: "project"; number: string; title: string; meta: string; url?: string }
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
