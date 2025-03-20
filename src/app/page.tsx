import LocaleEnum from "@/ts/enums/LocalesEnum";
import PortfolioHero from "@/sections/PortfolioHero";
import { getDictionary } from "./dictionaries";

const HomePage = async () => {
  const lang = navigator.language as LocaleEnum || LocaleEnum.PORTUGUESE;
  const dict = await getDictionary(lang);

  return (
    <PortfolioHero
      name={dict.name}
      occupation={dict.occupation}
      profileImage={{
        image: './profile-image.jpg',
        altText: dict.heroSection.profileImageAltText,
      }}
      aboutMeSection={{
        title: dict.heroSection.AboutMeTitle,
        description: dict.heroSection.AboutMeDescription,
      }}
      resumeButtonText={dict.heroSection.ResumeButtonText}
    />
  );
};

export default HomePage;
