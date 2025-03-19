import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import Button from "../Button";
import IconButton from "../Button/IconButton";
import formatText from "@/utils/formatText";

interface PortfolioHeroProps {
  name: string;
  occupation: string;
  profileImage: {
    image: StaticImageData;
    altText: string;
  };
  contactList: {
    icon: ReactNode;
    text: string;
    onClick: () => void;
  }[];
  resumeButton: {
    text: string;
    onClick: () => void;
  };
  aboutMeSection: {
    title: string;
    description: string;
  };
}

const PortfolioHero = ({
  name,
  occupation,
  profileImage,
  contactList,
  resumeButton,
  aboutMeSection,
}: PortfolioHeroProps) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-white p-8">
        <Image
          src={profileImage.image}
          alt={profileImage.altText}
          className="w-48 h-48 rounded-md object-cover"
        />
        <h1 className="mt-4 text-2xl text-default-black-2 font-bold">{name}</h1>
        <p className="text-default-black-2">{occupation}</p>
        <div className="mt-4 flex space-x-4">
          {contactList.map((contactItem) => {
            return (
              <IconButton
                key={contactItem.text}
                title={contactItem.text}
                size="lg"
                onClick={contactItem.onClick}
              >
                {contactItem.icon}
              </IconButton>
            );
          })}
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 bg-maize flex flex-col justify-center p-12 border-l-2 border-redwood border-dashed md:border-t-0 border-t-2">
        <h2 className="text-redwood text-3xl font-bold mb-4">
          {aboutMeSection.title}
        </h2>
        <p className="text-default-black-2">{formatText(aboutMeSection.description, 'ul')}</p>
        <div className="mt-6 flex space-x-4">
          <Button onClick={resumeButton.onClick}>{resumeButton.text}</Button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHero;
