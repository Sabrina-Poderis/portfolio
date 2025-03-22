import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";
import Dictionary from "@/ts/types/Dictionary";
import ProjectCards from "@/components/ProjectCards";

interface MainPageProps {
  dict: Dictionary;
}

const MainPage = async ({ dict }: MainPageProps) => {
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
      <Hero
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
        experiences={dict.experiences}
      />

      <ProjectCards
        title={dict.sections.projects}
        buttonText={dict.seeOnGitHub}
        projects={dict.projects}
      />

      <Footer name={dict.name} />
    </>
  );
};

export default MainPage;
