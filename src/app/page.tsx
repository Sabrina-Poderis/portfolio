import LocaleEnum from "@/ts/enums/LocalesEnum";
import PortfolioHero from "@/sections/PortfolioHero";
import { getDictionary } from "./dictionaries";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HomePage = async () => {
  const lang = LocaleEnum.PORTUGUESE;
  const dict = await getDictionary(lang);

  return (
    <>
      <Navbar
        name={dict.name}
        menuItems={[
          { text: dict.menu.home, link: "#" },
          { text: dict.menu.about, link: "#about" },
          { text: dict.menu.experience, link: "#experience" },
          { text: dict.menu.projects, link: "#projects" },
          { text: dict.menu.contact, link: "#contact" }
        ]}
      />
      <PortfolioHero
        name={dict.name}
        occupation={dict.occupation}
        profileImage={{
          image: './profile-image.jpg',
          altText: dict.heroSection.profileImageAltText,
        }}
        aboutMeSection={{
          title: dict.heroSection.aboutMeTitle,
          description: dict.heroSection.aboutMeDescription,
        }}
        resumeButtonText={dict.heroSection.resumeButtonText}
      />
      <Footer name={dict.name}/>
    </>
  );
};

export default HomePage;
