"use client"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const contactList = [
  {
    text: "Email",
    icon: <IoMail />,
    onClick: () => {
      console.log("Email");
    },
  },
  {
    text: "Github",
    icon: <FaGithub />,
    onClick: () => {
      console.log("Github");
    },
  },
  {
    text: "LinkedIn",
    icon: <FaLinkedin />,
    onClick: () => {
      console.log("LinkedIn");
    },
  },
];

export default contactList;
