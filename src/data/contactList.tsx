"use client"
import { IoMail } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contactList = [
  {
    text: "Email",
    icon: <IoMail />,
    onClick: () => {
      window.location.href = "mailto:sabrina.poderis@gmail.com";
    },
  },
  {
    text: "Github",
    icon: <FaGithub />,
    onClick: () => {
      window.open("https://github.com/Sabrina-Poderis", "_blank");
    },
  },
  {
    text: "LinkedIn",
    icon: <FaLinkedin />,
    onClick: () => {
      window.open("https://www.linkedin.com/in/sabrina-poderis/", "_blank");
    },
  },
];


export default contactList;
