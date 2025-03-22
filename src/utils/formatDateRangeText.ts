import { format, differenceInMonths } from "date-fns";
import { ptBR } from "date-fns/locale";

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

const formatDateRangeText = (startDate: string, endDate?: string) => {
  const newStartDate = new Date(startDate);
  const newEndDate = endDate ? new Date(endDate) : new Date();

  const formattedStart = format(newStartDate, "MMMM 'de' yyyy", { locale: ptBR });
  const formattedEnd = endDate
    ? format(newEndDate, "MMMM 'de' yyyy", { locale: ptBR })
    : "o momento";

  // Adicionando +1 para contar corretamente os meses completos
  const months = differenceInMonths(newEndDate, newStartDate) + 1;

  let duration: string;
  if (months >= 12) {
    const years = Math.round(months / 12);
    duration = `${years} ${years === 1 ? "ano" : "anos"}`;
  } else {
    duration = `${months} ${months === 1 ? "mês" : "meses"}`;
  }

  return `${formattedStart} até ${formattedEnd} (${duration})`;
};

export default formatDateRangeText;
