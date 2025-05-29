import LocaleEnum from "@/ts/enums/LocalesEnum";
import { format, differenceInMonths } from "date-fns";
import { ptBR, enUS } from "date-fns/locale";

/*
  formatDateRangeText("2022-03-01", "2023-02-01"); 
  // "março de 2022 até fevereiro de 2023 (12 meses)"

  formatDateRangeText("2022-03-01", "2023-03-01"); 
  // "março de 2022 até março de 2023 (1 ano)"

  formatDateRangeText("2021-06-01", "2023-06-01"); 
  // "junho de 2021 até junho de 2023 (2 anos)"

  formatDateRangeText("2020-01-01", "2020-04-01"); 
  // "janeiro de 2020 até abril de 2020 (4 meses)"
*/

const formatDateRangeText = (lang: LocaleEnum = LocaleEnum.PORTUGUESE, startDate: string, endDate?: string) => {
  const newStartDate = new Date(startDate);
  const newEndDate = endDate ? new Date(endDate) : new Date();

  const translations = {
    [LocaleEnum.PORTUGUESE]: {
      locale: { locale: ptBR },
      now: "o momento",
      from: "'de'",
      to: "até",
      year: "ano",
      years: "anos",
      month: "mês",
      months: "meses"
    },
    [LocaleEnum.ENGLISH]: {
      locale: { locale: enUS },
      now: "now",
      from: "",
      to: " - ",
      year: "year",
      years: "years",
      month: "month",
      months: "months"
    }
  };

  const formattedStart = format(newStartDate, `MMMM ${translations[lang].from} yyyy`, translations[lang].locale);
  const formattedEnd = endDate
    ? format(newEndDate, `MMMM ${translations[lang].from} yyyy`, translations[lang].locale)
    : translations[lang].now;

  // Ajustando a contagem de meses e garantindo que a diferença de meses seja correta
  let months = differenceInMonths(newEndDate, newStartDate);
  if (newEndDate.getDate() < newStartDate.getDate()) {
    months--; // Subtrai um mês se a data final for antes do dia de início
  }

  // Adicionando +1 para meses completos, se necessário
  months += 1;

  let duration: string;
  if (months >= 12) {
    const years = Math.round(months / 12);
    duration = `${years} ${years === 1 ? translations[lang].year : translations[lang].years}`;
  } else {
    duration = `${months} ${months === 1 ? translations[lang].month : translations[lang].months}`;
  }

  return `${formattedStart} ${translations[lang].to} ${formattedEnd} (${duration})`;
};


export default formatDateRangeText;
