import React from "react";
import formatDateRangeText from "@/utils/formatDateRangeText";
import formatParagraph from "@/utils/formatParagraph";
import ContactType from "@/ts/types/ContactType";

interface ResumeProps {
  name: string;
  role: string;
  contactTitle: string;
  contacts: ContactType[];
  aboutTitle: string;
  about: string;
  experienceTitle: string;
  experiences: {
    companyName: string;
    website: string;
    role: string;
    startDate: string;
    endDate?: string;
    description: string;
    stack: string[];
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
  name,
  role,
  contactTitle,
  contacts,
  aboutTitle,
  about,
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
              <span className="text-primary font-bold">{contact.title}:</span> {contact.value}
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
                {experience.website}
              </span>
            </p>
            <p className="text-gray-600 italic">
              {formatDateRangeText(experience.startDate, experience.endDate)}
            </p>
            <div className="text-gray-700 mx-5">
              {formatParagraph(experience.description)}
            </div>
            <p className="text-gray-700">
              <strong>Stack:</strong> {experience.stack.join(", ")}
            </p>
          </div>
        ))}
      </section>

      <section id={"FormaçaoAcademica"} className="space-y-6">
        <h2 className="text-2xl w-fit font-bold text-black-tertiary pb-1 border-b-6 border-primary">
          {educationTitle}
        </h2>
        <div className="space-y-1">
          <h3 className="font-bold text-gray-900">{college.courseName}</h3>
          <p className="text-gray-600 font-semibold">
            {college.name}
            <span className="font-normal">
              {" - "}
              {college.website}
            </span>
          </p>
          <p className="text-gray-600 italic">
            {formatDateRangeText(college.startDate, college.endDate)}
          </p>
        </div>
      </section>
    </div>
  );
};

export default ResumePDFTemplate;
