"use client";
import { useState } from "react";
import Button from "../Button";

interface ContactFormProps {
  title: string;
  description: string;
  label: string;
  buttonText: string;
  whatsappNumber: string;
}

const ContactForm = ({
  title,
  description,
  label,
  buttonText,
  whatsappNumber,
}: ContactFormProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (message: string) => {
    // Limita caracteres para WhatsApp (1024 é o limite padrão do WhatsApp)
    const sanitizedMessage = message.substring(0, 1024);
    const encodedMessage = encodeURIComponent(sanitizedMessage);

    window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`, "_blank");
  };

  return (
    <section id="contact" className="flex items-center justify-center p-12 w-full bg-white-secondary dark:bg-black-secondary">
      <div className="md:w-lg sm:w-sm dark:border-tertiary">
        <h2 className="text-primary text-3xl font-bold mb-4">{title}</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-tertiary sm:text-xl">
          {description}
        </p>
        <form className="space-y-8">
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-tertiary"
            >
              {label}
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <Button
            onClick={() => handleSubmit(message)}
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            {buttonText}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
