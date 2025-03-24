import React from "react";
import formatDateRangeText from "@/utils/formatDateRangeText";
import formatParagraph from "@/utils/formatParagraph";
import ContactType from "@/ts/types/ContactType";
import LocaleEnum from "@/ts/enums/LocalesEnum";

interface ResumeProps {
  lang: LocaleEnum,
  name: string;
  role: string;
  contactTitle: string;
  contacts: ContactType[];
  aboutTitle: string;
  about: string;
  experienceTitle: string;
  frontend: string;
  backend: string;
  databases: string;
  infrastructure: string;
  methodologies: string;
  tools: string;
  experiences: {
    companyName: string;
    website: string;
    role: string;
    startDate: string;
    endDate?: string;
    description: string;
    stack: {
      frontend?: string[];
      backend?: string[];
      databases?: string[];
      infrastructure?: string[];
      methodologies?: string[];
      tools?: string[];
    };
  }[];
  educationTitle: string;
  college: {
    name: string;
    website: string;
    degree: string;
    courseName: string;
    startDate: string;
    endDate?: string;
  };
}

const ResumePDFTemplate: React.FC<ResumeProps> = ({
  lang,
  name,
  role,
  contactTitle,
  contacts,
  aboutTitle,
  about,
  frontend,
  backend,
  databases,
  infrastructure,
  methodologies,
  tools,
  experienceTitle,
  experiences,
  educationTitle,
  college,
}) => {
  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto space-y-6">
      {/* Header - Nome e Contato */}
      <header className="space-y-2">
        <h1 className="text-4xl text-black-tertiary font-bold">{name}</h1>
        <h2 className="text-xl text-gray-600">{role}</h2>
      </header>

      {/* Contato */}
      <section id={"Contato"} className="space-y-2">
        <h2 className="text-2xl text-black-tertiary font-bold mb-2">
          {contactTitle}
        </h2>
        <div className="flex flex-col">
          {contacts.map((contact) => (
            <p key={`contact${contact.title}`} className="text-gray-600">
              <span className="font-bold">{contact.title}:</span>{" "}
              <a href={contact.href} className="text-primary underline">
                {contact.value}
              </a>
            </p>
          ))}
        </div>
      </section>

      {/* Main Content - Sobre e Experiência */}
      <section id={"SobreMim"} className="space-y-6">
        <h2 className="text-2xl w-fit font-bold text-black-tertiary pb-1 border-b-6 border-primary">
          {aboutTitle}
        </h2>
        <div className="text-gray-700 mx-5">{formatParagraph(about)}</div>
      </section>

      <section id={"ExperienciaProfissional"} className="space-y-6">
        <h2 className="text-2xl w-fit font-bold text-black-tertiary pb-1 border-b-6 border-primary">
          {experienceTitle}
        </h2>
        {experiences.map((experience, index) => (
          <div key={index}>
            <h3 className="font-bold text-gray-900">{experience.role}</h3>
            <p className="text-gray-600 font-semibold">
              {experience.companyName}
              <span className="font-normal">
                {" - "}
                <a href={experience.website} className="text-primary underline">
                {experience.website}
                </a>
              </span>
            </p>
            <p className="text-gray-600 italic">
              {formatDateRangeText(lang, experience.startDate, experience.endDate)}
            </p>
            <div className="text-gray-700 mx-5">
              {formatParagraph(experience.description)}
            </div>
            {experience.stack?.frontend && experience.stack?.frontend?.length > 0 && (
              <p className="text-gray-700">
                <strong className="text-primary">{frontend}:</strong>{" "}
                {experience.stack.frontend.join(", ")}
              </p>
            )}
            {experience.stack?.backend && experience.stack?.backend?.length > 0 && (
              <p className="text-gray-700">
                <strong className="text-primary">{backend}:</strong>{" "}
                {experience.stack.backend.join(", ")}
              </p>
            )}
            {experience.stack?.databases && experience.stack?.databases?.length > 0 && (
              <p className="text-gray-700">
                <strong className="text-primary">{databases}:</strong>{" "}
                {experience.stack.databases.join(", ")}
              </p>
            )}
            {experience.stack?.infrastructure && experience.stack?.infrastructure?.length > 0 && (
              <p className="text-gray-700">
                <strong className="text-primary">{infrastructure}:</strong>{" "}
                {experience.stack.infrastructure.join(", ")}
              </p>
            )}
            {experience.stack?.methodologies && experience.stack?.methodologies?.length > 0 && (
              <p className="text-gray-700">
                <strong className="text-primary">{methodologies}:</strong>{" "}
                {experience.stack.methodologies.join(", ")}
              </p>
            )}
            {experience.stack?.tools && experience.stack?.tools?.length > 0 && (
              <p className="text-gray-700">
                <strong className="text-primary">{tools}:</strong>{" "}
                {experience.stack.tools.join(", ")}
              </p>
            )}
          </div>
        ))}
      </section>

      <section id={"FormacaoAcademica"} className="space-y-6">
        <h2 className="text-2xl w-fit font-bold text-black-tertiary pb-1 border-b-6 border-primary">
          {educationTitle}
        </h2>
        <div className="space-y-1">
          <h3 className="font-bold text-gray-900">{college.courseName}</h3>
          <p className="text-gray-600 font-semibold">
            {college.name}
            <span className="font-normal">
              {" - "}
              <a href={college.website} className="text-primary underline">
                {college.website}
              </a>
            </span>
          </p>
          <p className="text-gray-600 italic">
            {formatDateRangeText(lang, college.startDate, college.endDate)}
          </p>
        </div>
      </section>
    </div>
  );
};

export default ResumePDFTemplate;
