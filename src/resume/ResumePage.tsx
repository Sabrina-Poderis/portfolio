import type { ReactNode } from "react";
import { formatPeriod, type ResumeData } from "../data/portfolio";

type ResumePageProps = {
  data: ResumeData;
  pageRef: (element: HTMLElement | null) => void;
};

export function ResumePage({ data, pageRef }: ResumePageProps): ReactNode {
  return (
    <article className="resume-page" ref={pageRef}>
      <header className="resume-header">
        <div>
          <p className="resume-eyebrow">curriculo_sabrina_poderis.pdf</p>
          <h1>{data.name}</h1>
          <p className="resume-role">{data.role}</p>
        </div>
        <div className="resume-contact">
          <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
          <a href={data.contact.github}>{data.contact.github.replace("https://", "")}</a>
          <a href={data.contact.linkedin}>{data.contact.linkedin.replace("https://www.", "")}</a>
          <a href={data.contact.website}>{data.contact.website.replace("https://", "")}</a>
        </div>
      </header>

      <section className="resume-section resume-summary">
        <h2>Sobre mim</h2>
        <ul>
          {data.summary.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="resume-section">
        <h2>Experiência profissional</h2>
        {data.experience.map((experience) => (
          <article className="resume-experience" key={`${experience.company}-${experience.role}`}>
            <div className="resume-experience-heading">
              <div>
                <h3>{experience.role}</h3>
                <a href={experience.companyUrl}>{experience.company}</a>
              </div>
              <span>{formatPeriod(experience.period)}</span>
            </div>
            <p>{experience.summary}</p>
            <ul>
              {experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
            <div className="resume-skills">
              {Object.entries(experience.skills).map(([group, skills]) => (
                <p key={group}>
                  <strong>{group}:</strong> {skills.join(", ")}
                </p>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="resume-section resume-education">
        <h2>Formação acadêmica</h2>
        <div className="resume-experience-heading">
          <div>
            <h3>{data.education.course}</h3>
            <span>{data.education.institution}</span>
          </div>
          <span>{formatPeriod(data.education.period)}</span>
        </div>
      </section>
    </article>
  );
}
