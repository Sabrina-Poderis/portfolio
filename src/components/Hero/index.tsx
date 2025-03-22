"use client";

import React from "react";
import Image from "next/image";
import contactData from "@/app/dictionaries/contactData";
import formatParagraph from "@/utils/formatParagraph";
import IconButton from "@/components/Button/IconButton";
import Button from "@/components/Button";

interface HeroProps {
  name: string;
  role: string;
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

const Hero = ({
  name,
  role,
  profileImage,
  resumeButtonText,
  aboutMeSection,
}: HeroProps) => {
  // const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <div className="flex flex-col md:flex-row sm:mt-18 md:mt-14">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 md:p-16 bg-white-secondary dark:bg-black-secondary border-r-0 md:border-r-4 border-primary border-dashed md:border-b-0 border-b-4">
        <Image
          src={profileImage.image}
          alt={profileImage.altText}
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 xl:w-72 xl:h-72 2xl:w-80 2xl:h-80 rounded-md object-cover"
          width={0}
          height={0}
        />
        <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black-secondary font-bold">{name}</h1>
        <p className="text-xl sm:text-2xl text-black-secondary dark:text-white-secondary mt-2">{role}</p>
        <div className="mt-6 flex space-x-4 justify-center">
          {contactData && contactData.length > 0 && (
            <>
              {contactData
                .filter((contact) => contact.key !== "website")
                .map((contactItem) => {
                  return (
                    <IconButton
                      key={contactItem.title}
                      title={contactItem.title}
                      href={contactItem.href}
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
      <div className="w-full md:w-1/2 bg-tertiary flex flex-col justify-center p-8 md:p-16">
        <h2 id="about" className="text-primary text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          {aboutMeSection.title}
        </h2>
        <div className="text-black-secondary text-lg sm:text-xl md:text-2xl">
          {formatParagraph(aboutMeSection.description)}
        </div>
        <div className="mt-6 flex justify-center">
          <Button
            onClick={() => {
              window.location.href = `${window.location.origin}/portfolio/resume`;
            }}
          >
            {resumeButtonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
