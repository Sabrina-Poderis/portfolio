"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";
import Button from "../Button";

interface Project {
  name: string;
  description: string;
  href: string;
}

interface ProjectCardsProps {
  title: string;
  buttonText: string;
  projects: Project[];
}

const ProjectCards = ({ title, buttonText, projects }: ProjectCardsProps) => {
  return (
    <section
      id="projects"
      className="w-full bg-white-secondary dark:bg-black-secondary flex flex-col items-center justify-center p-12 border-b-4 border-primary border-dashed"
    >
      <h2 className="text-primary text-3xl font-bold mb-8">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="max-w-sm p-6 bg-tertiary border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <a href={project.href} target="_blank" rel="noopener noreferrer">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary dark:text-white">
                {project.name}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {project.description}
            </p>
            <Button onClick={() => window.open(project.href, "_blank")}>
              <span className="flex flex-row gap-2">
                {buttonText}
                <FaGithub size={24} />
              </span>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectCards;
