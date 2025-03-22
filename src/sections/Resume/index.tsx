"use client";
import contactData from "@/app/dictionaries/contactData";
import Button from "@/components/Button";
import ResumePDFTemplate from "@/components/ResumePDFTemplate";
import Dictionary from "@/ts/types/Dictionary";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

interface ResumeSectionProps {
  dict: Dictionary;
}

const ResumeSection = ({ dict }: ResumeSectionProps) => {
  const printRef = useRef<HTMLDivElement>(null);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const handlePrint = useReactToPrint({
    contentRef: printRef,
  });

  return (
    <div className="flex justify-center items-start p-8 bg-gray-500 gap-5">
      <div ref={printRef} className="bg-white p-6 w-[800px]">
        <ResumePDFTemplate
          name={dict.name}
          role={dict.role}
          contacts={contactData}
          about={dict.aboutMe}
          experiences={dict.experiences}
          college={dict.college}
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
            window.location.href = `${window.location.origin}${basePath}`;
          }}
        >
          Voltar pra home
        </Button>
      </div>
    </div>
  );
};

export default ResumeSection;
