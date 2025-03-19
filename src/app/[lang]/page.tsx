/* eslint-disable @next/next/no-async-client-component */
"use client"
import LocaleEnum from "@/ts/enums/LocalesEnum";
import { getDictionary } from "./dictionaries";
import PortfolioHero from "@/components/PortfolioHero";
import images from "@/assets/images";
import contactList from "@/data/contactList";

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
      contactList={contactList}
      aboutMeSection={{
        title: dict.heroSection.AboutMeTitle,
        description: dict.heroSection.AboutMeDescription,
      }}
      resumeButton={{
        text: dict.heroSection.ResumeButtonText,
        onClick: () => {
          console.log("curriculo");
        },
      }}
    />
  );
};

export default HomePage;
