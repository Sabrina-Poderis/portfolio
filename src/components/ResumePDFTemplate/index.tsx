import React from "react";
import formatDateRangeText from "@/utils/formatDateRangeText";
import formatParagraph from "@/utils/formatParagraph";
import ContactType from "@/ts/types/ContactType";

interface ResumeProps {
  name: string;
  role: string;
  contacts: ContactType[];
  about: string;
  experiences: {
    companyName: string;
    website: string;
    role: string;
    startDate: string;
    endDate?: string;
    description: string;
    stack: string[];
  }[];
  college: {
    name: string;
    degree: string;
    courseName: string;
    startDate: string;
    endDate?: string;
  };
}

const ResumePDFTemplate: React.FC<ResumeProps> = ({
  name,
  role,
  contacts,
  about,
  experiences,
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
        <h2 className="text-2xl text-black-tertiary font-bold mb-2">Contato</h2>
        <div className="flex flex-col">
          {contacts.map((contact) => (
            <p key={`contact${contact.title}`}>
              <a className="text-primary underline" href={contact.href}>
                {contact.value}
              </a>
            </p>
          ))}
        </div>
      </section>

      {/* Main Content - Sobre e Experiência */}
      <section id={"SobreMim"} className="space-y-6">
        <h2 className="text-2xl w-fit font-bold text-black-tertiary pb-1 border-b-6 border-primary">
          Sobre mim
        </h2>
        <div className="text-gray-700 mx-5">{formatParagraph(about)}</div>
      </section>

      <section id={"ExperienciaProfissional"} className="space-y-6">
        <h2 className="text-2xl w-fit font-bold text-black-tertiary pb-1 border-b-6 border-primary">
          Experiência Profissional
        </h2>
        {experiences.map((exp, index) => (
          <div key={index}>
            <h3 className="font-bold text-gray-900">{exp.role}</h3>
            <p className="text-gray-600">
              <span className="font-semibold">{exp.companyName}</span> -{" "}
              <a className="text-primary underline" href={exp.website}>
                {exp.website}
              </a>
            </p>
            <p className="text-gray-600 italic">
              {formatDateRangeText(exp.startDate, exp.endDate)}
            </p>
            <div className="text-gray-700 mx-5">
              {formatParagraph(exp.description)}
            </div>
            <p className="text-gray-700">
              <strong>Stack:</strong> {exp.stack.join(", ")}
            </p>
          </div>
        ))}
      </section>

      <section id={"FormaçaoAcademica"} className="space-y-6">
        <h2 className="text-2xl w-fit font-bold text-black-tertiary pb-1 border-b-6 border-primary">
          Formação Acadêmica
        </h2>
        <div className="space-y-1">
          <h3 className="font-bold text-gray-900">{college.courseName}</h3>
          <p className="text-gray-600">
            <span className="font-semibold">{college.name}</span>
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
