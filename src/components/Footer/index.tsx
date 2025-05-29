"use client"
import contactData from "@/app/dictionaries/contactData";
import IconButton from "../Button/IconButton";

interface FooterProps {
  name: string;
}

const Footer = ({ name }: FooterProps) => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary">
      <div className="flex flex-row items-center justify-between w-full mx-auto max-w-screen-xl p-4">
        <span className="text-sm text-tertiary sm:text-center md:text-lg lg:text-2xl">
          © {year}{" "}
          <a href="#" className="hover:underline">
            {name}
          </a>
        </span>

        {contactData && contactData.length > 0 && (
          <div className="flex space-x-4">
            {contactData.filter(contact => contact.key !== "website").map((contactItem) => {
              return (
                <IconButton
                  key={contactItem.title}
                  title={contactItem.title}
                  variant="dark"
                  href={contactItem.href}
                >
                  {contactItem.icon}
                </IconButton>
              );
            })}
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
