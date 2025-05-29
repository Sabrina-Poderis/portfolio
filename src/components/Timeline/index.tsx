import LocaleEnum from "@/ts/enums/LocalesEnum";
import formatDateRangeText from "@/utils/formatDateRangeText";
import formatParagraph from "@/utils/formatParagraph";
interface TimelineProps {
  lang: LocaleEnum,
  title: string;
  techText: string;
  frontend: string;
  backend: string;
  databases: string;
  infrastructure: string;
  methodologies: string;
  tools: string;
  experiences: {
    companyName: string;
    website: string;
    role: string;
    startDate: string;
    endDate?: string;
    description: string;
    stack: {
      frontend?: string[];
      backend?: string[];
      databases?: string[];
      infrastructure?: string[];
      methodologies?: string[];
      tools?: string[];
    };
  }[];
}

const Timeline = ({
  lang,
  title,
  frontend,
  backend,
  databases,
  infrastructure,
  methodologies,
  tools,
  experiences,
}: TimelineProps) => {
  return (
    <section
      id="experience"
      className="w-full bg-white-secondary dark:bg-black-secondary flex flex-col items-center justify-center p-12 border-y-4 border-primary border-dashed"
    >
      <h2 className="text-primary text-3xl font-bold mb-4">{title}</h2>
      <ol className="relative md:w-lg sm:w-sm border-s-2 border-primary dark:border-tertiary">
        {experiences.map((experience, index) => (
          <li key={index} className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-primary dark:bg-tertiary rounded-full mt-1.5 -start-1.5"></div>
            <time className="mb-1 text-sm font-normal leading-none text-primary dark:text-tertiary">
              {formatDateRangeText(lang, experience.startDate, experience.endDate)}
            </time>
            <h3 className="text-lg font-semibold text-primary">
              {experience.role}
            </h3>

            <p className="text-primary text-sm">
              <span className="font-semibold">{experience.companyName}</span> -{" "}
              <a className="text-primary underline" href={experience.website}>
                {experience.website}
              </a>
            </p>

            <div className="mb-4 ml-5 text-base font-normal text-black-secondary dark:text-white-secondary">
              {formatParagraph(experience.description)}
            </div>

            {experience.stack?.frontend && experience.stack?.frontend?.length > 0 && (
              <div className="mt-2">
                <h4 className="text-sm font-semibold text-primary">
                  {frontend}
                </h4>
                <ul className="flex flex-wrap gap-2 mt-1">
                  {experience.stack.frontend.map((tech, techIndex) => (
                    <li
                      key={techIndex}
                      className="px-2 py-1 text-sm text-white-secondary bg-primary rounded"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {experience.stack?.backend && experience.stack?.backend?.length > 0 && (
              <div className="mt-2">
                <h4 className="text-sm font-semibold text-primary">
                  {backend}
                </h4>
                <ul className="flex flex-wrap gap-2 mt-1">
                  {experience.stack.backend.map((tech, techIndex) => (
                    <li
                      key={techIndex}
                      className="px-2 py-1 text-sm text-white-secondary bg-primary rounded"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {experience.stack?.databases && experience.stack?.databases?.length > 0 && (
              <div className="mt-2">
                <h4 className="text-sm font-semibold text-primary">
                  {databases}
                </h4>
                <ul className="flex flex-wrap gap-2 mt-1">
                  {experience.stack.databases.map((tech, techIndex) => (
                    <li
                      key={techIndex}
                      className="px-2 py-1 text-sm text-white-secondary bg-primary rounded"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {experience.stack?.infrastructure && experience.stack?.infrastructure?.length > 0 && (
              <div className="mt-2">
                <h4 className="text-sm font-semibold text-primary">
                  {infrastructure}
                </h4>
                <ul className="flex flex-wrap gap-2 mt-1">
                  {experience.stack.infrastructure.map((tech, techIndex) => (
                    <li
                      key={techIndex}
                      className="px-2 py-1 text-sm text-white-secondary bg-primary rounded"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {experience.stack?.methodologies && experience.stack?.methodologies?.length > 0 && (
              <div className="mt-2">
                <h4 className="text-sm font-semibold text-primary">
                  {methodologies}
                </h4>
                <ul className="flex flex-wrap gap-2 mt-1">
                  {experience.stack.methodologies.map((tech, techIndex) => (
                    <li
                      key={techIndex}
                      className="px-2 py-1 text-sm text-white-secondary bg-primary rounded"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {experience.stack?.tools && experience.stack?.tools?.length > 0 && (
              <div className="mt-2">
                <h4 className="text-sm font-semibold text-primary">{tools}</h4>
                <ul className="flex flex-wrap gap-2 mt-1">
                  {experience.stack.tools.map((tech, techIndex) => (
                    <li
                      key={techIndex}
                      className="px-2 py-1 text-sm text-white-secondary bg-primary rounded"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Timeline;
