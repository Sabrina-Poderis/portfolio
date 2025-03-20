"use client"
import contactList from "@/data/contactList";
import IconButton from "../Button/IconButton";

interface FooterProps {
  name: string;
}

const Footer = ({ name }: FooterProps) => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary">
      <div className="flex flex-row items-center justify-between w-full mx-auto max-w-screen-xl p-4">
        <span className="text-sm text-tertiary sm:text-center">
          © {year}{" "}
          <a href="#" className="hover:underline">
            {name}
          </a>
        </span>

        {contactList && contactList.length > 0 && (
          <div className="flex space-x-4">
            {contactList.map((contactItem) => {
              return (
                <IconButton
                  key={contactItem.text}
                  title={contactItem.text}
                  size="lg"
                  variant="dark"
                  onClick={contactItem.onClick}
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
