import LocaleEnum from "@/ts/enums/LocalesEnum";
import PortfolioHero from "@/sections/PortfolioHero";
import { getDictionary } from "./dictionaries";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";

const HomePage = async () => {
  const lang = LocaleEnum.PORTUGUESE;
  const dict = await getDictionary(lang);

  return (
    <>
      <Navbar
        name={dict.name}
        hamburguerIconAltText={dict.alt.hamburguerIcon}
        menuItems={[
          { text: dict.sections.home, link: "#" },
          { text: dict.sections.about, link: "#about" },
          { text: dict.sections.experience, link: "#experience" },
          { text: dict.sections.projects, link: "#projects" },
          { text: dict.sections.contact, link: "#contact" },
        ]}
      />
      <PortfolioHero
        name={dict.name}
        role={dict.role}
        profileImage={{
          image: "./profile-image.jpg",
          altText: dict.alt.profileImage,
        }}
        aboutMeSection={{
          title: dict.sections.about,
          description: dict.aboutMe,
        }}
        resumeButtonText={dict.resume}
      />

      <Timeline
        title={dict.sections.experience}
        techText={dict.techs}
        items={[
          {
            date: "Fevereiro 2022",
            title: "Aplicação UI com Tailwind CSS",
            description: "Desenvolvimento de componentes reutilizáveis.",
            technologies: ["React", "Tailwind CSS", "TypeScript"],
          },
          {
            date: "Março 2022",
            title: "Design UI no Figma",
            description: "Criação do layout e prototipação no Figma.",
          },
        ]}
      />

      <Footer name={dict.name} />
    </>
  );
};

export default HomePage;
