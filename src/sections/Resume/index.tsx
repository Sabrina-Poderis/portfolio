"use client";
import contactData from "@/app/dictionaries/contactData";
import Button from "@/components/Button";
import ResumePDFTemplate from "@/components/ResumePDFTemplate";
import LocaleEnum from "@/ts/enums/LocalesEnum";
import Dictionary from "@/ts/types/Dictionary";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

interface ResumeSectionProps {
  dict: Dictionary;
  lang: LocaleEnum;
}

const ResumeSection = ({ dict, lang }: ResumeSectionProps) => {
  const printRef = useRef<HTMLDivElement>(null);
  // const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const handlePrint = useReactToPrint({
    contentRef: printRef,
  });

  return (
    <div className="flex justify-center items-start p-8 bg-gray-500 gap-5">
      <div ref={printRef} className="bg-white p-6 w-[800px]">
        <ResumePDFTemplate
          lang={lang}
          name={dict.name}
          role={dict.role}
          contacts={contactData}
          about={dict.aboutMe}
          experiences={dict.experiences}
          frontend={dict.frontend}
          backend={dict.backend}
          databases={dict.databases}
          infrastructure={dict.infrastructure}
          methodologies={dict.methodologies}
          tools={dict.tools}
          college={dict.college}
          contactTitle={dict.sections.contact}
          aboutTitle={dict.sections.about}
          experienceTitle={dict.sections.experience}
          educationTitle={dict.sections.education}
        />
      </div>

      <div className="w-fit flex flex-col gap-5">
        <Button
          onClick={() => {
            handlePrint();
          }}
        >
          Exportar PDF
        </Button>

        <Button
          onClick={() => {
            window.location.href = `${window.location.origin}/portfolio`;
          }}
        >
          Voltar pra home
        </Button>
      </div>
    </div>
  );
};

export default ResumeSection;
