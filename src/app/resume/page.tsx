import LocaleEnum from "@/ts/enums/LocalesEnum";
import React from "react";
import { getDictionary } from "../dictionaries";
import ResumeSection from "@/sections/Resume";
import Dictionary from "@/ts/types/Dictionary";

const Resume = async () => {
  const lang = LocaleEnum.PORTUGUESE;
  const dict: Dictionary = await getDictionary(lang);

  return (
    <ResumeSection dict={dict} lang={lang}/>
  );
};

export default Resume;
