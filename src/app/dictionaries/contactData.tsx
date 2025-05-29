"use client"
import { IoMail } from "react-icons/io5";
import { FaGithub, FaGlobe, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import ContactType from "@/ts/types/ContactType";
import formatPhoneText from "@/utils/formatPhoneText";

const contactData: ContactType[] = [
  {
    key: "github",
    title: "Github",
    value: "https://github.com/Sabrina-Poderis",
    href: "https://github.com/Sabrina-Poderis",
    icon: <FaGithub />,
  }, {
    key: "email",
    title: "Email",
    value: "sabrina.poderis@gmail.com",
    href: "mailto:sabrina.poderis@gmail.com",
    icon: <IoMail />,
  },
  {
    key: "phone",
    title: "Telefone",
    value: formatPhoneText("5511912345678"),
    href: "https://api.whatsapp.com/send?phone=5511912345678",
    icon: <FaWhatsapp />,
  },
  {
    key: "linkedIn",
    title: "LinkedIn",
    value: "https://www.linkedin.com/in/sabrina-poderis",
    href: "https://www.linkedin.com/in/sabrina-poderis",
    icon: <FaLinkedin />,
  },
  {
    key: "website",
    title: "Site",
    value: "https://sabrina-poderis.github.io/portfolio",
    href: "https://sabrina-poderis.github.io/portfolio",
    icon: <FaGlobe />,
  },
];


export default contactData;
