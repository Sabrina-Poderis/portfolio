import React from "react";
import Image from "next/image";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import images from "../../assets/images";
import Button from "../Button";

const PortfolioHero = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="w-1/2 flex flex-col items-center justify-center bg-white p-8">
        <Image
          src={images.DefaultAvatarProfileIcon.image}
          alt="Profile"
          className="w-48 h-48 rounded-md object-cover"
        />
        <h1 className="mt-4 text-2xl text-default-black-2 font-bold">
          Sabrina Poderis
        </h1>
        <p className="text-default-black-2 mb-4">Desenvolvedora Full Stack</p>
        <Button>Contatar via Email</Button>
        <div className="mt-4 flex space-x-4">
          <FaInstagram className="text-2xl text-whine" />
          <FaTwitter className="text-2xl text-whine" />
          <FaFacebookF className="text-2xl text-whine" />
          <FaLinkedinIn className="text-2xl text-whine" />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-maize flex flex-col justify-center p-12 border-l-2 border-redwood border-dashed">
        <h2 className="text-redwood text-3xl font-bold mb-4">About Me</h2>
        <p className="text-default-black-2">
          I am a tech-savvy individual with a Bachelors degree in Software
          Development, seeking employment as a mobile game developer. I am
          passionate about consistently advancing my knowledge and skills. I
          have attended multiple seminars and boot camps on coding and game
          development.
        </p>
        <div className="mt-6 flex space-x-4">
          <Button>Resume</Button>
          <Button>Portfolio</Button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHero;
