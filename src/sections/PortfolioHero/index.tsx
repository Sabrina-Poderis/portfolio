"use client"

import React from "react";
import Image from "next/image";
import contactList from "@/data/contactList";
import formatText from "@/utils/formatText";
import IconButton from "@/components/Button/IconButton";
import Button from "@/components/Button";

interface PortfolioHeroProps {
  name: string;
  occupation: string;
  profileImage: {
    image: string;
    altText: string;
  };
  resumeButtonText: string;
  aboutMeSection: {
    title: string;
    description: string;
  };
}

const PortfolioHero = ({
  name,
  occupation,
  profileImage,
  resumeButtonText,
  aboutMeSection,
}: PortfolioHeroProps) => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/CurrículoPoderis.pdf";
    link.download = "CurrículoPoderis.pdf";
    link.click();
  };  
  
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 bg-white-secondary dark:bg-black-secondary">
        <Image
          src={profileImage.image}
          alt={profileImage.altText}
          className="w-48 h-48 rounded-md object-cover"
          width={48}
          height={48}
        />
        <h1 className="mt-4 text-2xl text-black-secondary font-bold">{name}</h1>
        <p className="text-black-secondary dark:text-white-secondary">{occupation}</p>
        <div className="mt-4 flex space-x-4">
          {contactList && contactList.length > 0 && (
            <>
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
            </>
          )}
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 bg-tertiary flex flex-col justify-center p-12 border-l-4 border-primary border-dashed md:border-t-0 border-t-4">
        <h2 id="about" className="text-primary text-3xl font-bold mb-4">
          {aboutMeSection.title}
        </h2>
        <div className="text-black-secondary">
          {formatText(aboutMeSection.description, 'ul')}
        </div>
        <div className="mt-6 flex space-x-4">
          <Button onClick={downloadResume}>{resumeButtonText}</Button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHero;
