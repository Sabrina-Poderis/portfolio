import LocaleEnum from "@/ts/enums/LocalesEnum";
import { getDictionary } from "./dictionaries";
import MainPage from "@/sections/MainPage";

const HomePage = async () => {
  const lang = LocaleEnum.PORTUGUESE;
  const dict = await getDictionary(lang);

  return (
    <MainPage dict={dict} lang={lang}/>
  );
};

export default HomePage;
