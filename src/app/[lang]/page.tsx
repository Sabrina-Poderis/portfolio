import LocaleEnum from "@/ts/enums/LocalesEnum";
import { getDictionary } from "./dictionaries";
import images from "@/assets/images";
import PortfolioHero from "@/sections/PortfolioHero";

const HomePage = async ({
  params,
}: {
  params: Promise<{ lang: LocaleEnum }>;
}) => {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <PortfolioHero
      name={dict.name}
      occupation={dict.occupation}
      profileImage={{
        image: images.ProfileImage,
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
