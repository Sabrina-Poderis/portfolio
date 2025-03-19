import React from "react";
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import images from "../../assets/images";

const PortfolioHero = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="w-1/2 flex flex-col items-center justify-center bg-white p-8">
        <img
          src={images.DefaultAvatarProfileIcon.image}
          alt="Profile"
          className="w-48 h-48 rounded-md object-cover"
        />
        <h1 className="mt-4 text-2xl font-bold">Sabrina Poderis</h1>
        <p className="text-gray-600">Desenvolvedora Full Stack</p>
        <button className="mt-4 px-6 py-2 bg-black text-white rounded-md">Email me</button>
        <div className="mt-4 flex space-x-4">
          <FaInstagram className="text-2xl" />
          <FaTwitter className="text-2xl" />
          <FaFacebookF className="text-2xl" />
          <FaLinkedinIn className="text-2xl" />
        </div>
      </div>
      
      {/* Right Section */}
      <div className="w-1/2 bg-gray-300 flex flex-col justify-center p-12">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700">
          I am a tech-savvy individual with a Bachelor's degree in Software Development,
          seeking employment as a mobile game developer. I am passionate about consistently
          advancing my knowledge and skills. I have attended multiple seminars and boot camps
          on coding and game development.
        </p>
        <div className="mt-6 flex space-x-4">
          <button className="px-6 py-2 bg-black text-white rounded-md">Resume</button>
          <button className="px-6 py-2 bg-black text-white rounded-md">Portfolio</button>
        </div>
      </div>
    </div>
  );
}

export default PortfolioHero